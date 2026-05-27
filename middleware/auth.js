const adminAuth = (req,res,next) =>{
    const token = 'xyz';
    const isAdminAuth = token === 'xyz';
    if(!isAdminAuth){
        res.status(401).send('Not authorized')
    }
    else{
        next()
    }
}

module.exports = {adminAuth}