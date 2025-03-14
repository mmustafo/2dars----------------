import React from "react";

function Modal({ setShowModal, t, deleteTitle }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-[500px] w-full border border-gray-300">
        <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
          {t.title}
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Brat rosta ochirmoqchimisz 
        </p>
        <div className="flex justify-center gap-4">
          <button
            className="px-5 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
            onClick={() => setShowModal(false)}
          >
            yoq
          </button>
          <button
            className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            onClick={() => {
              deleteTitle(t.id);
              setShowModal(false);
            }}
          >
            ha
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
