/* /// <reference types="cypress" />

function deleteBook(idBook) {
    return cy.request({
        method:'DELETE',
        url:`Books/${idBook}`,
        //failOnStatusCode serve para que se o status code vir diferente de 200 o cypress não quebre
        failOnStatusCode:false
    })
}

export { deleteBook } */

/// <reference types="cypress" />

function deleteBook(idBook) {
    return cy.request({
      method: 'DELETE',
      url: `v1/Books/1 ${idBook}`,
      failOnStatusCode: false
    })
  }
  
  export { deleteBook };