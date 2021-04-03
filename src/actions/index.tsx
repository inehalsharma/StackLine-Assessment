import * as actionTypes from '../types/actionTypes';

export function getSales(sales: ISales) {
    const action: SalesAction = {
        type: actionTypes.SALES,
        sales,
    }
    return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: SalesAction) {
    return (dispatch: DispatchType) => {
        setTimeout(() => {
            dispatch(action)
        }, 1)
    }
}