import { useFormik, useFormikContext } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';


export const ValidationSchemaTest = () => {
    const validation_schema = Yup.array().of(Yup.object().shape({
        title: Yup.string()
            .min(2, 'Too Short!')
            .max(5, 'Too Long!')
            .required('Required'),
    }))
    const formik = useFormik<any>({
        initialValues: {
            title: ''
        },
        validationSchema: validation_schema,
        onSubmit: values => {
            console.log(values.title)
            // validation_schema.isValid(values)
            //     .then(is_valid => {
            //         console.log(is_valid)
            //     })

        }
    })

    const onChangHandler = (value: any) => {
        formik.setFieldValue('title', value)
    }

    const onClickHandler = async () => {
        console.log(formik.values.title)
        const valid = await validation_schema.isValid(formik.values);
        console.log(valid);
    }

    return (
        <div >
            <input type='text' onChange={(event) => onChangHandler(event.target.value)} />
            {formik.errors.title ? (
                <div>{formik.errors.title}</div>
            ) : null}
            <button type='submit' onClick={() => formik.handleSubmit()}  >create</button>
            <button type='button' onClick={() => onClickHandler()}  >add step</button>
        </div>
    )

}
// import React from 'react';
// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';

// const SignupSchema = Yup.object().shape({
//     firstName: Yup.string()
//         .min(2, 'Too Short!')
//         .max(5, 'Too Long!')
//         .required('Required'),
//     lastName: Yup.string()
//         .min(2, 'Too Short!')
//         .max(5, 'Too Long!')
//         .required('Required'),
//     email: Yup.string().email('Invalid email').required('Required'),
// });

// export const ValidationSchemaExample = () => (
//     <div>
//         <h1>Signup</h1>
//         <Formik
//             initialValues={{
//                 firstName: '',
//                 lastName: '',
//                 email: '',
//             }}
//             validationSchema={SignupSchema}
//             onSubmit={values => {
//                 // same shape as initial values
//                 console.log(values);
//             }}
//         >
//             {({ errors, touched }) => (
//                 <Form>
//                     <Field name="firstName" />
//                     {errors.firstName && touched.firstName ? (
//                         <div>{errors.firstName}</div>
//                     ) : null}
//                     <Field name="lastName" />
//                     {errors.lastName && touched.lastName ? (
//                         <div>{errors.lastName}</div>
//                     ) : null}
//                     <Field name="email" type="email" />
//                     {errors.email && touched.email ? <div>{errors.email}</div> : null}
//                     <button type="submit">Submit</button>
//                 </Form>
//             )}
//         </Formik>
//     </div>
// );