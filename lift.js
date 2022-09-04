//Очень похоже на рекурсивный обход бинарного дерева
//Нужно выстроить массив
//Предположу что первый этаж это 0
// let arr = [['2','6'],['5','6'],['2','5'],['2','2'],['6','8'],['2','2'],['0','2']]
let arr = []

//2->5
//2->6

// if okay
// goThrough(25,array)
//где больше Null тот и прав

function ways(lvl,arr) {
    let ways = []
    for (let i = 0; i<arr.length; i++) {
        if (lvl == arr[i][0]) {
            ways.push(arr[i])
        }
    }
    return ways
}

let lvl  = 0
let count = -1
function go(lvl,arr) {
    count++
    // console.log(lvl)
    let w = ways(lvl,arr)
    for (let i = 0; i<w.length; i++) {
        if (w[i][0] != w[i][1]) 
        go(w[i][1],arr)
        // console.log(w[i][1])
    }
}

// go(0,arr)
// console.log(count)


var readline = require('readline');

var rl = readline.createInterface({

    input: process.stdin,

    output: process.stdout

});

let lines = 0
let lifts = 0
rl.on('line', function (data) {
    lines++
    if (lines==1) {
        lifts = 1*data
    }
    if ((lines<=(lifts+1))&&(lines>1)) {
        arr.push(data.split(" "))
    }
    
    if (lines==(lifts+1)) {
        
        console.log(solution(arr))
        process.exit(0)
    }
});

function solution(arr) {
    // console.log(arr)
   go('0',arr) 
   
    return count;
}
