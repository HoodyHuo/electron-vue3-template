//将electron交互对象放入顶层窗口对象
import { ipcRenderer } from 'electron'
window.ipcRenderer = ipcRenderer

const customTitlebar = require('custom-electron-titlebar')

window.addEventListener('DOMContentLoaded', () => {

    const titleBar =new customTitlebar.Titlebar({
        backgroundColor: customTitlebar.Color.fromHex('#444')
    });
    titleBar.updateTitle("app-template")
        
})