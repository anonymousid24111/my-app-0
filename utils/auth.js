import jwt from 'jsonwebtoken'

const auth = (handler) => (req, res) => {
    jwt.verify(req.cookies.token, process.env.PRIVATE_KEY, function(err, decoded){
        if (err) {
            res.status(400).json(err)
        } else {
            return handler(req, res)
        }
    })
  }
  
  export default auth