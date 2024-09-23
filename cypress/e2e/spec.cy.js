import { commondata } from "./AutoTest/CommonPage/common.data"
import { CommonMethods } from "./AutoTest/CommonPage/common.methods"
import { HomeData } from "./AutoTest/PageHome/Home.data"

describe ('PruebayError', () =>{
    it('passes', () => {
          
        cy.visit(commondata.url)
        CommonMethods.InsertSearchWord(HomeData.BuscaSmatTV)
        CommonMethods.ClickOnSearchButton()
        //cy.wait(25000);
        cy.get('[id*="p_123/237204"] .a-list-item .a-link-normal .a-size-base').contains('Sony').click()
        cy.get('[id*="p_n_size_browse-bin/9690388011"] .a-list-item .a-link-normal .a-size-base').contains('48 a 55 in').click()
        cy.get('#search div .a-section').contains('resultados para')


    }
)
})