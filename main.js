import { instantiate } from "./lib/rs_lib.generated.js";

const { add } = await instantiate();

console.log(add(1, 2));
