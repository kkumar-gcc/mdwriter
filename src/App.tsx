import React, { useState } from 'react';
import './App.css';
import Markdown from './components/Markdown';
import Navbar from './components/Navbar';
import CodeEditor from './components/CodeEditor';

// Did you know you can use tildes instead of backticks for code in markdown? ✨
const markdown = ``

function App() {
  const [code, setCode] = useState(markdown);
  const onChange = (action:string | undefined, data:string) => {
    switch (action) {
      case "code": {
        setCode(data);
        break;
      }
      default: {
        console.warn("case not handled!", action, data);
      }
    }
  };
  return (
    <>
      <div className='overflow-hidden h-screen'>
        <div>
          <Navbar />
        </div>
        <div className='grid grid-cols-2 gap-8 h-full'>
          <div className='h-[calc(100vh-80px)] overflow-y-scroll'>
          <CodeEditor
            code={code}
            onChange={onChange}
          />
          </div>
          <div className='prose max-w-none lg:max-w-full p-4 h-[calc(100vh-80px)] overflow-y-scroll border-l w-full'>
            <Markdown>{code}</Markdown>
          </div>
        </div>

      </div>
    </>

  );
}

export default App;
