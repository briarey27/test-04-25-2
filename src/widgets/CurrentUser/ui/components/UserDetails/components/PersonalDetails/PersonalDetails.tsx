import styles from "../Details.module.scss";

interface IProps {
    username: string;
    email: string;
    phone: string;
    website: string;
}

const PersonalDetails = ({ username, email, phone, website }: IProps) => {
    return (
        <div className={styles.paper}>
            <div className={styles.header}>Personal Data</div>
            <div className={styles.info_block}>
                <div>
                    <span className={styles.title}>Nick name: </span>
                    {username}
                </div>
                <div>
                    <span className={styles.title}>Phone: </span>
                    {phone}
                </div>
                <div>
                    <span className={styles.title}>Email: </span>
                    {email}
                </div>
                <div>
                    <span className={styles.title}>Website: </span>
                    {website}
                </div>
            </div>
        </div>
    );
};

export default PersonalDetails;
