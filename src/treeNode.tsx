import  { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
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
    const [idPath, setIdPath] = useState<Array<any>>([]);
    const [title, setTitle] = useState<Array<any>>([]);
    const [showBredCrumb, setshowBredCrumb]=useState<string>('');

    const validation_schema = Yup.object().shape({
        root: Yup.object().shape({
            title: Yup.string()
                .required("this field is required")
        })
    });

    const formik = useFormik<any>({
        initialValues: {
            step: root
        },
        onSubmit: values => { }
    })

    const findCurrentItem = (idPath: any, root: any) => {
        let newNode = root;
        idPath.map((index: any) => newNode = newNode.childs[index]);
        return newNode;
    }

    const bredCrump = (idPath: any, root: any) => {
        title.push(findCurrentItem(idPath, root).title);
        setTitle([...title]);
        return title;
    }



    const AddItemHandler = (id: number) => {
        const current = formik.values.step.childs
        current.push(
            {
                title: '',
                childs: [],
                id: id
            }
        )

        formik.setFieldValue('step', formik.values.step)
        setRoot({ ...root });
    }

    const showStepHandler = (index: number) => {
        idPath.push(index);
        setIdPath([...idPath]);
        let currentItem = findCurrentItem(idPath, root);
        formik.setFieldValue('step', currentItem);
    }

    const deleteButtonHandler = (id: number) => {
        let currentItem1 = findCurrentItem(idPath, root);
        currentItem1.childs = currentItem1.childs.filter((item: any) => item.id !== id);
        formik.setFieldValue('step', { ...currentItem1 })
        setRoot({ ...root });
    }

    const onChangHandler = (index: number, newValue: string) => {
        let currentItem = formik.values.step
        currentItem.childs[index].title = newValue;
        formik.setFieldValue('step', { ...currentItem });
        setRoot({ ...root });
    }

    useEffect(() => {
        let bredCrumpLink=bredCrump(idPath, root).join('/');
          setshowBredCrumb(bredCrumpLink)
    }, [idPath])

    // console.log('root', root);




    return <div>
        <div>{showBredCrumb}</div>
        <h2>{formik.values.step.title}</h2>
        <button onClick={() => { AddItemHandler((Math.random())) }} >Add</button>
        {formik.values.step.childs.map((item: any, index: any) => <div key={index} >
            <input name={item.id} onChange={(event) => onChangHandler(index, event.target.value)} />
            <button onClick={() => { showStepHandler(index) }} >{item.id}</button>
            <button onClick={() => { deleteButtonHandler(item.id) }} >Delete</button>
        </div>)}
    </div>
}