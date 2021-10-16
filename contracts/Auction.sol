// SPDX-License-Identifier: MIT
pragma solidity >=0.8.4;

contract Auction {
    struct IBidder {
        uint8 token;
        uint8 deposit;
    }

    struct IRule {
        uint8 startingPrice;
        uint8 minimumStep;
    }

    enum State {
        CREATED,
        STARTED,
        CLOSING,
        CLOSED
    }

    State public state = State.CREATED;

    uint8 public announcementTimes = 0;
    uint8 public currentPrice = 0;
    IRule public rule;

    address public currentWinner;
    address public auctioner;

    uint16 private totalDeposit = 0;

    mapping(address => IBidder) public bidders;

    constructor(uint8 _startingPrice, uint8 _minimumStep) {
        auctioner = msg.sender;
        IRule memory newRule;
        newRule.startingPrice = _startingPrice;
        newRule.minimumStep = _minimumStep;

        rule = newRule;
        currentPrice = _startingPrice;
    }

    function register(address _account, uint8 _token) public {
        IBidder memory newBidder;

        newBidder.token = _token;
        newBidder.deposit = 0;

        bidders[_account] = newBidder;
    }

    function startSession() public {
        state = State.STARTED;
    }

    function bid(uint8 _price) public {
        address biddersAddr = msg.sender;
        IBidder storage currentBidder = bidders[biddersAddr];

        require(_price > rule.startingPrice, "Should set higher price");
        require(announcementTimes < rule.minimumStep, "Over");
        require(currentBidder.token > 0, "Not enough token");

        currentBidder.deposit = currentBidder.token;
        currentBidder.token = 0;

        totalDeposit += _price;

        currentPrice = _price;
        currentWinner = biddersAddr;

        announcementTimes = 0;
    }

    function anounce() public {
        announcementTimes++;

        if (announcementTimes > 3) {
            state = State.CLOSED;
        }
    }

    function getDeposit() public {}
}
