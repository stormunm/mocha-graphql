import { expect } from "chai";
import { describe, it } from "mocha";
import {
  UniformResourceLocatableMap,
  getUniformResourceLocatable
} from "./../src/schema/githubdata/uniformResourceLocatable";

describe("read url map", function() {
  it("should read plum url", function() {
    const plum = UniformResourceLocatableMap.plum;
    const url = plum.url;
    expect(url).to.equal("https://github.com/stormasm/plum");
  });
  it("should read dgraph url", function() {
    const dgraph = UniformResourceLocatableMap.dgraph;
    const url = dgraph.url;
    expect(url).to.equal("https://github.com/dgraph-io/dgraph");
  });
});

describe("check function getUniformResourceLocatable", function() {
  it("should read function with plum", function() {
    const plum = getUniformResourceLocatable("plum");
    expect(plum.resourcePath).to.equal("/stormasm/plum");
    expect(plum.url).to.equal("https://github.com/stormasm/plum");
  });
  it("should read function with dgraph", function() {
    const dgraph = getUniformResourceLocatable("dgraph");
    expect(dgraph.resourcePath).to.equal("/dgraph-io/dgraph");
    expect(dgraph.url).to.equal("https://github.com/dgraph-io/dgraph");
  });
});
