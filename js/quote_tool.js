// Qouting tool logic should be placed here.
const PRICENIGTH = 55000;
const BUSTRANS = 75000;
const BOATTRANS = 75000;
// Tour aguacate, playa soledad
const TOURAPS = 65000;
// Tour sazurro, la miel
const TOURSLM = 60000;
// Hike el cielo, el trebol
const HIKEECET = 40000;
// Hike el paraiso
const HIKEP = 30000;
//Hike la coquerita
const HIKECO = 5000;
// guide hike la coquerita
const HIKEGUI = 10000;
const INSURANCE = 3500;

function quote(){
    let total = 0;
    let peopleAndNigth;
    if (form.numberOfPeople > 0){
        peopleAndNigth =  (form.numberOfPeople * form.numberOfNigth);
    }
    if (form.numberOfNigth > 0){
        total = total + (PRICENIGTH* aux );
    }
    if (form.transport.medNec){
        total = total + (BUSTRANS * form.numberOfPeople);
    }
    if (form.transport.necCap){
        total = total + (BOATTRANS * form.numberOfPeople);
    }
    if (form.target.capNec){
        total = total + (BOATTRANS * form.numberOfPeople);
    }
    if (form.target.necMed){
        totla = total + (BUSTRANS * form.numberOfPeople);
    }
    if (form.tour.aguacatePlayasoledad){
        total = total + (TOURAPS * form.numberOfPeople);
    }
    if (form.hike.sapzurroLamiel){
        total = total + (TOURSLM * form.numberOfPeople);
    }
    if (form.hike.elCieloEltrebol){
        total = total + (HIKEECET * form.numberOfPeople);
    }
    if (form.hike.elParaiso){
        total = total + (HIKEP * form.numberOfPeople);
    }
    if (form.hike.laCoquerita.hike && form.hike.laCoquerita.guide){
        total = total + ((HIKECO + HIKEGUI) * form.numberOfPeople);
    }
    else{
        total = total + (HIKECO);
    }
    total = total + (INSURANCE * peopleAndNigth);
