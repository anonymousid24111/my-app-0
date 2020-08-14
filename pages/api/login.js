import jwt from 'jsonwebtoken'

import dbConnect from '../../utils/dbConnect'
import User from '../../models/user.model'
import auth from '../../utils/auth'

const handler=async (req, res) => {
    const { method } = req

    dbConnect()
    switch (method) {
        case 'GET':
          try {
            
            res.status(200).json({ success: true, data: "pets" })
          } catch (error) {
            res.status(400).json({ success: false })
          }
          break
        case 'POST':
          try {
            // console.log(req.cookies)
            const pet =await User.findOne(req.body);
            if (pet) {
              var token = jwt.sign({id: pet._id, name: pet.name }, process.env.PRIVATE_KEY);
              res.status(200).json({token: token, id: pet._id, name: pet.name})
            } else {
              res.status(400).json({message: "dang nhap khong thanh cong"})
            }
          } catch (error) {
            res.status(201).json(error)
          }
          break
        default:
          res.status(401).json({ message: "loi server" })
          break
      }
    }
    export default handler   