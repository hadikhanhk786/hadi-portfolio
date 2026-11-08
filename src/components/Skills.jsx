import React from 'react';
import { FiActivity, FiCheckCircle, FiCloud, FiCode, FiCpu, FiDatabase, FiLink, FiServer } from 'react-icons/fi';
import Section, { Reveal } from './Section';
import { skills } from '../data/profile';

const icons = {
  Backend: FiServer,
  Databases: FiDatabase,
  'Cloud & Infra': FiCloud,
  Languages: FiCode,
  Integrations: FiLink,
  Testing: FiCheckCircle,
  'AI & Agents': FiCpu,
  'Production support': FiActivity,
};

export default function Skills() {
  return (
    <Section
      id="skills"
      index="05"
      eyebrow="Stack"
      title="Tools I use every day"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map(({ group, items }, i) => {
          const Icon = icons[group] || FiCode;
          return (
            <Reveal key={group} delay={i * 0.05} className="h-full">
              <div className="card h-full p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <Icon />
                  </span>
                  <h3 className="font-semibold">{group}</h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {items.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
