import { useFetchUserQuery } from "entities/user/model/fetchUserData/fetchUserData.ts";
import { User } from "./User.tsx";
import { ErrorPage } from "shared/ui/ErrorPage";
import { Loading } from "shared/ui/Loading";

export const Connected = ({ userId }: { userId: string }) => {
    const { data, isError, isLoading } = useFetchUserQuery(userId);

    return (
        <div>
            {isLoading && <Loading />}
            {isError && <ErrorPage text={"User not found"} />}
            {data && <User user={data} />}
        </div>
    );
};
