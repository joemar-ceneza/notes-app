import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "../css/Note.scss";
import Note from "./Note";
import CreateNote from "./CreateNote";

export default function Notes() {
  const [inputText, setInputText] = useState("");
  const [notes, setNotes] = useState([]);

  // get text and store in state
  const textHandler = (e) => {
    setInputText(e.target.value);
  };
  // add new note to the state array
  const saveHandler = () => {
    setNotes((prevValue) => {
      return [
        ...prevValue,
        {
          id: uuidv4(),
          text: inputText,
        },
      ];
    });
    // clear the textarea
    setInputText("");
  };
  // delete note function
  const deleteNote = (id) => {
    const filterNotes = notes.filter((note) => {
      return note.id !== id;
    });
    setNotes(filterNotes);
  };
  //apply the save and get functions using useEffect
  //get the saved notes and add them to the array
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Notes"));
    if (data) {
      setNotes(data);
    }
  }, []);
  //saving data to local storage
  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem("Notes", JSON.stringify(notes));
    }
  }, [notes]);
  return (
    <div className="notes">
      {notes.map((note) => {
        return (
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            deleteNote={deleteNote}
          />
        );
      })}
      <CreateNote
        textHandler={textHandler}
        saveHandler={saveHandler}
        inputText={inputText}
      />
    </div>
  );
}
