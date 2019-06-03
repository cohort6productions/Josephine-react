export interface IFormValues {
    personal: IPersonalValues;
    company: ICompanyValues;
    shares: IShareValues;
    shareholders: any[];
    director:any[];
    company_secretary: ICompanySecretary;
    others: IOtherValues;
    comments: string;
    terms: boolean;
}

interface IPersonalValues {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    country_code: string;
}

interface ICompanyValues {
    companyname_1: string;
    companyname_2: string;
    nature_of_business: string;
    address: string;
    country: string;
}

interface IShareValues {
    class: string;
    currency: string;
    number: number;
    value: number;
}

export interface IPersonalDetails {
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
    article_of_associate: IFileObj,
    address_proof: IFileObj,
    authorized_person: string,
    companyname: string,
    business_license: IFileObj,
    identity: IFileObj,
    category: string,
}
interface IFileObj {
    name: string; 
    url: string; 
    file: string;
    source: string;
}

interface ICompanySecretary {
    name: string;
    email: string;
    license_no: string;
    address: string;
    country: string;
}

interface IOtherValues {
    fund: string;
    optional_fund: string;
    criminal_record: string;
    business_relationship: string;
}