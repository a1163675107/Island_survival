function createCD(beforeFunc,afterFunc=function(){},wait){
  let timeout;
  return function(...args){
      if(!timeout){
          timeout=true;
          beforeFunc(args);
          setTimeout(()=>{
              afterFunc(args);
              timeout=false;
          },wait)
      };
  }
}
export {createCD}
