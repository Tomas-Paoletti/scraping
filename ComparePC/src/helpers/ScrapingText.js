import rp from 'request-promise'
import $  from 'cheerio'


const page = [{
  namePage: '.venex.com', 
  price: "div.price-content-product",
  name: "h1.tituloProducto.hidden-xs" 
},
{
  namePage: "d-digital.",// this name is for page hard-digital
  price: "p.product-price",
  name: "h1.my-2"
},
{
  namePage: ".gezatek.c",
  price: "h7:gt(1)",
  name: "h3:first"
},
{
  namePage: ".megasofta",// this name is for page megasoftargentina
  price: "font.precio:last",
  name: "h2.title"
},{
  namePage: "rts.com.ar/",// this name is for page smarts
  price: "span.price:eq(1)",//eq busca por la lista de elementos q salen
  name: "span.base"
},{
  namePage: "ta.com.ar/",// this name is for page delta
  price: "span.span-price-static-special",
  name: "span.base"
},{
  namePage: ".maxtecno.",// this name is for page maxtecno
  price: "h4#price_display_discount",
  name: "h1#product-name"
},{
  namePage: ".hardgamer",
  price: "h1.prod-details-price",
  name: "h1.prod-details-name"
},{
  namePage: "iculo.merc",//puto mercadolibre no funciona
  price: "div.ui-pdp-price__second-line:has(span.andes-money-amount__fraction)",
  name: "h1.ui-pdp-title"
}]


const ExtractDataUrl= async (Url) =>{

  // ver substr 
  // para paginas con www usar console.log("https://www.venex.com.ar/componentes-de-pc/microprocesadores/microprocesador-intel-celeron-g5905-350ghz-4mb-s1200.html".substr(12,5))

    // console.log('prueba', JSON.stringify(Url))
    // console.log('objeto', Url)
   
    let urlStringify =JSON.stringify(Url)      
   console.log(urlStringify.substring(12,22))
    //if( urlStringify.includes('s.com.ar')){urlStringify= 's.com.ar'}
     const pageProduct = page.find(page => page.namePage == urlStringify.substring(12,22))
    console.log(pageProduct.namePage)
     

    const html = await rp(Url);
  
   
     
      let precio=($(pageProduct.price, html).text()).trim().replace(/[^\d]/g, '')// ;a funcion trim lo que hace es sacar los espacios en blanco alrededor de las palabras

    if (pageProduct.namePage=== '.gezatek.c' || pageProduct.namePage === 'rts.com.ar/' 
    ||pageProduct.namePage=== '.maxtecno.'||pageProduct.namePage=== '.hardgamer'||pageProduct.namePage=== 'iculo.merc'){precio/=100,  console.log('wtf')}
      console.log(typeof(precio))
    //  if (pageProduct.namePage=== '.maxtecno.' ){precio = Math.ceil(precio)}
    //if (pageProduct.namePage=== 'iculo.merc'){precio = precio/(Math.pow(10,8))}
      let nombre= ($(pageProduct.name, html).text()).trim()
  
      console.log("listo")
   
      return {nombre, precio}
    
   
  

}


export default ExtractDataUrl