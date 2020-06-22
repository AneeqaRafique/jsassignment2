//chap 21-25
//qno 1

// var firstname = prompt("Enter your first name");
// var lastname = prompt("Enter your last name");
// var fullname = firstname + " " +lastname ;
// alert("Hello!"+  " "+ fullname + " ");

//q no 2
// var model = prompt("Enter your favourite mobile model");
// model = model.toUpperCase()
// var string = model.length ;
// document.write("My favaourite Mobile is:"+ " "+ model + "<br>");
// document.write(" length of string :"+ " " + string  + "<br>")

//qno 3

// var string = "pakistani";
// var indexnum = string.indexOf("n");
// document.write("string :"+" "+ string + "<br>")
// document.write("index of n:"+" "+indexnum);

//q no 4
 
// var string = "Hello World";
// var lastindexnum = string.lastIndexOf('l');
// document.write("string :"+" "+ string + "<br>");
// document.write("index of l:"+ " "+ lastindexnum)


//q no 5

// var string = "pakistani";
// document.write("string :"+" "+ string + "<br>")
// document.write("character at index 3:"+ " "+ string.charAt(3))

//q no 6;
// var firstname = prompt("Enter your first name");
// var lastname = prompt("Enter your last name");
// var fullname = firstname + " " +lastname ;
// alert("Hello!"+  " "+ fullname + " ");

//q no 7;
//  var city = "Hyder"+"abad";
//  var city1 = city.replace("Hyder", "Islam");
//  document.write("city :"+" "+ city +"<br>");
//  document.write("After replacement:"+" "+ city1 +"<br>" );

//Q no 8

// var message = "Ali and Sami are best friends. They play cricket and football together";
// var message2 = message.replace(/and/g,"&");
// document.write(message2)


//q no 9

// var string = "472";
// document.write("value"+ " "+ string +"<br>");
// document.write("type : string"+"<br>");
// document.write("value"+ " "+ parseInt("472")+"<br>");
// document.write("type : number"+"<br>");

//q no 10

// var userinput = prompt("Enter a word");
// document.write("userinput :"+ " "+ userinput + "<br>")
// userinput = userinput.toUpperCase();
// document.write("uppercase:"+ " "+ userinput+ "<br>")

//q no 11

// var value = "javascript";
// var firstchar = value.slice(0,1);
// var otherchar = value.slice(1);
// firstchar = firstchar.toUpperCase();
// otherchar = otherchar.toLowerCase();
// var value2 = firstchar + otherchar ;
// document.write("User input:"+" "+ value+ "<br>")
// document.write("Title case:"+" "+value2+ "<br>")

//q no 12

// var num = "35.36"; 
// document.write("Number:"+" "+ num+"<br>");
// var num2 = num.replace(".","");
// document.write("Result"+" " +num2+"<br>")

//q no 13


//q no 14
// var search = prompt("Welcome to Delicacy Bakers ! what do you want to order sir/ma'am")
// var delicacy = ["cake", "apple pie", "cookie", "chips", "patties"];
// search = search.toLowerCase();
// if(search == delicacy[0]){
//     document.write (delicacy[0]+" "+"is available at index 0")
// }
// else if(search == delicacy[1]){
//     document.write (delicacy[1]+" "+"is available at index 1")
// }
// else if(search == delicacy[2]){
//     document.write (delicacy[2]+" "+"is available at index 2")
// }
// else if(search == delicacy[3]){
//     document.write (delicacy[3]+" "+"is available at index 3")
// }
// else if(search == delicacy[4]){
//     document.write (delicacy[4]+" "+"is available at index 4")
// }
// else
// {
//     alert("sorry! this item is no longer available")
// }




//q no 16

//  var university = "University of Karachi"; 
// var res = university.split("");
// for (var i = 0 ; i<res.length; i++){
// document.write( res[i] + '<br>' )
// }

//q no 17
// var input = prompt("enter word of your choice")
// var index = input.charAt(input.length-1);
// document.write("user input: "+ input+"<br>");
// document.write("last character of word:"+" "+index+"<br>")

//q no 18

// var string = "the quick brown fox jumps over the lazy dog.";
//  var count = (string.match(/the/g) || []).length;
//  document.write("Text:"+" "+ string+"<br>")
//  document.write("There are "+ count +" "+" occurance of word 'the' ")
// console.log(count);

//chap 26-30
//q no 1
// var num = +prompt("enter any positive number");
// var round = Math.round(num);
// var ceil = Math.ceil(num);
// var floor = Math.floor(num);
// document.write("Number:"+" "+ num+ "<br>")
// document.write("Round off value:"+" "+round+ "<br>")
// document.write("floor value"+" "+floor+ "<br>")
// document.write("ceil value"+" "+ceil+ "<br>")


