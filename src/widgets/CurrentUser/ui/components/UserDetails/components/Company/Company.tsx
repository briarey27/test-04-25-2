import styles from "../Details.module.scss";
import { IUser } from "entities/user/model/types/types.ts";

interface IProps {
    company: IUser["company"];
}

const Company = ({ company }: IProps) => {
    const { name, bs, catchPhrase } = company;

    return (
        <div className={styles.paper}>
            <div className={styles.header}>Company</div>
            <div className={styles.info_block}>
                <div>
                    <span className={styles.title}>Company: </span>
                    {name}
                </div>
                <div>
                    <span className={styles.title}>Role: </span>
                    {bs}
                </div>
                <div>
                    <span className={styles.title}>Catch Phrase: </span>
                    {catchPhrase}
                </div>
            </div>
        </div>
    );
};

export default Company;
