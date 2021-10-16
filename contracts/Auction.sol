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
        IRule memory newRule;
        newRule.startingPrice = _startingPrice;
        newRule.minimumStep = _minimumStep;

        rule = newRule;
        currentPrice = _startingPrice;
    }

    
}
