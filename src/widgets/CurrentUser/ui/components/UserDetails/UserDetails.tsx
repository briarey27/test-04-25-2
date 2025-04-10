import styles from "./UserDetails.module.scss";
import { IUser } from "entities/user/model/types/types.ts";
import PersonalDetails from "./components/PersonalDetails/PersonalDetails.tsx";
import Address from "./components/Address/Address.tsx";
import Company from "./components/Company/Company.tsx";

interface IProps {
    user: IUser;
}

const UserDetails = ({ user }: IProps) => {
    const { address, company, phone, email, website, username } = user;

    return (
        <div className={styles.user_details_wrapper}>
            <PersonalDetails
                phone={phone}
                email={email}
                website={website}
                username={username}
            />
            <Address address={address} />
            <Company company={company} />
        </div>
    );
};

export default UserDetails;
