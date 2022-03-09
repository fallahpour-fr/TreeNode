import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { textChangeRangeIsUnchanged } from 'typescript';

interface ITreeNode {
  title: string,
  id: number,
  childs: Array<ITreeNode>,
}

function App() {
  const [showData, setShowData] = useState(true)
  const [root, setRoot] = useState<ITreeNode>({
    title:'root',
    id:0,
    childs:[]
  });
  const [currentItem, setCurrentItem] = useState<Array<ITreeNode>>(root.childs)
  const AddChildValue = () => {
    setCurrentItem(prev => {
      return [...prev, {
        title: 'step',
        arr: [],
        id: 10
      }]
    })
  }
  const AddItemValue = (index: any) => {
    let itemArray = currentItem[index];
    // itemArray.arr.push({
    //   title: 'item',
    //   arr: [],
    //   id: index
    // });
    setCurrentItem(itemArray.arr)
    // setShowData(false)
  }
  const changeHandler=(e:any)=>{
      console.log(e.target.value);
  }

  return <div >
    <button onClick={() => { AddChildValue() }} >Add Child</button>
    {currentItem.map((item: any, index: any) => {
      return <div key={index} >
        <input placeholder={item.title} id={index}  onChange={changeHandler} />
        <button onClick={() => {AddItemValue(index) }}  > Add Item </button>
        {/* {currentItem[index].arr.length>0 &&
          <div style={{display:`${showData ? 'none':'block'}`}}>
            <button onClick={() => { AddItemValue(index) }} id={index}  >Add Item {index} </button>
            {currentItem[index].arr.map((item1: any, index1: any) => {
              return <input key={index1} placeholder={item1.title} id={index1} />
            })}
          </div>
        } */}
      </div>
    })}
  </div>
}

export default App;
