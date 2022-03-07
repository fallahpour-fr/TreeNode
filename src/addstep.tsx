import { useState } from "react";

export const AddStep = (props: any) => {
    const [array, setArray] = useState([{
        title: 'Step'
    }]);
    const AddArrayValue = () => {
        setArray(prev => {
            return [...prev, {
                title: 'Step'
            }]
        })
    }


    return <div >
        <button onClick={() => { AddArrayValue() }} >Add Step</button>
        {array.map((item: any, index: any) => {
            return <div key={index} >
                <input value={item.title} id={index} />
                <button onClick={() => { props.ChangeStateHandler(array , index) }} >Add Item</button>
            </div>
        })}
    </div>
}