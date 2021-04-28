module.exports = {
    configureWebpack: {
        devtool: 'source-map'
      },
    pluginOptions: {
        electronBuilder: {
            preload: "src/preload.js",
            builderOptions: {
                // options placed here will be merged with default configuration and passed to electron-builder
                "appId": "tech.hoody.app",
                "productName": "template",
                "copyright": "Copyright © year ${author}",
                directories: {
                    output: "./dist_electron"
                },
                win: {
                    target: [
                        {
                            target: "nsis",
                            arch: [
                                "x64",
                                // "ia32"
                            ]
                        }
                    ]
                },
                nsis: {
                    oneClick: false,
                    allowElevation: true,
                    allowToChangeInstallationDirectory: true,
                    // installerIcon: "./app.png",
                    // uninstallerIcon: './app.png',
                    // installerHeaderIon: './app.png',
                    createDesktopShortcut: true,
                    createStartMenuShortcut: true,
                    shortcutName: "App-Demo"
                },
                linux: {
                    target: "AppImage",
                    executableName: "App-Demo",
                    // icon: "./128x128.png",
                    description: "a electron vue3 template",
                }
            }
        },
        // eslint-disable-next-line no-unused-vars
        chainWebpackMainProcess: (config) => {
            // Chain webpack config for electron main process only
        },
        // eslint-disable-next-line no-unused-vars
        chainWebpackRendererProcess: (config) => {
            // Chain webpack config for electron renderer process only (won't be applied to web builds)
        },
        // Use this to change the entrypoint of your app's main process
        mainProcessFile: 'src/background.js',
        // Use this to change the entry point of your app's render process. default src/[main|index].[js|ts]
        rendererProcessFile: 'src/main.js',
        /**
        //Provide an array of files that, when changed, will recompile the main process and restart Electron
        // Your main process file will be added by default
        mainProcessWatch: ['src/myFile1', 'src/myFile2'],
         */
        /**
        // Provide a list of arguments that Electron will be launched with during "electron:serve",
        // which can be accessed from the main process (src/background.js).
        // Note that it is ignored when --debug flag is used with "electron:serve", as you must launch Electron yourself
        // Command line args (excluding --debug, --dashboard, and --headless) are passed to Electron as well
        mainProcessArgs: ['--arg-name', 'arg-value']
        */
    }
}