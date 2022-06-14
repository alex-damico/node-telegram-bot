const { Telegraf } = require('telegraf');
const bot = new Telegraf('');
const config = require('./config');


bot.start((ctx) => ctx.reply(config.start));
bot.help((ctx) => {
    const commands = `/${config.commands.map((element) => element.key).join(' /')}`;
    ctx.reply(config.help + commands);
});

config.commands.forEach(element => {
    bot.command(element.key, (ctx) => {
        const nameCmd = ctx.update.message.text.slice(1).replace(config.bot.name, '');
        const [cmd] = config.commands.filter(x => x.key === nameCmd);
        if (cmd) {
            ctx.reply(cmd.value);
        } else {
            ctx.reply('Error: command not found');
        }
    })
});

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));