console.log("js is connected");

//active nav bar

var activePage = window.location.pathname;

console.log(activePage);

const navLinks = document.querySelectorAll("nav a").forEach(link => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add("active");
    }
});


//javascript1 for sign-in

const users =[{name:"Tal",familyname:"Sol", username:"talsol", email:"talsol4@walla.com", password:"12345", birthdate:"16/03/1998", favoritegenre:"action"},
    {name:"Chen",familyname:"Daniel", username:"chen123", email:"chend12@gmail.com", password:"123123", birthdate:"12/03/1990", favoritegenre:"comedy"},
    {name:"David",familyname:"Cohen", username:"kingdavid", email:"david98@hotmail.com", password:"king98", birthdate:"23/12/1995", favoritegenre:"fantasy"},
    {name:"Adi",familyname:"Or", username:"adida333", email:"adida333@gmail.com", password:"ADIOR333", birthdate:"05/06/1993", favoritegenre:"romance"},
    {name:"Dana",familyname:"Zak", username:"dana16", email:"dana16@walla.com", password:"DANA16", birthdate:"17/07/2000", favoritegenre:""}];

const myForm = document.querySelector('#my-form')
const usernameInput = document.querySelector('#username')
const pswInput = document.querySelector('#password')
const msg = document.querySelector('.msg')

function compareUsernameandPsw() {
    let valid = false;
    users.forEach(user =>{
        if (usernameInput.value === user.username){
            console.log(usernameInput.value)

            console.log(user.username)
            if (user.password === pswInput.value){
                console.log(pswInput.value)
                console.log(user.password)
                valid = true
            }
        }
    })
    return valid
}

const onSubmit = (e) => {
    e.preventDefault()
    if (usernameInput.value === '' || pswInput.value === '') {
        // console.log('error')
        msg.innerHTML = 'Please enter all fields'
        msg.classList.add('error')
    } else if (!compareUsernameandPsw()){
        msg.innerHTML = 'Error in username or password '
        msg.classList.add('error')
    } else {
        // console.log('success')
        console.log(users.find(user =>
            user.username == usernameInput.value))
        localStorage.setItem('logedin', JSON.stringify(users.find(user =>
            user.username == usernameInput.value)
        ))
        // clean fields
        usernameInput.value = ''
        pswInput.value = ''
        msg.innerHTML = 'sign-in successfully'
        msg.classList.add('success')
        window.location = '/homePage2'
    }
}
if (myForm) {
    myForm.addEventListener('submit', onSubmit);
}


//function that checks is the username is already exists
function existsUser() {
    let result = false
    users.forEach(user => {
        if (user.username === unameInput.value) {
            result = true;
        }
    })
    return result;
}


// //javascrip2 for register

// const myForm1 = document.querySelector('#my-form1')
// const nameInput = document.querySelector('#name')
// const fnameInput = document.querySelector('#fname')
// const unameInput = document.querySelector('#username')
// const emailInput = document.querySelector('#email')
// const psw2Input = document.querySelector('#psw')
// const bdInput = document.querySelector('#bd')
// // const msg = document.querySelector('.msg')
// const registerList = document.querySelector('.registered')

// const onSubmit1 = (e) => {
//     e.preventDefault()
//     if (nameInput.value === '' || fnameInput.value === '' || unameInput.value === ''
//         || emailInput.value === '' || psw2Input.value === '' || bdInput.value === '') {
//         // console.log('error')
//         msg.innerHTML = 'Please enter all fields'
//         msg.classList.add('error')
//     }else if (existsUser()) {
//         msg.innerHTML = 'UserName already exists'
//         msg.classList.add('error')
//     } else {
//         // console.log('success')
//         const li = document.createElement('li')
//         li.innerHTML = `${nameInput.value}: ${fnameInput.value}: ${unameInput.value}: ${emailInput.value}: ${psw2Input.value}: ${bdInput.value}`
//         registerList.appendChild(li)
//         msg.innerHTML = 'Your registration has been successfully completed'
//         msg.classList.add('success')

