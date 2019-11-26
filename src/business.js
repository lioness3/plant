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
export const canGrow = (plants) => ({
  grow: (height) => {
    return `The ${plants.name} grew ${height} inches.`
  }
});

export const canChangeColor = (plants) => ({
  color: (color) => {
    return `The ${plants.name} changed to ${color}.`
  }
});
export const canShrink = (plants) => ({
  shrink: (amount) => {
    return `The ${plants.name} shrank by ${color} inches.`
  }
});

export const allChangingPlant = (name) => {
  let plants = {
    name
  }
  return { ...plants, ...canGrow(plants), ...canChangeColor(plants) };
};

export const shrinkingPlant = (name) => {
  let plants = {
    name
  }
  return { ...plants, ...canShrink(plants), ...canChangeColor(plants) };
};
// We create two functions using our function factory. We could easily create many more.
//
// const feed = changeState("soil");
// const blueFood = changeState("soil")(5);
