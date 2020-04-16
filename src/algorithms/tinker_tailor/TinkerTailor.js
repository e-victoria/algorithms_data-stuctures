class TinkerTailor {

    constructor(n, t) {
        this.n = n;
        this.t = t;
    }

    getArrayOfExcludedMembers() {
        let players = [];
        const resultArray = [];

        for (let i = 1; i <= this.n; i++) {
            players.push(i);
        }

        const playersLength = players.length;

        function count(players, n, t) {
            if (players.length >= t) {
                resultArray.push(players[t - 1]);
                players.splice(t - 1, 1);

                if (t - 1 !== 0) {
                    for (let i = 0; i < players.length - (t - 1); i++) {
                        const player = players.pop(players.length - 1);
                        players.unshift(player)
                    }
                }
            } else if (players.length < t) {
                resultArray.push(players[t - n - 1]);
                players.splice((t - n) - 1, 1);

                if (t - 1 !== 0) {
                    for (let i = 0; i < players.length - (t - n - 1); i++) {
                        const player = players.pop(players.length - 1);
                        players.unshift(player)
                    }
                }
            }
            
        }

        for (let i = 0; i < playersLength - 1; i++) {
            count(players, this.n, this.t);
            this.n --;
        }   

        resultArray.push(players[0])

        return resultArray;
    }

}

module.exports = TinkerTailor;