window.selectorReporter = (function() {
    'use strict';

    jQuery.fn.exists = function() { return this.length > 0; };

    function run(config) {
        if ((window.location.href.indexOf('localhost') > -1) || config.production === true) {

            var prefix = _getPrefix(config);

            config.messages.forEach(function(item) {
                if ($(item.selector).exists()) {
                    var message = _getMessage(item);

                    if (item.level === 'error') {
                        console.error(prefix + 'Error: ' + item.selector + message);
                    } else if (item.level === 'info') {
                        console.info(prefix + 'Info: ' + item.selector + message);
                    } else if (item.level === 'log') {
                        console.log(prefix + 'Log: ' + item.selector + message);
                    } else {
                        console.warn(prefix + 'Warning: ' + item.selector + message);
                    }
                }
            });
        }
    }

    function _getMessage(item) {
        if (item.message !== undefined) {
            return ' ' + item.message;
        } else {
            return ' is deprecated';
        }
    }

    function _getPrefix(config) {
        if (config.prefix !== undefined) {
            return config.prefix + ' ';
        } else {
            return '';
        }
    }

    return {
        run: run
    };
}());