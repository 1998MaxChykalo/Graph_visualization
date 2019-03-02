import IOptions from "../interfaces/options.interface";

const defaultForceOptions: IOptions = {
  layout: "2d",
  attraction: 10,
  repulsion: .75,
  iterations: 1000,
  width: 800,
  height: 800
};

export default defaultForceOptions;