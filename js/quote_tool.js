/**
 * This code validate the labels; if in the inputs there are one or more characters,
 * the label should stay in the position assigned by the class "fix-label".
 */
let inputs = document.getElementsByClassName("form-field__input");
const fixLabel = inputs => {
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", function() {
      if (this.value.length >= 1) {
        this.nextElementSibling.classList.add("fix-label");
      } else {
        this.nextElementSibling.classList.remove("fix-label");
      }
    });
  }
};
fixLabel(inputs);
/**
 * This code validate the "input-name"; this validation is
 * done throught a regular expression that allow enter only letters and
 * letters whit special characters, besides it makes the field mandatory.
 */
const validationName = function() {
  if (!inputNameFormat.test(this.value)) {
    this.classList.add("error__style");
    nameError.textContent = "El nombre ingresado no es correcto";
    return false;
  } else if (this.value === "") {
    this.classList.add("error__style");
    nameError.textContent = "Todos los campos son obligatorios";
    return false;
  } else {
    this.classList.remove("error__style");
    nameError.textContent = "";
    return false;
  }
};
let inputNameFormat = /^([a-zA-Z áéíóúÁÉÍÓÚñÑ]{2,30})*$/;
let nameEntered = document.getElementById("input-name");
nameEntered.addEventListener("blur", validationName);
let nameError = document.getElementById("name-error");
/**
 * This code validate the "input-email"; this validation is
 * done throught a regular expression that allow enter only characters
 * corresponding to an email, besides it makes the field mandatory.
 */
const validationEmail = function() {
  if (this.value.length >= 1 && !inputEmailFormat.test(this.value)) {
    this.classList.add("error__style");
    emailError.textContent = "El correo electrónico ingresado no es correcto";
    return false;
  } else if (this.value === "") {
    this.classList.add("error__style");
    emailError.textContent = "Todos los campos son obligatorios";
    return false;
  } else {
    this.classList.remove("error__style");
    emailError.textContent = "";
    return false;
  }
};
let inputEmailFormat = /\w+@\w+\.+[a-z]/;
let emailEntered = document.getElementById("input-email");
let emailError = document.getElementById("email-error");
emailEntered.addEventListener("blur", validationEmail);
/**
 * This code validate the "input-Phone"; this validation is
 * done throught a regular expression that allow enter only numbers,
 * besides it makes the field mandatory.
 */
const validationPhone = function() {
  if (!inputPhoneFormat.test(this.value)) {
    this.classList.add("error__style");
    phoneError.textContent = "El teléfono ingresado no es correcto";
    return false;
  } else if (this.value === "") {
    this.classList.add("error__style");
    phoneError.textContent = "Todos los campos son obligatorios";
    return false;
  } else {
    this.classList.remove("error__style");
    phoneError.textContent = "";
    return false;
  }
};
let inputPhoneFormat = /^([0-9]{7,10})*$/;
let phoneEntered = document.getElementById("input-phone");
let phoneError = document.getElementById("phone-error");
phoneEntered.addEventListener("blur", validationPhone);
/**
 * This code validate the "input__persons-number"; this validation is
 * done throught a regular expression that allow enter only numbers,
 * besides it makes the field mandatory.
 */
const validationNumPerson = function() {
  if (!inputPersonsNumFormat.test(this.value)) {
    this.classList.add("error__style");
    personsNumberError.textContent = "El dato ingresado no es un número";
    return false;
  } else if (this.value === "") {
    this.classList.add("error__style");
    personsNumberError.textContent = "Todos los campos son obligatorios";
    return false;
  } else {
    this.classList.remove("error__style");
    personsNumberError.textContent = "";
    return false;
  }
};
let inputPersonsNumFormat = /^([0-9])*$/;
let personsNumEntered = document.getElementById("txtNumPeople");
let personsNumberError = document.getElementById("personsNumber-error");
personsNumEntered.addEventListener("blur", validationNumPerson);
/*
 * This code assign the calendar to "txtNumNigth" and gives it a date format.
 */
flatpickr("#txtNumNigth", {
  mode: "range",
  dateFormat: "F, d, Y ",
  onChange: function(selectedDates) {
    let totalDays = Math.round(
      (selectedDates[1] - selectedDates[0]) / (1000 * 60 * 60 * 24)
    );
    document.getElementById("numNigth").value = totalDays;
    activateButton();
  }
});
function activateButton() {
  if (document.getElementById("numNigth").value >= 1) {
    document.getElementById("btnCalculate").disabled = false;
  } else {
    document.getElementById("btnCalculate").disabled = true;
  }
}

/**
 * This code show or hide option "include guide for hike".
 */
