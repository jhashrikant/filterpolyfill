Array.prototype.myfilter = function (callbackfn){
  let filteredarr = [];

  for (let i = 0; i < this.length; i++) {
    const currentelement = this[i];
    const res = callbackfn(currentelement ,i ,this);
    if (res) filteredarr.push(currentelement);
  }
  return filteredarr;
}

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

function callbackfunction(currentelement ,index ,array){
  return currentelement.length > 6
}
//myfilter ek function hai words object ke andar like that we can assume

const res = words.myfilter(callbackfunction)
console.log(res);
