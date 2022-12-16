const users =[{name:"Tal",familyname:"Sol", username:"talsol", email:"talsol4@walla.com", password:"12345", birthdate:"16/03/1998", favoritegenre:"action"},
    {name:"Chen",familyname:"Daniel", username:"chen123", email:"chend12@gmail.com", password:"123123", birthdate:"12/03/1990", favoritegenre:"comedy"},
    {name:"David",familyname:"Cohen", username:"kingdavid", email:"david98@hotamil.com", password:"king98", birthdate:"23/12/1995", favoritegenre:"fantasy"},
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
        window.location = '../views/project_landingpage2.html'
    }
}
myForm.addEventListener('submit', onSubmit);



