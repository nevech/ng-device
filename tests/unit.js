describe("ng-device", function () {
  var deviceService;

  function loadModule(userAgent, vendor) {
    module("ngDevice")
    module(function ($deviceProvider) {
      $deviceProvider.setUserAgent(userAgent);
      $deviceProvider.setVendor(vendor);
    });

    inject(["$device", function ($device) {
      deviceService = $device;
    }]);
  }

  it("should load", function () {
    loadModule()
    expect(deviceService).not.toBeNull();
  });

  describe("User agent", function() {
    it("should detect Google Chrome", function () {
      var ua = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36";
      var vendor = "Google Inc.";

      loadModule(ua, vendor);
      expect(deviceService.isChrome()).toBe(true);
    });
  });


});