import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FormState {
    formData: Record<string, any>;
    loading: boolean;
    error: string | null;
    result: number | null;
}

const initialState: FormState = {
    formData: {},
    loading: false,
    error: null,
    result: null,
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setFormData(state, action: PayloadAction<Record<string, any>>) {
            state.formData = action.payload;
        },
        submitFormStart(state) {
            state.loading = true;
            state.error = null;
        },
        submitFormSuccess(state, action: PayloadAction<number>) {
            state.loading = false;
            state.result = action.payload;
        },
        submitFormFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { setFormData, submitFormStart, submitFormSuccess, submitFormFailure } = formSlice.actions;
export default formSlice.reducer;
