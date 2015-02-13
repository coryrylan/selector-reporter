(function () {
    'use strict';

    selectorReporter.run({
        //production: true, // Optional if wanting to run outside of localhost
        prefix: 'mywebsite.com',
        messages: [
            { selector: '.defaultButton', message: 'is deprecated please use .btn', level: 'warning' },
            { selector: '.col_6' }
        ]
    });
}());