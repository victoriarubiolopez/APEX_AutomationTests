import { HomeElements } from "./Home.Elements"

export class HomeMethods {
    static InsertKeysearchWord(SearchKeyWord){
        HomeElements.textboxes.SearchKeyWord.type(SearchKeyWord)
    }

    static ClickOnSearchutton() {
        HomeElements.buttons.SearchBarButon.clear()
    }
 
    static ClickonItemeSelection(){
        HomeElements.labels.SelectedItem.click()
    }
    /**Se agrugan todos los metodos en uno solo, para mandar llamar una sola linea de codigo */
    static SearchAll(SearchKeyWord) {
        this.InsertKeysearchWord(SearchKeyWord)
        this.ClickOnSearchutton()
        this.ClickonItemeSelection()
        cy.wait(5000)
       
    }
    }
