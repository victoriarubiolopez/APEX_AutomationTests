export class PlayElements {
    static get textboxes() {
        return {
            get SearchKeyWord () {
                return cy.get("#twotabsearchtextbox")                
            }
            
        }
    }
    static get labels(){
        return{
            get ResultsTitle(){
                return cy.get('.a-section div .s-no-outline .a-size-medium-plus ').contains('Resultados')
                },
            get SelectedItem(){
                return     cy.contains('PlayStation®5 (Modelo Slim) - Pack con 2 Juegos - Digital')
            },
            get Price(){
                return     cy.get("$9,189.00")
            }
        }
    }


    static get buttons() {
        return {
            get SearchBarButon () {
                return cy.get(".nav-input#nav-search-submit-button")    
            }
        }
    }
}
