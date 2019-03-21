// Qouting tool logic should be placed here.
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