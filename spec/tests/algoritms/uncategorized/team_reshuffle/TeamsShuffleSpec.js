describe("TeamsShuffle", function() {
    const FileReader = require('../../../../../src/algorithms/uncategorized/team_reshuffle/FileReader');
    const TeamsShuffle = require('../../../../../src/algorithms/uncategorized/team_reshuffle/TeamsShuffle');
    let fileReader;
    let teamsShuffle;
  
  
    beforeEach(function() {
      const filePath = `${__dirname}/teams.txt`;
      fileReader = new FileReader(filePath);
      teamsShuffle = new TeamsShuffle(fileReader);
    });
  
    it("should return an array of team members", function() {
      const actual = fileReader.getTeamsFromFile();
      expect(actual).toEqual([['1_B', '1_C'], ['2_A', '2_C'], ['3_A', '3_B']]);
    });

    it("should return an array of new teams with no previous co-teamers", function() {
      const oldTeams = fileReader.getTeamsFromFile()[0];
      const newTeams = teamsShuffle.generateNewTeams().join(',').split(',');
      const isOk = newTeams.indexOf(oldTeams[0]) + 1 !== (newTeams.indexOf(oldTeams[1])) && newTeams.indexOf(oldTeams[0]) - 1 !== (newTeams.indexOf(oldTeams[1]));
      expect(isOk).toBeTrue();
    })

    it("should return an array of new teams with no previous co-teamers", function() {
      const oldTeams = fileReader.getTeamsFromFile()[1];
      const newTeams = teamsShuffle.generateNewTeams().join(',').split(',');
      const isOk = newTeams.indexOf(oldTeams[0]) + 1 !== (newTeams.indexOf(oldTeams[1])) && newTeams.indexOf(oldTeams[0]) - 1 !== (newTeams.indexOf(oldTeams[1]));
      expect(isOk).toBeTrue();
    })

    it("should return an array of new teams with no previous co-teamers", function() {
      const oldTeams = fileReader.getTeamsFromFile()[2];
      const newTeams = teamsShuffle.generateNewTeams().join(',').split(',');
      const isOk = newTeams.indexOf(oldTeams[0]) + 1 !== (newTeams.indexOf(oldTeams[1])) && newTeams.indexOf(oldTeams[0]) - 1 !== (newTeams.indexOf(oldTeams[1]));
      expect(isOk).toBeTrue();
    })
  });
  