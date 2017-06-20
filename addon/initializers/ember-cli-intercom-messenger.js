import { _setup } from 'intercom';
import { assert } from 'ember-metal/utils';
import get from 'ember-metal/get';
import { isPresent } from 'ember-utils';

export function initialize(application) {
  let config = application.resolveRegistration('config:environment');
  let settings = get(config, 'intercom-messenger');

  if (get(settings, 'enabled') === false) {
    return;
  }

  assert(
    'You must define `ENV.intercom-messenger.appId` in your `config/environment.js` file.',
    isPresent(get(settings, 'appId'))
  );

  _setup(config);
}

export default {
  name: 'ember-cli-intercom-messenger',
  initialize
};
