import {screen} from '@testing-library/testcafe';

fixture("index").page("127.0.0.1:8085");

test("test", async (t) => {
  const button = screen.queryByRole('button', {name: /click me/i});
  await t.expect(button.exists).ok();
});
