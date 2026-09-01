
// TC004: Verify that you can isolate code blocks using "int.only()"
// 
/* 
This test code was written by Michael John Little
The 24th of August 2026 at 15.00 hours

*/

//===================================================================================================
//Test code block One
describe.only('TC001: Verify that the H1 heading on the home page is returned.', () => 
  {
  it('PASS: Test Case verifies that the "data-tst" and text of H1 can be used to identify it ', () => 
    {
      
    cy.visit('http://localhost:3000')

    // now let's verify that the H1 heading on the homepage is returned
    // let us test that H1 contains "Testing Next.js Applications with Cypress"
    cy.get("[data-test = 'hero-heading']").contains("Testing Next.js Applications with Cypress")

    
  }) //close the it () test block

//=====================================================================================================
// Test Code block 2
it.only("PASS: the features on the home page are correct", () =>
    {
        cy.visit("http://localhost:3000")

    }
)//close the it() block


})// close the describe block




