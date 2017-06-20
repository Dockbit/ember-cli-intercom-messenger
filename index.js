/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-cli-intercom-messenger',

  included: function(app) {
    this._super.included.apply(this, arguments);

    app.import('vendor/intercom-shim.js');
  }
};
