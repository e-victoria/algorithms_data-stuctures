describe("TinkerTailor", function() {
    const TinkerTailor = require('../../tinker_tailor/TinkerTailor');
    let tinkerTailor;
  
    beforeEach(function() {
        tinkerTailor = new TinkerTailor(5, 3);
    });
  
    it("should return an array of excluded members (from looser to winner)", function() {
      const actual = tinkerTailor.getArrayOfExcludedMembers();
      expect(actual).toEqual([3, 1, 5, 2, 4]);
    });

  });
  