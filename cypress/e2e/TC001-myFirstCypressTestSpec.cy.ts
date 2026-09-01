// This is my first test caae specification
// it will pass if it opens 'https://example.cypress.io'
// this is '“ TC001-myFirstCypressTestSpec.cy.ts'
describe.only('TC001: Verify that the H1 heading on the home page is returned.', () => 
  {
  it('PASS: the h1 contains the correct text', () => 
    {
      
    cy.visit('http://localhost:3000')

    // now let's verify that the H1 heading on the homepage is returned
    cy.get("H1")

    
  })
})