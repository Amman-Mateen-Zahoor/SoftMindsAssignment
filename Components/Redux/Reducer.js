import {ADD_TO_CART,ADD_TO_CART_Remove} from './Constants';
initialState = [];

 const reducer = (state = initialState, action) => {
    // console.log('reducer action',action)
  switch (action.type) {
    case ADD_TO_CART:
        // console.log('okkkkkk')
      return [...state, action.data];

      case ADD_TO_CART_Remove:
        // console.log('okkkkkk')
    let result = state.filter(item=>{
        return item.name!=action.data
    }
    )
    return[...result]

    default:
      return state;
  }
};
export default reducer
