export class PageResultsElements {
    static get Filters(){
        return {
            get Precio(){
                return cy.contains('div', 'Precio');
            },
            get Tamaño(){
                return cy.contains('div', 'Tamaño de Pantalla');
            },
            get Marca(){
                return cy.contains('div','Marca');
            },
            get ConteoResultados(){
                return cy.contains('div','resultados para')
            }
        
        }
    }
    static get ApplyFilter(){
        return {
            get Marca(){
                return cy.contains('a','Marca');
            },
            get Tamaño(){
                return cy.contains('a','48 a 55 in');
            },
        }
    }
    static get Labels(){
        return{
            get Resultados(){
                return cy.get('.a-section div .s-no-outline .a-size-medium-plus').first()
            }
        }
    }
}