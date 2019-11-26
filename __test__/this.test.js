import {storeState, stateChanger, changeState} from './../src/business.js';

describe('changePlantState', () => {

let plant = { soil: 0, light: 0, water: 0 }

  // beforeEach(() => {
  //
  // });

  test('Should increase soil by 5', () => {
const blueFood = changeState("soil")(5);

    expect(stateChanger(blueFood)).toEqual({"soil": 5});
  });
  test('Should increase water by 10', () => {

});
