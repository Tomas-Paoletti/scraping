
const additionTotalPC=(cpu,mother,ram,ssd,hdd,gpu)=>{
let total= cpu+mother+ram+ssd+hdd+gpu
return Math.ceil(total) 
}

export default additionTotalPC