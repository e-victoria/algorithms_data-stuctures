import BreadthFirstSearch from '../../../../src/algorithms/graph/BreadthFirstSearch';
import Graph from '../../../../src/data_stuctures/graph/UndirectedGraph';

describe("BreadthFirstSearch", function () {
    let breadthFirstSearch;
    beforeEach(function () {
        const graph = new Graph();
        graph.addVertex('Kara');
        graph.addEdge('Kara', 'Alex');
        graph.addEdge('Kara', 'Sam');
        graph.addEdge('Sam', 'Luke');
        graph.addEdge('Sam', 'Mike');
        graph.addEdge('Alex', 'Emily');
        graph.addEdge('Alex', 'Luke');
        graph.addEdge('Luke', 'Lena');
        graph.addEdge('Lena', 'Mark');
        breadthFirstSearch = new BreadthFirstSearch(graph);
    });

    it("should shortest path and return 4", function() {
        const actual = breadthFirstSearch.getShortestPath('Kara', 'Mark');
        expect(actual).toBe(4);
    });

    it("should shortest path and return 2", function() {
        const actual = breadthFirstSearch.getShortestPath('Luke', 'Mark');
        expect(actual).toBe(2);
    });

    it("should shortest path and return 4", function() {
        const actual = breadthFirstSearch.getShortestPath('Mark', 'Emily');
        expect(actual).toBe(4);
    });

    it("should shortest path and return 1", function() {
        const actual = breadthFirstSearch.getShortestPath('Mark', 'Lena');
        expect(actual).toBe(1);
    });

    it("should shortest path and return 4", function() {
        const actual = breadthFirstSearch.getShortestPath('Mark', 'Kara');
        expect(actual).toBe(4);
    });

    it("should shortest path and return 3", function() {
        const actual = breadthFirstSearch.getShortestPath('Kara', 'Lena');
        expect(actual).toBe(3);
    });

});