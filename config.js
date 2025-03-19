global.owner = ['6282132789470']  
global.mods = ['6282132789470'] 
global.prems = ['6282132789470']
global.nameowner = 'Brogalan'
global.numberowner = '6282132789470'
global.mail = 'admin@siap.biz.id' 
global.gc = 'https://t.me/bakulanvpn'
global.instagram = 'https://instagram.com/rodo_merana'
global.wm = '© ALI ROHMATULLOH'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made With'
global.author = 'Ali Rohmatulloh'
global.maxwarn = '2' // Peringatan maksimum
global.antiporn = true // Auto delete pesan porno (bot harus admin)

//INI WAJIB DI ISI!//
global.lann = 'Btz-jdyXQ' 
//Daftar terlebih dahulu https://api.betabotz.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.btc = 'Btz-jdyXQ'
//Daftar https://api.botcahx.eu.org 

global.APIs = {   
  lann: 'https://api.betabotz.eu.org',
  btc: 'https://api.botcahx.eu.org'
}
global.APIKeys = { 
  'https://api.betabotz.eu.org': global.lann, 
  'https://api.botcahx.eu.org': global.btc //OPSIONAL
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
