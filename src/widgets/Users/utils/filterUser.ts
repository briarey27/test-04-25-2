import { IUser } from "entities/user/model/types/types.ts";

export const filterUsersByName = (str: string, users: IUser[]): IUser[] => {
    return users.filter((user) =>
        user.name.toLowerCase().includes(str.toLowerCase()),
    );
};

export const filterUserByCompany = (str: string, users: IUser[]): IUser[] => {
    return users.filter((user) =>
        user.company.name.toLowerCase().includes(str.toLowerCase()),
    );
};
