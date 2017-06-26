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

/*
describe("get topic data id", function() {
  it("should read dwave topic id", function() {
    const dwave = getTopic('dwave');
    // console.log(dwave);
    const id = dwave.id
    const relatedTopics = dwave.relatedTopics
    expect(id).to.equal("MDU6VG9waWNkd2F2ZQ==");
    expect(relatedTopics.length).to.equal(0);
  });
});

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
