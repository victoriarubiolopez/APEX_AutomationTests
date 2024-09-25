import { commondata } from "./AutoTest/CommonPage/common.data"
import { CommonMethods } from "./AutoTest/CommonPage/common.methods"
import { HomeData } from "./AutoTest/PageHome/Home.data"


describe ('PruebayError', () =>{
    it('passes', () => {
        cy.visit(commondata.url)     
        CommonMethods.InsertSearchWord(HomeData.BuscaSmatTV)
        CommonMethods.ClickOnSearchButton()
        
        cy.get('li[aria-label="Sony"] input[type="checkbox"]').should('exist').check({force: true})
        
        /* cy.wait(10000);
        cy.get()
        cy.get('#brandsRefinements').find('.a-unordered-list .a-link-normal .a-size-base').eq(1).should('be-checked')
        cy.contains('48 a 55 in ').should('be-checked')
        cy.get('#search div .a-section').contains('resultados para') */


    }
)
})