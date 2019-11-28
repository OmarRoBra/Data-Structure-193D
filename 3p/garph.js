class Graph {
    constructor() {
        this.edges = {};
        this.vertex = [];
        this.count = 0;
        this.count2 = 0;
        this.mult=false;
    }

    addVertex(vertice) {
        this.vertex.push(vertice);
        this.edges[vertice] = [];
        this.count2++;
    }

    addEdge(v1, v2) {
        this.edges[v1].push({
            vertice: v2
        });
        this.edges[v2].push({
            vertice: v1
        });
        this.count++;
        if(v1===v2){
            this.mult=true;
        }

    }

    printGraph() {
        let graph = "";
        this.vertex.forEach(vertice => {
            graph += vertice + " -> " + this.edges[vertice].map(n => n.vertice).join("-") + "\n";
        });
        console.log(graph);
    }

    isComplete() {
        let result = false;
        let aux = (this.count2 * (this.count2 - 1)) / 2;
        if (this.count === aux) {
            result = true;
        } else result = false

        return result;

    }

    isMultigraph() {

        let result = false;

      for (let i = 0; i < this.vertex.length; i++) {
           for (let k = 0; k < this.edges.length; k++) {
                if (this.edges[k]==this.vertex[i] ){
                    result = true;
                    break;
                } else {
                    result = false;
                }
            }
        }
        
        return this.mult;

    }

    isSubgraph(g) {

    }

}