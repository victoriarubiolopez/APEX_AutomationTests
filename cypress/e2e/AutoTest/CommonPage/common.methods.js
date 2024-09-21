import { CommonElements } from "./common.elements"

export class CommonMethods{
    static InsertSearchWord (SearchWord){
        CommonElements.textboxes.SearchWord.type(SearchWord)
    }
    static ClickOnSearchButton(){
        CommonElements.buttons.SearchButton.click()
    }
 
}