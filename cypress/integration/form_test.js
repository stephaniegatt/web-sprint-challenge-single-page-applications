describe("Inputs and submit button", () => {
    it("can navigate to the site", () => {
        cy.visit("http://localhost:3004/pizza")
        cy.url().should("include", "localhost")
    })

    it("can enter a name in", () => {
        cy.get("input[name=name]").type("stephanie")  
        cy.get("input[name=name]").should("have.value", "stephanie") 
    })
    it("can enter instructions", () => {
        cy.get("textarea[name=instructions]").should("be.empty")
    })
    it('submit button should be disabled', () => { // second test
        cy.get('button').should('be.disabled')
      })
    
})
