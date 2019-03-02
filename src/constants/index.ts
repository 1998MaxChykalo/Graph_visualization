import ThreeJSGenerator from '../utils/threejs-generator';

export const renderer = ThreeJSGenerator.generateRenderer();
export const scene = ThreeJSGenerator.generateScene();
export const camera = ThreeJSGenerator.generateCamera();
export const controls = ThreeJSGenerator.generateControls(camera);
export const geometry = ThreeJSGenerator.generateGeometry();
export const container = ThreeJSGenerator.generateContainer();
export const EPSILON = 0.0001;