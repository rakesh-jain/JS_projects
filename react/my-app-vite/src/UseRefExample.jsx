import {useRef,useState} from 'react';

function Counter(){
  const[count, setCount] = useState(0);
  const timerId= useRef(0);

  const startTime =()=>{
    if(!timerId.current){
      timerId.current =setInterval(()=>{setCount((prev)=>prev+1)},1000);
    }
  }

  const stopTime=()=>{
   clearInterval(timerId.current);
   timerId.current = null;
  }
  const resetTime = ()=>{
    stopTime();
    setCount(0);

  }
  return( <div>
      <p>Count: {count}</p>
      <button onClick={startTime}>Start</button>
      <button onClick={stopTime}>Stop</button>
      <button onClick={resetTime}>Reset</button>
    </div>);
}

function TextInputWithFocusButton(){
    const inputEl =useRef(null);
    let [text,setState] = useState(null);
    const onButtonClick = ()=>{
         inputEl.current.focus();
          setState(() => inputEl.current.value)
         console.log(inputEl.current)
    };
    return(
        <div style={{ textAlign: "center", marginTop: "50px" }}>
      <input
        ref={inputEl}
        type="text"
        placeholder="Type something..."
        style={{ padding: "10px", fontSize: "16px" }}
      />
      <button
        onClick={onButtonClick}
        style={{
          marginLeft: "10px",
          padding: "10px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Focus Input
      </button>
      <p>hello {text}</p>
      <Counter />
    </div>
    );
}
export default TextInputWithFocusButton;