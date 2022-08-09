import rp from 'request-promise'
import $  from 'cheerio'


const page = [{
  namePage: 'venex.com.ar', 
  price: "div.textPrecio",
  name: "h1.tituloProducto.hidden-xs" 
}]


const ExtractDataUrl= (Url) =>{

// ver substr 
// para paginas con www usar console.log("https://www.venex.com.ar/componentes-de-pc/microprocesadores/microprocesador-intel-celeron-g5905-350ghz-4mb-s1200.html".substr(12,5))

    // console.log('prueba', JSON.stringify(Url))
    // console.log('objeto', Url)
    console.log('okey...')
    let urlStringify =JSON.stringify(Url)

   
      
    
     const pageProduct = page.find(page => page.namePage == urlStringify.substring(13,25))
 //console.log(pageProduct)
     if(pageProduct === undefined){
        console.log('mierdaaa')
      }
     rp(Url)
    .then(function(html) {
     
      console.log("putita")
    let precio=($(pageProduct.price, html).text()).trim()// ;a funcion trim lo que hace es sacar los espacios en blanco alrededor de las palabras

     precio =precio.slice(1)
  let nombre= ($(pageProduct.name, html).text()).trim()
  
    console.log("listo")
   
    return  [nombre, precio]
    
    })
    .catch(function(err) {
      //handle error
      return console.log(err)
    });
    
}


export default ExtractDataUrl