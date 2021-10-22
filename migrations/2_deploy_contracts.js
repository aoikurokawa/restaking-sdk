const AuctionV1 = artifacts.require("Auction-v1");

module.exports = function (deployer) {

    deployer.deploy(AuctionV1, 50, 5);
}
