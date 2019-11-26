// UTILITIES
import $ from 'jquery';
import 'bootstrap';
import './css/bootstrap.min.css';
import './css/styles.css';

// MAIN LOGIC
import { storeState, stateChanger, changeState} from './business.js';



// USER INTERFACE
$(document).ready(function() {

// This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect.
  $('#feed').click(function() {
    const newState = stateChanger(blueFood);
    $('#soil-value').text(newState.soil);
  });
});
