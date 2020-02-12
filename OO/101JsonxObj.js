const obj = {a:1, b:2,c:3, nome:"diego", soma () {return a+ b + c} }
console.log(JSON.stringify(obj)) 
// console.log(JSON.parse("{ a:1 , b:2, c:3 }" ))
// console.log(JSON.parse( "{'a':1, 'b':2, 'c': 3  }" ))
console.log (JSON.parse('{"a":1.1, "b":2 , "c":3, "d":{}, "e" : []  }'))