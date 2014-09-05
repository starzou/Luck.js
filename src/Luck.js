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

    Luck.global = global;

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


    Luck.apply(Luck, {
        typeOf: function (value) {
            return toString.call(value);
        },

        isEmpty: function (value, allowEmptyString) {
            return (value === null) || (value === undefined) || (!allowEmptyString ? value === '' : false) || (Luck.isArray(value) && value.length === 0);
        },

        isArray: ('isArray' in Array) ? Array.isArray : function (value) {
            return Luck.typeOf(value) === '[object Array]';
        },

        isDate: function (value) {
            return Luck.typeOf(value) === '[object Date]';
        },

        isRegExp: function (value) {
            return Luck.typeOf(value) === '[object RegExp]';
        },

        isString: function (value) {
            return typeof value === 'string';
        },

        isNumber: function (value) {
            return typeof value === 'number';
        },

        isFunction: function (value) {
            return typeof value === 'function';
        },

        isBoolean: function (value) {
            return typeof value === 'boolean';
        },

        isElement: function (value) {
            return value ? value.nodeType === 1 : false;
        },

        isTextNode: function (value) {
            return value ? value.nodeName === "#text" : false;
        },

        isDefined: function (value) {
            return typeof value !== 'undefined';
        },

        isGlobalObject: function (value) {
            return Luck.typeOf(value) === '[object global]';
        },

        isSimpleObject: function (value) {
            return value instanceof Object && value.constructor === Object;
        },

        isPrimitive: function (value) {
            var type = typeof value;

            return type === 'string' || type === 'number' || type === 'boolean';
        },

        isWindow: function (value) {
            return value instanceof Window && value.constructor === Window;
        }
    });


})(this, Luck);