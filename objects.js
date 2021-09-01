function User(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
}

User.prototype.login = function(){
    this.online = true;
    console.log(this.email, 'has logged in');
}
User.prototype.logout = function(){
    this.online = false;
    console.log(this.email, 'has logged out');
}
function Admin(...args){ //truyền tạm biến ...args giá trị sẽ được truyền ở hàm var admin = new Admin('tedminh@gmail.com','tedminh'); tạo thành mảng
    //console.log(args);
    User.apply(this, args);
    this.role = 'super admin';

}

Admin.prototype = Object.create(User.prototype); //Giúp cho prototyle của admin kế thừa toàn bộ prototyle của user
Admin.prototype.deleteUser = function(user){ //Viết hàm deleteUser
    users = users.filter( (u) => {
        return user.email != u.email;
    });
}


var userOne = new User('teddy@gmail.com', 'teddy');
var userTwo = new User('minh@gmail.com', 'minh');
var admin = new Admin('tedminh@gmail.com','tedminh');
var users = [userOne, userTwo, admin];

console.log(admin);
// console.log(userOne);
// userTwo.login();



//userOne.login().updateScore().updateScore().logout(); //Cannot read property -> fix bằng return this ở mỗi hàm để lưu biến



// new là 1 từ khóa
// đã tạo 1 object rỗng 
// đặt những giá trị của đối tượng trong User bên trong lớp này
// nó sẽ gọi hàm khởi tao bên trong lớp người dùng