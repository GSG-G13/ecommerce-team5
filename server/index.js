// eslint-disable-next-line import/extensions
import app from './app.js';

app.listen(`${app.get('port')}`, () => {
  // eslint-disable-next-line no-console
  console.log(`App is running on http://localhost:${app.get('port')}`);
});
