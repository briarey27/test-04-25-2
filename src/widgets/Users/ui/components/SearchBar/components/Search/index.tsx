import { Input } from "shared/ui/Input";
import { useEffect, useState } from "react";
import { IUser } from "entities/user/model/types/types.ts";
import { filterUsersByName } from "../../../../../utils/filterUser.ts";
import { useDebounce } from "shared/hooks/useDebounce.ts";
import FoundedList from "./components/FoundedList.tsx";
import styles from "./Search.module.scss";

interface IProps {
    users: IUser[];
}

export const Search = ({ users }: IProps) => {
    const [searchValue, setSearchValue] = useState("");
    const [foundUsers, setFoundUsers] = useState<IUser[]>([]);

    const handleClear = () => {
        setFoundUsers([]);
        setSearchValue("");
    };

    const debouncedSearchValue = useDebounce(searchValue, 100);

    useEffect(() => {
        if (debouncedSearchValue) {
            setFoundUsers(filterUsersByName(debouncedSearchValue, users));
        } else {
            setFoundUsers([]);
        }
    }, [debouncedSearchValue, users]);

    return (
        <div className={styles.search_wrapper}>
            <Input
                label={"Search by Name"}
                onClear={handleClear}
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
            />
            {Boolean(foundUsers.length) && (
                <FoundedList users={foundUsers} onClose={handleClear} />
            )}
        </div>
    );
};
