import rp from 'request-promise'
import $  from 'cheerio'
import ExtractPriceName from '../helpers/ScrapingText.js'
import ExtractDataUrl from '../helpers/ScrapingText.js'

const extractInfoURl = async(req,res)=>{

    const {urlCpu,urlMotherBoard,urlram,urlSSD,urlHDD,urlGPU,urlPowerSupply}= req.body

   // console.log({urlCpu})

  const cpu= await ExtractDataUrl(urlCpu)
  console.log(cpu)
  
  
}

export default extractInfoURl