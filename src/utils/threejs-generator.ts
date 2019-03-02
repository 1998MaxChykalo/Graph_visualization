import { Scene, PerspectiveCamera, WebGLRenderer, SphereGeometry } from "three";
import * as THREE from 'three';
import * as TrackballControlsLibrary from 'three-trackballcontrols';

export default class ThreeJSGenerator {
  static generateGeometry(): SphereGeometry {
    return new SphereGeometry(30)
  }
  public static generateRenderer(): WebGLRenderer {
    const renderer = new WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    return renderer;
  }

  public static generateScene(): Scene {
    return new Scene();
  }

  public static generateCamera(): PerspectiveCamera {
    const camera = new PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 1000000);
    camera.position.z = 10000;
    return camera;
  }

  public static generateControls(camera: PerspectiveCamera): THREE.TrackballControls {
    const TrackballControls = TrackballControlsLibrary;
    const controls: THREE.TrackballControls = new TrackballControls(camera);
    controls.rotateSpeed = 4.0;
    controls.zoomSpeed = 4.0;
    controls.panSpeed = 1.0;

    controls.staticMoving = true;
    return controls;
  }

  public static generateContainer(): HTMLDivElement {
    const container = document.createElement('div');
    document.body.appendChild(container);
    return container;
  }
}