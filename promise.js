const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  let IXX = await promiseTheaterIXX();
  let VGC = await promiseTheaterVGC();
  
  return new Promise((resolve)=>{
      let countIXX = IXX.filter((item)=>item.hasil == emosi).length;
      let countVGC = VGC.filter((item)=>item.hasil == emosi).length;

      resolve(countIXX + countVGC);
  })
};


module.exports = {
  promiseOutput,
};
