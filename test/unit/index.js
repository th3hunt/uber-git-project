import uberGit from '../../src/index';

describe('uberGit', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(uberGit, 'greet');
      uberGit.greet();
    });

    it('should have been run once', () => {
      expect(uberGit.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(() => uberGit.greet('Mary')).to.have.always.returned('hello, Mary!');
    });
  });
});
