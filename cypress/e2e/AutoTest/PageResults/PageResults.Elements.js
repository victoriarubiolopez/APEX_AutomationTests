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
        
        }
    }
    static get ApplyFilter(){
        return {
            get Marca(){
                return cy.get('[id*="p_123/237204"] .a-list-item .a-link-normal .a-size-base');
            },
            get Tamaño(){
                return cy.get('[id*="p_n_size_browse-bin/9690388011"] .a-list-item .a-link-normal .a-size-base');
            },
        }
    }
    static get Labels(){
        return{
            get Resultados(){
                return cy.get('.a-section div .s-no-outline .a-size-medium-plus').first();
            },
            get JuegosDePlayStation(){
                return cy.get('#s-refinements').find('.a-section div .a-link-normal .a-size-base').eq(5);
            },
            get ConsolasDePlaystation(){
                return cy.get('#s-refinements').find('.a-section div .a-link-normal .a-size-base').eq(4);
            },
            get TamañoDePantalla(){
                return cy.get('#p_n_size_browse-bin-title').first();
            },
            get Precio(){
                return cy.get('#priceRefinements').find('.a-section div .a-size-base').eq(0);
            },
            get ConteoResultados(){
                return cy.get('#search div .a-section');
            },
        }
    }
}