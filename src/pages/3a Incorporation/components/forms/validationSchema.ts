import * as Yup from 'yup';

export const IncorporationSchema = Yup.object().shape({
    personal: Yup.object().shape({
        firstname: Yup.string().required("First name is required"),
        lastname: Yup.string().required("Last name is required"),
        email: Yup.string()
            .email("Invalid email")
            .required("Email is required"),
        country_code: Yup.string()
            .required("Country code is required"),
        phone: Yup.string()
            .max(10, "too long")
            .required("Phone number is required")
    }),
    company: Yup.object().shape({
        companyname_1: Yup.string().required("Company name is required"),
        address: Yup.string().required("Address is required"),
        country: Yup.string().required("Country is required")
    }),
    shares: Yup.object().shape({
        number: Yup.number()
            .required("Number of shares is required")
            .moreThan(9999, "At least 10,000 expected"),
        value: Yup.number()
            .moreThan(9999, "At least 10,000 expected")
            .required("Share value is required")
    }),
    others: Yup.object().shape({
        fund: Yup.string().required("Fund information is required"),
        optional_fund: Yup.string().required('Fund information is required'),
        criminal_record: Yup.string().required("Criminal record is required"),
        business_relationship: Yup.string().required(
            "Relationship status is required"
        )
    }),
    terms: Yup.boolean().oneOf([true], "Must Accept Terms and Conditions")
});
