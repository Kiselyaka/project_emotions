const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/emotion_7_1');
const Emotion = mongoose.model('Emotion', { name: String });
const emotion = new Emotion({ name: 'Счастье' });
emotion.save().then(() => console.log('Смена имоции -_-'));
