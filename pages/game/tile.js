// 设置 Tile 的构造函数
function Tile(position, value) {
  // 记录位置和值的大小
  this.x = position.x;
  this.y = position.y;
  this.value = value || 2;

  // 上一个位置与合并前的位置
  this.previousPosition = null;
  this.mergedFrom = null;
}

/*
// 设置 Tile 的 prototype 函数原型
this.prototype = {
  // 记录上一个格子的位置
  savePosition: function () {
    this.previousPosition = {
      x: this.x,
      y: this.y
    }
  },

  // 更新当前格子的位置
  updatePosition: function (position) {
    this.x = position.x;
    this.y = position.y;
  },

  // 返回当前值和位置
  serialize: function () {
    return {
      position: {
        x: this.x,
        y: this.y
      },
      value: this.value
    };
  }
}
*/

// 将接口暴露出来
module.exports = Tile;