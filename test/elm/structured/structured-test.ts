import setup from '../../setup';
const data = require('./data');
import 'should';

describe('Tuple', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should be able to define a tuple', function () {
    const e = this.tup.exec(this.ctx);
    e['a'].should.equal(1);
    e['b'].should.equal(2);
  });

  it('should be able to define an empty tuple', function () {
    const e = this.emptyTup.exec(this.ctx);
    Object.keys(e).length.should.equal(0);
  });
});
