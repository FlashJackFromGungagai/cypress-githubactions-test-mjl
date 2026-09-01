/*
TC006: Experiment with the use of BeforeEach, 
 and Verify the retrieve of multiple elements 
 and later identification of a particular element

With this test case:
1. We will experiment with the use of BeforeEach for 
    cy.visit ('http://localhost:3000')
2. we will verify that we can retrieve from  the 'dt' terms;
3. elect A particular 'dt' term 

Michael John Little
Created: 26 August 2026, 

Version history [version id: date: change]
--------------------------
ver 1.10.0  : 20260826-1100 : checking multiple elements checks
ver 1.0.0   : 20260826-1100 : first version.

*/
//============================================================================
describe
( "TC007: Experiment with the use of BeforeEach, verify retrieval of the 'dt' element",
    ()=>
    {
        //----------------------------------------------------------------------------
        // lets do some configuration before running the test
        // lets point to the website we are going to test
        // cy.vist("http://localhost:3000")
        beforeEach
        (
        ()=>
            {
                cy.visit("http://localhost:3000")

            }// close beforeEach ()=>

        )//close beforeEach
        //----------------------------------------------------------------------------

        //----------------------------------------------------------------------------
        // lets execute the test.
        // lets validate the values returned.
        it.only
        ("PASS: the multiple 'dt' terms are returned, and their values validate",
        ()=>
            {
                cy.get("dt").eq(0).contains("4 Courses")
                cy.get("dt").eq(1).contains("25+ Lessons")
                cy.get("dt").eq(2).contains("Free and Open Source")

            }// close the it..()=> block.

        )//close the 'it' block
        //---------------------------------------------------------------------------

    }// close the describe ()=> block

)// close describe
//============================================================================