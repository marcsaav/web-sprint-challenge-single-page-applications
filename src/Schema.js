import * as yup from 'yup';

export const schema = yup.object().shape({
    name: yup.string().required('Name is required.').min(2, 'A mininimum of 2 characters is required.'),
    size: yup.string().oneOf(['Small: 12"', 'Medium: 16"', 'Large: 20"'], 'A size is required.'),
    sauce: yup.string().oneOf(['red', 'ranch', 'bbq', 'alfredo'], 'A sauce is required.'),
    pepperoni: yup.boolean().oneOf([true, false], ''),
    extraCheese: yup.boolean().oneOf([true, false], ''),
    garlic: yup.boolean().oneOf([true, false], ''),
    peppers: yup.boolean().oneOf([true, false], ''),
    specialInstructions: yup.string().optional()
})