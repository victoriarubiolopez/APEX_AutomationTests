import { commondata } from "./AutoTest/CommonPage/common.data"
import { CommonMethods } from "./AutoTest/CommonPage/common.methods"
import { HomeData } from "./AutoTest/PageHome/Home.data"
import { HomeMethods } from "./AutoTest/PageHome/Home.methods"
import { PageProductDetailsElements } from "./AutoTest/PageProductDetails/PageProductDetails.Elements"
import { PageResultsElements } from "./AutoTest/PageResults/PageResults.Elements"

describe ('Search for Playstation 5', () =>{
    it ('passes', () => {
        //cy.wait(3000)
        cy.visit(commondata.url)     
        CommonMethods.InsertSearchWord(HomeData.BuscaPlaystation)
        CommonMethods.ClickOnSearchButton()
        //valida results page title
        PageResultsElements.Labels.Resultados.should('have.text','Resultados')
        //Valida results set contains Consolas y Juegos de Playstation
        PageResultsElements.Labels.ConsolasDePlaystation.should('have.text','Consolas de PlayStation')
        PageResultsElements.Labels.JuegosDePlayStation.should('have.text','Juegos de PlayStation 5')
        // select an item
        HomeMethods.ClickonItemeSelection(HomeData.SelectedItem)
        //valida exist product title 
        PageProductDetailsElements.ProductDetailsLabels.ProductTile.should('exist')
        //valida price
        PageProductDetailsElements.ProductDetailsLabels.ProductPrice.should('exist')
        
    }
)
})
