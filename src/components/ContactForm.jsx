import React, { useRef, useState } from 'react';
import { FiCheckCircle, FiMail, FiSend } from 'react-icons/fi';
import { profile } from '../data/profile';
import { trackEvent } from '../lib/analytics';

// Web3Forms (free) delivers the message to your inbox. Set REACT_APP_WEB3FORMS_KEY to the access key
// from web3forms.com; without it the form is replaced by an email link.
const ACCESS_KEY = process.env.REACT_APP_WEB3FORMS_KEY;
const MIN_FILL_MS = 3000; // faster than this is almost certainly a bot

const validate = ({ name, email, message }) => {
  const errors = {};
  if (name.trim().length < 2) errors.name = 'Please enter your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) errors.email = 'Please enter a valid email address.';
  if (message.trim().length < 20) errors.message = 'Please write at least 20 characters.';
  if (message.length > 5000) errors.message = 'Please keep it under 5,000 characters.';
  return errors;
};

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">{label}</label>
      {children}
      {error && <p id={`${id}-error`} className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>}
    </div>
  );
}

const inputClass =
  'w-full rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 dark:border-ink-700 dark:bg-ink-900';

export default function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const startedAt = useRef(Date.now());

  if (!ACCESS_KEY) {
    return (
      <div className="card p-6">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">Email is the fastest way to reach me.</p>
        <a href={`mailto:${profile.email}`} className="btn-primary mt-4"><FiMail /> {profile.email}</a>
      </div>
    );
  }

  if (status === 'sent') {
    return (
      <div className="card flex items-start gap-3 p-6" role="status">
        <FiCheckCircle className="mt-0.5 shrink-0 text-emerald-500" size={20} />
        <div>
          <p className="font-semibold">Thanks, your message is on its way.</p>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">I usually reply within a couple of days.</p>
        </div>
      </div>
    );
  }

  const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;
    if (form.botcheck.checked || Date.now() - startedAt.current < MIN_FILL_MS) {
      setStatus('sent'); // quietly drop bot submissions
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Portfolio message from ${values.name.trim()}`,
          from_name: 'hadi-portfolio',
          ...values,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message);
      trackEvent('contact-form-sent');
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={onSubmit} noValidate className="card space-y-5 p-6 sm:p-8">
      {/* Honeypot: hidden from people, often filled in by bots */}
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <Field id="name" label="Name" error={errors.name}>
        <input id="name" name="name" autoComplete="name" value={values.name} onChange={onChange} className={inputClass}
          aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} />
      </Field>
      <Field id="email" label="Email" error={errors.email}>
        <input id="email" name="email" type="email" autoComplete="email" value={values.email} onChange={onChange}
          className={inputClass} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} />
      </Field>
      <Field id="message" label="Message" error={errors.message}>
        <textarea id="message" name="message" rows={6} value={values.message} onChange={onChange} className={inputClass}
          aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined} />
      </Field>
      {status === 'error' && (
        <p role="alert" className="text-sm text-red-600 dark:text-red-400">
          Sorry, the message couldn't be sent. Please try again, or email me at {profile.email}.
        </p>
      )}
      <button type="submit" className="btn-primary" disabled={status === 'sending'}>
        <FiSend /> {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}
