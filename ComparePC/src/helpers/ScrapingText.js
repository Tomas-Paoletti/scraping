import rp from 'request-promise'
import $  from 'cheerio'


const page = [{
  namePage: 'venex.com.', 
  price: "div.textPrecio",
  name: "h1.tituloProducto.hidden-xs" 
},
{
  namePage: "-digital.c",// this name is for page hard-digital
  price: "p.product-price",
  name: "my-2"
},
{
  namePage: "gezatek.co",
  price: "h7:gt(1)",
  name: "h3:first"
},
{
  namePage: "megasoftar",// this name is for page megasoftargentina
  price: "font.precio:last",
  name: "h2.title"
},{
  namePage: "ts.com.ar/",// this name is for page smarts
  price: "span.price:eq(1)",//eq busca por la lista de elementos q salen
  name: "span.base"
}]


const ExtractDataUrl= async (Url) =>{

  // ver substr 
  // para paginas con www usar console.log("https://www.venex.com.ar/componentes-de-pc/microprocesadores/microprocesador-intel-celeron-g5905-350ghz-4mb-s1200.html".substr(12,5))

    // console.log('prueba', JSON.stringify(Url))
    // console.log('objeto', Url)
   
    let urlStringify =JSON.stringify(Url)      
   console.log(urlStringify.substring(13,23))
    //if( urlStringify.includes('s.com.ar')){urlStringify= 's.com.ar'}
     const pageProduct = page.find(page => page.namePage == urlStringify.substring(13,23))
    console.log(pageProduct.namePage)
     

    const html = await rp(Url);
  
   
     
      let precio=($(pageProduct.price, html).text()).trim().replace(/[^\d]/g, '')// ;a funcion trim lo que hace es sacar los espacios en blanco alrededor de las palabras

    if (pageProduct.namePage=== 'gezatek.com.' || 'ts.com.ar/'){precio/=100}
      console.log(typeof(precio))
 
      let nombre= ($(pageProduct.name, html).text()).trim()
  
      console.log("listo")
   
      return {nombre, precio}
    
   
  

}


export default ExtractDataUrl