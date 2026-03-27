'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

interface A11yPrefs {
  fontSizeStep: number; // -2 to +3, 0 = default
  highContrast: boolean;
  dyslexiaFont: boolean;
  highlightLinks: boolean;
  reduceMotion: boolean;
  readingGuide: boolean;
}

const DEFAULT_PREFS: A11yPrefs = {
  fontSizeStep: 0,
  highContrast: false,
  dyslexiaFont: false,
  highlightLinks: false,
  reduceMotion: false,
  readingGuide: false,
};

const FONT_SIZE_STEPS = ['xs', 'sm', null, 'lg', 'xl', '2xl']; // index 2 = default (no attr)

function applyPrefs(prefs: A11yPrefs) {
  const html = document.documentElement;

  // Font size
  const stepIndex = prefs.fontSizeStep + 2; // offset so 0 => index 2
  const sizeAttr = FONT_SIZE_STEPS[stepIndex];
  if (sizeAttr) {
    html.setAttribute('data-font-size', sizeAttr);
  } else {
    html.removeAttribute('data-font-size');
  }

  // Toggle classes
  html.classList.toggle('high-contrast', prefs.highContrast);
  html.classList.toggle('dyslexia-font', prefs.dyslexiaFont);
  html.classList.toggle('highlight-links', prefs.highlightLinks);
  html.classList.toggle('reduce-motion', prefs.reduceMotion);
}

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<A11yPrefs>(DEFAULT_PREFS);
  const [guideY, setGuideY] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Load prefs from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('a11y-prefs');
      if (saved) {
        const parsed: A11yPrefs = JSON.parse(saved);
        setPrefs(parsed);
        applyPrefs(parsed);
      }
    } catch {}
  }, []);

  // Save + apply whenever prefs change
  useEffect(() => {
    localStorage.setItem('a11y-prefs', JSON.stringify(prefs));
    applyPrefs(prefs);
  }, [prefs]);

  // Reading guide mouse tracker
  useEffect(() => {
    if (!prefs.readingGuide) return;
    const handler = (e: MouseEvent) => setGuideY(e.clientY - 30);
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, [prefs.readingGuide]);

  // Escape key closes panel
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open]);

  // Focus trap
  useEffect(() => {
    if (!open || !panelRef.current) return;
    const focusable = panelRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first?.focus();
    const trap = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last?.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first?.focus(); }
      }
    };
    window.addEventListener('keydown', trap);
    return () => window.removeEventListener('keydown', trap);
  }, [open]);

  const update = useCallback((patch: Partial<A11yPrefs>) => {
    setPrefs(prev => ({ ...prev, ...patch }));
  }, []);

  const reset = useCallback(() => {
    setPrefs(DEFAULT_PREFS);
    localStorage.removeItem('a11y-prefs');
    applyPrefs(DEFAULT_PREFS);
  }, []);

  return (
    <>
      {/* Reading guide overlay */}
      {prefs.readingGuide && (
        <div
          aria-hidden="true"
          className="fixed left-0 right-0 h-16 pointer-events-none z-[99990] bg-yellow-200/40"
          style={{ top: guideY }}
        />
      )}

      {/* Trigger button */}
      <button
        ref={triggerRef}
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-controls="a11y-panel"
        aria-label="Open accessibility options"
        className="hidden sm:flex fixed left-4 z-[99995] items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-full shadow-lg shadow-blue-600/40 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        style={{ bottom: 'calc(env(safe-area-inset-bottom, 0px) + 80px)' }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <circle cx="12" cy="4" r="2" fill="currentColor" stroke="none" />
          <path d="M5 9h14l-2 9H7L5 9z" />
          <path d="M12 9v5M9 11.5l3-2.5 3 2.5" />
        </svg>
        <span className="text-sm font-semibold">Accessibility</span>
      </button>

      {/* Panel */}
      {open && (
        <div
          id="a11y-panel"
          ref={panelRef}
          role="dialog"
          aria-label="Accessibility Options"
          aria-modal="true"
          className="fixed left-4 z-[99996] w-72 rounded-2xl shadow-2xl overflow-hidden bg-white border border-slate-200"
          style={{ bottom: 'calc(env(safe-area-inset-bottom, 0px) + 148px)' }}
        >
          {/* Header */}
          <div className="bg-blue-600 px-4 py-3 flex items-center justify-between">
            <span className="text-white font-bold text-sm">♿ Accessibility Options</span>
            <button
              onClick={() => { setOpen(false); triggerRef.current?.focus(); }}
              aria-label="Close accessibility options"
              className="text-white/70 hover:text-white text-xl leading-none focus:outline-none focus:ring-1 focus:ring-white rounded"
            >
              ✕
            </button>
          </div>

          {/* Controls */}
          <div className="p-3 flex flex-col gap-2">
            {/* Font Size */}
            <div className="flex items-center justify-between bg-slate-50 rounded-xl px-3 py-2">
              <span className="text-xs font-semibold text-slate-700">🔠 Font Size</span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => update({ fontSizeStep: Math.max(-2, prefs.fontSizeStep - 1) })}
                  aria-label="Decrease font size"
                  disabled={prefs.fontSizeStep === -2}
                  className="w-7 h-7 rounded-md bg-blue-600 disabled:opacity-40 text-white text-base font-bold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >−</button>
                <span className="text-xs text-slate-500 w-5 text-center">
                  {prefs.fontSizeStep > 0 ? `+${prefs.fontSizeStep}` : prefs.fontSizeStep}
                </span>
                <button
                  onClick={() => update({ fontSizeStep: Math.min(3, prefs.fontSizeStep + 1) })}
                  aria-label="Increase font size"
                  disabled={prefs.fontSizeStep === 3}
                  className="w-7 h-7 rounded-md bg-blue-600 disabled:opacity-40 text-white text-base font-bold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >+</button>
              </div>
            </div>

            {/* Toggle rows */}
            {([
              { key: 'highContrast', label: '🌙 High Contrast', val: prefs.highContrast },
              { key: 'dyslexiaFont', label: '🔤 Dyslexia Font', val: prefs.dyslexiaFont },
              { key: 'highlightLinks', label: '🔗 Highlight Links', val: prefs.highlightLinks },
              { key: 'reduceMotion', label: '🚫 Reduce Motion', val: prefs.reduceMotion },
              { key: 'readingGuide', label: '📖 Reading Guide', val: prefs.readingGuide },
            ] as { key: keyof A11yPrefs; label: string; val: boolean }[]).map(({ key, label, val }) => (
              <div key={key} className="flex items-center justify-between bg-slate-50 rounded-xl px-3 py-2">
                <span className="text-xs font-semibold text-slate-700">{label}</span>
                <button
                  role="switch"
                  aria-checked={val}
                  aria-label={label}
                  onClick={() => update({ [key]: !val } as Partial<A11yPrefs>)}
                  className={`relative w-10 h-5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1 ${val ? 'bg-blue-600' : 'bg-slate-300'}`}
                >
                  <span className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${val ? 'translate-x-5' : 'translate-x-0'}`} />
                </button>
              </div>
            ))}

            {/* Reset */}
            <button
              onClick={reset}
              className="w-full mt-1 py-2 text-xs text-slate-500 bg-slate-50 border border-slate-200 rounded-xl hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
            >
              Reset all
            </button>
          </div>
        </div>
      )}
    </>
  );
}
