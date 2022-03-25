const fs = require("fs");
let data = fs.readdirSync("./");
let picType = ['jpg','png','jepg','webp']
let picList = data.filter(value=>{
    let type = value.substring(value.lastIndexOf(".") + 1,value.length);
    for(let i = 0;i < picType.length;i++){
        if(type === picType[i]){
            return true;
        }
    }
    return false;
})

fs.writeFileSync("./picList.js","let picList = " + JSON.stringify(picList));
