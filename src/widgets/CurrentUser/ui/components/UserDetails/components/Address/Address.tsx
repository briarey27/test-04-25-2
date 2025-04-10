import styles from "../Details.module.scss";
import { IUser } from "entities/user/model/types/types.ts";

interface IProps {
    address: IUser["address"];
}

const Address = ({ address }: IProps) => {
    const { zipcode, city, street } = address;

    return (
        <div className={styles.paper}>
            <div className={styles.header}>Address</div>
            <div className={styles.info_block}>
                <div>
                    <span className={styles.title}>City: </span>
                    {city}
                </div>
                <div>
                    <span className={styles.title}>Street: </span>
                    {street}
                </div>
                <div>
                    <span className={styles.title}>Zipcode: </span>
                    {zipcode}
                </div>
            </div>
        </div>
    );
};

export default Address;
