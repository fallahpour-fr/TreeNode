export{}

// // import { useState } from "react";

// // export const AddItem = (props: any) => {
// //     const [array, setArray] = useState([{
// //         title: 'Step'
// //     }]);
// //     const AddArrayValue = () => {
// //         setArray(prev => {
// //             return [...prev, {
// //                 title: 'Step'
// //             }]
// //         })
// //     }


// //     return <div >
// //         <button onClick={() => { AddArrayValue() }} >Add Item</button>
// //         {array.map((item: any, index: any) => {
// //             return <div key={index} >
// //                 <input value={item.title} id={index} />
// //                 <button onClick={() => { props.ChangeStateItemHandler(array , index) }} >Add child for Item</button>
// //             </div>
// //         })}
// //     </div>
// // }



// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import {AddStep} from "./addstep";
// import {AddItem} from "./additem";

// function App() {
//   const [value, setValue] = useState('AddStep');

//   const ChangeStateHandler=(arr:any ,index:any)=>{
//       setValue('AddItem')
//   }

//   const ChangeStateItemHandler=(arr:any,index:any)=>{
//      console.log('arr for item',arr)
//   }

//   return (
//     <div>
//       {
//         (() => {
//           switch (value) {
//             case 'AddStep':
//               return <AddStep ChangeStateHandler={ChangeStateHandler} />
//             case 'AddItem':
//               return <AddItem ChangeStateItemHandler={ChangeStateItemHandler} />
//             default:
//               return null
//           }
//         })()
//       }
//     </div>
//   );
// }

// export default App;
