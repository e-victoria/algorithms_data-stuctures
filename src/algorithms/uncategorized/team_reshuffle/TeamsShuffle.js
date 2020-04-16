class TeamsShuffle {
    constructor(fileReader) {
        this.fileReader = fileReader;
    }
    generateNewTeams() {
        const oldTeams = this.fileReader.getTeamsFromFile();
        let newTeams = [];
        let allMembers = [];


        for (let j = 0; j < oldTeams[0].length; j++) {
            for (let i = 0; i < oldTeams.length; i++) {
                if (i + 1 < oldTeams.length) {
                    allMembers.push(oldTeams[i + 1][j]);
                } else {
                    let a = 0;
                    allMembers.push(oldTeams[a][j]);
                    a++;
                }
            }
        }


        let a = 0;
        for (let i = 0; i < oldTeams.length; i++) {
            let newTeam = [];
            for (let j = 0; j < oldTeams[0].length; j++) {
                newTeam.push(allMembers[a]);
                a++;
            }
            newTeams.push(newTeam);
        }
        return newTeams;
    }
}

module.exports = TeamsShuffle;