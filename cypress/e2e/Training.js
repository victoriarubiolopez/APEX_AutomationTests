import { commondata } from "./AutoTest/CommonPage/common.data"
import { CommonMethods } from "./AutoTest/CommonPage/common.methods"


describe ('PruebayError', () =>{
    it('passes', () => {
        cy.visit(commondata.url)     
        CommonMethods.InsertSearchWord(HomeData.BuscaPlaystation)
        CommonMethods.ClickOnSearchButton()
        cy.get('[type="checkbox"]').check('Sony')
        /* cy.wait(10000);
        cy.get()
        cy.get('#brandsRefinements').find('.a-unordered-list .a-link-normal .a-size-base').eq(1).should('be-checked')
        cy.contains('48 a 55 in ').should('be-checked')
        cy.get('#search div .a-section').contains('resultados para') */


    }
)
})