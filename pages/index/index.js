// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    background: [
      '../../image/background1.jpg',
      '../../image/background2.jpg',
      '../../image/background3.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 500,
    buttonType: "primary"
  },
  jumpToGame: function (e) {
    wx.navigateTo({
      url: '/pages/game/game',
      success: function (_res) {},
      fail: function (_res) {},
      complete: function (_res) {}
    })
  },
  jumpToLog: function (e) {
    wx.switchTab({
      url: '/pages/logs/logs',
      success: function (_res) {},
      fail: function (_res) {},
      complete: function (_res) {},
    })
  }
})