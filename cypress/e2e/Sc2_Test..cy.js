import { smartdata } from "./AutoTest/Scenario2/Data_Elements_Methods/smart.data"
import {playdata} from "./AutoTest/Scenario1/Data_Elements_Methods/playstation.data"
import { commondata } from "./AutoTest/CommonPage/common.data"
import { CommonElements } from "./AutoTest/CommonPage/common.elements"
import { CommonMethods } from "./AutoTest/CommonPage/common.methods"
import { smartelements } from "./AutoTest/Scenario2/Data_Elements_Methods/smart.elements"
import { SmartMethods } from "./AutoTest/Scenario2/Data_Elements_Methods/smart.methods"
describe('Scenario Smart Tv', () => {
    it ('passes', () => {
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
}
)