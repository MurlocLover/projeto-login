const username = document.getElementById('username')
const password = document.getElementById('password')
const check = document.getElementById('check')
const spinner = document.getElementById('spinner')
const button = document.getElementById('connect')

var username_valid = false
var password_valid = false

username.oninput = fuction ();{
    if (this.value.length > 8) {
        username_valid = true
    }   else {
        username_valid = false
    }
    form_valid(username_valid, password_valid)
}

function form_valid(username_valid, password_valid) {
    if (username_valid && password_valid) {
        spinner.style.display = 'none'
        check.style.display = 'block'
        button.classList.add('valid')
        check.classList.add('up')
    }   else {
        spinner.style.display = 'none'
        check.style.display = 'block'
        button.classList.remove('valid')
        check.classList.remove('up')
    }
}