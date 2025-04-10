import { useFetchAllUsersQuery } from "entities/user/model/fetchUserData/fetchUserData.ts";
import { Users } from "./Users.tsx";
import { ErrorPage } from "shared/ui/ErrorPage";
import { Loading } from "shared/ui/Loading";

export const Connected = () => {
    const { data, isError, isLoading } = useFetchAllUsersQuery();

    return (
        <div>
            {isLoading && <Loading />}
            {isError && <ErrorPage text={"Refresh the page or try later"} />}
            {data && <Users users={data} />}
        </div>
    );
};
