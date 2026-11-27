import React from 'react';

/** Renders text, or a visible TODO badge when the data still says "TODO: ...". */
export default function Todo({ text, as: Tag = 'span', className = '' }) {
  if (typeof text === 'string' && text.startsWith('TODO')) {
    return (
      <Tag className={`inline-flex items-center gap-2 rounded-md border border-dashed border-amber-500/60 bg-amber-500/10 px-2 py-0.5 font-mono text-xs text-amber-700 dark:text-amber-300 ${className}`}>
        {text}
      </Tag>
    );
  }
  return <Tag className={className}>{text}</Tag>;
}
