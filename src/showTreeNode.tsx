
export const ShowTreeNode = () => {
    let node = {
        title: 'value chain',
        childs: [{
            title: 'stream',
            childs: [
                {
                    title: 'value',
                    childs: []
                }
            ]
        },
        {
            title: 'product',
            childs: []
        }]
    }

    // const showTreeNodeTitle = (arr: any) => {
    //     let array:Array<any> = []
    //     for (let i = 0; i <= arr.length - 1; i++) {
    //       array.push(<li>{arr[i].title}</li> );
    //       if (arr[i].childs.length > 0) {
    //        array.push(<ul>{...showTreeNodeTitle(arr[i].childs)}</ul>)
    //       }
    //     }
    //     return array
    // }
    // // showTreeNodeTitle(node.childs)
    // console.log(showTreeNodeTitle(node.childs))

    const showTreeNodeTitle = (arr: any) => {
        let array:Array<any> = []
        for (let i = 0; i <= arr.length - 1; i++) {
            for (let j = 0; j < array.length; j++) {
                array.push(' ')  
            }
          array.push( arr[i].title);
          if (arr[i].childs.length > 0) {
           array.push({...showTreeNodeTitle(arr[i].childs)})
          }
        }

        return array
    }
    // showTreeNodeTitle(node.childs)
    console.log(showTreeNodeTitle(node.childs))

    
    return <div>
     
    </div>
}