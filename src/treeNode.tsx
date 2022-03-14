import React, { useState, useEffect } from 'react';

export const TreeNode = () => {

    // type TreeNode = {
    //     title: string,
    //     childs: Array<TreeNode>
    // }

    // const Node = (title: string, ...childs: TreeNode[]): TreeNode => {
    // let some = {
    //     title,
    //     childs:childs??[]
    // }
    //     return some;
    // }

    // let valuchain = Node('root');
    // let currentNode = valuchain;
    // currentNode.childs.push(Node('step 1')) 
    // currentNode.childs.push(Node('step 2')) 
    // currentNode=valuchain.childs![0];    
    // currentNode.childs.push(Node('step 1-1')) 
    // currentNode.childs.push(Node('step 1-2')) 
    // currentNode = valuchain.childs![1];
    // currentNode.childs.push(Node('step 2-1')) 
    // currentNode.childs.push(Node('step 2-2')) 
    // currentNode = (valuchain.childs![0]).childs![0];
    // currentNode.childs.push(Node('step 1-1-1')) 
    // currentNode.childs.push(Node('step 1-1-2')) 
    // currentNode.childs.push(Node('step 1-1-3')) 
    // console.log(valuchain);

    interface TreeNode {
        title: string,
        childs: Array<TreeNode>,
        id: number
    }

    const [root, setRoot] = useState<TreeNode>(
        {
            title: 'root',
            childs: [],
            id: 0
        }
    );
    const [currentNode, setCurrentNode] = useState<TreeNode>(root);
    const [idPath, setIdPath] = useState<Array<any>>([]);
    const [value, setValue] = useState<any>([]);

    const AddItem = (id: number) => {
        currentNode?.childs.push({
            title: `step`,
            childs: [],
            id: id
        });
        setRoot({ ...root });
    }

    const findCurrentItem = (idPath: any, root: any) => {
        let newNode = root;
        idPath.map((index: any) => newNode = newNode.childs[index]);
        return newNode;
    }

    const showStep = (index: number) => {
        idPath.push(index);
        setIdPath([...idPath]);
        let currentItem = findCurrentItem(idPath, root);
        setCurrentNode(currentItem);
    }

    const deleteButton = (id: number) => {
        let currentItem1 = findCurrentItem(idPath, root);
        currentItem1.childs = currentItem1.childs.filter((item: any) => item.id !== id);
        setCurrentNode(currentItem1)
        setRoot({ ...root });
    }

    const onChangHandler = (e: any) => {
        let inputValue = e.target.value;
        //   setValue(e.target.value)
    }
    console.log(value)
    // console.log('currentNode', currentNode)
    // console.log('root', root);
    return <div>
        <button onClick={() => { AddItem((Math.random())) }} >Add</button>
        {currentNode?.childs.map((item: any, index: any) => {
            return <div key={index} >
                <input placeholder={item.title} id={index} onChange={onChangHandler} />
                <button onClick={() => { showStep(index) }} >{item.id}</button>
                <button onClick={() => { deleteButton(item.id) }} >Delete</button>
            </div>
        })}
    </div>
}