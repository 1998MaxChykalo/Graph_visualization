import World from "./classes/world";
import FruchtermannReingoldIntegrator from "./classes/fruchtermann-reingold.integrator";
import Graph from "./classes/graph";
import Vertex from "./classes/vertex";
import Edge from "./classes/edge";
import generateVertices from "./utils/generate-vertices";
import generateEdges from "./utils/generate-edges";

function main() {
  const vertices: Vertex[] = generateVertices(5);
  const edges: Edge[] = generateEdges(vertices, 50);
  const graph = new Graph(vertices, edges);
  const integrator = new FruchtermannReingoldIntegrator(graph);
  const wolrd = new World(integrator);
}


// need this stuff to use HMR from webpack-dev-server
if (module.hot) {
  module.hot.accept(console.log);
  main();
}