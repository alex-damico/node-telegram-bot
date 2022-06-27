const { Telegraf } = require('telegraf');
const config = require('./config');
const bot = new Telegraf(process.env.BOT_TOKEN || config.bot.token);

bot.start((ctx) => ctx.reply(config.start));
bot.help((ctx) => {
    const commands = `/${config.commands.map((element) => element.key).join(' /')}`;
    ctx.reply(config.help + commands);
});

bot.command((ctx) => {
    const keyCmd = ctx.message.text.replace('/', '').replace(`@${config.bot.name}`, '');
    const [cmd] = config.commands.filter(x => x.key === keyCmd);
    if (cmd) {
        ctx.reply(cmd.value);
    }
});

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));