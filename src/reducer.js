export const initialState = {
  cart: [],
};
//Selector

export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case "EMPTY_CART":
      return { ...state, cart: [] };

    case "REMOVE_FROM_CART":
      let newCart = [...state.cart];
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );

      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product(id :${action.id}) as it is not in the cart`
        );
      }
      return {
        ...state,
        cart: newCart,
      };
      break;
    case "SET_USER":
      return { ...state, user: action.user };
    default:
      return state;
  }
};
export default reducer;
