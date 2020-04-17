class BreadthFirstSearch {
    constructor() {
        this.graph = new Graph();
        this.graph.addNode('A');
    }

    searchGraph() {
        console.log(this.graph);
    }
}

module.exports = BreadthFirstSearch;

const breadthFirstSearch = new BreadthFirstSearch();
breadthFirstSearch.searchGraph();