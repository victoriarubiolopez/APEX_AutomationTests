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
        PageResultsElements.ApplyFilter.Marca.should('exist').check({force: true})
        PageResultsElements.ApplyFilter.Tamaño.should('exist').check({force: true})
        //validate counting results
        PageResultsElements.Labels.ConteoResultados.contains('resultados para')
    

    }
    )
}
)