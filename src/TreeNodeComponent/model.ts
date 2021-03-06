import { FormikErrors } from 'formik';
export interface ITreeNode {
    title: string,
    childs: Array<ITreeNode>,
    id: number
}

export interface IModel {
    form_data:ITreeNode;
    form_errors: FormikErrors<ITreeNode>;
    handler_addStep:Function;
    onChange_handler:Function;
    handler_addItem:Function;
    handler_deleteItem:Function;
    action_onSubmit:Function
}