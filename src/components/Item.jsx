import { useState } from "react";
import Modal from "./Modal";

function Item({ t, deleteTitle }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && <Modal setShowModal={setShowModal} t={t} deleteTitle={deleteTitle} />}
      <li className="flex justify-between items-center bg-gray-100 p-2 rounded-lg shadow-sm">
        <p className="text-lg">{t.title}</p>
        <button className="btn btn-error" onClick={() => setShowModal(true)}>
          O‘chirish
        </button>
      </li>
    </>
  );
}

export default Item;
