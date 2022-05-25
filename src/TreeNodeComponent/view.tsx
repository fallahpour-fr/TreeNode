import { IModel } from "./model";

export const View = (props: IModel) => {
    return <section className="bg-slate-400 w-1/2" >
        <button onClick={() => props.handler_addStep()} >Add Step</button>
        {props.form_data.childs.map((item: any, index: number) => <div key={index} >
            <input value={item.title} name={item.title} onChange={(event) => props.onChange_handler(index, event.target.value)} />
            <button onClick={() => props.handler_addItem(index)} >Add Item</button>
            <button onClick={() => props.handler_deleteItem(item.id)} >Delete</button>
        </div>)}
        <button type="submit" onClick={()=>props.action_onSubmit()}>Submit</button>
    </section>
};