//q no 2
// var num = +prompt("enter any negative number");
// var round = Math.round(num);
// var ceil = Math.ceil(num);
// var floor = Math.floor(num);
// document.write("Number:"+" "+ num+ "<br>")
// document.write("Round off value:"+" "+round+ "<br>")
// document.write("floor value"+" "+floor+ "<br>")
// document.write("ceil value"+" "+ceil+ "<br>")

//q no 3
// var value = prompt("enter the value")
// var absolute = Math.abs(value)
// document.write ("the absolute value of "+" "+ value +" "+"is"+" " + absolute)

//q no 4
// var  random = Math.random()*4;
// var cont = random.toFixed(0);
// document.write("the random dice value:"+" "+ cont)

//q no 5
// var heads = Math.random()*2
// var floor = Math.floor(heads);
// if(floor === 0){
//     document.write(floor +"<br>")
//     document.write("random coins value: heads")
// }
// else{
//     document.write(floor+"<br>")
//     document.write("random coins value:tails")
// }

//q no 6
// var no = Math.random()*80
// var floor = Math.floor(no);
// document.write("random number betwee 1 and 100: "+" "+ floor)

//q no 7
// var weight = +prompt("enter your weight in kgs");
// var random = weight.toFixed(1);
// document.write("the weight of user is:"+" "+ random+"kgs")

//q no 8
// var secret = Math.random()*4
// var floor = Math.floor(secret);
// console.log(floor)
// var userno = +prompt("enter the number from 1 to 10");
// if(userno === floor){
//     alert("congratulations!")
// }
// else{
//     alert("try again!")
// }

// chap 31-34
//q no 1
//  var a = new Date();
//  document.write(a)

//q no 2
//  var a = new Date();
//  var b = a.toString();
//  var c = b.slice(4,7)
//  document.write("current month:"+" "+c+"<br>")

//q no 3

// var a = new Date();
//  var b = a.toString();
//  var c = b.slice(0,3)
//  document.write("today is"+" "+c+"<br>")

//q no 4
// var a = new Date().getDay();
// var dayname = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
// if(dayname[a]=== "sunday"||dayname[a]==="saturday"){
//     alert("its fun day")
// }
// else{
//     alert("its a working day")
// }

//q no 5
// var a = new Date();
// if(a<=15){
//     alert("First fifteen days of the month")
// }
// else{
//     alert("Last days of the month")
// }

//q no 6
// var day = new Date();
// var milisec = day.getTime();
// var min = milisec / (1000*60*60);
// document.write("Current date :"+" "+ day+"<br>")
// document.write("Elasped miliseconds sice midnight january 1 1970:"+" "+ milisec+"<br>")
// document.write("Elasped minutes sice midnight january 1 1970 :"+" "+ min+"<br>")

//q no 7

//  var a = new Date();
// var b = a.getHours();
// if (b>= 0 && b<12){
//     alert("its AM")
// }
// else{
//     alert("its PM")
// }

//q no 8
// var d = new Date();
// d.setDate(214);
// document.write("later date:"+" "+d)

//or

// var laterdate = new Date (2020, 11 ,31,0);
// alert(laterdate)

//q no 11
// var a = new Date()
// var d = new Date();
// d.setHours(d.getHours() - 1);
// document.write("current date:"+" "+a +"<br>")
// document.write("one hour ago it was"+" "+ d)

//q no 12
// var a = new Date()
// var d = new Date();
// d.setFullYear(d.getFullYear() - 100);
// alert("Current date:"+" "+a +" "+"100 years back it was"+" "+ d)

//q no 13
// var age = prompt("Enter your age");
// var today = new Date();
// today.setFullYear(today.getFullYear()- age);
// var a = today.toString();
// var b = a.slice(11,15);
// document.write("Your age is:"+" "+ age+"<br>")
// document.write("Your birth year is:"+" "+b)

//q no 14
// var CustomerName = prompt("Enter customer name")
// var CurrentMonth = prompt("Enter current month")
// var Numberofunits = +prompt("Enter number of units")
// var Chargesperunit = +prompt("Enter charges per unit")  
// var LatePaymentSurcharge = +prompt("Enter Late payment Surcharge")
// var AmountPayable = Numberofunits * Chargesperunit ;
// var GrossPayable = AmountPayable + LatePaymentSurcharge 
// var c = Numberofunits.toFixed(2)
// var d = Chargesperunit.toFixed(2);
// var e = AmountPayable.toFixed(2)
// var f = LatePaymentSurcharge.toFixed(2)
// var g = GrossPayable.toFixed(2)
// document.write("<h1>K-Electric Bill</h1>");
// document.write("Customer Name:"+" "+CustomerName+"<br>")
// document.write("Current Month:"+" "+CurrentMonth+"<br>")
// document.write("Number of units:"+" "+c+"<br>")
// document.write("Charges per unit"+" "+d+"<br>")
// document.write("Net Amount Payable(within Due Date)"+" "+e+"<br>")
// document.write("Late Payment Surcharge"+" "+f+"<br>")
// document.write("Gross Amount Payable(after Due Date)"+" "+g+"<br>")


