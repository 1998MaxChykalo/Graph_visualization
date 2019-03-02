import Vertex from "./vertex";
import * as THREE from "three";
import { Scene, LineSegments, Vector3 } from "three";
import { scene, geometry } from "./../constants/index";

export default class Edge {
  public line: LineSegments;
  private prevPosition: Vector3;
  constructor(public source: Vertex, public target: Vertex) {
    source.connectedTo.push(target);
    target.connectedTo.push(source);
    this.draw(scene);
  }
  draw(scene: Scene) {
    if (this.line) scene.remove(this.line);
    const material = new THREE.LineBasicMaterial({ color: 0x606060 });

    const tempGeometry = new THREE.Geometry();
    tempGeometry.vertices.push(this.source.position);
    tempGeometry.vertices.push(this.target.position);
    
    tempGeometry.normalsNeedUpdate.valueOf()
    tempGeometry.verticesNeedUpdate = true;
    this.line = new THREE.LineSegments(tempGeometry, material);
    this.line.matrixAutoUpdate = true;
    this.line.scale.x = this.line.scale.y = this.line.scale.z = 1;
    // NOTE: Deactivated frustumCulled, otherwise it will not draw all lines (even though
    // it looks like the lines are in the view frustum).
    this.line.frustumCulled = false;
    this.line.computeLineDistances();
    scene.add(this.line);
  }
}