import { expect } from "chai";
import { describe, it } from "mocha";
import { TopicMap, getTopic } from "./../src/schema/githubdata/topic";


describe("read topic map", function() {
  it("should read dwave id", function() {
    const dwave = TopicMap.dwave;
    const id = dwave.id
    expect(id).to.equal("MDU6VG9waWNkd2F2ZQ==");
  });
});

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
    // console.log(dwave);
    const relatedTopics = libp2p.relatedTopics
    expect(relatedTopics.length).to.equal(2);
  });
});
