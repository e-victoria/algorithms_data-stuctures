describe("Minesweeper", function() {
    const Minesweeper = require('../../../../src/algorithms/uncategorized/minesweeper/Minesweeper');
    let minesweeper;
  
    beforeEach(function() {
        const rows = 3;
        const cols = 3;
        minesweeper = new Minesweeper(rows, cols);
    });
  
    it("should return an array of team members", function() {
      const actual = minesweeper.generateBoard();
      expect(actual).toEqual([['.', '.', '.'], ['.', '.', '.'], ['.', '.', '.']]);
    });

    it("should show how many mines on near cells are", function() {
      const board = [['.', '.', '*'], ['.', '*', '.'], ['.', '.', '.']];
      const actual = minesweeper.getSumOfMines(board);
      expect(actual).toEqual([[1, 2, '*'], [1, '*', 2], [0, 1, 1]]);
    });

  });
  