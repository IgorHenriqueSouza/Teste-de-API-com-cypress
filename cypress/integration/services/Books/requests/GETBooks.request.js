//verbo/metodo - endpoint . motivos (request) . extensão

/// <reference types="cypress" />

function allBooks() {
    //cy.request - client http
    return cy.request({
        method: 'GET', 
        url: 'v1/Books',
        //failOnStatusCode serve para que se o status code vir diferente de 200 o cypress não quebre
        failOnStatusCode:false
    })
}

export{ allBooks };