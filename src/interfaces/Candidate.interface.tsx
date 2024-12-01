// DONE: Create an interface for the Candidate objects returned by the API
export interface Candidate {
    name: string;
    username: string;
    id: number; 
    login: string;
    html_url: string;
    avatar_url: string;
    location: string;
    email: string;
    company: string;
};

//lowercase is for primitive types in TS