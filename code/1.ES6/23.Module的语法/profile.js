export const firstName = 'Michael'
export const lastName = 'Jackson'
export const year = 1958

// 第二种写法
const age = 51
const address = 'America'
export { age, address }

// 还可以输出函数或者类

export function getRandomNumber (begin = 1, end = 100) {
    return Math.floor(Math.random() * end) + begin
}

// 使用as 作为别名

function haha () {}

function hehe () {}

export { haha as happy, hehe as sabi,hehe as sad }

// 报错
//export 1;
