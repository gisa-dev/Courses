const os = require('node:os')

console.log(`
Informacion del sistema operativo: ${os.platform()}
Nombre del sistema operativo: ${os.hostname()}
Version del sistema operativo: ${os.version()}
Arquitectura del sistema operativo: ${os.arch()}
Cpus: ${os.cpus()}
Memoria libre: ${os.freemem() / 1024 / 1024}MB
Memoria total: ${os.totalmem() / 1024 / 1024}MB
uptime: ${os.uptime() / 60 / 60}

`)
