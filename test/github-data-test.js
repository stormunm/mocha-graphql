import { expect } from "chai";
import { describe, it } from "mocha";
import TopicMap from "./../src/schema/githubdata/topic";

describe("read topic map", function() {
  it("should read dwave id", function() {
    const dwave = TopicMap.dwave;
    const id = dwave.id
    expect(id).to.equal("MDU6VG9waWNkd2F2ZQ==");
  });
});
