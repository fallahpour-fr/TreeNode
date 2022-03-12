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
    // currentNode = valuchain.childs![0].childs![0];
    // currentNode.childs.push(Node('step 1-1-1')) 
    // currentNode.childs.push(Node('step 1-1-2')) 
    // currentNode.childs.push(Node('step 1-1-3')) 
    // console.log(valuchain);

    interface TreeNode {
        title: string,
        childs: Array<TreeNode>
    }

    const [root, setRoot] = useState<TreeNode>({
        title: 'root',
        childs: []
    });
    const [currentNode, setCurrentNode] = useState<TreeNode>();
    const [idPath, setIdPath] = useState<Array<number>>([]);

    const AddItem = (num:any) => {
        setCurrentNode(root);
        currentNode?.childs.push({
            title: `step ${num}`,
            childs: []
        })
        setRoot({ ...root });
    }

    const showStep = (index:number) => {
      idPath.push(index);
      setIdPath([...idPath])

        console.log(idPath)
    }

    return <div>
        <button onClick={() => { AddItem(root.childs.length) }} >Add</button>
        {currentNode?.childs.map((item: any, index: any) => {
            return <div key={index} >
                <input placeholder={item.title} id={index} />
                <button onClick={() => { showStep(index) }} >{index}</button>
            </div>
        })}
    </div>
}