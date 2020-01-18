const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const people1 = `${API_URL}${PEOPLE_URL.replace(':id', 2)}`
const options = { crossDomain: true }
const onResponce = function(persona) {
    console.log(`${persona.name}`)
}
$.get(people1, options, onResponce)