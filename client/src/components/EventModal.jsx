import React from 'react';

function EventModal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="eventmodal fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center text-left">
      <div className="eventmodal-card bg-stone-200 py-9 px-9 rounded-lg shadow-xl max-w-lg w-full flex flex-col">
        <button onClick={onClose} className="absolute top-6 right-3 text-9xl text-stone-300 hover:text-white">&times;</button>
        {children}
      </div>
    </div>
  );
}

export default EventModal;
