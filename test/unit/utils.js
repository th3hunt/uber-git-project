import {reverse} from '../../src/utils';

describe('Utils', () => {

  describe('reverse(sentence)', () => {

    it('reverts the order of the words in a sentence', () => {
      expect(reverse('Hello Bob')).to.eq('Bob Hello');
    });

  });

});
