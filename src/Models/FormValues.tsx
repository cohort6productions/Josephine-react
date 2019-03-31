export interface IFormValues {
    personal: IPersonalValues;
    company: ICompanyValues
}

interface IPersonalValues {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    phone: string;
    country_code: string;
}

interface ICompanyValues {
    companyname_1: string;
    companyname_2: string;
    nature_of_business: string;
    office_address: string;
    office_country: string;
}