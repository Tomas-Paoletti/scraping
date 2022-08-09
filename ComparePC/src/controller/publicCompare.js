import rp from 'request-promise'
import $  from 'cheerio'
import ExtractPriceName from '../helpers/ScrapingText.js'
import ExtractDataUrl from '../helpers/ScrapingText.js'

const extractInfoURl = async(req,res)=>{

    const {urlCpu,urlMotherBoard,urlram,urlSSD,urlHDD,urlGPU,urlPowerSupply}= req.body

   // console.log({urlCpu})

  const cpu= ExtractDataUrl(urlCpu)
 
 console.log(cpu)
 let hola =() =>{
  
  console.log(cpu)
 

 }

  setTimeout( hola,5000)
  
  
}

export default extractInfoURl