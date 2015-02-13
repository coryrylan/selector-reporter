#Selector Reporter

A simple library to help report deprecated attributes or CSS classes in your html.


``` javascipt
selectorReporter.run({
    //production: true,         // Optional if wanting to run outside of localhost
    prefix: 'mywebsite.com',    // Optional if messages should be prefixed
    messages: [
        { selector: '.button', message: 'is deprecated please use .btn', level: 'warning' },
        { selector: '.floatLeft' }
    ]
});
```

Messages is an array of objects containing three properties `selector`, `message` and `level`.
`selectorReporter` will find the given `selector` to determine if it exists and display the `message`.

There are four `level` types, 'error', 'warning', 'info', and 'log'. If a level is not specified
the default is 'warning'.
