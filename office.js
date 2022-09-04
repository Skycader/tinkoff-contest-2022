var readline = require('readline');

var rl = readline.createInterface({

    input: process.stdin,

    output: process.stdout

});
//6 6 8 8
//1 8 4 9
//=> 49
let lines = 0
let x1,y1,x2,y2,x3,y3,x4,y4 = 0
rl.on('line', function (data) {
        lines++
        if (lines==1) {
            data = data.split(" ")
            x1 = 1*data[0]; y1=1*data[1]; x2=1*data[2]; y2=1*data[3]
        }
        if (lines==2) {
            data = data.split(" ")
            x3 = 1*data[0]; y3=1*data[1]; x4=1*data[2]; y4=1*data[3]
        console.log(solution(x1,y1,x2,y2,x3,y3,x4,y4)); process.exit(0);
        }

});

// console.log(x1,y1,x2,y2)
//Нужно найти сперва 2 самых крайних точки, 
//у полученного прямоугольника найти самую
//ддинную сторону и умножить на себя - это и есть ответ

function solution(x1,y1,x2,y2,x3,y3,x4,y4) {
    let x1min = x1<x2 ? x1 : x2
    let x2min = x3<x4 ? x3 : x4
    let xmin = x1min<x2min ? x1min : x2min

    let y1min= y1<y2 ? y1 : y2
    let y2min = y3<y4 ? y3 : y4
    let ymin = y1min < y2min ? y1min : y2min

    let x1max = x1>x2 ? x1 : x2
    let x2max = x3>x4 ? x3 : x4
    let xmax = x1max>x2max ? x1max : x2max

    let y1max = y1>y2 ? y1 : y2
    let y2max = y3>y4 ? y3 : y4
    let ymax = y1max > y2max ? y1max : y2max

    let xside = xmax-xmin
    let yside = ymax-ymin

    let maxSide = xside>yside ? xside : yside 

    let result = maxSide*maxSide

    return result

    
}
