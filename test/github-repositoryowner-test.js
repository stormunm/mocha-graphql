import { expect } from "chai";
import { describe, it } from "mocha";
import { RepositoryOwnerMap, getRepositoryOwner } from "./../src/schema/githubdata/repositoryOwner";


describe("read repository owner map", function() {
  it("should read stormasm login", function() {
    const stormasm = RepositoryOwnerMap.stormasm;
    const login = stormasm.login
    const id = stormasm.id
    const resourcePath = stormasm.resourcePath
    expect(login).to.equal("stormasm");
    expect(id).to.equal("MDQ6VXNlcjE4MDk5OTE=");
    expect(resourcePath).to.equal("/stormasm");
  });
});


describe("get repositoryowner data from function", function() {
  it("should read dgraph-io avatar url", function() {
    const dgraph = getRepositoryOwner('dgraph-io');
    //console.log(dgraph);
    const id = dgraph.id
    const avatarUrl = dgraph.avatarUrl
    expect(id).to.equal("MDEyOk9yZ2FuaXphdGlvbjEzOTU4NzA2");
    expect(avatarUrl).to.equal("https://avatars3.githubusercontent.com/u/13958706?v=3");
  });
});
