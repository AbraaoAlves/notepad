"use strict";
exports.__esModule = true;
exports.Events = exports.createStyle = exports.css = exports.elem = exports.Tag = exports.Html = void 0;
var Html = /** @class */ (function () {
    function Html() {
    }
    Html.get = function (id) {
        return document.getElementById(id);
    };
    Html.getChild = function (id) {
        return Html.get(id).children[0];
    };
    Html.getParent = function (id) {
        return Html.get(id).parentElement;
    };
    return Html;
}());
exports.Html = Html;
var Tag = /** @class */ (function () {
    function Tag() {
    }
    Tag.get = function (tag, id) {
        return Html.get(id);
    };
    Tag.getChild = function (tag, id) {
        return Html.get(id).children[0];
    };
    Tag.getParent = function (tag, id) {
        return Html.get(id).parentElement;
    };
    return Tag;
}());
exports.Tag = Tag;
function setInlineStyle(element, style) {
    for (var prop in style) {
        if (prop in element.style)
            element.style[prop] = style[prop];
        else
            element.style.setProperty(prop, style[prop]);
    }
}
function elem(tag, attributes, children) {
    if (attributes === void 0) { attributes = {}; }
    if (children === void 0) { children = []; }
    var el = document.createElement(tag);
    for (var attr in attributes)
        el[attr] = attributes[attr];
    if (attributes.style)
        setInlineStyle(el, attributes.style);
    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
        var child = children_1[_i];
        el.append(child);
    }
    return el;
}
exports.elem = elem;
function css(selector, properties) {
    var el = document.createElement("span");
    setInlineStyle(el, properties);
    return selector + " {" + el.style.cssText + "}";
}
exports.css = css;
function createStyle() {
    var style = document.createElement("style");
    document.head.append(style);
    return style.sheet;
}
exports.createStyle = createStyle;
var Events = /** @class */ (function () {
    function Events() {
    }
    Events.listen = function (element, eventType, handler) {
        element.addEventListener(eventType, handler);
        return function () { return element.removeEventListener(eventType, handler); };
    };
    return Events;
}());
exports.Events = Events;
