import * as Actions from '../actions';

const initialState = {
    recordsTotal: 1047,
    page: 0,
    pagesTotal: 100,
    data: [],
    exeTime: '',
    isLoading: false,
    isLoaded: false
};

const stationbeansReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.START_GET_STATIONBEANS:
        {
            return {
                ...state,
                isLoading: true,
                isLoaded: false
            };
        }
        case Actions.GET_STATIONBEANS:
        {
            return {
                ...state,
                data            : action.payload.stationBeanList,
                recordsTotal    : action.payload.stationBeanList.length,
                exeTime         : action.payload.executionTime,
                isLoading       : false,
                isLoaded        : true
            };
        }
        default:
        {
            return state;
        }
    }
};

export default stationbeansReducer;