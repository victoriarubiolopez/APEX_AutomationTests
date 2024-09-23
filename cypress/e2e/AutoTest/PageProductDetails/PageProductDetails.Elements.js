export class PageProductDetailsElements{
    static get ProductDetailsLabels(){
        return {
            get ProductTile (){
                return cy.get('#productTitle');

            },
            get ProductPrice(){
                return cy.get('#corePrice_feature_div');
            },
        }
    }
}