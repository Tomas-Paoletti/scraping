import rp from 'request-promise'
import $  from 'cheerio'
import ExtractPriceName from '../helpers/ScrapingText.js'
import ExtractDataUrl from '../helpers/ScrapingText.js'
import additionTotalPC from '../helpers/AdditionPc.js'

const extractInfoURl = async(req,res)=>{

    const {urlCpu,urlMotherBoard,urlRam,urlSSD,urlHDD,urlGPU,urlPowerSupply}= req.body

   // console.log({urlCpu})

  const cpu= await ExtractDataUrl(urlCpu)
  console.log(cpu)
  const mother = await ExtractDataUrl(urlMotherBoard)
  console.log(mother)
  const ram= await ExtractDataUrl(urlRam)
  console.log(ram)
  const SSD= await ExtractDataUrl(urlSSD)
  console.log(SSD)
  const HDD= await ExtractDataUrl(urlHDD)
  console.log(HDD)
  const gpu= await ExtractDataUrl(urlGPU)
  console.log(gpu)
  const powerSuply= await ExtractDataUrl(urlPowerSupply)
  console.log(urlPowerSupply)
  const total =additionTotalPC(cpu.precio,mother.precio,ram.precio,SSD.precio,HDD.precio,powerSuply.precio)
console.log(total)
}

export default extractInfoURl