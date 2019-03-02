import { WebGLRenderer, PerspectiveCamera, TrackballControls, Scene } from "three";
import { renderer, scene, controls, camera, container } from "../constants/index";
import IIntegrator from "../interfaces/integrator.interface";

export default class World {
  
  private renderer: WebGLRenderer;
  private camera: PerspectiveCamera;
  private controls: TrackballControls;
  private scene: Scene;
  
  constructor(public integrator: IIntegrator) {
    this.scene = scene;
    this.renderer = renderer;
    this.controls = controls;
    this.camera = camera;
    this.init();
    this.render();
  }

  public init(): void {
    container.appendChild( this.renderer.domElement );
  }
  
  private render() {
    requestAnimationFrame(this.render.bind(this));
    this.integrator.calcForces();
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }
}