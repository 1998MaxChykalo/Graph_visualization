import { Vector3 } from "three";

import IIntegrator from "../interfaces/integrator.interface";
import IOptions from "../interfaces/options.interface";

import Graph from "./graph";
import Vertex from "./vertex";
import Edge from "./edge";

import defaultForceOptions from "../constants/default-force-options";
import { EPSILON, scene } from "../constants/index";

export default class FruchtermannReingoldIntegrator implements IIntegrator {

  private forceConstant: number;
  private attractionConstant: number;
  private repulsionConstant: number;

  constructor(public graph: Graph, public options: IOptions = defaultForceOptions) {
    this.forceConstant = Math.sqrt(options.height * options.width / graph.vertices.length);
    this.repulsionConstant = options.repulsion * this.forceConstant;
    this.attractionConstant = options.attraction * this.forceConstant;
  }

  calcForces(): void {
    this.calculateRepulsion();
    this.calculateAttraction();
    this.integrateVertices();
  }

  integrateVertices(): void {
    let dt = 1 / 5;
    for (let i = 0; i < this.graph.vertices.length; i++) {
      let vertex = this.graph.vertices[i];

      // Euler integration method
      vertex.velocity.add(vertex.forces.multiplyScalar(dt));
      vertex.position.add(vertex.velocity.multiplyScalar(dt));
    }
    for(let i =0; i < this.graph.edges.length; i++) {
      this.graph.edges[i].draw(scene);
    }
  }

  calculateRepulsion(): void {
    const vertexesNumber = this.graph.vertices.length;
    let vertex1: Vertex, vertex2: Vertex;
    for (let i = 0; i < vertexesNumber; i++) {
      vertex1 = this.graph.vertices[i];
      let force = new Vector3();
      for (let j = 0; j < vertexesNumber; j++) {
        
        vertex2 = this.graph.vertices[j];
        
        if (vertex2.isFixed) continue;
        
        if (i !== j) {
          const direction = vertex1.position.clone().sub(vertex2.position).normalize();
          // to avoid division by zero
          const distanceBetweenVertices = Math.max(EPSILON, vertex1.position.distanceTo(vertex2.position));

          force.add(
            direction.multiplyScalar(
              -(this.repulsionConstant ** 2 / distanceBetweenVertices)
            )
          );
          vertex1.forces.sub(force);
        }
      }
    }
  }

  calculateAttraction(): void {
    this.graph.edges.forEach((edge: Edge) => {
      const source = edge.source;
      const target = edge.target;
      const direction = source.position.clone().sub(target.position).normalize();
      // debugger;
      let fAttraction = direction.multiplyScalar(
        source.position.distanceToSquared(target.position) / this.attractionConstant
      );
      
      source.forces.sub(fAttraction);
      target.forces.add(fAttraction);
    });
  }
}