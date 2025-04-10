import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "app/providers/StoreProvider/config/store.ts";
import { ErrorBoundary } from "./ErrorBoundary";

const AppProviders = ({ children }: { children: ReactNode }) => (
    <BrowserRouter>
        <Provider store={store}>
            <ErrorBoundary>{children}</ErrorBoundary>
        </Provider>
    </BrowserRouter>
);

export default AppProviders;
