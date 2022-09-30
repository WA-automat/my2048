// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    background: [
      '../../image/background1.png',
      '../../image/background2.png',
      '../../image/background3.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 500
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