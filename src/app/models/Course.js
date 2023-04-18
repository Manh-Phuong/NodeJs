const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Course = new Schema({
    title: {type: String},
    slug: {type: String, slug: 'title', unique: true}
})


module.exports = mongoose.model('course', Course)