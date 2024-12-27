"use client";
import { useEffect, MouseEvent, ReactNode } from 'react';

interface ModalOverlayProps {
  onClose: () => void;
  children: ReactNode;
}

function ModalOverlay({ onClose, children }: ModalOverlayProps) {
  // Handle outside click to close modal
  const handleOutsideClick = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === 'modal-overlay') {
      onClose();
    }
  };

  // Close modal on 'Escape' key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div
      id="modal-overlay"
      className="fixed max-h-screen py-10 inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleOutsideClick}
    >
      <div className="bg-white rounded-lg shadow-lg p-6 pt-10 relative max-w-md max-h-full sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl overflow-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

export default ModalOverlay;