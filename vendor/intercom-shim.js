/* global define */

(function() {
  'use strict';

  function l(config) {
    var i = function() {
      i.c(arguments);
    };
    i.q = [];
    i.c = function(args) {
      i.q.push(args);
    };

    window.Intercom = i;

    var d = document;
    var s = d.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = 'https://widget.intercom.io/widget/' + config['intercom-messenger'].appId;
    var x = d.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);
  }

  var ic = window.Intercom;
  if (typeof ic === 'function') {
    ic('reattach_activator');
    ic('update', {});
  }

  function generateModule(name, values) {
    define(name, [], function() {
      'use strict';

      return values;
    });
  }

  generateModule('intercom', {
    default: function() {
      if (window.Intercom && typeof window.Intercom.apply === 'function') {
        return window.Intercom.apply(null, arguments);
      }
    },
    _setup: l
  });
})();
