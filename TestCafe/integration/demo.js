/* eslint-disable no-unused-expressions */
import Page from '../common/demoSelector';

fixture `Demo TestCafe case`
  .page`http://devexpress.github.io/testcafe/example/`;

const page = new Page();

test('Demo Test', async (t) => {
  await t
    .typeText(page.nameInput, 'Peter Paker')
    .click(page.macOS);
});
