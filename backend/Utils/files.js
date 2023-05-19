const multer = require("multer");

const storage = multer.diskStorage({
    destination:(req , file , cb)=>{
        cb(null , '.\\public\\appFiles\\')
    },
    filename:(req , file , cb)=>{
        cb(null ,Date.now()+file.originalname)
    }
})


//updating profile picture
const filter = (req , file , cb)=>{
    if(file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg'){
        cb(null , true)
    }else{
        cb(new Error("UnSupported file") , false)
    }
}


const upload = multer({
   storage:storage,
   fileFilter:filter,
    limits:1024*1024*10
})

module.exports = {
    upload,
    storage,
    filter
}