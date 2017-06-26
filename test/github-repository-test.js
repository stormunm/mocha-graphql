import { expect } from "chai";
import { describe, it } from "mocha";
import {
  RepositoryMap,
  getRepository
} from "./../src/schema/githubdata/repository";

describe("read repository map", function() {
  it("should read stormasm/noms", function() {
    const stormasm = RepositoryMap["stormasm/noms"];
    const id = stormasm.id;
    expect(id).to.equal("MDEwOlJlcG9zaXRvcnk5MTIxNjgxNA==");
  });
});

describe("get repository data from function", function() {
  it("should read dgraph-io avatar url", function() {
    const noms = getRepository("stormasm", "noms");
    const id = noms.id;
    expect(id).to.equal("MDEwOlJlcG9zaXRvcnk5MTIxNjgxNA==");
  });
});
