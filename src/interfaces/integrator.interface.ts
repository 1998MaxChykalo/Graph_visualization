
import Graph from "../classes/graph";
import IOptions from "../classes/force-options";
export default interface IIntegrator {
  graph: Graph;
  options: IOptions;
  calcForces(): void;
  calculateRepulsion(): void;
  calculateAttraction(): void;
}