var readline = require('readline');

var rl = readline.createInterface({

    input: process.stdin,

    output: process.stdout

});

let depth = 0
let vars = {}
rl.on('line', function (data) {
    if (data == "") {
        console.log(vars)
        process.exit(0)
    }

   
    if (data == "{") {
        depth++
    }  else
    if (data == "}") {
        depth--
    } else {
        let variable = data.split("=")[0]
        let value = data.split("=")[1]
        let check = value*1
        if (isNaN(check)) { //it was another variable
            if (depth>0) {
                if (vars[value+'.'+depth] == undefined) {  
                for (let i = depth; i>=0; i--) {
                    if (vars[value+'.'+i] != undefined) {
                    vars[value+'.'+depth] = vars[value+'.'+i]
                    break;
                    }
                    
                }
            }
        }
            if (vars[value+'.'+depth] == undefined) {
                vars[value+'.'+depth] = '0'
            }
            vars[variable+'.'+depth] = vars[value+'.'+depth]
            // console.log("Output: ", vars[value+'.'+depth])
           console.log(vars[value+'.'+depth])
           
        } else { //it was a number
        vars[variable+'.'+depth]=value
        }
       
    }

    // console.log("vars: ", vars)
    // console.log("depth: ", depth)
   

});