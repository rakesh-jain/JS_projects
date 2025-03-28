import DOM from 'react-dom';
import { useState } from 'react';

function Yoga(){
  const [showList, setShowList] = useState(false);

  const btn = ()=>{
    alert("happy yoga day keep healthy");
  }
  
  const teacher =["yogesh","pathanjali","yogendra"];
  const list = teacher.map((t,i)=><li key={i}>{t}</li>);

  const teachList =()=>{
    setShowList(!showList);
  }

    return (
        <div>
          <h2>india is master of yoga every other nation adopted yoga from the indian master</h2>
          <button onClick={btn}> Twist your Finger</button>
          <button onClick={teachList}>Teacher List</button>
          {showList && <ul>{list}</ul>}
        </div>  
    )
}
export default Yoga;