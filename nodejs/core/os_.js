const os = require('os');

// get the total memory of the system
console.log(os.totalmem());

// get the free memory of the system
console.log(os.freemem());

// get the hostname of the system
console.log(os.hostname());

// get the type of the os
console.log(os.type());

// get the platform of the os
console.log(os.platform());

// get the architecture of the os
console.log(os.arch());

// get the release of the os
console.log(os.release());

// get the uptime of the os
console.log(os.uptime());

// get the load average of the os
console.log(os.loadavg());

// get the total cpu of the os
console.log(os.cpus());

// get the network interfaces of the os
console.log(os.networkInterfaces());

// get the user info of the os
console.log(os.userInfo());

// get the EOL of the os
console.log(os.EOL);

// get the endianness of the os
console.log(os.endianness());