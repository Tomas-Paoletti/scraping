import rp from 'request-promise'
import $  from 'cheerio'

const extractInfoURl = async(req,res)=>{

    const {urlCpu}= req.body

    console.log({urlCpu})

    rp(urlCpu)
  .then(function(html) {
    console.log("putita")
   const precio=$("div.textPrecio", html).text()
   
 const nombre= $("h1.tituloProducto.hidden-xs", html).text()
  console.log("listo")
 
  return   res.send(console.log(nombre, precio))
  })
  .catch(function(err) {
    //handle error
    return res.send(err)
  });

  
}

export default extractInfoURl