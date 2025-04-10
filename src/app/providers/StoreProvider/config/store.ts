import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userAPI } from "entities/user/model/fetchUserData/fetchUserData.ts";

const rootReducer = combineReducers({
    [userAPI.reducerPath]: userAPI.reducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(userAPI.middleware),
    });
};

export const store = setupStore();
