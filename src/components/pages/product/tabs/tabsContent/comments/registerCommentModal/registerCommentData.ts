import * as Yup from 'yup';
import { maxLength, minLength, required } from "../../../../../../../functions/validation";

// components
import Input from '../../../../../../data_entry/input/input';
import TextArea from '../../../../../../data_entry/input/textArea';

// register comment initial values
export interface CommentInitialValues {
    rate: number,
    title?: string,
    commentText: string,
    isSuggest?: "yes" | "no" | "unsure",
    unknown: boolean
}

export const commentInitialValues: CommentInitialValues = {
    rate: 0,
    commentText: "",
    unknown: false
}

// validation
export const RegisterCommentSchema = Yup.object().shape({
    rate: Yup.number().required(required("rate")).min(1, required("rate")),
    title: Yup.string()
        .min(3, minLength("title", 3))
        .max(25, maxLength("title", 25)),
    commentText: Yup.string()
        .required(required("comment text"))
        .min(3, minLength("comment text", 3))
        .max(500, maxLength("comment text", 500)),
    isSuggest: Yup.string(),
    unknown: Yup.boolean()
});

// is suggest buttons
interface IsSuggestBtns {
    value: "yes" | "no" | "unsure",
    color: "success" | "error" | "neutral"
}

export const isSuggestBtns: IsSuggestBtns[] = [
    {
        value: "yes",
        color: "success"
    },
    {
        value: "unsure",
        color: "neutral"
    },
    {
        value: "no",
        color: "error"
    }
]

// inputs data (comment title and text)
interface CommentInputs {
    label: string;
    name: keyof CommentInitialValues;
    inputComponent: any
    required: boolean;
}

export const commentInputs: CommentInputs[] = [
    {
        label: "comment title",
        name: "title",
        inputComponent: Input,
        required: false
    },
    {
        label: "comment text",
        name: "commentText",
        inputComponent: TextArea,
        required: true
    }
]