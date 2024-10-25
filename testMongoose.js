const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/emotion_7_1');

var Emotion = require('./models/emotion.js').Emotion

var emotion = new Emotion({
    title: "Радость",
    nick : "radost",
})

emotion.save();
