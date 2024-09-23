import { commondata } from "./AutoTest/CommonPage/common.data"
import { CommonMethods } from "./AutoTest/CommonPage/common.methods"
import { HomeData } from "./AutoTest/PageHome/Home.data"
import { PageResultsElements } from "./AutoTest/PageResults/PageResults.Elements"
import { PageResultsMethods } from "./AutoTest/PageResults/PageResults.Methods"

describe('Scenario Smart TV', ()=> {
    it('passes', ()=>{
        cy.visit(commondata.url)
        CommonMethods.InsertSearchWord(HomeData.BuscaSmatTV)
        CommonMethods.ClickOnSearchButton()
        //Size and Prices filters are displayed (exist,visible)
        PageResultsElements.Labels.TamañoDePantalla.should('contains.text','Tamaño de Pantalla de la Televisión')
        PageResultsElements.Labels.Precio.should('contains.text','Precio')
        //Apply Filters Tamaño and MArca
        cy.get('#brandsRefinements').find('.a-unordered-list .a-link-normal .a-size-base').eq(5).should('contains.text','Sony').click();
        cy.contains('48 a 55 in ').click()
        //validate counting results
        cy.get('#search div .a-section').contains('resultados para')
    

    }
    )
}
)