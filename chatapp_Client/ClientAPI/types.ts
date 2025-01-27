
export type User = {
    id: string;
    userName: string;
    sessionID: string;
    callStatus?: boolean;// Can this person be contacted via Call
}

export interface postRequestResponse{
    sucessful: boolean;
    message?: string;
}

export type createUserRequestParams =   {
    username: string;
    email: string;
    password: string;
    yearOfBirth: string;
    number: string;
}

