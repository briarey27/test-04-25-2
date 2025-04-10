import { Route, Routes } from "react-router-dom";
import { memo, Suspense } from "react";
import { routerConfig } from "shared/config/routerConfig.tsx";

const AppRouter = () => {
    return (
        <Routes>
            {routerConfig.map(({ path, element }) => (
                <Route
                    key={path}
                    path={path}
                    element={
                        <Suspense>
                            <div className="page-wrapper">{element}</div>
                        </Suspense>
                    }
                />
            ))}
        </Routes>
    );
};

export default memo(AppRouter);
