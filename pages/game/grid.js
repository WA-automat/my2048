// 设置 Grid 的构造函数
function Grid(size) {
  this.size = size;
  this.cells = this.empty();
}

// 将接口暴露出来
module.exports = Grid;