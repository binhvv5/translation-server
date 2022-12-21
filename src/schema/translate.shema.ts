import {object, string} from "yup";

const payload = {
    body: object({
        text: string().required("Text is required"),
        options: object({
            to: string().required('Target language is required'),
        })
    }),
};

export const translateSchema = object({
    ...payload,
});
