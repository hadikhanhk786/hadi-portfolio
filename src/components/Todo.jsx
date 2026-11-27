import React from 'react';

export const isTodo = (text) => typeof text === 'string' && text.startsWith('TODO');
// TODO badges show while developing (npm start) as a checklist; the live site hides them.
export const SHOW_TODOS = process.env.NODE_ENV !== 'production';
/** Keep filled-in values, and TODOs only when they are being shown. */
export const visible = (text) => !!text && (!isTodo(text) || SHOW_TODOS);

/** Renders text, or a TODO badge in development (nothing on the live site) when it still says "TODO: ...". */
export default function Todo({ text, as: Tag = 'span', className = '' }) {
  if (isTodo(text)) {
    if (!SHOW_TODOS) return null;
    return (
      <Tag className={`inline-flex items-center gap-2 rounded-md border border-dashed border-amber-500/60 bg-amber-500/10 px-2 py-0.5 font-mono text-xs text-amber-700 dark:text-amber-300 ${className}`}>
        {text}
      </Tag>
    );
  }
  return <Tag className={className}>{text}</Tag>;
}
