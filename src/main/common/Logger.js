// import {app} from 'electron'
import logger from'electron-log'
import path from 'path'
const fs = require('fs')

const pathToPackage = path.join(__dirname, 'package.json')
const packageConfig = JSON.parse(String(fs.readFileSync(pathToPackage)))

logger.transports.file.level = "info"
logger.transports.console.level = "info"


logger.transports.file.resolvePath=(variables)=>{
    let logPath
    if(process.env.NODE_ENV != 'production'){
         logPath = path.join(__dirname,'logs',variables.fileName)
    }else{
        switch (process.platform){
        case 'linux':
            logPath = path.join(process.env.HOME,'.log',packageConfig.name,packageConfig.version)
            if(!fs.existsSync(logPath)){
                fs.mkdirSync(logPath,{ recursive: true })
            }
            logPath = path.join(logPath,variables.fileName)
            break
        case 'win32':
            logPath = path.join(process.resourcesPath,'../logs',variables.fileName)
        }
    }
    return logPath
}

logger.catchErrors({
    showDialog:false,
    // eslint-disable-next-line no-unused-vars
    onError: (error,versions,submitIssue)=>{
      logger.error(error)
    }
})

Object.assign(console,logger.functions)
export default logger