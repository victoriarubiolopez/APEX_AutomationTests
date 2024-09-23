import { commondata } from "./AutoTest/CommonPage/common.data"
import { CommonElements } from "./AutoTest/CommonPage/common.elements"
import { CommonMethods } from "./AutoTest/CommonPage/common.methods"
import { HomeData } from "./AutoTest/PageHome/Home.data"
import { PageResultsElements } from "./AutoTest/PageResults/PageResults.Elements"
import { PageResultsMethods } from "./AutoTest/PageResults/PageResults.Methods"

describe('Scenario Smart TV', ()=> {
    it('passes', ()=>{
        cy.visit(commondata.url)
        CommonMethods.InsertSearchWord(HomeData.BuscaSmatTV)
        CommonMethods.ClickOnSearchButton()
        //PageResults)
        cy.get(PageResultsElements.Filters.Precio)
        cy.get(PageResultsElements.Filters.Tamaño)
        cy.get(PageResultsElements.Filters.Marca)
        
    }
    )
}
)