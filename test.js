import { assertEquals } from "https://deno.land/std@0.144.0/testing/asserts.ts";
import { instantiate } from "./lib/rs_lib.generated.js";

const { add } = await instantiate();

Deno.test("should add numbers", () => {
  assertEquals(add(2, 5), 7);
});
