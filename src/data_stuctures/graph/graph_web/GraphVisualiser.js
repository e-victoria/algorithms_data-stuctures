export default class GraphVisualiser {
    constructor(graph) {
        this.graph = graph.getGraph();
    }

    render() {
        this.createVertex();
    }

    createVertex() {
        const div = document.querySelector('.graph');
        const vertex = document.createElement('div');
        vertex.classList.add('vertex');
        for(let key of this.graph.keys()) {
            vertex.textContent = key;
            div.appendChild(vertex);
        }
    }
}