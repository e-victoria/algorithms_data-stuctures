import GraphVisualiser from './GraphVisualiser.js';
import Graph from '../UndirectedGraph.js';

renderGraph();

function renderGraph() {
    const graph = new Graph();
    graph.addVertex('Kara');
    const graphVisualiser = new GraphVisualiser(graph);
    graphVisualiser.render();
}

