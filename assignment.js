let text = 'the child walked to the market'
let newtext = text.charAt(0).toUpperCase()+ text.slice(1);
console.log({newtext});

let b = 'Shopping'
let newb = b.slice(0, 2) + "p" + b.slice(2);
console.log({newb});

let x = "hello world, hello JavaScript!" 
let y = "hello";
let count = x.split(y).length - 1;
console.log({count});

let t = 'Children'
let v = t.slice(-3);
console.log({v});
  
let p = 'Monkey'
let z = p.slice(0,3);
console.log({z});

let g = 'Pencil'
let w = g.split("").sort().join("");
console.log({w});

let d = 'A B C';
let f = d.replaceAll(' ', '');
console.log({f}); 

let r = 'greeting'
let s = r.indexOf(`t`);
console.log({s}); 

let n = "Babydoll";
let h = n.substring(2);
console.log({h});

let e = 'Animal'
let u = e.slice(0,-2);
console.log({u});



