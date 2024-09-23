import { commondata } from "./AutoTest/CommonPage/common.data"
import { CommonMethods } from "./AutoTest/CommonPage/common.methods"
import { HomeData } from "./AutoTest/PageHome/Home.data"
import { HomeElements } from "./AutoTest/PageHome/Home.Elements"
import { HomeMethods } from "./AutoTest/PageHome/Home.methods"
import { PageResultsElements } from "./AutoTest/PageResults/PageResults.Elements"

describe ('Search for Playstation 5', () =>{
    it ('passes', () => {
        //cy.wait(3000)
        cy.visit(commondata.url)     
        CommonMethods.InsertSearchWord(HomeData.BuscaPlaystation)
        CommonMethods.ClickOnSearchButton()
        //valida results set
        PageResultsElements.Labels.Resultados.should('have.text','Resultados')

        cy.wait(5000)
        cy.get('.a-section div .a-link-normal .a-size-base').contains('Consolas de PlayStation 4')
        cy.get('.a-section div .a-link-normal .a-size-base').contains('Juegos de PlayStation 5')
        // select an item
        HomeMethods.ClickonItemeSelection(HomeData.SelectedItem)
        cy.get('#titleSection').contains('PlayStation®5 (Modelo Slim) - Pack con 2 Juegos - Digital').should('be.visible')
        //valida price
        cy.get('#corePrice_feature_div').contains('$9,149')
        
    }
)
})
