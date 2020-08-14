import auth from '../../utils/auth'
const handle = (req, res)=>{
    return res.status(200).json("content of private")
}
export default auth(handle)