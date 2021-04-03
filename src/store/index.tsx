import { createStore, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";

import reducer from '../reducers/index';


const store: Store<SalesState, SalesAction> & {
    dispatch: DispatchType
  } = createStore(reducer, applyMiddleware(thunk));


export default store;