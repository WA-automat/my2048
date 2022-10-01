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
  onLoad: function () {
    // 创建游戏管理对象
    this.GameManager = new GameManager(4);

    // 更新数据
    this.setData({
      grids: this.GameManager.setup(),
      highscore: wx.getStorageSync('highscore') || 0
    });
  },

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

  // 更新视图数据
  updateView: function (data) {
    // 游戏结束
    if (data.over) {
      data.overMsg = '游戏结束';
    }

    // 获胜
    if (data.win) {
      data.overMsg = '恭喜';
    }

    this.setData(data);
  },

  // 重新开始
  restart: function () {
    this.updateView({
      grids: this.GameManager.restart(),
      over: false,
      won: false,
      score: 0
    });
  },

  touchStartClienX: 0,
  touchStartClientY: 0,
  touchEndClientX: 0,
  touchEndClientY: 0,
  isMultiple: false, // 多手指操作

  touchStart: function (events) {

    // 多指操作
    this.isMultiple = events.touches.length > 1;
    if (this.isMultiple) {
      return;
    }

    var touch = events.touches[0];

    this.touchStartClientX = touch.clientX;
    this.touchStartClientY = touch.clientY;

  },

  touchMove: function (events) {
    var touch = events.touches[0];
    this.touchEndClientX = touch.clientX;
    this.touchEndClientY = touch.clientY;
  },

  touchEnd: function (events) {
    if (this.isMultiple) {
      return;
    }

    var dx = this.touchEndClientX - this.touchStartClientX;
    var absDx = Math.abs(dx);
    var dy = this.touchEndClientY - this.touchStartClientY;
    var absDy = Math.abs(dy);

    if (Math.max(absDx, absDy) > 10) {
      var direction = absDx > absDy ? (dx > 0 ? 1 : 3) : (dy > 0 ? 2 : 0);

      var data = this.GameManager.move(direction) || {
        grids: this.data.grids,
        over: this.data.over,
        won: this.data.won,
        score: this.data.score
      };

      var highscore = wx.getStorageSync('highscore') || 0;
      if (data.score > highscore) {
        wx.setStorageSync('highscore', data.score);
      }

      this.updateView({
        grids: data.grids,
        over: data.over,
        won: data.won,
        score: data.score,
        highscore: Math.max(highscore, data.score)
      });
    }
  },

  // 返回首页的函数
  exitToIndex: function (e) {
    wx.navigateBack()
    // console.log(e)
  }
})