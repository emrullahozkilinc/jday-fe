import formModel from "./formModel";
import * as Yup from 'yup';

const {
    formField: {
        name,
        email,
    }
} = formModel;

export default [
    Yup.object().shape({
        [name.name]: Yup.string().required(`${name.requiredErrorMsg}`),
        [email.name]: Yup.string().required(`${email.requiredErrorMsg}`),
    })
]