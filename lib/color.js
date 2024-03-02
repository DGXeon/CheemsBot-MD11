//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const chalk = require('chalk')
const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}
const bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}
module.exports = {
	color,
	bgcolor
}
