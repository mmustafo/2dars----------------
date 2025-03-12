import React from "react";

function Form({ handleSubmit, text, setText, eror }) {
  return (
    <form
      className="flex flex-col gap-3 p-4 bg-white shadow-md rounded-lg max-w-[800px] mx-auto mb-[30px]"
      onSubmit={handleSubmit}
    >
      <input
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="brornma demasayz bolmaydi"
      />
      <button
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition duration-300"
      >
        Qoshish
      </button>

      {eror && (
        <p className="flex items-center justify-center text-white bg-red-500 py-2 px-4 rounded-md font-semibold shadow-md max-w-[500px] mx-auto">
          {eror}
        </p>
      )}
    </form>
  );
}

export default Form;
