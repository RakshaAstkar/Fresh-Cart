let Form = document.querySelector('form')
console.log(Form)
Form.onsubmit=((e)=>{
    e.preventDefault();
    console.log("Login Sumbitted")
    let inputdata = document.querySelectorAll('input')
    console.log(inputdata)
    let email = inputdata[0].value
    let password = inputdata[1].value
    console.log(email,password)
    let storeddata = JSON.parse(localStorage.getItem("UserData"))
    console.log(storeddata)
    if(storeddata){
        if (email===storeddata.Email && password===storeddata.Password) {
            alert("Data Matched")
            window.location.href="./HomePage.html"
        }
        else{
            alert('Data MISMATCHED')
        }
    }
})