document.getElementById("g1").style.display = "none";
let showGuideOption = document.getElementById("h1");
let guideOption = document.getElementById("g1");
const guideOptionValidation = showGuideOption => {
  if (guideOption.style.display === "block") {
    guideOption.style.display = "none";
  } else {
    guideOption.style.display = "block";
  }
};

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
 *  food: object
 *  hike: object,
 * }
 *
 * trasnport: {
 *  medNec: boolean,
 *  necCap: boolean,
 *  capNec: boolean,
 *  necMed: boolean,
 * }
 * food{
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
/**
 * PeopleAndNigth It contains the number of people multiplied the number of
 * nights and then multiply the result by the heat of each night.
 */
function calculateCost(form) {
  let total = 0;
  let peopleAndNigth;
  peopleAndNigth = form.numberOfPeople * form.numberOfNigth;
  total += PRICENIGTH * peopleAndNigth;

  total += form.transport.medNec ? BUSTRANS * form.numberOfPeople : 0;
  total += form.transport.necCap ? BOATTRANS * form.numberOfPeople : 0;
  total += form.transport.capNec ? BOATTRANS * form.numberOfPeople : 0;
  total += form.transport.necMed ? BUSTRANS * form.numberOfPeople : 0;

  total += form.food.breakFast ? BREAKFAST * peopleAndNigth : 0;
  total += form.food.dinner ? DINNER * peopleAndNigth : 0;

  total += form.tour.aguacatePlayasoledad ? TOURAPS * form.numberOfPeople : 0;
  total += form.tour.sapzurroLamiel ? TOURSLM * form.numberOfPeople : 0;

  total += form.hike.elCieloEltrebol ? HIKEECET * form.numberOfPeople : 0;
  total += form.hike.elParaiso ? HIKEP * form.numberOfPeople : 0;
  if (form.hike.laCoquerita.hike) {
    total += HIKECO * form.numberOfPeople;
    if (form.hike.laCoquerita.guide) {
      total += HIKEGUI * form.numberOfPeople;
    }
  }
  total += INSURANCE * peopleAndNigth;
  return total;
}

/* call the elements of from */
const submitData = () => {
  cleanErrors();
  let form = {};
  form.transport = {};
  form.food = {};
  form.tour = {};
  form.hike = {};
  form.hike.laCoquerita = {};

  form.numberOfPeople = document.getElementById("txtNumPeople").value;
  form.numberOfNigth = document.getElementById("numNigth").value;

  form.transport.medNec = document.getElementById("ts1").checked;
  form.transport.necCap = document.getElementById("ts2").checked;
  form.transport.capNec = document.getElementById("ts3").checked;
  form.transport.necMed = document.getElementById("ts4").checked;

  form.food.breakFast = document.getElementById("f1").checked;
  form.food.dinner = document.getElementById("f2").checked;

  form.tour.sapzurroLamiel = document.getElementById("t1").checked;
  form.tour.aguacatePlayasoledad = document.getElementById("t2").checked;

  form.hike.elCieloEltrebol = document.getElementById("h1").checked;
  form.hike.elParaiso = document.getElementById("h2").checked;
  form.hike.laCoquerita.hike = document.getElementById("h3").checked;

  form.hike.laCoquerita.guide = document.getElementById("gu1").checked;

  //calculate error
  let errorList = validateData(form);
  // Sends the collected data to the calculateCost funtion
  let finalPrice = calculateCost(form);
  // Print the information whit the total cost
  document.getElementById("txtResult").innerHTML = finalPrice;

  if (errorList) {
    document.getElementById("txtErrors").appendChild(errorList);
  }
};

// validate the opted data to verify the number of tours and nights.
const validateData = form => {
  var errors = [];
  if (form.numberOfNigth < getTrues(form.tour) + getTrues(form.hike)) {
    errors.push(
      "El número seleccionado de días es poco para la suma de tours y/o caminatas acumuladas, ten en cuenta que cada evento toma un día."
    );
  }

  if (errors.length > 0) {
    var errorsContainer = [];
    var divErrors = document.createElement("div");
    divErrors.classList.add("list-of-errors");
    var ulErrors = document.createElement("ul");
    for (const error of errors) {
      var liErrors = document.createElement("li");
      var textLi = document.createTextNode(error);
      liErrors.appendChild(textLi);
      ulErrors.appendChild(liErrors);
    }

    divErrors.appendChild(ulErrors);
  } else {
    divErrors = false;
  }
  return divErrors;
};

const getTrues = list => {
  const listValues = Object.values(list);
  let count = 0;
  for (let item of listValues) {
    if (typeof item == "object") {
      item = item.hike ? item.hike : item.tour;
    }
    if (item == true) {
      count += 1;
    }
  }
  return count;
};
const cleanErrors = () => {
  let errosDiv = document.getElementById("txtErrors");
  errosDiv.innerHTML = "";
};
//when you give the button to quote calls the function to fill the data
let btncalculate = document.getElementById("btnCalculate");
btncalculate.addEventListener("click", submitData);
