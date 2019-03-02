import Vertex from "./vertex";
import Edge from "./edge";

export default class Graph {
  
  constructor(
    public vertices: Vertex[],
    public edges: Edge[]) {}

  public isConnected(vertex1: Vertex, vertex2: Vertex): boolean {
    for (let i = 0, j = vertex1.connectedTo.length; i < j; i++) {
      if (vertex1.connectedTo[i] === vertex2)
        return true;
    }
    return false;
  }
}