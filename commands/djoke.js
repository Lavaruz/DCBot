const axios = require('axios')
const {SlashCommandBuilder} = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('djoke')
		.setDescription('Make some dark joke!'),
	async execute(interaction) {
        await axios.get('https://v2.jokeapi.dev/joke/Dark?type=single')
        .then((res) => {
            return interaction.reply(res.data.joke);
        })
	},
};