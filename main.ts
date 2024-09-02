////optional parameter
function form(name:string , feedback?:string){
console.log(name , feedback);
}
form("maira") 
form("sherry", "good class") ///ans ho to bh thk nh do to bh thk optional papameter ////
/////  interface m optional parameter
interface product {
    name: string
    price?:number
}
let product: product  = {
    name: "bread"
}
console.log(product.name)
 ///yhn ye error nh dyga qk optional prameter hai wena phle ye error dyta th jtne typ utne define
  ////rest parameter
  function filrupload(...file:string[]){
console.log(file);
  }
  filrupload("one.gp","two.gp","three.gp") //unlimited prameter k lye optional prameter use hota h
  ///expicit casting/// iska mtlb zbrdasti kse ki type batana
  let age:unknown
  age = "twenty"
  console.log(
    (age as string).toUpperCase() ////isme . k bd koi bh function use kr skte hain 
  );
  let age2:unknown
  age2= 234.000
  console.log((age2 as number).toFixed(0) ///. k bd zero print nh hoga qk zero likha h upper
  );
  /////structrul typing 
  interface ball {
    diameter:number
  }
  interface sphere {
    diameter:number
  }
  let ball:ball ={
    diameter:10
  }
  let sphere:sphere = {
    diameter:10
  }
  ball = sphere 
  console.log(ball.diameter)

///interface tube
interface tube {
    diameter:number
    length:number
}
let tube:tube = {
    diameter:130,
    length:25
}
//lhs  //rsh
ball = tube
//new
let mytype = {
    id: 1,
    firstname: "maira"
}
mytype = {
    id:56,
    firstname: "naseer"
}
///index signature  properties nh pta hon to 
var x: {
    id:number,
    [y:string] :any
};
x = {
    id:100,
    firstname:"maira"
}
x = {
    id:100,
    adress: "karachi"
}
x = {
    id:200,
    email: "mairanaseer",
    fullname: "maira naseeruddin",
    phno: 3213840887,
    sports: "cricket",
    food: "biryani",
    islogin:()=> true
}
console.log(x.sports);
////comparision stale obj th ball tube wala
//LHS = RSH rhs m zyada ho skte hn ise bd m hi likhyge 
   

///fresh obj
//js jaga js line m obj bnaty hn use fresh obj kehty hn jhn variable compare ho use stale obj kehty hn

///stale obj
ball = tube
///frest obj
ball = {
    diameter:66,
    //length:20 /// error
}
////ye sb structrual typing kehlati hai 

///synchronous and Asynchronous
console.log(1);
console.log(2);
function add(){
    let res = 5+5
    return res
}
let res = add()
console.log(res);
console.log(44);
console.log(res);//////ye code synchronous qk line se ans dyta h is lye ye sync hai
///ye line by line colum by colum chlta hai
/////Asynchronous isko perform hone m tym lgta hai
//jo w8 nh krta synchronous hota hai 
////jo tym ly wo Asynchronous jota h  

///callback function
//jo function as an object pass ho wo callback hota h
//main func
function one(cb:()=>void){
console.log("one");
cb()   //////calling the function
}

////callback
function two(){
console.log("async function")
}
  one(two) 

////set timeout
  //chatgpt m ja k explain in simple words jo bh smjhna hai what is callback





























  
