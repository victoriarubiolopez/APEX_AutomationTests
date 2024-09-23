import { commondata } from "./CommonPage/common.data"
import { CommonMethods } from "./CommonPage/common.methods"


describe ('PruebayError', () =>{
    it('passes', () => {
        cy.visit(commondata.url)     
        CommonMethods.InsertSearchWord(HomeData.BuscaPlaystation)
        CommonMethods.ClickOnSearchButton()


    }
)
})