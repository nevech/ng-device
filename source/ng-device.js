'use strict';

angular.module('ngDevice', []);

angular.module('ngDevice').provider('$device', function () {

  this.setUserAgent = function (userAgent) {
    var userAgent = userAgent || window.navigator.userAgent;
    this.userAgent = userAgent.toLowerCase();
  };

  this.setVendor = function (vendor) {
    var vendor = vendor || window.navigator.vendor;
    this.vendor = vendor.toLowerCase();
  };

  this.setUserAgent();
  this.setVendor();

  this.$get = function () {
    var self = this;
    var methods = {};

    var check = function (regexp, str) {
      var str = str || self.userAgent;
      return regexp.test(str);
    };

    methods.isChrome = function () {
      return check(/chrome/) && check(/google inc\./, self.vendor);
    };

    methods.isSafari = function () {
      return check(/safari/) && check(/apple computer/, self.vendor);
    };

    methods.isFirefox = function () {
      return check(/firefox/);
    };

    methods.isEdge = function () {
      return check(/edge\/\d+/);
    };

    methods.isOpera = function () {
      return check(/opr\/\d+/);
    };

    // Aliases
    methods.isFF = methods.isFirefox;

    return methods;
  };

});