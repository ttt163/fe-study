// new Promise(() => {
//     throw new Error
// }).then(() => {
//     console.log(1)
// }, () => {
//     console.log(2)
// }).then(() => {
//     consosle.log(3)
// }).catch(() => {
//     console.log(4)
// })

//  function dc (obj) {
//    if(obj === null) {
//      return null
//    }
//    let con = obj.constroctor
//    let newObj = null
//    switch(con) {
//      case RegExp:
//       newObj = new con()
//       break
//       case Date:
//       newObj = new con()
//       break
//       default:
//         newObj = new con()
//    }
//    for(let key in obj) {
//     newObj[key] = typeof obj[key] === 'object' ? dc(obj[key]) : obj[key]
//    }
//    return newObj
//  }

// function debounce(fn, time, outTime) {
//   let cId = 0
//   let last 
//   return function(...arg) {
//     clearTimeout(cId)
//     let curr = new Date()
//     if(!last) {
//       last = curr
//     } 
//     if(curr - last > outTime) {
//       fn(...arg)
//       last=curr
//     } else {
//       cId = setTimeout(function(){
//         fn(...arg)
        
//       }, time)
//     }
//   }
  
// }

function a () {this.b = 3;}
var c = new a();
a.prototype.b = 9;
var b = 7;
a();

console.log(b);
console.log(c.b);


for (let i = 0; i < 4; i++) {
    setTimeout(function() {
      console.log(i);
    }, 300);
}

class sup {
  constructor() {
    this.c = this.c.bind(this)
  }
  b = () => {
    console.log('111')
  }
  c() {
    console.log('ccc')
  }
}
class sub extends sup {
  b() {
    consolse.log('222')
  }
  c() {
    console.log('sc')
  }
}
let ss = new sub()
ss.b()
ss.c()
const root = {
  a: '111'
}
const lastScheduledRoot = null
const firstScheduledRoot = null
const testQue = () => {
  if (lastScheduledRoot === null) {
    firstScheduledRoot = lastScheduledRoot = root
    root.nextScheduledRoot = root
  } else {
    lastScheduledRoot.nextScheduledRoot = root
    lastScheduledRoot = root
    lastScheduledRoot.nextScheduledRoot = firstScheduledRoot
  }
  console.log(firstScheduledRoot, lastScheduledRoot, root)
}
