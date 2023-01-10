const ageInput = document.getElementById('age')
const ageDisplay = document.getElementById('age-display')

ageInput.addEventListener('change', () => {
    ageDisplay.innerHTML = ageInput.value
})

const femaleInput = document.getElementById('female')
const maleInput = document.getElementById('male')

const nocInput = document.getElementById('noc')
const nocDisplay = document.getElementById('noc-display')

nocInput.addEventListener('change', () => {
    nocDisplay.innerHTML = nocInput.value
})

const submitInput = document.getElementById('submit')

submitInput.addEventListener('click', () => {
    alert('submit')
})