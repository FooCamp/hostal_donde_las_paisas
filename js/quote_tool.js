// Qouting tool logic should be placed here.

// Remember to import consts.js if you will use this file 

/* calculateCost calculates the value of the package that the user prefers 
 * by giving a value of each one of the options selected by the user
 * 
 * The expected objet structure is :
 * {
 *  numberOfPeople: integer,
 *  numberOfNigth: integer,
 *  trasnport: object, 
 *  tour: object,
 *  feeding: object
 *  hike: object,
 * } 
 * 
 * trasnport: {
 *  medNec: boolean,
 *  necCap: boolean,
 *  capNec: boolean,
 *  necMed: boolean,
 * }
 * feeding{
 *   breakfast: boolean;
 *   dinner: boolean;
 * }
 * tour: {
 *  aguacatePlayasoledad: boolean,
 *  sapzurroLamiel: boolean,
 * }
 * hike: {
 *  elCieloEltrebol: boolean,
 *  elParaiso: boolean,
 *  laCoquerita: object,
 * }
 * laCoquerita: {
 *  hike: boolean,
 *  guide: boolean,
 * }
 */
function calculateCost(form){
    let total = 0;
    // PeopleAndNigth It contains the number of people multiplied the number of 
    // nights and then multiply the result by the heat of each night.
    let peopleAndNigth;
    
    peopleAndNigth =  (form.numberOfPeople * form.numberOfNigth); 
    total += (PRICENIGTH* peopleAndNigth );
    
    total += form.transport.medNec ? (BUSTRANS * form.numberOfPeople) : 0;
    total += form.transport.necCap ? (BOATTRANS * form.numberOfPeople) : 0;
    total += form.transport.capNec ? (BOATTRANS * form.numberOfPeople) : 0;
    total += form.transport.necMed ? (BUSTRANS * form.numberOfPeople) : 0;
    
    total += form.feeding.breakFast ? (BREAKFAST * peopleAndNigth) : 0;
    total += form.feeding.dinner ? (DINNER * peopleAndNigth) : 0;

    total += form.tour.aguacatePlayasoledad ? (TOURAPS * form.numberOfPeople) : 0;
    total += form.tour.sapzurroLamiel ? (TOURSLM * form.numberOfPeople) : 0;
    
    total += form.hike.elCieloEltrebol ? (HIKEECET * form.numberOfPeople) : 0;
    total += form.hike.elParaiso ? (HIKEP * form.numberOfPeople) : 0;
    if (from.hike.laCoquerita.hike){
      total += HIKECO * form.numberOfPeople;
      if (form.hike.laCoquerita.guide){
          total +=  HIKEGUI * form.numberOfPeople;
      }
    }
    total += (INSURANCE * peopleAndNigth);
    return total;
}

/*
 * This is a validation of labels; if in the inputs there are one or more characters,
 * the label should stay in the position assigned by the class "fix-label".
 */
let inputs = document.getElementsByClassName("form__input");
const fixLabel = inputs => {
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("keyup", function() {
      if (this.value.length >= 1) {
        this.nextElementSibling.classList.add("fix-label");
      } else {
        this.nextElementSibling.classList.remove("fix-label");
      }
    });
  }
};
fixLabel(inputs);

/* call the elements of from */
function sumitData (){
  let form = {};
  form.transport = {};
  form.feeding = {};
  form.tour = {};
  form.hike = {};

  form.numberOfPeople = document.getElementById('txtNumPeople').value;
  form.numberOfPeople = document.getElementById('txtNumNigth').value;
  
  form.transport.medNec = document.getElementById('chcMedNec').cheked;
  form.transport.necCap = document.getElementById('chcNecCap').cheked;
  form.transport.capNec = document.getElementById('chcCapNec').cheked;
  form.transport.necMed = document.getElementById('chcNecMed').cheked;

  form.feeding.breakFast = document.getElementById('chcLunch').cheked;
  form.feeding.dinner = document.getElementById('chcDinner').cheked;

  // Sends the collected data to the calculateCost funtion
  let finalPrice = calculateCost (form);
  // Print the information whit the total cost
  document.getElementById('txtResult').innerHTML = finalPrice; 
}