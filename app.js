function redirecttoPage()
{
    var username= document.getElementById('usrn')
    var password= document.getElementById('pwd')

    username= username.value
    password= password.value

    if(username==="admin"&& password==="admin"){
        window.location.href="dashboard.html"
    }
    else{
        alert("enter a valid password")
    }

}