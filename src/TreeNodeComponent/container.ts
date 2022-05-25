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
    const [id_path, set_id_path] = useState<Array<number>>([]);


    const find_current_item = (idPath: Array<number>, root: ITreeNode) => {
        let newNode = root;
        idPath.map((index: number) => newNode = newNode.childs[index]);
        return newNode;
    };

    const validation_schema = Yup.object().shape({
        childs: Yup.array().of(Yup.object().shape({
            title: Yup.string()
                .trim("this field is required")
                .required("this field is required")
        }))
    });


    const action_onSubmit = (values: ITreeNode) => {
        console.log(values)
    }

    const formik = useFormik<ITreeNode>({
        initialValues: root,
        onSubmit: action_onSubmit,
        validationSchema: validation_schema
    });
    const handler_addStep = () => {
        const childs = formik.values.childs;
        childs.push(
            {
                title: '',
                childs: [],
                id: childs.length
            }
        );

        formik.setFieldValue('childs', childs);
        setRoot({ ...root });
    };

    const onChange_handler = (index: number, new_value: string) => {
        let current_item = formik.values.childs;
        current_item[index].title = new_value;
        formik.setFieldValue('childs', current_item);
        setRoot({ ...root });
        console.log(index, new_value)
    };

    const handler_addItem = (index: number) => {
        id_path.push(index);
        set_id_path([...id_path]);
        let currentItem = find_current_item(id_path, root);
        formik.setFieldValue('childs', currentItem.childs);
    };

    const handler_deleteItem = (id: number) => {
        let current_item = find_current_item(id_path, root);
        current_item.childs = current_item.childs.filter((item: any) => item.id !== id);
        formik.setFieldValue('childs', current_item.childs);
        setRoot({ ...root });
    };


    return {
        form_data: formik.values,
        handler_addStep,
        onChange_handler,
        handler_addItem,
        handler_deleteItem,
        action_onSubmit: formik.handleSubmit
    };
};