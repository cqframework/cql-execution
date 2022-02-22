import should from 'should';
import setup from '../../setup';
const data = require('./data');
import 'should';

describe('Tuple', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should be able to define a tuple', async function () {
    const e = await this.tup.exec(this.ctx);
    should(e['a']).equal(1);
    should(e['b']).equal(2);
  });

  it('should be able to define an empty tuple', async function () {
    const e = await this.emptyTup.exec(this.ctx);
    Object.keys(e).length.should.equal(0);
  });
});
