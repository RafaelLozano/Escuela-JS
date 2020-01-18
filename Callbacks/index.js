const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const people1 = `${API_URL}${PEOPLE_URL.replace(':id', 2)}`
const options = { crossDomain: true }
const onResponce = function(persona) {
    console.log(`${persona.name}`)
}

function getPerson(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, options, function(persona) {
        console.log(`${persona.name}`)
    })
    if (callback) {
        callback()
    }
}
//callback hell!!!!
getPerson(1, function() {
    getPerson(2, function() {
        getPerson(3)
    })
})