console.log("hello to review page")

const reviewbox = document.querySelector('#myreview')
const movie = document.querySelector('#movie')
const reviewInput = document.querySelector('.fieldarea')
const reviewmsg = document.querySelector('.reviewmsg')
const reviewList = document.querySelector('.reviews')


const onSubmit = (e) => {
    e.preventDefault()
    if (reviewInput.value === ''|| movie.value == '----') {
        // console.log('error')
        reviewmsg.innerHTML = 'Please enter all fields'
        reviewmsg.classList.add('error')
        setTimeout(() => {
            reviewmsg.innerHTML = ''
            reviewmsg.classList.remove('error')
        }, 3000)
    } else {
        // console.log('success')
        reviewInput.value = ''
        movie.value = '----'
        reviewmsg.innerHTML = 'Review sent successfully'
        reviewmsg.classList.add('success')
    }
}
        reviewbox.addEventListener('submit', onSubmit);

//rating star
const container = document.querySelector('.rating');
const items = container.querySelectorAll('.rating-item')
container.onclick = e => {
    const elClass = e.target.classList;
    if (!elClass.contains('active')) {
        items.forEach(
            item => item.classList.remove('active')
        );
        console.log(e.target.getAttribute("data-rate"));
        elClass.add('active');
    }
};
