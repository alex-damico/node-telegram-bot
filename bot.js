const { Telegraf } = require('telegraf');
const config = require('./config');
const bot = new Telegraf(process.env.BOT_TOKEN || config.bot.token);

bot.start((ctx) => ctx.reply(config.start));
bot.help((ctx) => {
    const commands = `/${config.commands.map((element) => element.key).join(' /')}`;
    ctx.reply(config.help + commands);
});

config.commands.forEach(element => {
    bot.command(element.key, (ctx) => {
        const keyCmd = ctx.message.text.replace('/', '');
        const [cmd] = config.commands.filter(x => x.key === keyCmd);
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