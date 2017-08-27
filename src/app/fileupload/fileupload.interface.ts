export interface Customer {
    name: string;
    Files : Files[];
}

export interface Files {
    name: string;
    postcode: string;
}