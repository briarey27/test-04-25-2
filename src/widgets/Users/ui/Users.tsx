import styles from "./Users.module.scss";
import { useEffect, useState } from "react";
import { IUser } from "entities/user/model/types/types.ts";
import { UsersList } from "./components/UsersList/UsersList.tsx";
import SearchBar from "./components/SearchBar/SearchBar.tsx";
import { filterUserByCompany } from "../utils/filterUser.ts";
import { useDebounce } from "shared/hooks/useDebounce.ts";

export const Users = ({ users }: { users: IUser[] }) => {
    const [presentUsers, setPresentsUsers] = useState<IUser[]>(users);
    const [filterValue, setFilterValue] = useState<string>("");

    const debouncedFilterValue = useDebounce(filterValue, 100);

    useEffect(() => {
        if (debouncedFilterValue) {
            setPresentsUsers(filterUserByCompany(debouncedFilterValue, users));
        } else {
            setPresentsUsers(users);
        }
    }, [debouncedFilterValue, users]);

    return (
        <div className={styles.users_wrapper}>
            <SearchBar
                onChangeFilterValue={setFilterValue}
                filterValue={filterValue}
                users={users}
            />
            {presentUsers && <UsersList users={presentUsers} />}
        </div>
    );
};
