import Vertex from "../classes/vertex";
import { Vector3 } from "three";

/**
 * @param count number of vertices to generate
 */
export default function generateVertices(count: number): Vertex[] {
  const res = [];
  const area = 100;
  for (let i = 0; i < count; i++) {
    const vertex = new Vertex();
    const x = Math.floor(Math.random() * (area + area + 1) - area),
      y = Math.floor(Math.random() * (area + area + 1) - area),
      z = Math.floor(Math.random() * (area + area + 1) - area);
    vertex.position = new Vector3(x, y, z);
    res.push(vertex);
  }
  return res;
};