import React from 'react';
import { FiDownload, FiExternalLink } from 'react-icons/fi';
import PageHeader from '../components/PageHeader';
import { profile } from '../data/profile';
import { trackEvent } from '../lib/analytics';

export default function ResumePage() {
  return (
    <>
      <PageHeader eyebrow="Resume" title="Resume" intro="View it here or download the PDF.">
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={profile.resume} download onClick={() => trackEvent('resume-download')} className="btn-primary"><FiDownload /> Download PDF</a>
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-ghost"><FiExternalLink /> Open in new tab</a>
        </div>
      </PageHeader>
      <section className="container-x py-10">
        <object data={profile.resume} type="application/pdf" aria-label="Resume PDF" className="card h-[80vh] w-full">
          <p className="p-6 text-sm">Your browser can't show PDFs inline. <a href={profile.resume} className="underline">Download the resume</a>.</p>
        </object>
      </section>
    </>
  );
}
