/*
TC001: Verify the operation of the math function, add(a,b)

PASS state: The add function correctly adds two values and 
            correctly passes the value from the function
            to this drive method.

Written by Michael John Little
Friday 28 August 2026 14:50 hours

*/
{
    // we need to point to the location of the add function
    // in the 'maths' subfolder
    // it is declared as a constant As it is a fixed variable
    const add = require('../maths/add');

    //define the test suite, containing a number of test cases
    describe
    ( "this test suite contains a number of test cases that verifes the  operation of the Maths Add function meets expectations",
        ()=>
            {
                //---------------------------------------------------------------------------------------
                // Here '4+7', and so the response should be '11'
                test
                ("TC01: Verify that two postive numbers can be added",
                ()=>
                    {
                        expect( add(4,7) ).toBe(11);

                    }//close test case assertion

                );//close TC01

                //--------------------------------------------------------------------------------
                // Here ' 5+ -10' and so the response should be '-10'
                test
                ("TC02: Verify that adding two numbers where the higher number is negative will return a negative",
                ()=>
                    {
                        expect( add(5 , -10)  ).toBe(-5);

                    }// close test case assertion

                ); //close TC02

                
            }// close the test suite.

    )// close the describe block

}//end 