/* 游戏配件 */
const device = document.querySelector('.device');
const topContentUlLi = device.querySelector('.top-content').querySelector('.top-content-ul').querySelectorAll('li');
const middleContent = device.querySelectorAll('.middle-content');

// 将每个商品页重置为不可见
const removeMiddleContentBlock = () => {
    for (let i = 0, count = middleContent.length; i < count; i++) {
        middleContent[i].className = "middle-content equip-hidden";
    }
}

// 将每个标题样式都设为默认
const removeTitleStyle = () => {
    for (let i = 0, count = topContentUlLi.length; i < count; i++) {
        topContentUlLi[i].className = "";
    }
}

// 改变当前的标题样式
const changeIndexTitleStyle = (index = 0) => {
    removeTitleStyle();
    topContentUlLi[index].className += " active";
}

// 改变当前显示的商品页
const changeIndexGoodsPage = (index = 0) => {
    removeMiddleContentBlock();
    middleContent[index].className += " equip-index-show";
}

// 给每个按钮添加单击监听事件
for (let i = 0, count = topContentUlLi.length; i < count; i++) {
    topContentUlLi[i].querySelector('a').addEventListener('click', () => {
        const index = topContentUlLi[i].getAttribute('data-index');
        changeIndexTitleStyle(index);
        changeIndexGoodsPage(index);
    })
}

// 默认执行一次changeIndexTitleStyle(index = 0) 和 changeIndexGoodsPage(index = 0)
changeIndexTitleStyle();
changeIndexGoodsPage();

/* 周边 */

/* 打机环境 */

