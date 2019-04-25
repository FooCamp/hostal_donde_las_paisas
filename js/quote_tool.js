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
function sumbitData (){
  let form = {};
  form.transport = {};
  form.feeding = {};
  form.tour = {};
  form.hike = {};
  form.laCoquerita = {};

  form.numberOfPeople = document.getElementById('txtNumPeople').value;
  form.numberOfNigth = document.getElementById('txtNumNigth').value;
  
  form.transport.medNec = document.getElementById('chcMedNec').cheked;
  form.transport.necCap = document.getElementById('chcNecCap').cheked;
  form.transport.capNec = document.getElementById('chcCapNec').cheked;
  form.transport.necMed = document.getElementById('chcNecMed').cheked;

  form.feeding.breakFast = document.getElementById('chcBreackfast').cheked;
  form.feeding.dinner = document.getElementById('chcDinner').cheked;

  form.tour.sapzurroLamiel = document.getElementById('chcTourSapLamiel').cheked;
  form.tour.aguacatePlayasoledad = document.getElementById('chcTourAguPlaSol').cheked;

  form.hike.elCieloEltrebol = document.getElementById('chcHikeElCieEltre').cheked;
  form.hike.elParaiso = document.getElementById('chcHikeElParaiso').cheked;
  form.laCoquerita.hike = document.getElementById('chcHikeLaCoquerita').cheked;
  form.laCoquerita.guide = document.getElementById('chcGuide').cheked;

  //calculate error
  var errorList = validateData(form);
  // Sends the collected data to the calculateCost funtion
  let finalPrice = calculateCost (form);
  // Print the information whit the total cost
  document.getElementById('txtResult').innerHTML = finalPrice; 
  if (errorList) {
    document.getElementById('txtResult').appendChild(errorList);
  }
}

function validateData(form){
  
  var errors =[];
  if (numberOfNigth<getTrues(form.hike)){
    errors.push('No te alcansan los dias para las caminatas, cada caminata toma un dia.');
  }
  if(numberOfNigth<getTrues(form.tour)){
    errors.push('el numero seleccionado de dias es poco para los tours, cada tours toma un dia.');
  }
  if (errors.length > 0 ) {
    
  

  var errorsContainer = [];
  var divErrors = document.createElement("div");
  divErrors.classList.add("lista-de-errores");
  var ulErrors = document.createElement("ul");
  for (const error of errors) {
    var liErrors =document.createElement('li');
    var textLi = document.createTextNode(errors);
    liErrors.appendChild(textLi);
    ulErrors.appendChild(liErrors);
    
  }

  divErrors.appendChild(ulErrors);
} else {
  divErrors = false;
}
  return divErrors;
}

get trues (list){
  const listValues = Object.value(list);
  let count = 0;
  for (const item of listValues){
    if (typeof(item) == 'object'){
      item = item.hike;
      item = item.tour;
    }
    if (item = true){
      count += 1;
    }
  }
  return count
}










//when you give the button to quote calls the function to fill the data
var btncalculate = document.getElementById('btnCalculate');
btncalculate.addEventListener('click', sumbitData);