export const TreeNode = () => {
    class Node {
        key: number;
        left?: any;
        rigth?: any;
        constructor(val: number, left?: number, rigth?: number) {
            this.key = val;
            this.left = null;
            this.rigth = null;
        }
    }

    let NodeOne = null
    NodeOne = new Node(1);
    NodeOne.left = new Node(2);
    NodeOne.rigth = new Node(3);
    NodeOne.left.left=new Node(4);


    console.log(NodeOne)

    return <div>hi</div>
}