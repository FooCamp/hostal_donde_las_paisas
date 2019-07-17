/**
 * This code validate the labels; if in the inputs there are one or more characters,
 * the label should stay in the position assigned by the class "fix-label".
 */
let inputs = document.getElementsByClassName("form__input");
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
let inputNameFormat = /^([a-zA-Z áéíóúÁÉÍÓÚñÑ]{2,30})*$/;
let nameEntered = document.getElementById("input-name");
let nameError = document.getElementById("name-error");
const validationName = nameEntered => {
  if (!inputNameFormat.test(nameEntered.value)) {
    nameEntered.classList.add("error__style");
    nameError.textContent = "El nombre ingresado no es correcto";
    return false;
  } else if (nameEntered.value === "") {
    nameEntered.classList.add("error__style");
    nameError.textContent = "Todos los campos son obligatorios";
    return false;
  } else {
    nameEntered.classList.remove("error__style");
    nameError.textContent = "";
    return false;
  }
};
/**
 * This code validate the "input-email"; this validation is
 * done throught a regular expression that allow enter only characters
 * corresponding to an email, besides it makes the field mandatory.
 */
let inputEmailFormat = /\w+@\w+\.+[a-z]/;
let emailEntered = document.getElementById("input-email");
let emailError = document.getElementById("email-error");
const validationEmail = emailEntered => {
  if (
    emailEntered.value.length >= 1 &&
    !inputEmailFormat.test(emailEntered.value)
  ) {
    emailEntered.classList.add("error__style");
    emailError.textContent = "El correo electrónico ingresado no es correcto";
    return false;
  } else if (emailEntered.value === "") {
    emailEntered.classList.add("error__style");
    emailError.textContent = "Todos los campos son obligatorios";
    return false;
  } else {
    emailEntered.classList.remove("error__style");
    emailError.textContent = "";
    return false;
  }
};
/**
 * This code validate the "input-Phone"; this validation is
 * done throught a regular expression that allow enter only numbers,
 * besides it makes the field mandatory.
 */
let inputPhoneFormat = /^([0-9]{7,10})*$/;
let phoneEntered = document.getElementById("input-phone");
let phoneError = document.getElementById("phone-error");
const validationPhone = phoneEntered => {
  if (!inputPhoneFormat.test(phoneEntered.value)) {
    phoneEntered.classList.add("error__style");
    phoneError.textContent = "El teléfono ingresado no es correcto";
    return false;
  } else if (phoneEntered.value === "") {
    phoneEntered.classList.add("error__style");
    phoneError.textContent = "Todos los campos son obligatorios";
    return false;
  } else {
    phoneEntered.classList.remove("error__style");
    phoneError.textContent = "";
    return false;
  }
};
/**
 * This code validate the "input__persons-number"; this validation is
 * done throught a regular expression that allow enter only numbers,
 * besides it makes the field mandatory.
 */
let inputPersonsNumFormat = /^([0-9])*$/;
let personsNumEntered = document.getElementById("txtNumPeople");
let personsNumberError = document.getElementById("personsNumber-error");
const validationNumPerson = personsNumEntered => {
  if (!inputPersonsNumFormat.test(personsNumEntered.value)) {
    personsNumEntered.classList.add("error__style");
    personsNumberError.textContent = "El dato ingresado no es un número";
    return false;
  } else if (personsNumEntered.value === "") {
    personsNumEntered.classList.add("error__style");
    personsNumberError.textContent = "Todos los campos son obligatorios";
    return false;
  } else {
    personsNumEntered.classList.remove("error__style");
    personsNumberError.textContent = "";
    return false;
  }
};
/*
 * This code assign the calendar to "txtNumNigth" and gives it a date format.
 */
flatpickr("#txtNumNigth", {
  mode: "range",
  dateFormat: "F, d, Y "
});
<<<<<<< HEAD
=======
//   minDate: "1920-01-01",
//   locale: {
//     firstDayOfWeek: 1,
//     weekdays: {
//       shorthand: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
//       longhand: [
//         "Domingo",
//         "Lunes",
//         "Martes",
//         "Miércoles",
//         "Jueves",
//         "Viernes",
//         "Sábado"
//       ]
//     },
//     months: {
//       shorthand: [
//         "Ene",
//         "Feb",
//         "Mar",
//         "Abr",
//         "May",
//         "Jun",
//         "Jul",
//         "Ago",
//         "Sep",
//         "Оct",
//         "Nov",
//         "Dic"
//       ],
//       longhand: [
//         "Enero",
//         "Febreo",
//         "Мarzo",
//         "Abril",
//         "Mayo",
//         "Junio",
//         "Julio",
//         "Agosto",
//         "Septiembre",
//         "Octubre",
//         "Noviembre",
//         "Diciembre"
//       ]
//     }
//   }
// });
>>>>>>> 55f33f1cc584e294eb20d686c0c67b97b62fa2c3
/**
 * This code show or hide option "include guide for hike".
 */
document.getElementById("chcGuide").style.display = "none";
let showGuideOption = document.getElementById("chcHikeLaCoquerita");
let guideOption = document.getElementById("chcGuide");
const guideOptionValidation = showGuideOption => {
  if (guideOption.style.display === "block") {
    guideOption.style.display = "none";
  } else {
    guideOption.style.display = "block";
  }
};

/* Qouting tool logic should be placed here.*/
/**
 * calculateCost calculates the value of the package that the user prefers
 * by giving a value of each one of the options selected by the user.
 */

