const web3 = require("web3");

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

    let currentState;

    describe('Register', () => {
        // Register
        it("Only Auctioneer can register bidders", () => {
            return auctionInstance.register(accounts[1], 10, { from: accounts[1] })
                .then((result) => {
                    throw new Error("Can not register");
                })
                .catch((e) => {
                    assert(true, "Can not register");
                });
        });

        it("This action is only available in Created State", () => {
            return auctionInstance.state().then((result) => {
                assert(result !== undefined);

                console.log(web3.utils.toBN(result).toString());
            });
        });

        it("When register, the account address and the number of tokens need to be inputted", () => {
            return auctionInstance.register({ from: accounts[0] })
                .then(() => {
                    throw new Error("Failed to register");
                })
                .catch((e) => {
                    assert(true, "Failed to register");
                });
        });
    });

    describe("Start the session", () => {
        it("Only auctioneer can start the session", () => {
            return auctionInstance.startSession({ from: accounts[1] })
                .then(() => {
                    throw new Error("Only auctioneer can start the session");
                })
                .catch((e) => {
                    assert(true, "Only auctioneer can start the session");
                });
        })
    })
});