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
            get SelectedItem(){
                return cy.contains('PlayStation®5 (Modelo Slim) - Pack con 2 Juegos - Digital')
            },
            get Resultados(){
                return cy.contains('.a-section div .s-no-outline .a-size-medium-plus ', 'Resultados')
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
