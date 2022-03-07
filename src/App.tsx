import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

interface IArray {
  title: string,
  id: number,
  arr: Array<IArray>,
}

function App() {
  const [showData, setShowData] = useState(true)
  const [array, setArray] = useState<Array<IArray>>([]);
  const AddChildValue = () => {
    setArray(prev => {
      return [...prev, {
        title: 'Step',
        arr: [],
        id: 10
      }]
    })
  }
  const AddItemValue = (index: any) => {
    let itemArray = array[index];
    itemArray.arr.push({
      title: 'item',
      arr: [],
      id: index
    });
    setArray([...array])
    setShowData(false)
  }

  return <div >
    <button onClick={() => { AddChildValue() }} style={{display:`${showData ? 'block':'none'}`}} >Add Child</button>
    {array.map((item: any, index: any) => {
      return <div key={index} >
        <input value={item.title} id={index} style={{display:`${showData ? 'block':'none'}`}} />
        <button onClick={() => {AddItemValue(index) }} style={{display:`${showData ? 'block':'none'}`}} > Add Item </button>
        {array[index].arr.length>0 &&
          <div style={{display:`${showData ? 'none':'block'}`}}>
            <button onClick={() => { AddItemValue(index) }} id={index}  >Add Item {index} </button>
            {array[index].arr.map((item1: any, index1: any) => {
              return <input key={index1} value={item1.title} id={index1} />
            })}
          </div>
        }
      </div>
    })}
  </div>
}

export default App;
