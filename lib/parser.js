var commands = require("./args.js");
var commandOrder = require("./order.js");

module.exports = function(config, opts){
    if(!opts){
        opts = {};
    }
    var confString = "";
    confString += parse(config.global);
    confString += eachLog(config.logfiles);
    return confString;
}

var parse = function(obj, prefix){
    if(!prefix){
        prefix = "";
    }
    var confString = "";
    for(var i in commandOrder){
        var command = commandOrder[i];
        if(obj.hasOwnProperty(command)){
            confString += prefix + commands[command]._parser(command, obj[command]);
            confString += '\n';
        }
    }
    return confString;
}

var eachLog = function(logArray){
    var string = "";
    for(var i in logArray){
        string += "\n"
        string += logArray[i].path + " { \n";
        string += parse(logArray[i], "\t");
        string += "}\n"
    }
    return string;
}


