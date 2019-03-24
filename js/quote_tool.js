//  this is a validation of labels; if in the inputs there are one or more characters,
// the label should stay in the position assigned by the class "fix_tex".
const inputs = document.getElementsByClassName('input_form');
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function() {
        if (this.value.length >= 1) {
            this.nextElementSibling.classList.add('fix_text');
        } else {
            this.nextElementSibling.classList.remove('fix_text');
        }
    });
}