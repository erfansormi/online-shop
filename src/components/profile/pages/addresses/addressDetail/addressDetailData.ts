import type { AddressDetailValues } from '../../../../../store/userAddress';

// validation
import * as Yup from 'yup';
import { required, minLength, maxLength } from '../../../../../functions/validation';

export const AddressSchema = Yup.object().shape({
    postal_address: Yup.string().min(10, minLength("postal address", 10)).required(required("postal address")),
    province: Yup.string().min(2, minLength("province", 2)).max(35, maxLength("province", 35)).required(required("province")),
    city: Yup.string().min(2, minLength("city", 2)).max(35, maxLength("city", 35)).required(required("city")),
    plaque: Yup.string().required(required("plaque")),
    unit: Yup.string(),
    postal_code: Yup.string().min(7, minLength("postal code", 7)).max(11, maxLength("postal code", 11)).required(required("postal code")),
});

// inputs
interface AddressInputs {
    name: keyof AddressDetailValues,
    label: string,
    width: number,
    required: boolean
}

export const addressInputs: AddressInputs[] = [
    {
        name: "province",
        label: "province",
        width: 48,
        required: true
    },
    {
        name: "city",
        label: "city",
        width: 48,
        required: true
    },
    {
        name: "plaque",
        label: "plaque",
        width: 22,
        required: true
    },
    {
        name: "unit",
        label: "unit",
        width: 22,
        required: false
    },
    {
        name: "postal_code",
        label: "postal code",
        width: 48,
        required: true
    },
]