/**
 * Created by renjie on 2015/7/3.
 */


(function (window) {

    // 动作枚举
    var ActionType = {
        ACTION_LEFT: 1,
        ACTION_RIGHT: 2,
        ACTION_CHANGE: 3,
        ACTION_DOWN: 4
    };

    function Shape(x, y, idx, color, shapes, offsets) {
        this.x = x;
        this.y = y;
        this.idx = idx;
        this.color = color;
        this.shapes = shapes;
        this.offsets = offsets;
    };

    Shape.prototype.doAction = function (cmd) {
        switch (cmd) {
            case ActionType.ACTION_LEFT:
                this.x--;
                break;
            case ActionType.ACTION_RIGHT:
                this.x++;
                break;
            case ActionType.ACTION_CHANGE:
                this.idx = (this.idx + 1) % 4;
                break;
            case ActionType.ACTION_DOWN:
                this.y++;
                break;
        }
    };

    // Shape.prototype.render = function (ctx) {
    //     var shapesArr = this.shapes[this.idx];
    //     ctx.fillStyle = this.color;
    //     for (var i = 0; i < 5; i++) {
    //         for (var j = 0; j < 5; j++) {
    //             if (shapesArr[i][j] == 1) {
    //                 ctx.fillRect((this.x + j) * 20, (this.y + i) * 20, 20, 20);

    //                 ctx.strokeStyle = "rgb(0, 255, 0)";
    //                 ctx.strokeRect((this.x + j) * 20, (this.y + i) * 20, 20, 20);
    //             }
    //         }
    //     }
    // };

    Shape.prototype.render = function(ctx) {
        var offsetsArr = this.offsets[this.idx];
        ctx.fillStyle = this.color;
        for (var i = 0; i < 4; i++) {
            var offset = offsetsArr[i];
            ctx.fillRect((this.x + offset[0])*20, (this.y + offset[1])*20, 20, 20);

            ctx.strokeStyle = "rgb(0, 255, 0)";
            ctx.strokeRect((this.x + offset[0])*20, (this.y + offset[1])*20, 20, 20);
        }
    }

    Shape.prototype.display = function (ctx, offsetx, offsety) {
        var shapesArr = this.offsets[this.idx];
        ctx.fillStyle = this.color;
        for (var i = 0; i < 4; i++) {
            var offset = shapesArr[i];
            ctx.fillRect(offsetx + offset[0]*20, offsety + offset[1]*20, 20, 20);

            ctx.strokeStyle = "rgb(0, 255, 0)";
            ctx.strokeRect(offsetx + offset[0]*20, offsety + offset[1]*20, 20, 20);
        }
    };

    LShape.SHAPES = [
        [
            [0, 0, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 1]
        ],
        [
            [1, 1, 1, 0],
            [1, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [1, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 1, 0],
            [1, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]
    ];
    // LShape.SHAPES = [
    //     [
    //         [0, 0, 1, 0, 0],
    //         [0, 0, 1, 0, 0],
    //         [0, 0, 1, 1, 0],
    //         [0, 0, 0, 0, 0],
    //         [0, 0, 0, 0, 0]
    //     ],
    //     [
    //         [0, 0, 0, 0, 0],
    //         [0, 0, 0, 0, 0],
    //         [0, 0, 1, 1, 1],
    //         [0, 0, 1, 0, 0],
    //         [0, 0, 0, 0, 0]
    //     ],
    //     [
    //         [0, 0, 0, 0, 0],
    //         [0, 0, 0, 0, 0],
    //         [0, 1, 1, 0, 0],
    //         [0, 0, 1, 0, 0],
    //         [0, 0, 1, 0, 0]
    //     ],
    //     [
    //         [0, 0, 0, 0, 0],
    //         [0, 0, 1, 0, 0],
    //         [1, 1, 1, 0, 0],
    //         [0, 0, 0, 0, 0],
    //         [0, 0, 0, 0, 0]
    //     ]
    // ];
    LShape.OFFSET = [[[0, 0], [0, -1], [0, -2], [1, 0]], [[0, 0], [1, 0], [2, 0], [0, 1]], [[0, 0], [-1, 0], [0, 1], [0, 2]], [[0, 0], [0, -1], [-1, 0], [-2, 0]]];
    function LShape(x, y, idx, color) {
        // switch (idx) {
        //     case 0: Shape.call(this, 2, -3, idx, color, LShape.SHAPES, LShape.OFFSET); break;
        //     case 1: Shape.call(this, 4, 0, idx, color, LShape.SHAPES, LShape.OFFSET); break;
        //     case 2: Shape.call(this, 3, 0, idx, color, LShape.SHAPES, LShape.OFFSET); break;
        //     case 3: Shape.call(this, -2, -1, idx, color, LShape.SHAPES, LShape.OFFSET); break;
        // }  
        //Shape.call(this, 2, -2, idx, color, LShape.SHAPES, LShape.OFFSET);
        Shape.call(this, x, y, idx, color, LShape.SHAPES, LShape.OFFSET);    
    };
    // class LShape extend Shape
    LShape.prototype = new Shape();

    JShape.SHAPES = [
        [
            [0, 0, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 1, 1, 0]
        ],
        [
            [1, 0, 0, 0],
            [1, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [1, 1, 0, 0],
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [1, 1, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]
    ];
    JShape.OFFSET = [[[0, 0], [0, -1], [0, -2], [-1, 0]], [[0, 0], [0, -1], [1, 0], [2, 0]], [[0, 0], [1, 0], [0, 1], [0, 2]], [[0, 0], [-1, 0], [-2, 0], [0, 1]]];
    function JShape(x, y, idx, color) {
        // switch (idx) {
        //     case 0: Shape.call(this, 2, -3, idx, color, JShape.SHAPES, JShape.OFFSET); break;
        //     case 1: Shape.call(this, 4, -1, idx, color, JShape.SHAPES, JShape.OFFSET); break;
        //     case 2: Shape.call(this, 4, 0, idx, color, JShape.SHAPES, JShape.OFFSET); break;
        //     case 3: Shape.call(this, 2, 0, idx, color, JShape.SHAPES, JShape.OFFSET); break;
        // }
        Shape.call(this, x, y, idx, color, JShape.SHAPES, JShape.OFFSET); 
    };
    JShape.prototype = new Shape();

    IShape.SHAPES = [
        [
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0]
        ]
    ];
    IShape.OFFSET = [[[0, 0], [0, -1], [0, -2], [0, 1]], [[0, 0], [1, 0], [2, 0], [-1, 0]], [[0, 0], [0, -1], [0, -2], [0, 1]], [[0, 0], [1, 0], [2, 0], [-1, 0]]];
    function IShape(x, y, idx, color) {
        // switch (idx) {
        //     case 0: Shape.call(this, 2, -2, idx, color, IShape.SHAPES, IShape.OFFSET); break;
        //     case 1: Shape.call(this, 3, -2, idx, color, IShape.SHAPES, IShape.OFFSET); break;
        //     case 2: Shape.call(this, 2, -2, idx, color, IShape.SHAPES, IShape.OFFSET); break;
        //     case 3: Shape.call(this, 3, -2, idx, color, IShape.SHAPES, IShape.OFFSET); break;
        // }
        Shape.call(this, x, y, idx, color, IShape.SHAPES, IShape.OFFSET); 
    };
    // class IShape extend Shape
    IShape.prototype = new Shape();

    OShape.SHAPES = [
        [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ]
    ];
    OShape.OFFSET = [[[0, 0], [0, -1], [1, -1], [1, 0]], [[0, 0], [0, -1], [1, -1], [1, 0]], [[0, 0], [0, -1], [1, -1], [1, 0]], [[0, 0], [0, -1], [1, -1], [1, 0]]];
    function OShape(x, y, idx, color) {
        //Shape.call(this, 3, -2, idx, color, OShape.SHAPES, OShape.OFFSET);
        Shape.call(this, x, y, idx, color, OShape.SHAPES, OShape.OFFSET); 
    };
    // class CShape extend Shape
    OShape.prototype = new Shape();


    TShape.SHAPES = [
        [
            [0, 0, 0, 0],
            [0, 1, 0, 0],
            [1, 1, 1, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [1, 1, 1, 0],
            [0, 1, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 1, 0, 0],
            [1, 1, 0, 0],
            [0, 1, 0, 0]
        ]
    ];
    TShape.OFFSET = [[[0, 0], [1, 0], [0, 1], [-1, 0]], [[0, 0], [0, -1], [0, 1], [-1, 0]], [[0, 0], [0, -1], [1, 0], [-1, 0]], [[0, 0], [0, -1], [1, 0], [0, 1]]];
    function TShape(x, y, idx, color) {
        //Shape.call(this, 3, -2, idx, color, TShape.SHAPES, TShape.OFFSET);
        Shape.call(this, x, y, idx, color, TShape.SHAPES, TShape.OFFSET); 
    };
    // class CShape extend Shape
    TShape.prototype = new Shape();


    SShape.SHAPES = [
        [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [1, 1, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 1, 0, 0],
            [0, 1, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [1, 1, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 1, 0, 0],
            [0, 1, 0, 0]
        ]
    ];
    SShape.OFFSET = [[[0, 0], [0, -1], [1, -1], [-1, 0]], [[0, 0], [-1, 0], [-1, -1], [0, 1]], [[0, 0], [0, -1], [1, -1], [-1, 0]], [[0, 0], [-1, 0], [-1, -1], [0, 1]]];
    function SShape(x, y, idx, color) {
        //Shape.call(this, 3, -2, idx, color, SShape.SHAPES, SShape.OFFSET);
        Shape.call(this, x, y, idx, color, SShape.SHAPES, SShape.OFFSET); 
    };
    // class CShape extend Shape
    SShape.prototype = new Shape();


    ZShape.SHAPES = [
        [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 1, 1],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 0, 1, 0],
            [0, 1, 1, 0],
            [0, 1, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 1, 1],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 0, 1, 0],
            [0, 1, 1, 0],
            [0, 1, 0, 0]
        ]
    ];
    ZShape.OFFSET = [[[0, 0], [0, -1], [1, 0], [-1, -1]], [[0, 0], [0, -1], [-1, 1], [-1, 0]], [[0, 0], [0, -1], [1, 0], [-1, -1]], [[0, 0], [0, -1], [-1, 1], [-1, 0]]]
    function ZShape(x, y, idx, color) {
        //Shape.call(this, 2, -2, idx, color, ZShape.SHAPES, ZShape.OFFSET);
        Shape.call(this, x, y, idx, color, ZShape.SHAPES, ZShape.OFFSET);
    };
    // class CShape extend Shape
    ZShape.prototype = new Shape();

    // ==============================================================
    function TetrisUnit() {
        this.row = 22;
        this.col = 10;
        this.boards = new Array(this.row);
        for (var i = 0; i < this.row; i++) {
            this.boards[i] = new Array(this.col);
            for (var j = 0; j < this.col; j++) {
                this.boards[i][j] = 0;
            }
        }

        this.bkBoards = new Array(this.row);
        for (var i = 0; i < this.row; i++) {
            this.bkBoards[i] = new Array(this.col);
            for (var j = 0; j < this.col; j++) {
                this.bkBoards[i][j] = 0;
            }
        }
    }

    TetrisUnit.prototype.reset = function () {
        for (var i = 0; i < this.row; i++) {
            for (var j = 0; j < this.col; j++) {
                this.boards[i][j] = 0;
            }
        }
    }

    // TetrisUnit.prototype.checkAvailable = function (tx, ty, shapeArr) {
    //     for (var i = 0; i < 4; i++) {
    //         for (var j = 0; j < 4; j++) {
    //             if (shapeArr[i][j] == 1) {
    //                 if (tx + j < 0 || tx + j >= this.col || ty + i < -1 || ty + i >= this.row) {
    //                     //console.log("rs: ", tx, ty, i, j);
    //                     return false;
    //                 }
    //                 if (ty + i >= 0 && this.boards[ty + i][tx + j] == 1) {
    //                     return false;
    //                 }
    //             }
    //         }
    //     }
    //     return true;
    // }

    TetrisUnit.prototype.checkAvailable = function (tx, ty, shapeArr) {
        for (var i = 0; i < 4; i++) {
            var offset = shapeArr[i];
            var offsetX = offset[0];
            var offsetY = offset[1];
            if (tx + offsetX < 0 || tx + offsetX >= this.col || ty + offsetY < 0 || ty + offsetY >= this.row) {
                return false;
            }
            if (ty + offsetY >= 0 && this.boards[ty+offsetY][tx+offsetX] == 1) {
                return false;
            }
        }
        return true;
    }

    // TetrisUnit.prototype.applyAction2Data = function (tx, ty, shapeArr) {
    //     var i, j;
    //     for (i = 0; i < this.row; i++) {
    //         for (j = 0; j < this.col; j++) {
    //             this.bkBoards[i][j] = this.boards[i][j];
    //         }
    //     }

    //     for (i = 0; i < 4; i++) {
    //         for (j = 0; j < 4; j++) {
    //             if (shapeArr[i][j] === 1) {
    //                 if (tx + j < 0 || tx + j >= this.col || ty + i < 0 || ty + i >= this.row) {
    //                     continue;
    //                 }
    //                 this.bkBoards[ty + i][tx + j] = 1;
    //             }
    //         }
    //     }
    //     return this.bkBoards;
    // }

    TetrisUnit.prototype.applyAction2Data = function (tx, ty, shapeArr) {
        var i, j;
        for (i = 0; i < this.row; i++) {
            for (j = 0; j < this.col; j++) {
                this.bkBoards[i][j] = this.boards[i][j];
            }
        }

        for (var i = 0; i < 4; i++) {
            var offset = shapeArr[i];
            var offsetX = offset[0];
            var offsetY = offset[1];
            if (tx + offsetX < 0 || tx + offsetX >= this.col || ty + offsetY < 2 || ty + offsetY >= this.row) {
                continue;
            }
            this.bkBoards[ty+offsetY][tx+offsetX] = 1;
        }
        return this.bkBoards;
    }

    TetrisUnit.prototype.render = function (ctx) {

        ctx.strokeStyle = "rgb(125, 0, 0)";
        ctx.strokeRect(0, 0, 20 * this.col, 20 * this.row);

        for (var i = 0; i < this.row; i++) {
            for (var j = 0; j < this.col; j++) {
                if (this.boards[i][j] != 0) {
                    //console.log("==========render [%d, %d]", i, j);
                    ctx.fillStyle = "rgb(0, 125, 0)";
                    ctx.fillRect(j * 20, i * 20, 20, 20);

                    ctx.strokeStyle = "rgb(0, 255, 0)";
                    ctx.strokeRect(j * 20, i * 20, 20, 20);
                }
            }
        }
    }

    TetrisUnit.prototype.applyShape = function (tx, ty, shapeArr) {
        for (var i = 0; i < 4; i++) {
            var offset = shapeArr[i];
            var offsetX = offset[0];
            var offsetY = offset[1];
            if (tx + offsetX < 0 || tx + offsetX >= this.col || ty + offsetY < 2 || ty + offsetY >= this.row) {
                continue;
            }
            this.boards[ty+offsetY][tx+offsetX] = 1;
        }
    }

    TetrisUnit.prototype.touchDown = function (tx, ty, shapeArr) {
        // *) 方块落地
        // for (var i = 0; i < 4; i++) {
        //     for (var j = 0; j < 4; j++) {
        //         if (shapeArr[i][j] == 1) {
        //             if (tx + j < 0 || tx + j >= this.col || ty + i < 0 || ty + i >= this.row) {
        //                 continue;
        //             }
        //             this.boards[ty + i][tx + j] = 1;
        //         }
        //     }
        // }
        for (var i = 0; i < 4; i++) {
            var offset = shapeArr[i];
            var offsetX = offset[0];
            var offsetY = offset[1];
            if (tx + offsetX < 0 || tx + offsetX >= this.col || ty + offsetY < 2 || ty + offsetY >= this.row) {
                continue;
            }
            this.boards[ty+offsetY][tx+offsetX] = 1;
        }

        // *) 消除成行的方块
        var counts = 0;
        var eliminateNum = 0;
        var eliminateArr = new Array(this.row);
        for (var i = this.row - 1; i >= 0; i--) {
            var gridNum = 0;
            for (var j = 0; j < this.col; j++) {
                if (this.boards[i][j] == 0) {
                } else {
                    counts++;
                    gridNum++;
                }
            }
            // *) 满足消掉的条件
            if (gridNum === this.col) {
                eliminateArr[i] = true;
                eliminateNum++;
            } else {
                eliminateArr[i] = false;
            }
        }

        if (eliminateNum > 0) {
            var nextIdx = this.row - 1;
            for (var i = this.row - 1; i >= 0; i--) {
                while (nextIdx >= 0 && eliminateArr[nextIdx] === true) {
                    nextIdx--;
                }

                if (i === nextIdx) {
                    nextIdx--;
                    continue;
                } else {
                    if (nextIdx >= 0) {
                        for (var j = 0; j < this.col; j++) {
                            this.boards[i][j] = this.boards[nextIdx][j];
                        }
                        nextIdx--;
                    } else {
                        for (var j = 0; j < this.col; j++) {
                            this.boards[i][j] = 0;
                        }
                    }
                }
            }
        }

        return {eliminatedLines: eliminateNum, gridCount: counts};

    }

    TetrisUnit.prototype.isOverlay = function (tx, ty, shapeArr) {
        for (var i = 0; i < 4; i++) {
            var offset = shapeArr[i];
            var offsetX = offset[0];
            var offsetY = offset[1];
            if (tx + offsetX < 0 || tx + offsetX >= this.col || ty + offsetY <= 2 || ty + offsetY >= this.row) {
                continue;
            }
            if (this.boards[ty+offsetY][tx+offsetX] === 1) {
                console.log("{%d,%d,%d,%d}", tx, ty, offsetX, offsetY);
                return true;
            }
        }
        return false;
    }

    TetrisUnit.prototype.touchTop = function () {
        for (var j = 0; j < this.col; j++) {
            if (this.boards[2][j] === 1) {
                return true;
            }
        }
        return false;
    }

    // TetrisUnit.prototype.getGridNum = function() {
    //     var gridNum = 0;
    //     for (var i = 0; i < this.row; i++) {
    //         for (var j = 0; j < this.col; j++) {
    //             if (this.boards[i][j] = 1) {
    //                 gridNum++;
    //             }
    //         }
    //     }
    //     return gridNum;
    // }

    // export
    window.ActionType = ActionType;
    window.Shape = Shape;
    window.LShape = LShape;
    window.JShape = JShape;
    window.IShape = IShape;
    window.OShape = OShape;
    window.TShape = TShape;
    window.SShape = SShape;
    window.ZShape = ZShape;
    window.TetrisUnit = TetrisUnit;

})(window);

