import { smartdata } from "./AutoTest/Scenario2/Data_Elements_Methods/smart.data"

describe('Scenario Smart Tv', () => {
    it ('passes', () => {
        cy.visit(smartdata.url) 
        cy.get('div[class="a-section]').
                find('[id^="filter-p_36"]')
                .eq(0)
    }
)
}
)