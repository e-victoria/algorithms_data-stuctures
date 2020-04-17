class UndirectedGraph {
	constructor() {
		this.AdjList = new Map();
	}

	addVertex(vertex) {
		if (!this.AdjList.has(vertex)) {
			this.AdjList.set(vertex, []);
		} else {
			throw 'Already Exist!!!';
		}
	}

	removeVertex(vertex) {
		if (this.AdjList.has(vertex)) {
			if (this.AdjList.get(vertex).length <= 1) {
				this.AdjList.delete(vertex);
			} else {
				const relations = this.AdjList.get(vertex);
				for (let i = 0; i < relations.length; i++) {
					const subVertex = this.AdjList.get(relations[i]);
					subVertex.splice(subVertex.indexOf(vertex), 1)
				}
				this.AdjList.delete(vertex);
			}
		} else {
			throw 'No such vertex!!!';
		}
	}

	addEdge(vertex, node) {
		if (this.AdjList.has(vertex)) {
			this.AdjList.get(vertex).push(node);
			if (!this.AdjList.has(node)) {
				this.AdjList.set(node, []);
			}
			this.AdjList.get(node).push(vertex);
		}
	}

	removeEdge(vertex, node) {
		const thisVertex = this.AdjList.get(vertex);
		const thisNodeAsVetex = this.AdjList.get(node);
		if (thisVertex && thisVertex[thisVertex.indexOf(node)] !== undefined) {
			thisVertex.splice(thisVertex.indexOf(node), 1);
			if (thisNodeAsVetex.length > 1) {
				thisNodeAsVetex.splice(thisNodeAsVetex.indexOf(vertex), 1);
			} else {
				this.removeVertex(node);
			}
		}
	}

	printGraph() {
		for (let [key, value] of this.AdjList) {
			console.log(`${key} => ${value}`)
		}
	}

	toString() {
		let graph = '';
		for (let [key, value] of this.AdjList) {
			graph += `${key} => ${value};\n`;
		}
		return graph.substring(0, graph.length - 2);;
	}
}

module.exports = UndirectedGraph;