import { configureStore } from '@reduxjs/toolkit';
import formReducer, { FormState } from './reducers/formReducer';

const store = configureStore({
    reducer: {
        form: formReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: true,
        }),
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = {
    form: FormState;
};
export type AppDispatch = typeof store.dispatch;

export default store;
