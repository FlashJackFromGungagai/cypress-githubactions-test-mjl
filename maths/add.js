/*
This is a maths function, add(a, b) 
This takes in the variables 'a' and 'b' 
and add them and return to the summed value

It should be notes that the line
'module.exports = add;' tells the interpreter
To expose the variable 'add' from a Javascript file
So it can be used by other files.

It is part of the common Javascript module system,
Which is standard in node.js .

Written by: Michael John Little
date: Friday, 28 August 2026
*/
{
    function add(a,b)
    {
        return a+b;

    }//close function add(a,b)

    module.exports =add;

}//close file