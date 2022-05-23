import { IModel, ITreeNode } from "./model";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from "react";

export const useContainer = (): IModel => {
    const [root, setRoot] = useState<ITreeNode>(
        {
            title: 'root',
            childs: [],
            id: 0
        }
    );
    const [id_path, set_id_path] = useState<Array<any>>([]);


    const find_current_item = (idPath: any, root: any) => {
        let newNode = root;
        idPath.map((index: any) => newNode = newNode.childs[index]);
        return newNode;
    }

    const validation_schema = Yup.object().shape({
        childs: Yup.array().of(Yup.object().shape({
            title: Yup.string()
                .trim("this field is required")
                .required("this field is required")
        }))
    });

    const formik = useFormik<ITreeNode>({
        initialValues: {
            ...root
        },
        onSubmit: values => { },
        validationSchema: validation_schema
    });

    const handler_addStep = () => {
        const current = formik.values.childs
        current.push(
            {
                title: '',
                childs: [],
                id: current.length
            }
        )

        formik.setFieldValue('step', formik.values)
        setRoot({ ...root });
    };

    const onChange_handler = (index: number, new_value: string) => {
        let current_item = formik.values
        current_item.childs[index].title = new_value;
        formik.setFieldValue('step', { ...current_item });
        setRoot({ ...root });
    };

    const handler_addItem = (index: number) => {
        id_path.push(index);
        set_id_path([...id_path]);
        let currentItem = find_current_item(id_path, root);
        formik.setFieldValue('step', currentItem);
    };

    const handler_deleteItem = (id: number) => {
        let current_item = find_current_item(id_path, root);
        current_item.childs = current_item.childs.filter((item: any) => item.id !== id);
        formik.setFieldValue('step', { ...current_item })
        setRoot({ ...root });
    }

    return {
        formik,
        handler_addStep,
        onChange_handler,
        handler_addItem,
        handler_deleteItem
    }
}