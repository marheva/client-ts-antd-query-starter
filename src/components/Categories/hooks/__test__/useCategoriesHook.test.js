import React from "react";
import { useCategories } from "../useCategories";

describe("useCategories", () => {
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
    // const results = renderHook(useCategories);
  });
});
