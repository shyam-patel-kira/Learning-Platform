import React, { useState, useEffect } from 'react';

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continous = true;
mic.interimResults = true;
mic.lang = 'en-US';

function IeltsSpeakingTestStyle() {
  const [isListening, setIsListening] = useState(false);
  const [note, setNote] = useState(null);
  const [savedNotes, setSavedNotes] = useState([]);

  useEffect(() => {
    handleListen();
  }, [isListening]);

  const handleListen = () => {
    if (isListening) {
      mic.start();
      mic.onend = () => {
        console.log('continue..');
        mic.start();
      };
    } else {
      mic.stop();
      mic.onend = () => {
        console.log('Stopped Mic on Click');
      };
    }
    mic.onstart = () => {
      console.log('Mics on');
    };

    mic.onresult = event => {
      const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');
      console.log(transcript);
      setNote(transcript);
      mic.onerror = event => {
        console.log(event.error);
      };
    };
  };

  const handleSaveNote = () => {
    setSavedNotes([...savedNotes, note]);
    setNote('');
  };

  return (
    <div className='font-myfonts shadow-lg bg-gray-100 my-4 w-5/6 mx-auto grid grid-cols-2'>
      <div className='shadow-2xl m-8 border-2 bg-customwhite p-5 rounded-md min-h-0'>
        <h2 className='text-3xl text-customblack'>Current Note</h2>
        {isListening ? <span>🎙️</span> : <span>🛑🎙️</span>}
        <button
          className='rounded-md m-2 p-2 float-right bg-customnewblue hover:bg-customhoverblue text-customwhite hover:text-customdarkblue'
          onClick={handleSaveNote}
          disabled={!note}
        >
          Save Note
        </button>
        <button
          className='rounded-md m-2 p-2 float-right bg-customnewblue hover:bg-customhoverblue text-customwhite hover:text-customdarkblue'
          onClick={() => setIsListening(prevState => !prevState)}
        >
          Start/Stop
        </button>
        <p>{note}</p>
      </div>
      <div className='shadow-2xl m-8 p-5 border-2 bg-customwhite rounded-md min-h-0'>
        <h2 className='text-3xl text-customblack'>Notes</h2>
        {savedNotes.map(n => (
          <p key={n}>{n}</p>
        ))}
      </div>
    </div>
  );
}

export default IeltsSpeakingTestStyle;
