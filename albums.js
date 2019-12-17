var express = require('express');
var cors= require('cors');
const formidable= require('formidable');
const fs = require('fs');
var router= express.Router();

router.get('/',function(req,res){
    res.send('respond with a resource');
});

router.get('/init',cors(),function(req,res){
    var db=req.db;
    var collection=db.get('userList');
    friends=[];
    if(req.cookies.userID){
        collection.find({'userID':res.cookie.userID},{fields:{username:1}},function(err,docs){
            if(err===null){
                res.json(docs);
            }
            else res.send({msg:'bitch'});
        })
    }
    else res.send({msg:''});
});

router.post('/login',cors(),function(req,res){
    var db=req.db;
    var collection=db.get('userList');
    var username= req.body.username;
    var password=req.body.password;
    collection.findOne({'username':username,'password':password},{},function(err,docs){
    if(err===null){
        if(docs){
            res.cookie('userID',docs._id,{maxAge:1000*3600});
            collection.find({
                'username':{
                    $in:docs.friends
                }
            },{
                fields:{'username':1}
            }).then(friends =>{
                res.json(friends);
                console.log(friends);
            }).catch(e =>{
                res.send(e);
                console.log(e);
            });
            // docs.friends.for(element => {
            //     collection.find({'username':element},{},function(err,docs){
            //     console.log(docs);
    }
}
        else res.send({msg:'Login Failure'});
});
});

router.get('/logout',cors(),function(req,res){
    res.clearCookie('loginName');
    res.send({msg:''});
});

router.get('/getalbum/:userid',cors(),function(req,res){
    var db=req.db;
    var photoCollection=db.get('photoList');
    userID=req.params.userid;
    if(userID==='0'){
        userID=req.cookies.userID;
    }
    let condition={};
    if(userID){
        condition.userid=userID;
    }
    console.log(condition);
        photoCollection.find(condition,{fields:{userid:0}},function(err,docs){
            if(err===null){
                res.json(docs);}
                else res.send({msg:err});
        });
    
});

router.post('/uploadphoto',cors(),function(req,res){
        var db= req.db;
        var public ='./public';
        photoCollection= db.collection('photoList');
        let form = new formidable.IncomingForm();
        form.parse(req, (err,fields,files)=>{
            console.log(files.file.name);
            let ts = new Date().getTime();
            let new_path = '/uploads/'+ts+files.file.name;
            fs.rename(files.file.path,public+new_path,err=>{
                if(err){
                    res.send(err);
                }
                else {
                        photoCollection.insert({'url':'http://localhost:3002'+new_path,userid:req.cookies.userID,likedby:[]},function(err,docs){
                            (err===null)?res.json({'url':'http://localhost:3002'+new_path,userid:req.cookies.userID}):res.send({msg:err});
                        })
                                    }
            })
        });
})

router.delete('/deletephoto/:photoid',cors(),function(req,res){
    var db=req.db;
var collection= db.get('photoList');
var photoToDelete=req.params.photoid;
var filter={"_id":photoToDelete};
console.log(photoToDelete);
collection.findOne(filter,function(err,docs){
    if(docs){
    new_url = docs.url;
    new_url=new_url.replace('http://localhost:3002','./public');
    console.log('./public'+new_url);
    collection.remove(filter,function(err,result){
        if(err===null){
                fs.unlinkSync(new_url)
                res.send({msg:''});
                
        }
           else res.send({msg:err});
})
    }
    else{
        res.send({msg:'photo not found'});
    }
})


});

router.put('/updatelike/:photoid',cors(),function(req,res){
    var db= req.db;
    var photoCollection= db.get('photoList');
    var userCollection = db.get('userList');
    var name;
    var filter={"_id":req.params.photoid};
    console.log(filter);
    userCollection.findOne({_id:req.cookies.userID},function(err,doc){
        name=doc.username;
        photoCollection.update(filter, {$addToSet:{'likedby':name}},function(err,result){
            if(err===null){res.send(result);}
            else res.send({msg:err});
        });
    })
    


})
module.exports=router;
router.options("/*",cors());

