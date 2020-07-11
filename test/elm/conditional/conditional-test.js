/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS205: Consider reworking code to avoid use of IIFEs
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const should = require('should');
const setup = require('../../setup');
const data = require('./data');

describe('If', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it("should return the correct value when the expression is true", function() {
    return this.exp.exec(this.ctx.withParameters({ var: true })).should.equal("true return");
  });

  return it("should return the correct value when the expression is false", function() {
    return this.exp.exec(this.ctx.withParameters({ var: false })).should.equal("false return");
  });
});


describe('Case', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it("should be able to execute a standard case statement", function() {
    const vals =  [{"x" : 1, "y" : 2, "message" : "X < Y"},
      {"x" : 2, "y" : 1, "message" : "X > Y"},
      {"x" : 1, "y" : 1, "message" : "X == Y"}];
    return (() => {
      const result = [];
      for (let item of vals) {
        this.ctx.withParameters({ X : item.x, Y: item.y });
        result.push(this.standard.exec(this.ctx).should.equal(item.message));
      }
      return result;
    })();
  });

  return it("should be able to execute a selected case statement", function() {
    const vals = [{"var" : 1, "message" : "one"},
      {"var" : 2, "message" : "two"},
      {"var" : 3, "message" : "?"}];
    return (() => {
      const result = [];
      for (let item of vals) {
        this.ctx.withParameters({ var : item.var });
        result.push(this.selected.exec(this.ctx).should.equal(item.message));
      }
      return result;
    })();
  });
});
