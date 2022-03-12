import React, { useState } from 'react';

interface ITreeNode {
    title: string,
    parent_id: number,
    id: number,
    childs: Array<ITreeNode>,
  }

export const TreeView=()=>{
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