

const obj = {
    some: "some",
    dom: "text",
    arr: [1,2 ,3 ,4 ,5],
    tom: "there"
};


let arrValues = [];

for (let key in obj) {
  let value = obj [key];
  if (Array.isArray (value)) {
    for (let element of value) {

      arrValues.push (element);
    }
  } else {
    
    arrValues.push (value);
  }
}


console.log (arrValues);
