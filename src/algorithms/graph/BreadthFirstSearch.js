import Graph from '../../data_stuctures/graph/UndirectedGraph.js';

export default class BreadthFirstSearch {
    constructor() {
        this.graph = new Graph();
        this.graph.addNode('A');
    }

    searchGraph() {
        console.log(this.graph);
    }
}

const breadthFirstSearch = new BreadthFirstSearch();
breadthFirstSearch.searchGraph();