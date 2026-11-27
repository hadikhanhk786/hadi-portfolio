import React from 'react';
import { FiArrowRight, FiArrowDown } from 'react-icons/fi';

/** Simple left-to-right (stacked on mobile) diagram of the layers in projects.mjs `architecture`. */
export default function ArchitectureDiagram({ layers }) {
  return (
    <figure aria-label="Architecture diagram" className="flex flex-col items-stretch gap-2 md:flex-row md:items-center">
      {layers.map((layer, i) => (
        <React.Fragment key={layer.label}>
          {i > 0 && (
            <span aria-hidden className="grid place-items-center text-emerald-500">
              <FiArrowRight className="hidden md:block" />
              <FiArrowDown className="md:hidden" />
            </span>
          )}
          <div className="card flex-1 p-4">
            <p className="font-mono text-[11px] uppercase tracking-wider text-emerald-600 dark:text-emerald-400">{layer.label}</p>
            <ul className="mt-2 space-y-1 text-sm">
              {layer.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </React.Fragment>
      ))}
    </figure>
  );
}
