var express = require('express');
var router = express.Router();
var Emotion = require('../models/emotion').Emotion;
var checkAuth = require("../middlewares/checkAuth.js");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с emotions. В пособии написано(конкретно в пункте 8.4 удаляем этот маршрутизатор), что необходимо его удалить. У Юлии Петровны в репозитории этого она не делает. Решил оставить пока что этот маршрутизатор, но без него все следующие подадресса работают(проверил).Ну также это как возможность доказать, что это мой код, если возникнет ситуация с копированием.');
});

/* Страница эмоций */
router.get("/:nick", checkAuth, async function(req, res, next) 
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
