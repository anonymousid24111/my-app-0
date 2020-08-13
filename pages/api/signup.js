import dbConnect from '../../utils/dbConnect'
import User from '../../models/user.model'
export default async function handler(req, res) {
    const { method } = req

    await dbConnect()
    switch (method) {
        case 'GET':
          try {
            const pets = await User.find({}) /* find all the data in our database */
            res.status(200).json({ success: true, data: pets })
          } catch (error) {
            res.status(400).json({ success: false })
          }
          break
        case 'POST':
          console.log(req.body)
          try {
            const pet = await User.create(
              req.body
            ) 
            res.status(201).json({ success: true, data: pet })
          } catch (error) {
            res.status(400).json({ success: false })
          }
          break
        default:
          res.status(400).json({ success: false })
          break
      }
    }