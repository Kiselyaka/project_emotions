const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/emotion_7_1');

var schema = mongoose.Schema({ name: String })

schema.methods.brbr = function(){
    console.log(this.name + " к нам вернулось")
    }

const Emotion = mongoose.model('Emotion', schema);

const emotion = new Emotion({ name: 'Счастье' });
emotion.save().then(() => emotion.brbr ());
