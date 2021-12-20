import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

const App = () => {
  const [notes, setNotes] = useState([{
    id: nanoid(),
    text: "This's my first note.",
    date: "16/12/2021"
  },
  {
    id: nanoid(),
    text: "This's my second note.",
    date: "16/12/2021"
  },
  {
    id: nanoid(),
    text: "This's my third note.",
    date: "16/12/2021"
  }]);

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')
      );

      if (savedNotes) {
        setNotes(savedNotes);
      }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data', 
      JSON.stringify(notes)
    );
  }, [notes]); // Dependency array

  const addNote = (text) => {
    // console.log(text);
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const delNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
        <Header 
          handleToggleDarkMode={setDarkMode} />
        <Search 
          handleSearchNote={setSearchText} />
        <NotesList 
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} 
          handleAddNote={addNote}
          handleDelNote={delNote} />
      </div>
    </div>
  );
};

export default App;
