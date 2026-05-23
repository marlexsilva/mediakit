import React from 'react';
import { impressumContent, datenschutzContent, agbContent } from '../../data/texts.jsx';

export function ImpressumText() {
  return (
    <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
      {impressumContent}
    </div>
  );
}

export function DatenschutzText() {
  return (
    <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
      {datenschutzContent}
    </div>
  );
}

export function AGBText() {
  return (
    <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
      {agbContent}
    </div>
  );
}
