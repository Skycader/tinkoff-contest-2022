//Чтобы найти команду, которая вще других побеждала
//Надо:
//1. В массив победителей добавлять отсортированный массив (по именам),
//так, чтобы получалась идентичная строка вне зависимости от расположения имен
//и добавить эту строку в массив.
//2. Найти наиболее частое включение в массиве строки победителей.

var readline = require('readline');

var rl = readline.createInterface({

    input: process.stdin,

    output: process.stdout

});
/*
5
MIKHAIL VLADISLAV GRIGORY
VLADISLAV MIKHAIL GRIGORY
IVAN ILYA VLADIMIR
ANDREY VLADIMIR ILYA
VLADIMIR IVAN ANDREY
==> 2
*/
let lines = 0
let winnersCount = 0
let winners = [] //array of idents
rl.on('line', function (data) {
        lines++
        if (lines==1) {
           winnersCount = 1*data
        }
        if ((lines<=(winnersCount+1))&&(lines>1)) {
            let team = data.split(" ")
            team.sort()
            team = team.join("")
            winners.push(team)
           
        }
        if (lines==(winnersCount+1)) {
            let bestTeam = mode(winners)
            let count = winners.filter(x => x === bestTeam).length  

            console.log(count)
            process.exit(0)
        }

});

function mode(array)
{
    if(array.length == 0)
        return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;  
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}