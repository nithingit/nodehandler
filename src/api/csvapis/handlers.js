
const csv=require('csvtojson')

export let csv2json = (request, reply) => {
 
var array = [];
 var buff = new Buffer(request.payload.file);

var payload = buff.toString('utf8');
csv()
.fromString(payload)
.on('json',(json)=>{ array.push(json);
//console.log(json);
 
})
.on('done',(data)=>{
console.log(array)});

return "OK";
};