//         //  // clean fields
//         // nameInput.value = ''
//         // fnameInput.value = ''
//         // unameInput.value = ''
//         // emailInput.value = ''
//         // psw2Input.value = ''
//         // bdInput.value = ''
//         //         msgName.innerHTML = ''
//         //             msgName.classList.remove('error')
//         //         msgFname.innerHTML = ''
//         //             msgFname.classList.remove('error')
//         //         msgUname.innerHTML = ''
//         //             msgUname.classList.remove('error')
//         //         msgMail.innerHTML= ''
//         //             msgMail.classList.remove('error')
//         //         msgpsw.innerHTML = ''
//         //             msgpsw.classList.remove('error')
//         // msg.innerHTML = 'sign-in successfully'
//         // msg.classList.add('success')
//         window.location = '../views/project_sign_in.html'
//     }
// }
// if (myForm1) {
//     myForm1.addEventListener('submit', onSubmit1)
// }

// //valid first name
// const msgName = document.querySelector('.msgName')

// const validName = (e) => {
//     e.preventDefault()
//     if (nameInput.value.length < 2 || nameInput.value.length > 12) {
//         msgName.innerHTML = "name must contain 2-12 characters"
//         msgName.classList.add('error')
//         setTimeout(() => {
//             msgName.innerHTML = ""
//             msgName.classList.remove('error')
//         }, 5000)
//     } else {
//         msgName.innerHTML = ''
//     }
// }
// if (myForm1) {
//     myForm1.addEventListener('submit', validName)
// }

// //valid last name
// const msgFname = document.querySelector('.msgFname')

// const validFname = (e)=>{
//     e.preventDefault()
//     if (fnameInput.value.length < 2 || fnameInput.value.length > 12){
//         msgFname.innerHTML = "family name must contain 2-12 characters and no special characters"
//         msgFname.classList.add('error')
//         setTimeout(() => {
//             msgFname.innerHTML = ""
//             msgFname.classList.remove('error')
//         }, 5000)
//     } else {
//         msgFname.innerHTML = ''
//     }
// }
// if (myForm1) {
//     myForm1.addEventListener('submit', validFname)
// }
// //valid username
// const msgUname = document.querySelector('.msgUname')
// const validUname = (e)=>{
//     e.preventDefault()
//     if (unameInput.value.length < 2 || unameInput.value.length > 12){
//         msgUname.innerHTML="Username must contain 2-12 characters and special characters"
//         msgUname.classList.add('error')
//         setTimeout(()=>{
//             msgUname.innerHTML=""
//             msgUname.classList.remove('error')
//         },5000)
//     } else {
//         msgUname.innerHTML = ''
//     }
// }
// if (myForm1){
// myForm1.addEventListener('submit',validUname)
//     }

// //valid mail
// const msgMail = document.querySelector('.msgMail')

// const validMail = (e)=>{
//     e.preventDefault()
//     if (emailInput.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
//         msgMail.innerHTML = ''
//     } else {
//         msgMail.innerHTML="Email must contain a combination of English letters and numbers in the format of XXXX@XXXX"
//         msgMail.classList.add('error')
//         setTimeout(()=>{
//             msgMail.innerHTML=""
//             msgMail.classList.remove('error')
//         },5000)
//     }
// }
// if (myForm1) {
//     myForm1.addEventListener('submit', validMail)
// }


// //valid psw
// const msgpsw = document.querySelector('.msgpsw')

// const validpsw = (e) => {
//     e.preventDefault()
//     if (psw2Input.value.length < 2 || psw2Input.value.length > 12) {
//         msgpsw.innerHTML = "Password must contain 2-12 characters and special characters"
//         msgpsw.classList.add('error')
//         setTimeout(() => {
//             msgpsw.innerHTML = ""
//             msgpsw.classList.remove('error')
//         }, 5000)
//     } else {
//         msgpsw.innerHTML = ''
//     }
// }
// if (myForm1) {
//     myForm1.addEventListener('submit', validpsw)
// }
