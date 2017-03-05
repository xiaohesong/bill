import ReactOnRails from 'react-on-rails';

import HelloWorlds from '../components/HelloWorld';
import Records from '../components/records/Records'

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorlds,Records
});
