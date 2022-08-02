import {Router} from 'express'
import extractInfoURl from '../controller/publicCompare.js'
 const publicRouter = Router()

 publicRouter.post('/', extractInfoURl )

 export default publicRouter