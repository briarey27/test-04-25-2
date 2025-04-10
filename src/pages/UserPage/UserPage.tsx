import { useParams } from "react-router-dom";
import { User } from "widgets/CurrentUser/index.tsx";

const UserPage = () => {
    const { userId } = useParams();

    if (!userId) return;

    return <User userId={userId} />;
};

export default UserPage;
