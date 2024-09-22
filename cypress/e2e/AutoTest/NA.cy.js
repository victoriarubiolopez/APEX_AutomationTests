import { commondata } from "./CommonPage/common.data"
import { CommonElements } from "./CommonPage/common.elements"
import { CommonMethods } from "./CommonPage/common.methods"
import { smartdata } from "./Scenario2/Data_Elements_Methods/smart.data"
import { smartelements } from "./Scenario2/Data_Elements_Methods/smart.elements"
import { SmartMethods } from "./Scenario2/Data_Elements_Methods/smart.methods"

describe ('PruebayError', () =>{
    it('passes', () => {
        cy.visit(commondata.url)
        cy.get('.hm-icon-label').click()
/*         cy.contains('div','Alimentos y Bebidas').click()
        cy.wait(2000)
        cy.contains('div','Cervezas, Vinos y Licores').click() */


    }
)
})