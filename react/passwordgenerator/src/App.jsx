import { useState, useCallback, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  const [length, setLength] = useState(12);
  const [number, setNumber] = useState(false);
  const [characterAllowed, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "";

    // Append uppercase letters
    for (let c = 65; c <= 90; c++) {
      str += String.fromCharCode(c);
    }

    // Append lowercase letters
    for (let c = 97; c <= 122; c++) {
      str += String.fromCharCode(c);
    }

    if (number) str += "0123456789";
    if (characterAllowed) str += "@#$%^&*_-+`()~?<>{}|:;";

    // Generate password of given length
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, number, characterAllowed]);

  const copyPassword= useCallback(()=>{
    passwordRef.current.classList.add('copied');
      passwordRef.current?.select(password);
    window.navigator.clipboard.writeText(password);
  },[password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, number, characterAllowed, passwordGenerator]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      // className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md mx-auto shadow-lg rounded-lg px-6 py-8 bg-white"
      >
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-4">
          Password Generator
        </h1>
        <motion.input
          whileFocus={{ scale: 1.05 }}
          className="w-full p-3 mb-4 text-lg bg-gray-100 text-gray-800 border-2 border-indigo-500 rounded-lg focus:outline-none"
          placeholder="Generated Password"
          type="text"
          ref={passwordRef}
          value={password}
          readOnly
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="w-full p-3 mb-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          onClick={copyPassword}
        >
          Copy
        </motion.button>

        <div className="flex flex-col gap-y-4">
          <div className="flex items-center justify-between">
            <label className="text-gray-700">Password Length</label>
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <span className="text-gray-700">{length}</span>
          </div>

          <div className="flex items-center justify-between">
            <label className="text-gray-700">Include Characters</label>
            <input
              type="checkbox"
              checked={characterAllowed}
              onChange={() => setCharacter((prev) => !prev)}
              className="cursor-pointer"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="text-gray-700">Include Numbers</label>
            <input
              type="checkbox"
              checked={number}
              onChange={() => setNumber((prev) => !prev)}
              className="cursor-pointer"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default App;
