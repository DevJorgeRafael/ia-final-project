import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
    formData: Record<string, any>;
    loading: boolean;
    error: string | null;
}

const initialState: FormState = {
    formData: {},
    loading: false,
    error: null,
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        submitFormStart(state) {
            state.loading = true;
            state.error = null;
        },
        submitFormSuccess(state, action: PayloadAction<Record<string, any>>) {
            state.loading = false;
            state.formData = action.payload;
        },
        submitFormFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
        setFormData(state, action: PayloadAction<Record<string, any>>) {
            state.formData = action.payload;
        },
    },
});

export const { submitFormStart, submitFormSuccess, submitFormFailure, setFormData } = formSlice.actions;

export default formSlice.reducer;
export type { FormState }; // Exportamos FormState para su uso en el store
