import { AppDispatch } from '../index';
import axios from 'axios';
import { submitFormStart, submitFormSuccess, submitFormFailure } from '../reducers/formReducer';

export const submitForm = (formData: Record<string, any>) => async (dispatch: AppDispatch) => {
    dispatch(submitFormStart());
    try {
        const response = await axios.post(`/api/spotify-ia`, formData);
        const popularity = response.data.popularity;
        console.log(popularity)
        dispatch(submitFormSuccess(popularity));
    } catch (error: any) {
        dispatch(submitFormFailure(error.message));
    }
};
