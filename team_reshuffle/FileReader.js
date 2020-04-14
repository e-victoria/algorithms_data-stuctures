const fs = require('fs');
const readline = require('readline');

class FileReader {
    constructor(filepath) {
        this.filepath = filepath;
    }

    getTeamsFromFile() {
        let teams = [];
        const fileStream = fs.readFileSync(this.filepath, 'utf8').split('#');
        
        for (let row of fileStream) {
            const team = row.split('\n');
            team.map((el) => {
                if (el === '') {
                    team.splice(team.indexOf(el), 1);
                }
            });
            teams.push(team);
        }

        return teams;
    }
}

module.exports = FileReader;