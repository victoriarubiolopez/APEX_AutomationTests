import { smartdata } from "./AutoTest/Scenario2/Data_Elements_Methods/smart.data"

describe('Scenario Smart Tv', () => {
    it ('passes', () => {
        cy.visit(playdata.url)
        cy.get('#twotabsearchtextbox').type('smart tv')
        cy.get(".nav-input#nav-search-submit-button").click()
        cy.get('#filter-p_36 .a-size-base').contains('Precio')
        cy.get('#p_n_size_browse-bin-title .a-size-base').contains('Marca')
        cy.get('.a-spacing-micro div .a-label').contains('Sony').click()
        cy.get('#p_n_size_browse-bin-title .a-size-base').contains('Tamaño de Pantalla')
        cy.get('.a-spacing-micro div .a-label').contains('48 a 55 in').click()
            }
)
}
)