import * as Yup from "yup";

const formSchema = Yup.object().shape({
    size: Yup
        .string()
        .oneOf(["Individual", "Small", "Medium", "Large", "XL", "Select a Size"]),
    instructions: Yup
        .string()
        .required(),
    name: Yup
        .string()
        .required("Must enter a name"),
})

export default formSchema