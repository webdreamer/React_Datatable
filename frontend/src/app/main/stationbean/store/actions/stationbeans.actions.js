import axios from 'axios';

export const START_GET_STATIONBEANS = 'START GET STATIONBEANS';
export const GET_STATIONBEANS = 'GET STATIONBEANS';

export function startGetStationBeans()
{
    return (dispatch) =>
        dispatch({
            type    : START_GET_STATIONBEANS
        });
}

export function getStationBeans()
{
    const reqURL = process.env.REACT_APP_BACK_END
    const req = axios.get(reqURL)
    
    return (dispatch) =>
        req.then(response => {
            if (response.data) {
                dispatch({
                    type   : GET_STATIONBEANS,
                    payload: response.data
                });
            }
        })
        
}
