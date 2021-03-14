require('dotenv').config();
const token = process.env.TOKEN
const { prefix, mongooseString } = require('./config.json')
const fs = require('fs')
const mongoose = require('mongoose')
mongoose.connect(mongooseString, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

const db = new mongoose.model('modmail-transcript', 
    new mongoose.Schema({
        AuthorID: String,
        Content: Array
    })
)
const { Client, Message, MessageEmbed, MessageAttachment } = require('discord.js')
const bot = new Client()

bot.on('ready', () => {
    console.log(`${bot.user.username} has logged in.`)
    client.user.setActivity(`your DM's`, { type: 'WATCHING' })
      .catch(console.error);   
})

/**
 * @param {Message} message
 * @param {Client} bot
 */

bot.on('message', async(message) => {
    if (message.author.bot) return;
    const args = message
})