//chap 35-38
//q no 1
// function date(){
//     document.write( new Date());
// }
// date()

//q no 2
// function name(){
//     var firstname = prompt("Enter your first name")
//     var lastname = prompt("Enter your last name")
//     document.write(firstname +" " +lastname)
// }
// name()

//qno 3
// var x = +prompt("Enter the 1st number")
// var y = +prompt("Enter the 2nd number")
// function add(){
//     var z = x+ y
//     return z
// }
// var k = add()
// alert(k)

//q no 4
// function calc(num1,opr,num2){
//     if(opr==="+"){
//         return num1 + num2
//     }
//     else if(opr==="-"){
//     return num1-num2
//     }
//     else if(opr==="*"){
//         return num1 * num2
//     }
//     else if(opr=== "/"){
//         return num1 / num2
//     }
//     else{
//         return ("incorrect operator")
//     }
// }
// var Result = calc(5,"+",5)
// var Result1 = calc(5,"-",5)
// var Result2 = calc(5,"*",5)
// var Result3 = calc(5,"/",5)
// document.write("Result of addition:"+" "+Result+"<br>")
// document.write("Result of subtraction:"+" "+Result1+ "<br>")
// document.write("Result of multiplication:"+" "+Result2+"<br>")
// document.write("Result of division:"+ " "+ Result3+"<br>")

//q no 5
//  function squares(no1){
//      return no1 * no1
//  }
//  var x = squares(prompt("Enter the no of your choice"));
//  alert(x)

//q no 6
// function factorial(n) {
//     var answer = 1;
//     if(n==0 || n==1){
//         return answer;
//     }
//     else{
//         for(var i = n ; i >= 1 ; i--){
//             var answer = answer * i;
//         }
//         return answer
//     }
// }
// var fact = factorial(prompt("enter a number"));
// alert(fact)

//q no 7
// var firstnum = +prompt("enter the first number");
// var lastnum = +prompt("enter the last num");

// function count(firstnum,lastnum){
// for(var a = firstnum ; a<= lastnum ; a=a+1){
//     document.write(a + "<br>")
// }
// }
// var k = count (firstnum,lastnum)

//q no 8
// function Hypotenuse() {
//     var base = +prompt("Enter the base value");
//     var perpendicular = +prompt("Enter the perpendicular value");
//     function square(b,p){
//         var b= base*base;
//         var p = perpendicular*perpendicular;
//         var x = (+b)+(+p)
//        document.write("Hypotenuse2=" +" "+ b +" + "+ p+"<br>")
//        document.write("Hypotenuse2 ="+ x)
        
//     }
//     document.write("Hypotenuse2 = Base2 + Perpendicular2"+"<br>")
//         square();
// }
// Hypotenuse();


//q no 9
// function areaofrectangle(height,width){
//     var height= +prompt("enter the height")
//     var width = +prompt("enter the width")
//     var area = height * width;
//     alert("area of rectangle ="+ area)
// }
// areaofrectangle();

// function areaofrectangle(height,width){
//     var area = height * width;
//     alert("area of rectangle ="+ area)
// }
// areaofrectangle(12,14);

//q no 10
// function palindome(){
//     var word = prompt("enter a palindrome word")
//     var check = ""
//     for(var i = word.length-1 ; i>=0 ;i--){
//         check+= word[i]
//         }
//         if(check=== word){
//             alert(word + " "+ "is a palindrome word")
//         }
//     }

// palindome()

//q no 11
// function uppercase(letter){
//   return letter.replace(/\w\S*/g , function(Text){ return Text.charAt(0).toUpperCase() + Text.substr(1).toLowerCase();})  
// }
// document.writeln(uppercase("the quick brown fox"))


//q no 14
// function calccircumference(){
//     var raduis = +prompt("enter the raduis of circle");
//     var circumference = 2*3.142* raduis ;
//     document.write("The circumference is :"+ circumference+ "<br>")
//     function calcarea(){
//         var area = 3.142 * raduis*raduis;
//         document.write("The area is :"+" "+ area+ "<br>")
//     }
//     calcarea();
// }
// calccircumference();
