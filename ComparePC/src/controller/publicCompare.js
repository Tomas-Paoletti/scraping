import rp from 'request-promise'
import $  from 'cheerio'
import ExtractPriceName from '../helpers/ScrapingText.js'
import ExtractDataUrl from '../helpers/ScrapingText.js'

const extractInfoURl = async(req,res)=>{

    const {urlCpu,urlMotherBoard,urlram,urlSSD,urlHDD,urlGPU,urlPowerSupply}= req.body

   // console.log({urlCpu})

  const cpu= await ExtractDataUrl(urlCpu)
  console.log(cpu)
 /* const mother = await ExtractDataUrl(urlMotherBoard)
  console.log(mother)
  const ram= await ExtractDataUrl(urlram)
  console.log(ram)
  const SSd= await ExtractDataUrl(urlSSD)
  console.log(ssd)
  const HDD= await ExtractDataUrl(urlHDD)
  console.log(HDD)
  const gpu= await ExtractDataUrl(urlGPU)
  console.log(cpu)
  const powerSuply= await ExtractDataUrl(urlPowerSupply)
  console.log(urlPowerSupply)
  */
}

export default extractInfoURl