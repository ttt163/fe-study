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

// function a () {this.b = 3;}
// var c = new a();
// a.prototype.b = 9;
// var b = 7;
// a();

// console.log(b);
// console.log(c.b);


// for (let i = 0; i < 4; i++) {
//     setTimeout(function() {
//       console.log(i);
//     }, 300);
// }

// class sup {
//   constructor() {
//     this.c = this.c.bind(this)
//   }
//   b = () => {
//     console.log('111')
//   }
//   c() {
//     console.log('ccc')
//   }
// }
// class sub extends sup {
//   b() {
//     consolse.log('222')
//   }
//   c() {
//     console.log('sc')
//   }
// }
// let ss = new sub()
// ss.b()
// ss.c()
// const root = {
//   a: '111'
// }
// const lastScheduledRoot = null
// const firstScheduledRoot = null
// const testQue = () => {
//   if (lastScheduledRoot === null) {
//     firstScheduledRoot = lastScheduledRoot = root
//     root.nextScheduledRoot = root
//   } else {
//     lastScheduledRoot.nextScheduledRoot = root
//     lastScheduledRoot = root
//     lastScheduledRoot.nextScheduledRoot = firstScheduledRoot
//   }
//   console.log(firstScheduledRoot, lastScheduledRoot, root)
// }

function trueCurrying(fn, ...args) {

  console.log(args.length, fn.length, [...arguments].slice(1))

  if (args.length >= fn.length) {

    return fn(...args)

  }

  return function (...args2) {

    return trueCurrying(fn, ...args, ...args2)

  }
}

const add = (a, b) => a + b
// const res = trueCurrying(add, 1, 3)
// console.log(res)

/// 以空参数为出口
const testCurry = (fn) => {
  let arr = []
  return replyCurry = (...arg) => {
    arr = [
      ...arr,
      ...arg
    ]
    if (arg.length === 0) {
      return arr.reduce((m, a) => {
        return fn(m, a)
      }, 0)
    }
    return replyCurry
  }
}
const fun = testCurry(add)
// console.log(fun(1)(2)(1)(4)(), '===')
/// 以add的参数个数为出口
const testCurry2 = (fn) => {
  return replyCurry = (...arg) => {
    if (arg.length >= fn.length) {
      return fn(...arg)
    }
    return (...arg2) => {
      return replyCurry(...arg, ...arg2)
    }
  }
}
const fun2 = testCurry2(add)
// console.log(fun2(5)(2), '===22')

function fn(n) {
  for (let i = 0; i < n.length; i++) {
    console.log(n, '====')
    for (let j = n.length - 1; j > i; j--) {
      if (n[i] > n[j]) {
        [n[i], n[j]] = [n[j], n[i]]
      }
    }
    console.log(n)
  }
  return n
}
var b = [1, 4, 5, 6, 2, 7]
// fn(b)

const setlectK = (arr, k, start, end) => {
  let p = arr[end]
  let i = arr[start]
  let j = arr[start]
  while (j < end) {
    if (arr[j] < p) {
      [arr[i], arr[j]] = [arr[j], arr[i]]
      i++
      j++
    } else {
      j++
    }
  }
  if (j === end) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  if (i === k) {
    return arr[i]
  } else {
    if (i + 1 < k) {
      // 右边
      setlectK(arr, k, i + 1, arr.length - 1)
    } else {
      // 左边
      setlectK(arr, k, 0, i - 1)
    }
  }
}
let a = [4, 2, 5, 12, 3]
let k = 3
// setlectK(a, k, 0, a.length)

// 
function deCopy(obj) {
  if (obj instanceof RegExp) {
    return new RegExp(obj)
  }
  if (typeof obj !== 'object') {
    return obj[key]
  }
  let newObj = new obj.__proto__.constructor
  for (let key in obj) {

    newObj[key] = deCopy(obj[key])
  }
}

Function.prototype._call = function (context = window, ...args) {
  if (this === Function.prototype) {
    return undefined
  }
  let fn = Symbol()
  context[fn] = this
  let res = context[fn](...args)
  delete context[fn]
  return res
}
Function.prototype._apply = function (context = window, args) {
  if (this === Function.prototype) {
    return undefined
  }
  let fn = Symbol()
  context[fn] = this
  let res
  if (Array.isArray(args)) {
    res = context[fn](...args)
  } else {
    res = context[fn]()
  }
  delete context[fn]
  return res
}
Function.prototype._bind = function (context = window, ...args) {
  if (this === Function.prototype) {
    return undefined
  }
  let _this = this
  return function F (...args2) {
    if (this instanceof F) {
      return new _this(...args, ...args2)
    }
    let fn = Symbol()
    context[fn] = _this
    let res =  context[fn](...args, ...args2)
    delete context[fn]
    return res
  }
}
var value = 2;
let foo = {
    value: 1
};
function bar(name, age) {
    return {
		value: this.value,
		name: name,
		age: age
    }
};
// var bindFoo2 = bar.bind(foo, "Jack", 20); // 返回一个函数
// var bindFoo2 = bar._call(this, "Jack"); // 返回一个函数
// console.log(bindFoo2, '===bindFoo2')
// console.log(bindFoo2(), '====111')
function _create(obj) {
  let F = new Function()
  F.prototype = obj
  let newObj = new F()
  if(obj === null) {
    newObj.__proto__ = null
  }
  return newObj
}

function _new(Cons, ...args) {
  let obj = _create(null)
  obj.__proto__ = Cons.prototype
  let res = Cons._call(obj, ...args)
  return typeof res === 'object' ? res : obj
}
function fn (a, b) {
  this.a = a
  this.b = b
  return {
    v: '111'
  }
}
console.log(_new(fn, 1,2))