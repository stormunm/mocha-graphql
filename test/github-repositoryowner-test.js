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

/*
describe("get related topic data", function() {
  it("should read libp2p related topics", function() {
    const libp2p = getTopic('libp2p');
    const relatedTopics = libp2p.relatedTopics
    // console.log(relatedTopics);
    expect(relatedTopics.length).to.equal(2);
    const ipfs = relatedTopics[0];
    // console.log(ipfs);
    const id = ipfs.id;
    expect(id).to.equal("MDU6VG9waWNpcGZz");
    const json = JSON.stringify(relatedTopics);
    //console.log(json);
    const libp2pJson = "[{\"name\":\"ipfs\",\"id\":\"MDU6VG9waWNpcGZz\"},{\"name\":\"peer\",\"id\":\"MDU6VG9waWNwZWVy\"}]";
    expect(json).to.equal(libp2pJson);
  });
});
*/
