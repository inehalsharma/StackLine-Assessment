import * as actionTypes from '../types/actionTypes';
import data from '../util/json_data.json';

const initialState: SalesState = {
    sales: {
        sales: JSON.stringify(data[0].sales)
    }
};


const reducer = (
    state: SalesState = initialState,
    action: SalesAction
  ): SalesState => {
    switch (action.type) {
      case actionTypes.SALES:
    }
    return state;
  };
  
  export default reducer;
  