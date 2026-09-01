// This is my second test caae specification..
// TC003: Verify that the Heading text of the H21 heading maatches using thge
// HTML element attribute matching  "Testing Next.js Applications with Cypress"
// 
/* 
This test code was written by Michael John Little
The 24th of August 2026 at 12:0 hours

*/
describe.only('TC001: Verify that the H1 heading on the home page is returned.', () => 
  {
  it('PASS: Test Case verifies that the "data-tst" and text of H1 can be used to identify it ', () => 
    {
      
    cy.visit('http://localhost:3000')

    // now let's verify that the H1 heading on the homepage is returned
    // let us test that H1 contains "Testing Next.js Applications with Cypress"
    cy.get("[data-test = 'hero-heading']").contains("Testing Next.js Applications with Cypress")

    
  }) //close the it () test block

})// close the describe block