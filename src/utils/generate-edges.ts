import Vertex from "../classes/vertex";
import randomIntFromRange from "./random-int-from-range";
import Edge from "../classes/edge";

/**
 * Randomly generate edges between vertices
 * @param vertices array of vertices
 * @param quantity number of edges to create
 */
export default function generateEdges(vertices: Vertex[], quantity: number) {
  // debugger;
  const vlength = vertices.length;
  if (vlength * (vlength - 1) < quantity) {
    console.error('You exceeded maximum number of edges in graph');
    quantity = vlength;
  }
  
  const edges = [];
  let createdCount = 0;
  let fIndex, sIndex;

  while(true) {
  
    if (createdCount >= quantity) break;
    fIndex = randomIntFromRange(0, vlength - 1);
    sIndex = randomIntFromRange(0, vlength - 1);

    // create edge if vertices isn't already connected
    // and we don't try to connect vertex to itself
    if (!vertices[fIndex].isConnected(vertices[sIndex]) && fIndex !== sIndex) {
      const edge = new Edge(vertices[fIndex], vertices[sIndex]);
      createdCount++;
      edges.push(edge);
    }
  }
  return edges;
}