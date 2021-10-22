const AuctionV1 = artifacts.require("Auction");

module.exports = function (deployer) {

    deployer.deploy(AuctionV1, 50, 5);
}
