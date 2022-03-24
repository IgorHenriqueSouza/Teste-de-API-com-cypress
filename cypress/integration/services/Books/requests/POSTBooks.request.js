/// <reference types="cypress" />
const payloadAddBook = require('../payloads/add-book.json')


function addBook() {
    return cy.request({
        method:'POST',
        url:'v1/Books',
        //failOnStatusCode serve para que se o status code vir diferente de 200 o cypress não quebre
        failOnStatusCode:false,
        //Body = Instruções para a minha API
        body: payloadAddBook 
    })
}

export {addBook}