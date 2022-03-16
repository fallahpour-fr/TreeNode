// import React, { useState, useEffect } from 'react';
// export const SaveData = () => {
//     let data: any = [
//         {
//             title: '',
//             id: 1
//         },
//         {
//             title: '',
//             id: 2
//         }
//     ]

//     const [inputData, setinputData] = useState<any>()


//     const saveData = () => {

//     }

//     const onChangHandler = (e: any) => {

//     }

//     return <form action='' >
//         {data.map((item: any, index: any) => {
//             return <div key={index} >
//                 <input placeholder={item.title} name={item.id} onChange={onChangHandler} />
//             </div>
//         })}
//         <input type="submit" value="submit" />
//     </form>
// }

import { Form, Input, Button} from 'antd';

export const SaveData= () => {
  const onFinish = (values: any) => {
    console.log(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};