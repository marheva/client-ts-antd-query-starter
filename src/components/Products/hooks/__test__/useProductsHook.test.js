import React from "react";
import { useProducts } from "../useProducts";

describe("useProducts", () => {
  const renderHook = (hook) => {
    let result;
    function HookWrapper() {
      result = hook();
      return null;
    }
    mount(<HookWrapper />);
    return results;
  };
  it("works", () => {
    // const results = renderHook(useProducts);
  });
});
