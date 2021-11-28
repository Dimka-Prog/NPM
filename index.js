const _ = require("lodash");

let Array = [{id: 1, name: '1'}, {id: 2, name: '2'}];
_.remove(Array, function (item){
    return item.id === 2;
})

console.log(Array);



