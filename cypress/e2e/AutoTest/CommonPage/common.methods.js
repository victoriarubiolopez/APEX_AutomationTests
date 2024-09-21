import { CommonElements } from "./common.elements"

export class CommonMethods{
    static InsertSearchWord (){
        CommonElements.textboxes.TypeSearchWord.type()
    }
    static ClickOnSearchButton(){
        CommonElements.buttons.ClickSearchButton.click()
    }
 
}