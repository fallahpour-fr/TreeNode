import React, { useState } from 'react';
import './style.css';

interface ITreeNode {
    title: string,
    id: number,
    childs: Array<ITreeNode>,
}


// [{
//     title: 'root1',
//     parent_id: undefined,
//     id: 1,
//     child: [
//         {
//             title: 'root1-1',
//             id: 22,
//             parent_id: 1,
//             child: [
//                 {
//                     title: 'root1-1-2',
//                     parent_id: 22,
//                     id: 23,
//                     child: [{
//                         title: 'root1-1-2-1',
//                         parent_id: 33,
//                         id: 23,
//                         child: [{
//                             title: 'root1-1-2-2',
//                             parent_id: 22,
//                             id: 23,
//                             child: []
//                         }]
//                     }]
//                 }
//             ]
//         }
//     ]
// },
// {
//     title: 'root2',
//     parent_id: undefined,
//     id: 2,
//     child: []
// },
// {
//     title: 'root3',
//     parent_id: undefined,
//     id: 3,
//     child: []
// }]

export const Tree=()=> {
    const [inputs, setInput] = useState<any>({
        name: '',
        child: ''
    });
    const [root, setRoot] = useState<any>([{
        title: 'root3',
        parent_id: undefined,
        id: 3,
        child: []
    }]);


    const render = (items: any) => {
        return items.map((item: any, i: number) => {
            return (
                <div key={i}>
                    {item.title}
                    {
                        item.child.length > 0 && findChild(item.child)
                    }
                </div>
            )
        })
    }

    const findChild = (item: any) => {
        return (
            <div>
                {
                    item && item.length > 0 && item.map((x: any, i: number) => {
                        return (
                            <div className='children' key={i}>
                                {x.title}
                                {findChild(x.child)}
                            </div>
                        )
                    })
                }
            </div>
        )

    }

    const add = {
        item: () => {
            let obj = {
                title: inputs.name,
                id: root[root.length - 1].id + 1,
                child: []
            }
            setRoot([
                ...root,
                obj
            ])
        },
        child: (item: any) => {

        },
    }


    const handleInput = (e: any) => {
        setInput({
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <div>
                <input type="text" name="name" value={inputs.name} onChange={handleInput} />
                <button onClick={() => { add.item() }} >Add Root</button>
            </div>

            <div>
                {
                    root && root.length > 0 && render(root)
                }
            </div>
        </div>
    )
}
