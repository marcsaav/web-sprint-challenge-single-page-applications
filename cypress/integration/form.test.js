describe('Can input data, and submit correctly', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    it('Can input text', () => {
        cy
         .get(`input[name=name]`)
         .type('Marcos')
        cy
         .get(`input[name=specialInstructions]`)
         .type(`BlahBlahBlah`)
    })

    it('Can check various toppings', () => {
        cy
         .get(`input[name=pepperoni]`)
         .click()
        cy
         .get(`input[name=garlic]`)
         .click()
        cy
         .get(`input[name=peppers]`)
         .click()
    })

    it('Can submit when filled out properly', () => {
        cy
         .get('button')
         .should('be.disabled')
        cy
         .get(`input[name=name]`)
         .type('Marcos')
        cy
         .get('select[name=size]')
         .select('Medium: 16"')
        cy
         .get('input[value=red]')
         .click()
        cy
         .get('button')
         .should('not.be.disabled')
         .click()
    })
})