/**
 The expected objet structure is:
{
   numberOfPeople: integer,
   numberOfNigth: integer,
   trasnport: object,
   tourOptions: object,
   hikeOptions: object,
  }

  trasnport: {
   medNec: boolean,
   necCap: boolean,
   capNec: boolean,
   necMed: boolean,
  }
  tourOptions: {
   aguacatePlayasoledad: boolean,
   sapzurroLamiel: boolean,
  }
  hikeOptions: {
   elCieloEltrebol: boolean,
   elParaiso: boolean,
   laCoquerita: object,
  }
  laCoquerita: {
   hike: boolean,
   guide: boolean,
  }
  */
/**
 * PeopleAndNigth It contains the number of people multiplied the number of
 * nights and then multiply the result by the heat of each night.
 */
function calculateCost(form) {
<<<<<<< HEAD
=======
  console.log("calclando");
>>>>>>> 55f33f1cc584e294eb20d686c0c67b97b62fa2c3
  let total = 0;
  let peopleAndNigth;
  peopleAndNigth = form.numberOfPeople * form.numberOfNigth;
  total += PRICENIGTH * peopleAndNigth;
<<<<<<< HEAD

=======

>>>>>>> 55f33f1cc584e294eb20d686c0c67b97b62fa2c3
  total += form.transport.medNec ? BUSTRANS * form.numberOfPeople : 0;
  total += form.transport.necCap ? BOATTRANS * form.numberOfPeople : 0;
  total += form.transport.capNec ? BOATTRANS * form.numberOfPeople : 0;
  total += form.transport.necMed ? BUSTRANS * form.numberOfPeople : 0;

  total += form.tour.aguacatePlayasoledad ? TOURAPS * form.numberOfPeople : 0;
  total += form.tour.sapzurroLamiel ? TOURSLM * form.numberOfPeople : 0;

  total += form.hike.elCieloEltrebol ? HIKEECET * form.numberOfPeople : 0;
  total += form.hike.elParaiso ? HIKEP * form.numberOfPeople : 0;
<<<<<<< HEAD
  if (from.hike.laCoquerita.hike) {
=======
  if (form.hike.laCoquerita.hike) {
>>>>>>> 55f33f1cc584e294eb20d686c0c67b97b62fa2c3
    total += HIKECO * form.numberOfPeople;
    if (form.hike.laCoquerita.guide) {
      total += HIKEGUI * form.numberOfPeople;
    }
  }
  total += INSURANCE * peopleAndNigth;
  return total;
}
<<<<<<< HEAD
=======

/* call the elements of from */
const submitData = () => {
  cleanErrors();
  let form = {};
  form.transport = {};
  form.feeding = {};
  form.tour = {};
  form.hike = {};
  form.hike.laCoquerita = {};

  form.numberOfPeople = document.getElementById('txtNumPeople').value;
  form.numberOfNigth = document.getElementById('txtNumNigth').value;

  form.transport.medNec = document.getElementById('ts1').checked;
  form.transport.necCap = document.getElementById('ts2').checked;
  form.transport.capNec = document.getElementById('ts3').checked;
  form.transport.necMed = document.getElementById('ts4').checked;

  form.feeding.breakFast = document.getElementById('f1').checked;
  form.feeding.dinner = document.getElementById('f2').checked;

  form.tour.sapzurroLamiel = document.getElementById('t1').checked;
  form.tour.aguacatePlayasoledad = document.getElementById('t2').checked;

  form.hike.elCieloEltrebol = document.getElementById('h1').checked;
  form.hike.elParaiso = document.getElementById('h2').checked;
  form.hike.laCoquerita.hike = document.getElementById('h3').checked;

  form.hike.laCoquerita.guide = document.getElementById('g1').checked;

  // form.numberOfPeople = 5;
  form.numberOfNigth = 1;

  /*form.transport.medNec = true;
  form.transport.necCap = true;
  form.transport.capNec = true;
  form.transport.necMed = true;

  form.feeding.breakFast = false;
  form.feeding.dinner = true;

  form.tour.sapzurroLamiel = true;
  form.tour.aguacatePlayasoledad = true;

  form.hike.elCieloEltrebol = true;
  form.hike.elParaiso = false;
  form.hike.laCoquerita.hike = true;
  form.hike.laCoquerita.guide = false;*/

  //calculate error
  var errorList = validateData(form);
  // Sends the collected data to the calculateCost funtion
  let finalPrice = calculateCost(form);
  // Print the information whit the total cost
  document.getElementById("txtResult").innerHTML = finalPrice;

  if (errorList) {
    document.getElementById("txtErrors").appendChild(errorList);
  }
}

// validate the opted data to verify the number of tours and nights.
const validateData = (form) => {
  var errors = [];
  if (form.numberOfNigth < (getTrues(form.tour) + getTrues(form.hike))) {
    errors.push(
      "el numero seleccionado de dias es poco para la suma de tours y o caminatas, cada evento toma un dia."
    );
    console.log("hay error");
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
}

const getTrues = (list) => {
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
}

const cleanErrors = () => {
  let errosDiv = document.getElementById('txtErrors');
  errosDiv.innerHTML = '';
}

//when you give the button to quote calls the function to fill the data
var btncalculate = document.getElementById("btnCalculate");
btncalculate.addEventListener("click", submitData);
>>>>>>> 55f33f1cc584e294eb20d686c0c67b97b62fa2c3
