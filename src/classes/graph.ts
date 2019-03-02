import Vertex from "./vertex";
import Edge from "./edge";

export default class Graph {
  
  constructor(
    public vertices: Vertex[],
    public edges: Edge[]) {}
}