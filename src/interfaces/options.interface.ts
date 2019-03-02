export default interface IOptions {
  layout: "2d" | "3d";
  attraction: number;
  repulsion: number;
  iterations: number;
  width: number;
  height: number;
  positionUpdated?: Function;
}