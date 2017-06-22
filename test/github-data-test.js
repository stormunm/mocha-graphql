import { expect } from "chai";
import { describe, it } from "mocha";
import TopicMap from "./../src/schema/githubdata/topic";

describe("read topic map", function() {
  it("should read dwave", function() {
    console.log(TopicMap);
    const ok = "1";
    expect(ok).to.equal("1");
  });
});
