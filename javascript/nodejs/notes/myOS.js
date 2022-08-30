const path = require('path')

const s= path.resolve("data.json")

const d = path.basename("C:\\Users\\LENOVO\\Desktop\\cit3\\javascript\\nodejs\\notes")


const ext = path.extname("data.json");

if(ext === ".json") {
    console.log("Yes")
}
else {
    console.log("no")
}

console.log(ext)