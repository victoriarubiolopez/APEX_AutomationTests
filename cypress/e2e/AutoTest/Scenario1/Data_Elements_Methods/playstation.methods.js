import { PlayElements } from "./Scenario1/Data_Elements_Methods/playstation.data/playstation.elements"

export class Playmethods {
    static InsertKeysearchWord(SearchKeyWord){
        PlayElements.textboxes.SearchKeyWord.type(SearchKeyWord)
                
    }

    static ClickOnSearchutton() {
        PlayElements.buttons.SearchBarButon.click()
        
    }
 
    static ClickonItemeSelection(){
        PlayElements.labels.SelectedItem.click()
    }
    /**Se agrugan todos los metodos en uno solo, para mandar llamar una sola linea de codigo */
    static search(SearchKeyWord) {
        this.InsertKeysearchWord(SearchKeyWord)
        this.ClickOnSearchutton()
        this.ClickonItemeSelection()
        cy.wait(5000)

        
    }
    }
