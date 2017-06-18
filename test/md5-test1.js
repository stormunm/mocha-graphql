/*
 * JavaScript MD5 Test
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global describe, it */

import { expect } from "chai";
import { describe, it } from "mocha";
import { md5 } from "./../js/md5.js";

describe("MD5 Hex-encoding", function() {
  it("should create a hex-encoded MD5 hash of an ASCII value", function() {
    expect(md5("value")).to.equal("2063c1608d6e0baf80249c42e2be5804");
  });
});
