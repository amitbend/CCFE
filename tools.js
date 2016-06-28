String.prototype.capitalize = function () {
    return this.replace(/(?:^|\s)\S/g, function (a) { return a.toUpperCase(); });
};
function createChild(type, className, parent, text) {
    var ele = document.createElement(type);
    ele.className = className;
    if (typeof parent != "undefined") {
        parent.appendChild(ele);
    }
    if (typeof text != "undefined") {
        ele.innerHTML = text;
    }
    return ele;
}
function createTextElement(type, text, parent) {
    var ele = document.createElement(type);
    if (typeof parent != "undefined") {
        parent.appendChild(ele);
    }
    //createText(ele, text);
    ele.innerHTML = text;
    return ele;
}
function createText(parent, text) {
    var t = document.createTextNode(text);
    parent.appendChild(t);
}
function createLink(className, url, parent) {
    var ele = document.createElement("a");
    ele.className = className;
    ele.setAttribute("href", url);
    ele.setAttribute("target", "_blank");
    if (typeof parent != "undefined") {
        parent.appendChild(ele);
    }
    return ele;
}