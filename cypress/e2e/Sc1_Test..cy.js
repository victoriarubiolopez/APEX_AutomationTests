import { playdata } from "./AutoTest/Scenario1/Data_Elements_Methods/playstation.data"
import { Playmethods } from "./AutoTest/Scenario1/Data_Elements_Methods/playstation.methods"

describe ('Search for Playstation 5', () =>{
    it ('passes', () => {
        cy.wait(10000)
        cy.visit(playdata.url) 
        Playmethods.InsertKeysearchWord(playdata.busca)
        Playmethods.ClickOnSearchutton()
            //valide results, consoles and games
        cy.get('.a-section div .s-no-outline .a-size-medium-plus ').contains('Resultados')
        cy.get('.a-section div .a-link-normal .a-size-base').contains('Consolas de PlayStation 4')
        cy.get('.a-section div .a-link-normal .a-size-base').contains('Juegos de PlayStation 5')
        // select an item
        Playmethods.ClickonItemeSelection(playdata.SelectedItem)
        cy.get('#titleSection').contains('PlayStation®5 (Modelo Slim) - Pack con 2 Juegos - Digital').should('be.visible')
        //valida price
        cy.get('#corePrice_feature_div').contains('$9,189.00')
    }
)
})
