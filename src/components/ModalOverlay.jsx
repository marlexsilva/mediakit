import React, { useEffect, useRef } from 'react';

export default function ModalOverlay({ children, onClose }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    const el = overlayRef.current;
    if (!el) return;
    // close when clicking backdrop
    const handleClick = (e) => {
      if (e.target === el) onClose();
    };
    el.addEventListener('click', handleClick);
    return () => el.removeEventListener('click', handleClick);
  }, [onClose]);

  return (
    <div ref={overlayRef} className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-900/60 backdrop-blur-sm transition-opacity overflow-x-hidden" role="presentation">
      <div role="dialog" aria-modal="true" aria-labelledby="modal-title" className="w-full max-w-full flex justify-center">
        {children}
      </div>
    </div>
  );
}
