import { RouteProps } from "react-router-dom";
import { MainPageAsync } from "pages/MainPage/MainPage.async.tsx";
import { UserPageAsync } from "pages/UserPage/UserPage.async.tsx";
import NotFoundPage from "pages/NotFoundPage/NotFoundPage.tsx";

export enum AppRoutes {
    MAIN = "main",
    USER = "user",
    NOT_FOUND = "not_found",
}

export const RouterPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.USER]: "/user/:userId",
    [AppRoutes.NOT_FOUND]: "*",
};

export const routerConfig: RouteProps[] = [
    {
        path: RouterPath.main,
        element: <MainPageAsync />,
    },
    {
        path: RouterPath.user,
        element: <UserPageAsync />,
    },
    {
        path: RouterPath.not_found,
        element: <NotFoundPage />,
    },
];
