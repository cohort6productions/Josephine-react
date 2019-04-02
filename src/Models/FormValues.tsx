export interface IFormValues {
    personal: IPersonalValues;
    company: ICompanyValues;
    shares: IShareValues;
    shareholders: any[]
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

interface IShareValues {
    class: string;
    number: number;
    value: number;
}

export interface IShareholderDetails {
    firstname: string;
    lastname: string;
    email: string;
    occupation: string;
    phone: string;
    country: string;
    address:string;
    tax_number: string;
    tax_payable_country: string;
    share_composition: number;
}