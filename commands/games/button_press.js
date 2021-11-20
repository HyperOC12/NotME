const Discord = require('discord.js');
const Commando = require('discord.js-commando');

module.exports = class Command extends Commando.Command {
	constructor(client) {
		super(client, {
			name: 'will-you-press-the-button',
			aliases: ['wyptb', 'button-press'],
			group: 'games',
			memberName: 'will-you-press-the-button',
			ownerOnly: false,
			guildOnly: true,
			description: 'Will you press the button?',
		});
	}

	async run(message) {
		await this.client.weky.WillYouPressTheButton({
			message: message,
			embed: {
				title: (await this.client.language('Will you press the button?', message)),
				description: `\`\`\`{{statement1}}\`\`\`\n**${this.client.language('BUT', message)}**\n\n\`\`\`{{statement2}}\`\`\``,
				color: this.client.config.discord.accentColor,
				footer: 'just a game',
				timestamp: true,
			},
			button: { yes: (await this.client.language('Yes', message)), no: (await this.client.language('No', message)) },
			thinkMessage: (await this.client.language("I'm thinking", message)),
			othersMessage: (await this.client.language('Only <@{{author}}> can use the buttons!', message)),
		});
	}
};
