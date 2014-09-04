/**
 * @description :
 * @since : 2014/9/4 21:56
 * @author : StarZou
 */

var Luck = Luck || {};
Luck._startTime = new Date().getTime();
(function (global, Luck, undefined) {
    var objectPrototype = Object.prototype,
        toString = objectPrototype.toString;

    Luck.apply = function (object, config, defaults) {
        if (defaults) {
            Luck.apply(object, defaults);
        }

        if (object && config && typeof config === 'object') {
            var property;
            for (property in config) {
                if (config.hasOwnProperty(property)) {
                    object[property] = config[property];
                }
            }
        }

        return object;
    };

    Luck.applyIf = function (object, config) {
        var property;

        if (object) {
            for (property in config) {
                if (config.hasOwnProperty(property) && object[property] === undefined) {
                    object[property] = config[property];
                }
            }
        }

        return object;
    };


    Luck.global = global;

})(window, Luck);