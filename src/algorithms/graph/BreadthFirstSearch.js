import Graph from '../../data_stuctures/graph/UndirectedGraph.js';

export default class BreadthFirstSearch {
	constructor(graph) {
		this.graph = graph.getGraph();
	}

	getShortestPath(personA, personB) {
		const visited = {};
		const queue = new Set();
		let counter = {};
		let pivot = personA;
		counter[pivot] = 0;

		queue.add(pivot);

		while (queue.size) {
			pivot = queue.values().next().value;
			
			if (pivot === personB) {
				return counter[pivot];
			}

			queue.delete(queue.values().next().value);
			if (!visited[pivot]) {
				visited[pivot] = true;
				for (let vertex of this.graph.get(pivot)) {
					if (pivot !== personA) {
						counter[vertex] = counter[pivot] + 1;
					} else {
						counter[vertex] = 1;
					}
					queue.add(vertex);
				}
			}
		}
		return counter[pivot];;
	}
}