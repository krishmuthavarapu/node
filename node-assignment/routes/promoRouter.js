const express = require('express');
const bodyParser = require('body-parser');
const promoRouter = express.Router();

promoRouter.use(bodyParser.json());
promoRouter.route('/')
.all((req,res,next)=>{
    res.statusCode= 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('We will send all the promotions to You');
})
.put((req,res,next)=>{
    res.statusCode=403;
    res.end('put operation doesnt support here');
})
.post((req,res,next)=>{
    res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);
})
.delete((req,res,next)=>{
    res.end('Deleting all promotions');
});

promoRouter.route('/:promoId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send the promotion: '+req.params.promoId+ " to you");
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('post doest work here on promotions/'+req.params.promoId);
})
.put((req, res, next) => {

    res.write('updating the promotion: '+req.params.promoId+ '\n');
    res.end('will update the promotion: ' +req.body.name+'\n'+'with details :'+req.body.description)
})
.delete((req, res, next) => {
    res.end('Deleting the promotion:' +req.params.promoId);
});
module.exports = promoRouter;