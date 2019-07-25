const indexBanner = document.querySelector('.index-banner');
const bannerList = document.querySelector('.banner-list');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const page = document.querySelector('.page');
const pageList = page.querySelectorAll('.page-point');

const listItemWidth = indexBanner.clientWidth;
const listItemNum = bannerList.querySelectorAll('li').length;
// 默认从第0张开始
let index = 0;
// 定时器
let time = 0;

// 通过调整marginleft来改变显示位置
const changeMarginLeft = function() {
    defaultPointClass();
    pageList[index].className += " present-page";
    bannerList.style.marginLeft = "-" + (index * listItemWidth).toString() + "px";
    time = 0;
}

// 上一张
const goPrev = function() {
    if (index == 0) {
        index = listItemNum - 1;
    } else {
        index--;
    }
    changeMarginLeft(bannerList.style.marginLeft);
}

// 下一张
const goNext = function() {
    if (index == listItemNum - 1) {
        index = 0;
    } else {
        index++;
    }
    changeMarginLeft();
}

// 恢复导航点默认样式
const defaultPointClass = function() {
    for (let i = 0; i < pageList.length; i++) {
        pageList[i].className = "page-point";
    }
}

// 转到当前选择
const goIndex = function() {
    changeMarginLeft();
}

prevBtn.addEventListener('click', () => {
    goPrev();
});

nextBtn.addEventListener('click', () => {
    goNext();
});

for (let i = 0; i < pageList.length; i++) {
    pageList[i].addEventListener('click', () => {
        index = pageList[i].getAttribute('data-index');
        goIndex();
    })
}

// 定时器自动轮播
setInterval(() => {
    time++;
    if (time == 40) {
        goNext();
        time = 0;
    }
}, 100);

