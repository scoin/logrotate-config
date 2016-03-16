var parser = require("../index.js");
var fs = require('fs');

var data = {
    global: {
        create: false,
        size: 1,
        rotate: 1,
        dateext: true,
        dateformat: "-%Y-%m-%d-%s",
        compress: false,
        olddir: false,
        nomail: true,
        ifempty: false
    },
    logfiles: [{
        path: "/home/greg/tree/logs/http-server.log",
        missingok: true,
        daily: true,
        rotate: 5,
        copytruncate: true,
        postrotate: "echo \"rotating $1\" >> /usr/local/etc/msg.txt"
    },
    {
        path: "/home/greg/tree/logs/process-notifications",
        missingok: true,
        daily: true,
        rotate: 5,
        copytruncate: true,
        postrotate: "echo \"rotating $1\" >> /usr/local/etc/msg.txt"
    }]
}

var file = 'test.conf';
fs.writeFile(file, parser(data), function(err){
    if(err) throw err;
    fs.chmod(file, 0444, function(err){
        fs.chown(file, 0, 0, function(err){
            console.log("saved " + file)
        })
    })
})