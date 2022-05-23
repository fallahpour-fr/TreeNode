export interface ITreeNode {
    title: string,
    childs: Array<ITreeNode>,
    id: number
}

export interface IModel {
    formik:any;
    handler_addStep:Function;
    onChange_handler:Function;
    handler_addItem:Function;
    handler_deleteItem:Function;
}