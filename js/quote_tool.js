/*
 * This is a validation of labels; if in the inputs there are one or more characters,
 * the label should stay in the position assigned by the class "fix-label".
 */
let inputs = document.getElementsByClassName('form__input');
const fixLabel = (inputs) => {
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('keyup', function() {
            if (this.value.length >= 1) {
                this.nextElementSibling.classList.add('fix-label');
            } else {
                this.nextElementSibling.classList.remove('fix-label');
            }
        });
    }
}
fixLabel(inputs);