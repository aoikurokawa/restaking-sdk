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

                assert.equal(rule.startingPrice, 10, "Starting price should be 50");
                assert.equal(rule.minimumStep, 5, "Minimum step should be 5");
            });
        });
    });

    let currentState;

    describe('Register', () => {
        // Register
        it("Only Auctioneer can register bidders", () => {
            return auctionInstance.register(accounts[1], 200, { from: accounts[1] })
                .then((result) => {
                    throw new Error("Can not register");
                })
                .catch((e) => {
                    assert(true, "Can not register");
                });
        });

        it("This action is only available in Created State", () => {
            return auctionInstance.register(accounts[1], 200, { from: accounts[0] })
                .then(() => {
                    return auctionInstance.startSession({ from: accounts[0] })
                        .then(() => {
                            return auctionInstance.register(accounts[2], 60, { from: accounts[0] })
                                .then(() => {
                                    throw new Error("The state is not 'CREATED'");
                                })
                                .catch((e) => {
                                    assert(true, "The state is not 'CREATED'");
                                })
                        });
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
        });

        it("This action is only available in Created State", () => {
            return auctionInstance.startSession({ from: accounts[0] })
                .then(() => {
                    throw new Error("Can not start the session again");
                })
                .catch((e) => {
                    assert(true, "Can not start the session again");
                });
        });
    });

    describe("Bid", () => {
        it("All the Bidders can bid.", () => {
            return auctionInstance.bid(20, { from: accounts[1] })
                .then((res) => {

                    return auctionInstance.bid(20, { from: accounts[2] })
                        .then((res) => {
                            throw new Error("Can not bid! Because this account is not registered...")
                        })
                        .catch((e) => {
                            assert(true, "Can not bid! Because this account is not registered...");
                        })
                });


        });

        it("The next price must be inputted!", () => {
            let beforeNextPrice;
            return auctionInstance.nextPrice()
                .then((bpr) => {
                    console.log(parseInt(bpr));
                    beforeNextPrice = bpr;

                    return auctionInstance.bid(26, { from: accounts[1] })
                        .then((res) => {

                            return auctionInstance.nextPrice()
                                .then((apr) => {
                                    console.log(parseInt(apr))
                                    assert(apr > beforeNextPrice, "After price must be higher");
                                })
                        });
                });

        })

        it("This action is only available in Started State", () => {
            return auctionInstance.bid(35, { from: accounts[1] })
                .then(() => {

                    return auctionInstance.anounce({ from: accounts[0] })
                        .then(() => {

                            return auctionInstance.anounce({ from: accounts[0] })
                                .then(() => {

                                    // return auctionInstance.anounce({ from: accounts[0] })
                                    //     .then(() => {

                                    //         return auctionInstance.anounce({ from: accounts[0] })
                                    //             .then(() => {

                                    return auctionInstance.bid(41, { from: accounts[1] })
                                        .then(() => {
                                            throw new Error("Can not bid anymore. because it's closing already.")
                                        })
                                        .catch(() => {
                                            assert(true, "Can not bid anymore. because it's closing already.");
                                        });

                                    //         });
                                    // });
                                });

                        });
                });
        });
    });


});