var express = require('express');
var router = express.Router();
var Emotion = require('../models/emotion').Emotion;


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с emotions');
});

/* Страница эмоций */
router.get("/:nick", async function(req, res, next) 
{
    var emotions = await Emotion.find({nick: req.params.nick});
    console.log(emotions)
    if(!emotions.length) return next(new Error("Нет такой эмоции в мультфильме Головоломка"))
    var emotion = emotions[0];
    res.render('emotion', 
        {
        title: emotion.title,
        picture: emotion.avatar,
        desc: emotion.desc
    })
});
    
    

module.exports = router;
