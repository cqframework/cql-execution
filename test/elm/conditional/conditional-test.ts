import should from 'should';
import setup from '../../setup';
const data = require('./data');

describe('If', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return the correct value when the expression is true', async function () {
    should(await this.exp.exec(this.ctx.withParameters({ var: true }))).equal('true return');
  });

  it('should return the correct value when the expression is false', async function () {
    should(await this.exp.exec(this.ctx.withParameters({ var: false }))).equal('false return');
  });
});

describe('Case', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should be able to execute a standard case statement', async function () {
    const vals = [
      { x: 1, y: 2, message: 'X < Y' },
      { x: 2, y: 1, message: 'X > Y' },
      { x: 1, y: 1, message: 'X == Y' }
    ];
    for (const item of vals) {
      this.ctx.withParameters({ X: item.x, Y: item.y });
      should(await this.standard.exec(this.ctx)).equal(item.message);
    }
  });

  it('should be able to execute a selected case statement', async function () {
    const vals = [
      { var: 1, message: 'one' },
      { var: 2, message: 'two' },
      { var: 3, message: '?' }
    ];
    for (const item of vals) {
      this.ctx.withParameters({ var: item.var });
      should(await this.selected.exec(this.ctx)).equal(item.message);
    }
  });
});
