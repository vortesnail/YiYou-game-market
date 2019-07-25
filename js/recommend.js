const recommendContentBox = document.querySelector('.recommend').querySelector('.recommend-content').querySelector('.recommend-content-box');
const pageBox = document.querySelector('.recommend').querySelector('.top-content').querySelector('.page-box');
const pagePrevBtn = pageBox.querySelector('.prev');
const pageNextBtn = pageBox.querySelector('.next');

const boxs = recommendContentBox.querySelectorAll('.box');
const boxWidth = boxs[0].offsetWidth;

// 当前可翻页数量
let recommendIndex = 0;

// 确定按钮是否可用
function confirmBtnAvilable() {
    if (recommendIndex == 0) {
        pagePrevBtn.className = 'prev disabled';
        pageNextBtn.className = 'next';
        pagePrevBtn.style.cursor = 'not-allowed';
        pageNextBtn.style.cursor = 'pointer';
    } else if (recommendIndex == boxs.length - 5) {
        pagePrevBtn.className = 'prev';
        pageNextBtn.className = 'next disabled';
        pagePrevBtn.style.cursor = 'pointer';
        pageNextBtn.style.cursor = 'not-allowed';
    } else {
        pagePrevBtn.className = 'prev';
        pageNextBtn.className = 'next';
        pagePrevBtn.style.cursor = 'pointer';
        pageNextBtn.style.cursor = 'pointer';
    }
}
// 默认执行一次
confirmBtnAvilable();

const changeRecommendContentBoxMarginLeft = function() {
    recommendContentBox.style.marginLeft = "-" + ((boxWidth+14)*recommendIndex).toString() + "px";
    confirmBtnAvilable();
}

// 上一页
pagePrevBtn.addEventListener('click', () => {
    if (recommendIndex == 0) {
        window.alert('已达到最前页面');
        return;
    } 
    
    recommendIndex--;
    changeRecommendContentBoxMarginLeft();
});

// 下一页
pageNextBtn.addEventListener('click', () => {
    if (recommendIndex == boxs.length - 5) {
        window.alert('已达到最后页面');
        return;
    } 
    recommendIndex++;
    changeRecommendContentBoxMarginLeft();
});