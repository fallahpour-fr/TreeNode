import React, { useState } from 'react';

interface ITreeNode {
  title: string,
  parent_id?: number,
  id?: number,
  childs: Array<ITreeNode>,
}

export const TreeView = () => {
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

  const AddItemValue = (index1: any) => {
    let obj1 = root.childs.find((item) => item.id === index1)!
    let obj2 = obj1.childs
    obj2.push({
      title: 'item',
      parent_id: obj1.id,
      id: obj1.childs.length,
      childs: []
    })
    setRoot({ ...root });
    setCurrentItem(obj2)
  }

  return <div>
    <button onClick={() => { AddChildValue() }} >Add Child</button>
    {currentItem.map((item: any, index: any) => {
      return <div key={index} >
        <input placeholder={item.title} id={index} />
        <button onClick={() => { AddItemValue(index) }} > Add Item </button>
      </div>
    })}
  </div>
}