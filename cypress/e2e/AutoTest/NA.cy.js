import { commondata } from "./CommonPage/common.data"
import { CommonElements } from "./CommonPage/common.elements"
import { CommonMethods } from "./CommonPage/common.methods"
import { smartdata } from "./Scenario2/Data_Elements_Methods/smart.data"
import { smartelements } from "./Scenario2/Data_Elements_Methods/smart.elements"
import { SmartMethods } from "./Scenario2/Data_Elements_Methods/smart.methods"

describe ('PruebayError', () =>{
    it('passes', () => {
        cy.visit(commondata.url)
        CommonMethods.InsertSearchWord(smartdata.keysearchword)
        CommonMethods.ClickOnSearchButton()
        cy.get(smartelements.Filters.Precio)
        cy.get(smartelements.Filters.Tamaño)
        cy.get(smartelements.Filters.Marca)
        SmartMethods.ClickOnTamañoFilter()
        //SmartMethods.ClickOnMarcaFilter()
        //Validate the results counts
        cy.get(smartelements.Filters.ConteoResultados)

    }
)
})