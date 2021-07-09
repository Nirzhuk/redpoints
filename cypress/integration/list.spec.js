/// <reference types="cypress" />

describe('example to-do app', () => {
    beforeEach(() => {
        cy.visit('localhost:3000')
    })

    it('List will have 20 elements and first should be named Luca', () => {

        cy.get('#CardGrid').children().get('article').should('have.length', 20)

        cy.get('#CardGrid').children().get('article').first().should('have.text', 'Luca')
    })
    it('Write on search element with 2 elements', () => {

        cy.get('input').type(`F9`)

        cy.get('#CardGrid').children().get('article').should('have.length', 2)

        cy.get('#CardGrid').children().get('article').first().should('have.text', 'F9')
    })
    it('Write on search results 0 items', () => {

        cy.get('input').type(`adsasdsads`)

        cy.get('#CardGrid').children().get('article').should('have.length', 0)

    })
    it('Click on Luca and open Modal', () => {
        cy.get('#CardGrid').children().get('article').first().click()
        cy.get('#modal').contains('Luca')
    })
    it('Click on Luca and open Modal and Close it', () => {
        cy.get('#CardGrid').children().get('article').first().click()
        cy.get('#modal').get('#modal>div>div>svg').click()
    })

})
