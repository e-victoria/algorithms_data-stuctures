export default class GraphVisualiser {
    constructor(graph) {
        this.graph = graph;
    }

    render() {
        this.createVertex();
    }

    createVertex() {
        const vertex = document.createElement('div');
        vertex.classList.add('vertex');
        for(let key of this.graph.keys()) {
            vertex.textContent = key;
        }
    }
}