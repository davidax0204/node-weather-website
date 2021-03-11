// const { response } = require("express")

console.log('Client side javascript file is loaded!')
// const fetch = require('node-fetch')

// fetch('http://puzzle.mead.io/puzzle').then((response)=>
// {
//     response.json().then((data)=>
//     {
//         console.log(data)
//     })
// })

// fetch('http://localhost:3000/weather?address=boston').then((response)=>
// {
//     response.json().then((data)=>
//     {
//         if(data.error) {console.log(data.error)}
//         else {console.log(data.location, data.forecast)}
//     })
// })

const weatherForm = document.querySelector('form')
const serach = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')




weatherForm.addEventListener('submit', (e)=>
{
    e.preventDefault()

    messageOne.textContent ='Loading...'
    messageTwo.textContent =''

    const location = serach.value
    fetch('http://localhost:3000/weather?address='+location).then((response)=>
    {
        response.json().then((data)=>
        {
            if(data.error) {
                messageOne.textContent=data.error
                console.log(data.error)
            }
            else 
            {
                messageOne.textContent=data.location
                messageTwo.textContent=data.forecast
                console.log(data.location)
                console.log(data.forecast)
            }
        })
    })
})