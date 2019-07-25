const asideContainer = document.querySelector('.aside').querySelector('.aside-container');
const backToTop = asideContainer.querySelector('.back-to-top');
const backToTopBtn = backToTop.querySelector('a');

const backToTopFun = () => {
    let curScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let scrollHeight = document.body.scrollHeight;//页高

    if (curScrollTop < 400) {
        backToTop.style.display = "none";
    } else {
        backToTop.style.display = "block";
    }

    backToTopBtn.addEventListener('click', () => {
        let speed = (0 - curScrollTop) / 24;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        if (curScrollTop > 0) {
            let timer = setInterval(() => {
                curScrollTop += speed;
                document.documentElement.scrollTop = curScrollTop;
                if (curScrollTop <= 0) {
                    console.log(curScrollTop);
                    clearInterval(timer);
                }
            },10);
        }
    })
}

window.addEventListener('scroll', () => {
    backToTopFun();
})





