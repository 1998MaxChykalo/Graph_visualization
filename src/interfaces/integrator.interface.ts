
import Graph from "../classes/graph";
import IOptions from "../interfaces/options.interface";

export default interface IIntegrator {
  graph: Graph;
  options: IOptions;
  calcForces(): void;
  calculateRepulsion(): void;
  calculateAttraction(): void;
}