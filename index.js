require('dotenv').config();
const token = process.env.TOKEN
const { prefix, mongooseString } = require('./config.json')
const fs = require('fs')
const mongoose = require('mongoose')
mongoose.connect
const { Client } = require('discord.js')