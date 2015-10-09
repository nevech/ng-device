describe("ng-device", function () {
  var $device;

  beforeEach(function () {
    module("ngDevice");
  });

  it("should load", function () {
    expect($device).not.toBeNull();
  });

});