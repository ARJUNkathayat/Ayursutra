"use client";

import { useState } from 'react';
import GoogleTranslate from './GoogleTranslate';

const FloatingTranslate = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="p-4 rounded shadow">
          <GoogleTranslate />
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-green-700 text-white text-2xl"
        title="Translate Page"
      >
        🌐
      </button>
    </div>
  );
};

export default FloatingTranslate;
