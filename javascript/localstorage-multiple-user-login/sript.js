function signup(){
    let userName = document.getElementById("userName").value;
    let userEmail = document.getElementById("userEmail").value;
    let userPassword = document.getElementById("userPassword").value;

    let userArr = JSON.parse(localStorage.getItem("users"))

    let userDetail = {
        name: userName,
        email: userEmail,
        password: userPassword
    }

    if(userArr){
        for(let i = 0; i < userArr.length; i++){
            if(userEmail == userArr[i].email){
                alert("Email Already Exist");
                return;
            }
        }
        userArr.push(userDetail)
    }else{
        userArr = [userDetail]
    }


    localStorage.setItem("users" , JSON.stringify(userArr));
}


// let obj = {
//     name: "John",
//     rollNo: 123456
// }

// let obj2 = JSON.stringify(obj)

// console.log(JSON.parse(obj2));