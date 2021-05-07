// 原型链
function Sup1() {}
function Sub1() {}
Sub1.prototype = new Sup1()
// 借助构造函数
function Sup2(name) {
    this.name = name
}
function Sub2(...args) {
    Sup2.call(this, ...args)
}
// 原型链+借助构造函数
function Sup3(name) {
    this.name = name
}
Sup3.prototype.sayHi = function(){}
function Sub3(...args) {
    Sup2.call(this, ...args)
}
Sub3.prototype = new Sup3()
// 原型式
function object(obj) {
    function fn() {}
    fn.prototype = obj
    return new fn()
}
var obj = {
    name: '11'
}
var newObj = object(obj)
// 寄生式
var obj2 = {
    name: '11'
}
let newObj2 = object(obj2)
newObj2.sayHi = function() {}
// 寄生+借助构造函数
function SuP5(name) {
    this.name = name
}
function Sub5(...args) {
    SuP5.call(this, ...args)
}
function inh(sub, sup) {
    sub.prototype = object(sup.prototype)
}
inh(SuP5, Sub5)
// es6 extends
class sup6{
    constructor(name) {
        this.name
    }
}
class Sub6 extends sup6{
    constructor(...args) {
        super(...args)
    }
}