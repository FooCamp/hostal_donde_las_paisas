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
 *  hike: object,
 * }
 *
 * trasnport: {
 *  medNec: boolean,
 *  necCap: boolean,
 *  capNec: boolean,
 *  necMed: boolean,
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
