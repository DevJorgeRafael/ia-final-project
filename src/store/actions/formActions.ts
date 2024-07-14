import { AppDispatch } from '../index';
import axios from 'axios';
import { submitFormStart, submitFormSuccess, submitFormFailure } from '../reducers/formReducer';

export const submitForm = (formData: Record<string, any>) => async (dispatch: AppDispatch) => {
    dispatch(submitFormStart());
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}`, formData);
        dispatch(submitFormSuccess(response.data));
    } catch (error: any) {
        dispatch(submitFormFailure(error.message));
    }
};
