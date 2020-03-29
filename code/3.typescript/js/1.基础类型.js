"use strict";
/*
  typescript的数据类型

  boolean
  number
  string
  array
  tuple
  enum
  any
  null 和 undefined
  void
  never
 */
/*
    typescript
    2020年3月29日22:01:59
 */
// 基础类型
// 1.布尔值 ：boolean
var isDone = false;
// 2.数字： number
var age = 123.45;
// 3.字符串：string
var str = 'Ray';
// 4.数组 []   Array
// 第一种方法
var list = [1, 2, 3, 4];
// 第二种方法
var list2 = ['hello', 'world'];
// 5.元组 Tuple
// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
// 比如，你可以定义一对值分别为string和number类型的元组。
var arr;
arr = [123, 'hello'];
console.log(arr[0]);
//arr[2] = false;  // 这里报错
//console.log(arr[2])   // 这里报错
// 6.枚举 enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color["Yellow"] = "yellow";
})(Color || (Color = {}));
var c = Color.Blue;
console.log('color:', c, Color.Yellow); // 2 yellow
// 7. 任意值 any
var notSure = 4;
notSure = false;
console.log('any:', notSure);
// 8. 空值 void
function getVoid() {
    console.log('I\'m void');
}
var theVoid = undefined; // 只能赋予undefined 。 赋予null都报错，和官方文档不一致
// 9. null 和 undefined
var u = undefined;
var n = null;
// 10. never
// doubt: 不解
/*
never类型表示的是那些永不存在的值的类型。 例如，never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是never类型，当它们被永不为真的类型保护所约束时。

never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使any也不可以赋值给never。

下面是一些返回never类型的函数：
 */
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop() {
    while (true) {
    }
}
// 11.断言类型
// 第一种写法
var someValue = 'this is a string';
var strLength = someValue.length;
// 第二种写法:然而，当你在TypeScript里使用JSX时，只有as语法断言是被允许的。
var strLength2 = someValue.length;
