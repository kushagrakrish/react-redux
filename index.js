// Three Concepts of Redux
// Store
// Action
// Reducer
const redux = require("redux");

const createStore = redux.createStore;
const combineReducres = redux.combineReducers;

// Crating Action
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "ICE_CREAM";

function buyIcecream() {
  return {
    type: BUY_ICECREAM,
  };
}

function buyCake() {
  //This function is action creator
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

// Creating the reducer

// const initialState = {
//   numOfCakes: 10,
//   numOfIceCreams: 20,
// };
const initialCakeState = {
  numOfCakes: 10,
};
const initialIceCreamState = {
  numOfIceCreams: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};
const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducres({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
const store = createStore(rootReducer);
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updated State", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
unsubscribe();
