// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    // 背景图片的 URL
    background: [
      '../../image/background1.jpg',
      '../../image/background2.jpg',
      '../../image/background3.jpg'
    ],
    // 轮播图的数据
    indicatorDots: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    buttonType: "primary"
  },
  // 跳转到游戏界面
  jumpToGame: function (e) {
    wx.navigateTo({
      url: '/pages/game/game',
      success: function (_res) {},
      fail: function (_res) {},
      complete: function (_res) {}
    })
  },
  // 跳转到日志界面
  jumpToLog: function (e) {
    wx.switchTab({
      url: '/pages/logs/logs',
      success: function (_res) {},
      fail: function (_res) {},
      complete: function (_res) {},
    })
  }
})