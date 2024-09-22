import { commondata } from "./AutoTest/CommonPage/common.data"

describe('Scenario Categorias', () =>{
    it('passes', () =>{
        cy.visit(commondata.url)
        cy.get('.hm-icon-label').click()
    }
    )
}
)