var a=10;
var b=20;
var c=a+b;
console.log(c); // in ket qua ra man hinh 


var hoVaTen ="Lê Văn A ";
console.log(hoVaTen);



//3.1 arithmetic ( toán tử số học )
//var a=10;
// var b=3;
// var c=a+b ;
// console.log(c);


 // var c= a-b;
 // console.log(c);

 // var c= a*b;
 //console.log(c);

 //var c=a/b;
 // console.log(c);

 // var c=a**b;
 //console.log(c);

 // var c=a%b;
 //console.log(c);

 // 3.3 comparison (toán tử so sánh )
 // var a=10;
 // var b=20;
  //var c=a<b;
  // console.log(c);
 
  // var a="20";
  //var b=20;
  // var c=a==b;  == : phép so sánh ko nghiêm ngặt , ko cần cùng dữ liệu
  //console.log(c);

  // var c = a===b ;  === : phép so sánh nghiêm ngặt , nếu true thì phải cùng dữ liệu

  // != : ko nghiêm ngặt
  // !==: nghiêm ngặt

  // 3.4 logical ( toán tử logic) 
   // && : trả về true khi tất cả các toán hạng đều true 
   // || : trae về kết quả là true khi cả hai hoặc một trong hai toán hạng là true;
// ! : chuyển đổi giá trị của toán hạng từ true sang false hoặc từ false sang true;


// data type : kiểu dữ liệu 
// 4.1 kiểu dữ liệu nguyên thủy (primitive data)
 // có 6 kiểu : number , string , boolan , underfined , null ,symbol .

 // + kiểu number :
 /*
 var a=10;
 var b=15.5
 var c=Infinity
 var d=-Infinity
 var e=10/"abc"
  */

 // + kiểu string :
 /*
 kiểu dử liệu dùng để biểu diễn chữ , văn bản , đoạn văn bản .....
 có 3 cách để biểu diễn string :
  dùng dấu nháy đơn: '
  dùng dấu nháy kép : "
  dùng dấu backtick: `
   var fullName = ' Le van A ';
   var email="levana@gmial.com";
   var content1 ="Xin chào lê văn A . Email của bạn là levana@gmail.com"
   var content2="xin chào " + fullname + ". email của bạn là " + email // nối chuỗi
   var content3=`xin chào ${fullName} . email của bạn là ${email} ` // nối chuỗi 
  */

// + kiểu undifined : là kiểu dữ liệu mà khi khai báo ra một biến và không gán giá trị thì kết quả trả về là undefined .
// var a;
// console.log(a);








 // 4.2 kiểu dữ liệu phức tạp ( complex data)
 // có 2 kiểu : function , object




// object : là một tập hợp gồm các cặp key-value (khóa -giá trị)
// value có thể là bất kì kiểu dữ liệu nào .
// có 2 loại : object và array


// kiểu function 
/*
var a1=10;
var b1=14;
var h1=14;
 var s1=(a1+b1)*h1*1/2;

 function St(a, b, h){
 var S = 1/2 *(a+b)*h;
 return S;
}
 var S2=St(a1,b1,h1);
 console.log(S2);
 */


// kiểu object 
// loại object 
/* 
var infoUser = {
    name: "Lê Văn A",
    email: "levana@gmail.com",
    age: 25,
    status: true,
    address: null,
    socials: {
    facebook: "fb.com/abc",
    zalo: "xalo.me/0343493"
}
};
console.log(infoUser);
console.log(infoUser.email)
console.log(infoUser.socials.faceboook)
*/
// loại array
/*
var listUser=[
{
fullName : "Lê Văn A",
email:"levana@gmail.com",
age: 18 
},
{
fullName :"Lê văn B ",
email:"levanb@gmail.com",
age=20
},
{
fullName:"Lê Văn C ",
email: "levanc@gmail.com",
age:22
},
];
console.log(listUser);
console.log(listUser[0]);
for (int i=0;i<listUser.length;i++){
console.log(listUser[i].fullName)
}


*/

