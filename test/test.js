let Auction = artifacts.require("./Auction.sol");

let auctionInstance;

contract('AuctionContract', (accounts) => {
    describe('Contract deployment', () => {
        it('Contract deployment', () => {
            return Auction.deployed().then((instance) => {
                auctionInstance = instance;
                assert(auctionInstance !== undefined, "Auction contract should be defined");
            });
        });

        it('Initial rule with corrected startingPrice and minimumStep', () => {
            return auctionInstance.rule().then((rule) => {
                assert(rule !== undefined, "Rule should be defined");

                assert.equal(rule.startingPrice, 50, "Starting price should be 50");
                assert.equal(rule.minimumStep, 5, "Minimum step should be 5");
            });
        });
    });
});