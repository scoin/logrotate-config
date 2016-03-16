logrotate-config
=========================

Generates a .conf file for logrotate.

###Install

`npm install logrotate-conf`

###Example usage:

```javascript

var logconf = require('logrotate-conf');

var data = {
    global: {
        //global directives go in here
        missingok: true,
        daily: true,
        rotate: 5,
        compress: true,
        create: true
    },
    logfiles: [{
        //directives specific to each log file, overrides global config
        path: "/usr/local/etc/somefile.log", //required
        weekly: true,
        postrotate: "echo \"rotating $1\""
    }]
}

logconf(data);

// missingok
// rotate 5
// daily
// compress
// create
// 
// /usr/local/etc/somefile.log {
//     weekly
//     postrotate
//         echo "sending $1 to s3" >> /usr/local/etc/msg.txt
//     endscript
// }
```

###Test

Run `test/test.js` to generate an example .conf file.