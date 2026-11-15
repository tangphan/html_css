// 01. một sô hàm built-in
/* 
-hàm built-in : là những hàm được javascrit định nghĩa sẵn , chúng ta chỉ việc sử dụng
-hàm console :
+ dùng để in ra nội dung ở tab console trên dev tools
+ có 3 hàm hay sử dụng là :
- console.log() : in ra thông báo
- console.warn() : in ra cảnh báo
- console.error() : in ra lỗi
*/

console.log("xin chào");
console.warn("xin chào");
console.error("xin chào");


// hàm setTimeout()
/*
code sẽ chạy  1 lần duy nhất sau 1 khoảng thời gian 
 */
setTimeout(()=>{
console.log("chạy vào đây")
}, 5000
);

// hàm setInterval ()
/*
-code sẽ chạy lạp lại sau 1 khoảng thời gian

*/
setInterval(()=>{
    console.log("chạy vào đây");
},3000);


// làm việc với string 
/* 
2.1 length : trả về độ dài của chuỗi bao gồm cả khoảng trắng
var fullName="Le Van A ";
console.log(fullName.length);
*/

// 2.2 indexof()
/*
- tìm vị trí đầu tiên của một chuỗi nằm trong một chuỗi 
-nếu không tim thấy sec trả về -1
-có phân biệt chữ hoa , chữ thường 
-cú pháp : string.indexOf(searchvalue,start)
+ trong đó :
searchvalue: giá trị cần tìm kiếm (bắt buộc )
start: vị trí bắt đầu tìm kiếm (tính từ trái qua phải ) và sẽ tìm kiếm xuôi tiếp ( mặc định bắt đầu từ số 0)

var myString ="Xin chào! Tôi tên Nam. Tôi năm nay 18 tuổi.";
console.log(myString.indexOf("Tôi")); // trả về 10
console.log(myString.indexOf("Hải")); // trả về -1
console.log(myString.indexOf("Nam")); // trả về 18
console.log(myString.indexOf("nam")); // trả về -1
console.log(myString.indexOf("Tôi",11)) // trả về 23
*/


// 2.3 slice()
/* 
- dùng để cắt 1 chuỗi và trả về 1 chuỗi mới 
- chuỗi ban đầu không thay đổi
-cú pháp string.slice(start,end)
trong đó :
start: vị trí bắt đầu cắt ( bắt buộc )
end : vị trí kết thúc cắt (không bắt buộc)

var myString ="Xin chào! Tôi tên Nam. Tôi năm nay 18 tuổi.";
console.log(myString.slice(10,21)); // Tôi tên Nam
console.log(myString.slice(0)); // lấy toàn bộ chuỗi 
console.log(myString/slice(0,1)); //x (lấy kí tự đầu tiên của chuỗi)
console.log(myString.slice(-1)); //(lấy kí tự cuối cùng của chuỗi)
console.log(myString); // vẫn giữ nguyên chuỗi gốc


*/
// 2.4. replace()
/*
- dùng để thay thế 1 chuỗi thành 1 chuỗi mới 
- nhưng chỉ thay thế chuỗi đầu tiên mà nó tìm thấy
- cú pháp : string.replace(searchValue, newValue)
trong đó :
-searchValue: từ khóa cần thay thế (bắt buộc )
-newvalue: từ khóa mới thay thế bắt buộc 

var nyString = "xin chào! Tôi tên Nam. Tôi năm nay 18 tuổi.";
console.log(myString.replace("Tôi","Minh")); // thay chữ đầu tiên nó tìm thấy
console.log(myString.replace(/Tôi/g,"MÌnh")); // thay all
console.log(myString.replaceALL("Tôi","Mình")); // thay all
 */
 
//2.5 . toUpperCase() và toLowerCase()
/*
-toUpperCase() : dùng để viết hoa tất cả các chữ cái
-toLowerCase(): dùng để viết thường tất cả các chữ cái


var myString="Xin chào! Tôi tên Nam, Tôi năm nay 18 tuổi.";
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());
 */

/*
2.6 Trim() : dùng để bỏ đi khoảng trắng giữa hai đầu 
- các khoảng trắng giữa các kí tự không bị loại bỏ
cú pháp string.trim()


ví dụ :
var myString="    Xin chào! Tôi tên Nam.  Tôi năm nay   18 tuổi.     ";
console.log(myString);
console.log(myString.trim());
 */