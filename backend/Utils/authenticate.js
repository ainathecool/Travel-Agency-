

let checkAdmin = (req,res,next)=>{
 
    if(req.decoded.role == 'admin'){
    console.log(req.decoded)
        next();
    }
    else
        res.status(401).send({"Message":"You are not admin"})

}

let checkUser = (req,res,next)=>{
 
    if(req.decoded.role == 'user'){
    console.log(req.decoded)
        next();
    }
    else
        res.status(401).send({"Message":"You are not User"})

}



module.exports = {
    checkAdmin,
    checkUser
}