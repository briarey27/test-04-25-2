import styles from "./SearchBar.module.scss";
import { Filtering } from "./components/Filtering";
import { Search } from "./components/Search";
import { IUser } from "entities/user/model/types/types.ts";

interface IProps {
    onChangeFilterValue: (val: string) => void;
    filterValue: string;
    users: IUser[];
}

const SearchBar = ({ onChangeFilterValue, filterValue, users }: IProps) => {
    return (
        <div className={styles.search_bar_wrapper}>
            <Filtering
                onChangeFilterValue={onChangeFilterValue}
                filterValue={filterValue}
            />
            <Search users={users} />
        </div>
    );
};

export default SearchBar;
