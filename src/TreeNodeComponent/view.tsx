import {IModel} from "./model";

export const View=(props:IModel)=>(
    <section className="bg-slate-400 w-1/2" >
        <button onClick={()=>props.handler_addStep()} >Add Step</button>
        {props.formik.values.childs.map((item: any, index:number) => <div key={index} >
            <input name={item.id} onChange={(event) => props.onChange_handler(index, event.target.value)} />
            <button onClick={() => { props.handler_addItem(index) }} >{item.id}</button>
            <button onClick={() => { props.handler_deleteItem(item.id) }} >Delete</button>
        </div>)}
    </section>
)