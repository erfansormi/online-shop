import * as Yup from 'yup';
import { maxLength, minLength, required } from "../../../../../functions/validation";

// ts
export interface CommentInitialValues {
    rate: number,
    title?: string,
    commentText: string,
    isSuggest?: "yes" | "no" | "unsure",
    unknown: boolean
}

// new comment initial values
export const commentInitialValues: CommentInitialValues = {
    rate: 0,
    commentText: "",
    unknown: false
}

// validation
export const NewCommentSchema = Yup.object().shape({
    rate: Yup.number().required(required("rate")).min(1, required("rate")),
    title: Yup.string()
        .min(3, minLength("title", 3))
        .max(25, maxLength("title", 25)),
    commentText: Yup.string()
        .required(required("comment text"))
        .min(3, minLength("comment text", 3))
        .max(500, maxLength("comment text", 500)),
    isSuggest: Yup.string()
        .matches(/^yes$ | ^no$ | ^unsure$/, "invalid value!"),
    unknown: Yup.boolean()
});