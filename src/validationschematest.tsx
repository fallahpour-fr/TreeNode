import { useFormik, useFormikContext } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';


export const ValidationSchemaTest = () => {
    const validation_schema = Yup.object().shape({
        title: Yup.string()
            .min(2, 'Too Short!')
            .max(5, 'Too Long!')
            .required('Required'),
    })
    const formik = useFormik<any>({
        initialValues: {
            title: ''
        },
        validationSchema: validation_schema,
        onSubmit: values => {
            console.log(values)
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
        <div>
            <input type='text' onChange={(event) => onChangHandler(event.target.value)} />
            {formik.errors.title ? (
                <div>{formik.errors.title}</div>
            ) : null}
            <button type='submit' onClick={() => formik.handleSubmit()}>create</button>
            <button type='button' onClick={() => onClickHandler()}  >add step</button>
        </div>
    )

}
