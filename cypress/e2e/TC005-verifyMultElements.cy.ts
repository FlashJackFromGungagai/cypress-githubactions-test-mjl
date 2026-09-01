/*
TC005: Verify the retrieve of multiple elements and later identification of a particular element

With this test case, we will verify that we can retrieve from 'http://localhost:3000' the 'dt' terms;
And later be able to select A particular 'dt' term 

Michael John Little
Created: 25 August 2026

Version history [version id: date: change]
--------------------------
ver 1.1.0 : 20260825-1335 : using .eq(index) to select a partcilaur element by index
ver 1.0.0 : 20260825 : first version.

*/

//===================================================================
describe.only
("T005: Verify the retrieve of multiple elements and later identification of a particular element", ()=>
    {
        it.only 
        ("PASS: the multiple 'dt' terms are returned", ()=>
            {
                //point to home page of the training course
                cy.visit("http://localhost:3000")

                // Here are selecting the second 'ct' element to inspect, by it's inded
                // which will be '1'.
                cy.get("dt").eq(2)

            }

        )// close the it.only() block

    }//close
)//close describe block