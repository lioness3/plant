// This function stores our state.

export const storeState = () => {
  let oldState = {};
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(oldState);
    oldState = {...newState};
    return newState;
  }
}

export const stateChanger = storeState();

// This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.

export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
}

// We create two functions using our function factory. We could easily create many more.
// 
// const feed = changeState("soil");
// const blueFood = changeState("soil")(5);
