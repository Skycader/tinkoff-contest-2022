//Для решения добавим в массив domains все купленные домены
//А в массив buyers все желаемые подстроки


var readline = require('readline');

var rl = readline.createInterface({

    input: process.stdin,

    output: process.stdout

});

let lines = 0
let clients = []
let domains = []
countDomains = 0
countClients = 0
rl.on('line', function (data) {
    lines++
    if (lines==1) {
        countDomains = 1*data.split(" ")[0]
        countClients = 1*data.split(" ")[1]
    }
    if ((lines<=(countDomains+1))&&(lines>1)) {
        domains.push(data)
       
    }
    if ((lines>=(countDomains+1))&&(lines>1)&&(lines<=(countClients+1))) {
        
        clients.push(data)
    }
    
    if (lines==(countClients+countDomains+1)) {
         

        console.log(domains,clients)
        process.exit(0)
    }

});