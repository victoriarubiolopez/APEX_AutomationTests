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
        PageResultsElements.ApplyFilter.Marca.contains('Sony').click()
        PageResultsElements.ApplyFilter.Tamaño.contains('48 a 55 in').click()
        //validate counting results
        PageResultsElements.Labels.ConteoResultados.contains('resultados para')
    

    }
    )
}
)