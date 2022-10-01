// 设置 Grid 的构造函数
function Grid(size) {
  this.size = size;
  this.cells = this.empty();
}

// 设置 Grid 的 prototype 函数原型
Grid.prototype = {

  // 构造一个空的矩阵[[null,..,size.length],[]]
  empty: function () {
    var cells = [];

    // 为网格生成分数细胞组件
    for (var x = 0; x < this.size; x++) {
      var row = cells[x] = [];
      for (var y = 0; y < this.size; y++) {
        row.push(null);
      }
    }

    // [[{x:0,y:0},{x:0,y:1}],[]]
    return cells;
  },

  // 在空格子中随机挑选出一个格子
  randomAvailableCell: function () {
    var cells = this.availableCells();

    // 存在可填充的格子
    if (cells.length) {
      return cells[Math.floor(Math.random() * cells.length)];
    }
  },

  // 获取可填充的格子坐标
  availableCells: function () {
    var cells = [];

    for (var i = 0; i < this.size; i++) {
      for (var j = 0; j < this.size; j++) {

        // 当前格子无内容
        if (!this.cells[i][j]) {
          cells.push({
            x: i,
            y: j
          });
        }

      }
    }

    return cells;
  },

  // 是否存在空单元格
  cellsAvailable: function () {
    return !!this.availableCells().length;
  },

  cellAvailable: function (cell) {
    return !this.cellContent(cell);
  },

  // 填充 cell
  insertTile: function (tile) {
    this.cells[tile.x][tile.y] = tile;
  },

  // 删除 cell
  removeTile: function (tile) {
    this.cells[tile.x][tile.y] = null;
  },

  /* 
   * 获取单元格内容
   * @param {object} cell {x:0,y:0} 单元格坐标
   */
  cellContent: function (cell) {
    if (this.withinBounds(cell)) {
      return this.cells[cell.x][cell.y] || null;
    } else {
      return null;
    }
  },

  /*
   * 空单元格，格子还未填充数字
   */
  emptyCell: function (cell) {
    return !this.cellContent(cell);
  },

  // 判断cell是否合法
  withinBounds: function (cell) {
    return cell.x >= 0 && cell.x < this.size && cell.y >= 0 && cell.y < this.size;
  },

  // 对每一个细胞进行某项操作
  eachCell: function (callback) {
    for (var x = 0; x < this.size; x++) {
      for (var y = 0; y < this.size; y++) {
        callback(x, y, this.cells[x][y]);
      }
    }
  }
}

// 将接口暴露出来
module.exports = Grid;