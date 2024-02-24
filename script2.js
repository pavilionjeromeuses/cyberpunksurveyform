const name = document.getElementById('name')
const gender = document.getElementById('gender')
const skills = document.getElementsByClassName('skills')
const birthdate = document.getElementById('birthdate')
const email = document.getElementById('email')
const age = document.getElementById('age')
const phone = document.getElementById('phone')
const website = document.getElementById('website')
const avatar = document.getElementById('avatar')
const resume = document.getElementById('resume')
const skillLevel = document.getElementById('skillLevel')

const form = document.getElementById('form')

const errorElement = document.getElementById('error')

/* PREVENT THE PAGE FROM SUBMITTING */
form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push('Name is required')
    }

    if (password.value.length <= 6) {
        messages.push('Password must be longer than 6 characters')
    }

    if (password.value.length >= 20) {
        messages.push('Password must be less than characters')
    }

    if (password.value === 'password') {
        messages.push('Password cannot be Password')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})