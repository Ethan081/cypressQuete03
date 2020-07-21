// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


Cypress.Commands.add("product", (q, type, info, limit) => { 
    cy.request({
        url: 'https://tastedive.com/api/similar',
        methode: 'GET',
        qs: {
            q: q,
            type: type,
            limit: limit,
            info: info,
            k: Cypress.env('API_KEY')
        }
    }).then(response => {
        cy.log(JSON.stringify(response.body))
        expect(response).to.be.ok
        expect(response.body.Similar.Results).lengthOf(limit)
        expect(response.body.Similar.Info[0].Type).eql(type)
        //expect(response.body.Similar.Info[0].wTeaser).eql('true')
    })    
 })