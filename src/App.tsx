import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { textChangeRangeIsUnchanged } from 'typescript';

interface ITreeNode {
  title: string,
  parent_id: number,
  id: number,
  childs: Array<ITreeNode>,
}


function App() {
  const [root, setRoot] = useState<ITreeNode>({
    title: 'root',
    parent_id: 0,
    id: 1,
    childs: []
  });
  const [idPhath, setIdPath] = useState<Array<number>>([]);
  const [currentItem, setCurrentItem] = useState<Array<ITreeNode>>([]);
  const AddChildValue = () => {
    let obj = root.childs;
    obj.push({
      title: 'child',
      parent_id: root.id,
      id: root.childs.length,
      childs: []
    });
    setRoot({ ...root });
    setCurrentItem(obj);
   
  }

  class Node{
    key:number
    constructor(val:number){
      this.key=val
    }

    showData(){
      return `${this.key}`
    }
  }

 const NodeOne= new Node(2)
 console.log(NodeOne)
  console.log(root)
  console.log(currentItem)
  return <div>
    <button onClick={() => { AddChildValue() }} >Add Child</button>
    {currentItem.map((item: any, index: any) => {
      return <div key={index} >
        <input placeholder={item.title} id={index} />
        <button > Add Item </button>
      </div>
    })}
  </div>
}

export default App;
