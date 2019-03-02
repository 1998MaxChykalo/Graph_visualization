import Graph from "./graph";
import IForceOptions from "./force-options";
import defaultForceOptions from "../constants/default-force-options";

export default class Force {
  constructor(public graph: Graph, public options: IForceOptions = defaultForceOptions) {}

}