

export function auth(permission){
    console.log(permission);
    return (req, res, next) => {
        if(req.body.role == permission){
            next();
        }else{
            return res.status(400).json({"not ok": "not great"});
        }
    }
}