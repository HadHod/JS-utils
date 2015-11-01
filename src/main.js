(function(window) {

    window.isNumber = function(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };

    window.isArray = function(o) {
        return Object.prototype.toString.call(o) === '[object Array]';
    };

    window.escapeHTML = function(text) {
        var replacements = {"<": "<", ">": ">","&": "&", "\"": "'"};
        return text.replace(/[<>&"]/g, function(character) {
            return replacements[character];
        });
    };

}(window));