describe("UndirectedGraph", function() {
    const UndirectedGraph = require('../../../src/data_stuctures/graph/UndirectedGraph');
    let undirectedGraph

    it("should add one relation to graph", function() {
      undirectedGraph = new UndirectedGraph();
      undirectedGraph.addVertex('Kara');
      undirectedGraph.addEdge('Kara', 'Alex');

      let expected = 'Kara => Alex;\nAlex => Kara';
      expect(undirectedGraph.toString()).toEqual(expected);
    });

    it("should add two relations to graph and remove one", function() {
      undirectedGraph = new UndirectedGraph();
      undirectedGraph.addVertex('Kara');
      undirectedGraph.addEdge('Kara', 'Alex');
      undirectedGraph.addEdge('Kara', 'Sam');
      undirectedGraph.removeEdge('Kara', 'Sam');

      let expected = 'Kara => Alex;\nAlex => Kara';
      expect(undirectedGraph.toString()).toEqual(expected);
    });

    it("should create graph and remove one relation", function() {
      undirectedGraph = new UndirectedGraph();
      undirectedGraph.addVertex('Kara');
      undirectedGraph.addEdge('Kara', 'Alex');
      undirectedGraph.addEdge('Kara', 'Sam');
      undirectedGraph.addEdge('Sam', 'Alex');
      undirectedGraph.removeEdge('Kara', 'Sam');

      let expected = 'Kara => Alex;\nAlex => Kara,Sam;\nSam => Alex';
      expect(undirectedGraph.toString()).toEqual(expected);
    });

    it("should create graph and remove one vertex", function() {
      undirectedGraph = new UndirectedGraph();
      undirectedGraph.addVertex('Kara');
      undirectedGraph.addEdge('Kara', 'Alex');
      undirectedGraph.addEdge('Kara', 'Sam');
      undirectedGraph.addEdge('Sam', 'Alex');
      undirectedGraph.removeVertex('Sam');

      let expected = 'Kara => Alex;\nAlex => Kara';
      expect(undirectedGraph.toString()).toEqual(expected);
    });
  
  });