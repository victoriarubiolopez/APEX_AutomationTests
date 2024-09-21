import { CommonElements } from "./common.elements"

export class CommonMethods{
    static InsertSearchWord (){
        CommonElements.textboxes.SearchWord.type()
    }
    static ClickOnSearchButton(){
        CommonElements.buttons.SearchButton.click()
    }
 
}