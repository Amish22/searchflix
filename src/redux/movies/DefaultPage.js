import {
  Types
 } from './MovieTypes'

const initialState = {
  searchType:null,
  year:null,
  title:"Avengers"
};


const DefaultPage = (state = initialState, action) => {
  switch (action.type) {
  
      case Types.STORE_DATA:
      return {
        ...state,
      [action.payload.varName]:    action.payload.data,
      };

    
    default:
      return state;
  }
};

export default DefaultPage;
