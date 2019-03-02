import { Vector3, Mesh, MeshBasicMaterial } from "three";
import { geometry, scene } from "../constants/index";

export default class Vertex<T=any> {
  data?: T;
  forces: Vector3 = new Vector3();
  velocity: Vector3 = new Vector3();
  connectedTo: Vertex[] = [];
  public drawObject: Mesh;

  // in future implementations
  isFixed: boolean = false;
  //

  constructor(data?: T) {
    this.data = data;
    this.drawObject = new Mesh(geometry, new MeshBasicMaterial({ color: Math.random() * 0xe0e0e0, opacity: 0.8 }));
    this.position = new Vector3();
    scene.add(this.drawObject);
  }


  public get position(): Vector3 {
    return this.drawObject.position;
  }

  public set position(val: Vector3) {
    this.drawObject.position.set(val.x || 0, val.y || 0, val.z || 0);
  }

  public isConnected(v: Vertex): boolean {
    for (let i = 0, j = this.connectedTo.length; i < j; i++) {
      if (this.connectedTo[i] === v)
        return true;
    }
    return false;
  }
}