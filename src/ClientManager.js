module.exports = class ClientManager {
    
    constructor(options = {}) {
		const mineflayer = require('mineflayer');
        if(!options.host || !options.username || !options.password) throw new Error('Missing required values:\n' + ['host','username','password'].filter(x => !options[x]).join('\n'))
        let client = mineflayer.createBot({
            host: options.host,
            username: options.username,
            password: options.password,
            version: options.version || false
        });
        const bindEvents = require('./events');
        bindEvents(client);
        client.connectedToMCServer = true;
        this.instance = {"bot":client,"username":options.username,"password":options.password};
        return client;
    }

    static getInstance() {
        return this.instance;
	}
}
