module.exports = {
    multilMo: function(mongooses) {
        return mongooses.map(mongoose => mongoose.toObject())
    },
    oneMo: function(mongoose) {
        return mongoose ? mongoose.toOject() : mongoose
    }
}
