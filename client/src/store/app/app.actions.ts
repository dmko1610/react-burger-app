import { createAction } from '../action-helpers';
import {create} from "domain";

export const CLEAR_INTERVAL = '[app] CLEAR_INTERVAL';
export const SET_DATA_FROM_DB = '[app] SET_DATA_FROM_DB';
export const ADD_DATA_TO_DB = '[app] ADD_DATA_TO_DB';
export const DELETE_DATA_FROM_DB = '[app] DELETE_DATA_FROM_DB';
export const UPDATE_DB_DATA = '[app] UPDATE_DB_DATA';

export const Actions = {
    clearInterval: () => createAction(CLEAR_INTERVAL),
    setDataFromDb: () => createAction(SET_DATA_FROM_DB),
    addDataToDb: () => createAction(ADD_DATA_TO_DB),
    deleteDataFromDb: () => createAction(DELETE_DATA_FROM_DB),
    updateDbData: () =>  createAction(UPDATE_DB_DATA)
}
