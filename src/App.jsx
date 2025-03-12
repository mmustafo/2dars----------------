import { useState, useEffect } from "react";
import "./App.css";
import TitlesList from "./components/TitlesList.jsx";
import Form from "./components/Form.jsx";

const initalValue = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

function App() {
  const [text, setText] = useState("");
  const [eror, setEror] = useState("");
  const [titles, setTitles] = useState(initalValue());

  useEffect(() => {
    if (eror) {
      const timeout = setTimeout(() => {
        setEror("");
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [eror]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(titles));
  }, [titles]);

  const deleteTitle = (id) => {
    setTitles(titles.filter((t) => t.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") {
      setEror("Brornima yozish kerak ):");
    } else if (text.length < 4) {
      setEror("Akam, 4 ta harfdan ko‘proq yozing.");
    } else {
      setTitles([...titles, { title: text, id: Math.random() }]);
      setText("");
      setEror("");
    }
  };

  return (
    <>
      <h1>React Todo-list</h1>
      <Form handleSubmit={handleSubmit} text={text} setText={setText} eror={eror} />
      <ul>
        {!titles.length && <h2>brat vashe soz yozmadz</h2>}
        {titles.length > 0 && <TitlesList titles={titles} deleteTitle={deleteTitle} />}
      </ul>
    </>
  );
}

export default App;