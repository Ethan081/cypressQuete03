describe('Request API tests', () => {

	let product = require('../fixtures/tastDiveData')

	it('Teste musique', () => {
		cy.product(product[0].q, product[0].type, product[0].info, product[0].limit)
	})

	it('Teste film', () => {
		cy.product(product[1].q, product[1].type, product[1].info, product[1].limit)
	})

})