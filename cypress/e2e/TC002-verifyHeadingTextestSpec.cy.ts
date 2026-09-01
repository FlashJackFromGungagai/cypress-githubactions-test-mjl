// This is my second test caae specification..
// TC002: Verify that the Heading text of the H21 heading maatches 
// "Testing Next.js Applications with Cypress"
// 
/* 
This test code was written by Michael John Little
The 24th of August 2026 at 11:00 hours

*/
describe.only('TC001: Verify that the H1 heading on the home page is returned.', () => 
  {
  it('PASS: the h1 contains the correct text', () => 
    {
      
    cy.visit('http://localhost:3000')

    // now let's verify that the H1 heading on the homepage is returned
    // let us test that H1 contains "Testing Next.js Applications with Cypress"
    cy.get("H1").contains("Testing Next.js Applications with Cypress")

    
  }) //close the it () test block

})// close the describe block