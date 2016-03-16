var logconf = require('../');

var data = {
    global: {
        //global directives go in here
        create: true,
        nocompress: true,
        missingok: true,
        copytruncate: true,
        notifempty: true,
        nomail: true,
        noolddir: true,
        daily: true,
        rotate: 5,
        dateext: true,
        dateformat: "-%Y-%m-%d-%s",
    },
    logfiles: [{
        //directives specific to each log file, overrides global config
        path: "/var/log/system.log", //required
        postrotate: "s3cmd -m text/plain sync /home/bobby/logs/system.log-* s3://{{BUCKET}}{{/PATH}}"
    }]
}

console.log(logconf(data));

