const Discord = require('discord.js');

const bot = new Discord.Client();

const token = 'ODI3OTAzNjIxNDkyNTA2NjI3.YGhzVQ.RSakIotTBpo8q3jFIsM3jX4gkNY';

bot.login(token)
bot.on('ready',()=>{
    console.log('estou pronto!')
})

bot.on('message',msg=>{
    if (msg.content==='!ideologia'){
        msg.reply('**SOMOS LIBERAIS, FEMINISTAS, APOIADORES DAS CAUSAS LGBT+, COMPLETAMENTE CONTRA QUALQUER TIPO DE PRECONCEITO.**')
    }
})

bot.on('message',msg=>{
    if (msg.content==='!bom dia'){
        msg.reply('**BOM DIA! QUE SEU DIA SEJA ABENÇOADO COMO DEVE SER!🙏**')
    }
})

bot.on('message',msg=>{
    if (msg.content==='!17'){
    msg.reply('**BRASIL ACIMA DE TUDO DEUS ACIMA DE TODOS. VAMOS PRESERVAR A FAMILIA TRADICIONAL BRASILEIRA E DESTRUIR AS VIRTUDES DA VIDA HUMANA TAOKEI? É 17 OU NÃO É? 😎👉👉**')
      
    }
})

