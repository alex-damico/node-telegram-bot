# node-telegram-bot
Telegram Bot

## Creare un bot telegram e ottenere il Token
Eccoci arrivati al primo passaggio. Creare un bot telegram è molto molto semplice. Ci basterà contattare su telegram il padre di tutti i bot, il @BotFather.
Per trovarlo vi basterà cercare nella barra di ricerca di Telegram, @BotFather.

Dopo averlo trovato dovrete eseguire dei semplici comandi per creare il bot e assegnarli un nome.
Scrivendo  ```/newbot``` il BotFather vi chiederà un nome da assegnare al vostro bot, potete usare quello che volete. Dopodiché dovrete assegnarli un username che finisca con la parola bot. Facendo un esempio pratico:


- Nome: ArancinDeployBot
- Username: ArancinDeployBot

Dopo aver dato anche l’username (se disponibile) il BotFather vi darà un messaggio di conferma dicendo che il bot è stato creato correttamente e vi darà un Token.

## Configurazione
File ```config.js```
```
{
    bot: {
        token: "", <--- riportare il token del bot
        name: "@ArancinDeployBot" <--- riportare il nome del bot
    },
    help: "Ecco la lista dei comandi a disposizione: ", <-- vengo accodati i comandi disponibili
    start: "Avvio bot", <--- messaggio avvio bot
    commands: [{    <--- lista dei comandi disponibili
        key: "info",    <--- nome del comando
        value: `Ciao! 😃`   <--- testo da visualizzare
    }..]
}

```

## Per visualizzare i comandi su telegram
Aprire di nuovo @BotFather, dare il seguente comando ```/mybots```, premere sul bot che si vuole aggiungere i comandi. Premere su ```Edit bot```, premere su ```Edit commands``` e aggiungere tutti i comandi con la sintassi espressa sul bot.

Esempio: 
```
help - aiuto
start - avvio bot
info - informazioni
team - organizzatori
where - dove
when - quando
```


## Comandi utili per start / stop processo nodejs con pm2
Installare pm2 ```npm install pm2 -g```.

- Start processo ```pm2 start bot.js```
- Stop processo ```pm2 stop bot.js```
- Cancellare processo ```pm2 delete bot.js```
- Log ```pm2 monit```
- Lista processi ```pm2 list```