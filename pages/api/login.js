export default async function handler(req, res) {
    const { method } = req
    switch (method) {
        case 'GET':
          try {
            
            res.status(200).json({ success: true, data: "pets" })
          } catch (error) {
            res.status(400).json({ success: false })
          }
          break
        case 'POST':
          console.log(req.body)
          try {
            
            res.status(201).json({ success: true, data: "pet" })
          } catch (error) {
            res.status(400).json({ success: false })
          }
          break
        default:
          res.status(400).json({ success: false })
          break
      }
    }