
const users =[{name:"Tal",familyname:"Sol", username:"talsol", email:"talsol4@walla.com", password:"12345", birthdate:"16/03/1998", favoritegenre:"action"},
    {name:"Chen",familyname:"Daniel", username:"chen123", email:"chend12@gmail.com", password:"123123", birthdate:"12/03/1990", favoritegenre:"comedy"},
    {name:"David",familyname:"Cohen", username:"kingdavid", email:"david98@hotamil.com", password:"king98", birthdate:"23/12/1995", favoritegenre:"fantasy"},
    {name:"Adi",familyname:"Or", username:"adida333", email:"adida333@gmail.com", password:"ADIOR333", birthdate:"05/06/1993", favoritegenre:"romance"},
    {name:"Dana",familyname:"Zak", username:"dana16", email:"dana16@walla.com", password:"DANA16", birthdate:"17/07/2000", favoritegenre:""}];


const myForm1 = document.querySelector('#my-form1')
const nameInput = document.querySelector('#name')
const fnameInput = document.querySelector('#fname')
const unameInput = document.querySelector('#username')
const emailInput = document.querySelector('#email')
const pswInput = document.querySelector('#psw')
const bdInput = document.querySelector('#bd')
const msg = document.querySelector('.msg')
const registerList = document.querySelector('.registered')

const onSubmit = (e) => {
    e.preventDefault()
    if (nameInput.value === '' || fnameInput.value === '' || unameInput.value === ''
        || emailInput.value === '' || pswInput.value === '' || bdInput.value === '') {
        // console.log('error')
        msg.innerHTML = 'Please enter all fields'
        msg.classList.add('error')
    }else if (existsUser()) {
        msg.innerHTML = 'UserName already exists'
        msg.classList.add('error')
    } else {
        // console.log('success')
        const li = document.createElement('li')
        li.innerHTML = `${nameInput.value}: ${fnameInput.value}: ${unameInput.value}: ${emailInput.value}: ${pswInput.value}: ${bdInput.value}`
        registerList.appendChild(li)
        msg.innerHTML = 'Your registration has been successfully completed'
        msg.classList.add('success')
    }
}
myForm1.addEventListener('submit', onSubmit)

//valid first name
const msgName = document.querySelector('.msgName')

const validName = (e) => {
    e.preventDefault()
    if (nameInput.value.length < 2 || nameInput.value.length > 12) {
        msgName.innerHTML = "name must contain 2-12 characters"
        msgName.classList.add('error')
        setTimeout(() => {
            msgName.innerHTML = ""
            msgName.classList.remove('error')
        }, 5000)
    } else {
        msgName.innerHTML = ''
    }
}
myForm1.addEventListener('submit', validName)

//valid last name
const msgFname = document.querySelector('.msgFname')

const validFname = (e)=>{
    e.preventDefault()
    if (fnameInput.value.length < 2 || fnameInput.value.length > 12){
        msgFname.innerHTML = "family name must contain 2-12 characters and no special characters"
        msgFname.classList.add('error')
        setTimeout(() => {
            msgFname.innerHTML = ""
            msgFname.classList.remove('error')
        }, 5000)
    } else {
        msgFname.innerHTML = ''
    }
}
myForm1.addEventListener('submit',validFname)



//valid username
const msgUname = document.querySelector('.msgUname')

const validUname = (e)=>{
    e.preventDefault()
    if (unameInput.value.length < 2 || unameInput.value.length > 12){
        msgUname.innerHTML="Username must contain 2-12 characters and special characters"
        msgUname.classList.add('error')
        setTimeout(()=>{
            msgUname.innerHTML=""
            msgUname.classList.remove('error')
        },5000)
    } else {
        msgUname.innerHTML = ''
    }
}
myForm1.addEventListener('submit',validUname)

//valid mail
const msgMail = document.querySelector('.msgMail')

const validMail = (e)=>{
    e.preventDefault()
    if (emailInput.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        msgMail.innerHTML = ''
    } else {
        msgMail.innerHTML="Email must contain a combination of English letters and numbers in the format of XXXX@XXXX"
        msgMail.classList.add('error')
        setTimeout(()=>{
            msgMail.innerHTML=""
            msgMail.classList.remove('error')
        },5000)
    }
}
myForm1.addEventListener('submit',validMail)


//valid psw
const msgpsw = document.querySelector('.msgpsw')

const validpsw = (e) => {
    e.preventDefault()
    if (pswInput.value.length < 2 || pswInput.value.length > 12) {
        msgpsw.innerHTML = "Password must contain 2-12 characters and special characters"
        msgpsw.classList.add('error')
        setTimeout(() => {
            msgpsw.innerHTML = ""
            msgpsw.classList.remove('error')
        }, 5000)
    } else {
        msgpsw.innerHTML = ''
    }
}
myForm1.addEventListener('submit', validpsw)

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




