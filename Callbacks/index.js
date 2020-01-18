const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const people1 = `${API_URL}${PEOPLE_URL.replace(':id', 2)}`
const options = { crossDomain: true }
const onResponce = function(persona) {
    console.log(`${persona.name}`)
}

function getPerson(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, options, onResponce)
}
for (var i = 1; i < 10; i++) {
    getPerson(i)
}