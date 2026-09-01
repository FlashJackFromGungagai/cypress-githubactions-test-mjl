// this is my jest config file
// I have configured it for an HTML reporter
// Michael John Little
// 1 September 2026
//  version 1.0.0 

module.exports = 
{
    // here we will define the configuration settings for the reporter
    reporters:
    [
        // define the default reporter 
        'default',
        [
            'jest-html-reporter',
            {
                pageTitle: 'Test Results Report',
                outputPath: './JEST-test-reports/test-report.html',
                includeFailureMsg: true, 
                includeConsoleLog: true,
            },
        ],

    ],// close reporters

};//close module exports