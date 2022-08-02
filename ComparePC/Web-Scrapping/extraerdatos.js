import rp from 'request-promise'
import $  from 'cheerio'

// mercadolibreconst url ="https://articulo.mercadolibre.com.ar/MLA-1115611822-pinzas-kit-set-3-pinzas-alicate-industrial-alto-voltaje-_JM#reco_item_pos=0&reco_backend=machinalis-seller-items-pdp&reco_backend_type=low_level&reco_client=vip-seller_items-above&reco_id=713aea85-2ef7-4ba3-899e-398f04cfef9e"
const url= "https://www.hardgamers.com.ar/product/-2107182929"


rp(url)
  .then(function(html) {
   // console.log($("span.andes-money-amount__fraction", html).text()); MERCADOLIBRE en este hay que sacar los centavos y ver como hacer con el de descuento// es importante poner la clase . el nombre de la clase
   console.log($("div.textPrecio", html).text());//venex
   console.log($("p.product-price", html).text());//hardDigital
   console.log($("div.precio_web", html).text());//gezatek
   console.log($("font.precio", html).text());//megasoftArg en este hay que parsear a uno solo
   console.log($("span.price", html).text());//smarts y delta hayq ue hacer un comparador o array y poner el segundo
   console.log($("h4.js-price-display", html).text());//maxtecno hacer que solo aparezca los numeros del principio
   console.log($("span.span-price-static-special", html).text());// delta hay que diferenciar de smart ya que tambnien tiene un spna price
   console.log($("h1.prod-details-price", html).text());//hardGamers producto solo


  })
  .catch(function(err) {
    //handle error
  });