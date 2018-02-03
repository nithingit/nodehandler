export let hello = (request, h) => {
if(typeof request.query.name == "undefined" ||  request.query.name == null)
  return 'Hello, world';
else
return 'Hello ,'+request.query.name;
};