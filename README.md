JS utils
========

## TODO

* String.prototype.trim = function() { return this.replace(/^\s+|\s+$/g, ""); };
* function isNumber(n){ return !isNaN(parseFloat(n)) && isFinite(n); }
* function isArray(obj){ return Object.prototype.toString.call(obj) === '[object Array]' ; }
* function escapeHTML(text) { var replacements= {"<": "&lt;", ">": "&gt;","&": "&amp;", "\"": "&quot;"}; return text.replace(/[<>&"]/g, function(character) { return replacements[character]; });  }
* is in array prototype
