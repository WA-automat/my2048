// pages/game/game.js
var app = getApp();

// 导入js文件
var Grid = require('./grid.js');
var Tile = require('./tile.js');
var GameManager = require('./game_manager.js');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 是否正在等待的变量
    hidden: false,

    // 记录当前得分和历史最大得分的变量
    score: 0,
    highscore: 0,

    // 游戏数据可以通过参数控制
    grids: [],
    over: false,
    win: false,
    overMsg: '游戏结束'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    var that = this;

    // 页面渲染完毕隐藏loading
    that.setData({
      hidden: true
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},

  exitToIndex: function (e) {
    wx.navigateBack()
    // console.log(e)
  }
})
