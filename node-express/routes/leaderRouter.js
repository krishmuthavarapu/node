const express = require('express');
const bodyParser = require('body-parser');
const leaderRouter = express.Router();
 
leaderRouter.use(bodyParser.json());
leaderRouter.route('/')
.all((req,res,next)=>{
    res.statusCode= 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('We will send all the Leaders list to You');

})
.put((req,res,next)=>{
    res.statusCode=403;
    res.end('put operation doesnt support here');
})
.post((req,res,next)=>{
    res.end('Will add the Leader: ' + req.body.name + ' with details: ' + req.body.description);
})
.delete((req,res,next)=>{
    res.end('Deleting leader lists');
});


leaderRouter.route('/:leaderId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send the Leader: '+req.params.leaderId+ " to you");
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('post doest work here/'+req.params.leaderId);
})
.put((req, res, next) => {

    res.write('updating the Leader: '+req.params.leaderId+ '\n');
    res.end('will update the Leader: ' +req.body.name+'\n'+'with details :'+req.body.description)
})
.delete((req, res, next) => {
    res.end('Deleting the Leader:' +req.params.leaderId);
});
module.exports = leaderRouter;