const axios = require('axios')
const {SlashCommandBuilder} = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('joke')
		.setDescription('Make some joke!'),
	async execute(interaction) {
        await axios.get('https://v2.jokeapi.dev/joke/Any?type=single')
        .then((res) => {
            return interaction.reply(res.data.joke);
        })
	},
};