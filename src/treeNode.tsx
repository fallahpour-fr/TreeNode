
export const TreeNode = () => {

    type TreeNode = {
        title: string,
        childs: Array<TreeNode>
    }

    const Node = (title: string, ...childs: TreeNode[]): TreeNode => {
        let some = {
            title,
            childs:childs??[]
        }
        return some;
    }

    let valuchain = Node('root');
    let currentNode = valuchain;
    currentNode.childs.push(Node('step 1')) 
    currentNode.childs.push(Node('step 2')) 
    currentNode=valuchain.childs![0];
    currentNode.childs = [Node('step 1-1'), Node('step 1-2')];
    currentNode = valuchain.childs![1];
    currentNode.childs = [Node('step 2-1'), Node('step 2-2')];
    currentNode = valuchain.childs![0].childs![0];
    currentNode.childs = [Node('step 1-1-1'), Node('step 1-1-2'),Node('step 1-1-3')];
    console.log(valuchain);


    return <div>hi</div>
}