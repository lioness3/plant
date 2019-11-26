import {storeState, stateChanger, changeState} from './../src/business.js';

describe('changePlantState', () => {

  let plant = { soil: 0, light: 0, water: 0 }

  beforeEach(() => {
    const feed = changeState("soil");
    const giveLight = changeState("light");
  });

  test('Should increase soil by 5', () => {
  let blueFood = changeState("soil")(5);

    expect(stateChanger(blueFood)).toEqual({"soil": 5});
  });
  test('Should increase water by 10', () => {
    expect(changeState("water")(10)(plant)).toEqual({"light": 0,"soil":0, "water": 10});

  });
  test('Should increase water from 10 to 20', () => {
    let plant = { soil: 0, light: 0, water: 10 };
    // let waterInc = changeState("water")(10);
    const hydrate = changeState("water");
    expect(hydrate(10)(plant)).toEqual({"light": 0,"soil":0, "water": 20});
});
});
