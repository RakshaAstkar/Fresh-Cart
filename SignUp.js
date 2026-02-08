let Form = document.querySelector('form')
console.log(Form)
Form.onsubmit=((a)=>{
    a.preventDefault();
    console.log("Form Submitted")
    let inputdata = document.querySelectorAll('input')
    console.log(inputdata)
    let formdata={};
    inputdata.forEach((input)=>{
        if(input.type === "radio"){
            if (input.checked === true) {
                formdata[input.name] = input.value;
            }
        }
        else{
            formdata[input.name] = input.value;
        }
        formdata[input.name]=input.value
    })
    console.log(formdata)
    let jsonobj = JSON.stringify(formdata)
    console.log(jsonobj)
    localStorage.setItem("UserData",jsonobj)
    alert("Registered Successfully")
    window.location.href='./login.html'
})