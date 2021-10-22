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

    enum Action {
        REGISTER,
        START_SESSION,
        BID,
        ANNOUNCE,
        GET_DEPOSIT
    }

    State public state = State.CREATED;

    uint8 public announcementTimes = 0;
    uint8 public currentPrice = 0;
    IRule public rule;

    address public currentWinner;
    address public auctioner;

    uint16 private totalDeposit = 0;

    mapping(address => IBidder) public bidders;

    modifier onlyAuctioneer() {
        require(msg.sender == auctioner);
        _;
    }

    modifier onlyValidState(Action _action) {
        if (_action == Action.REGISTER) {
            if (state == State.CREATED) {
                _;
            }
        } else if (_action == Action.START_SESSION) {
            if (state == State.CREATED) {
                _;
            }
        } else if (_action == Action.BID) {
            if (state == State.STARTED) {
                _;
            }
        } else if (_action == Action.ANNOUNCE) {
            if (state == State.STARTED) {
                _;
            }
        } else if (_action == Action.GET_DEPOSIT) {
            if (state == State.CLOSING) {
                _;
            }
        }
        _;
    }

    constructor(uint8 _startingPrice, uint8 _minimumStep) {
        auctioner = msg.sender;
        IRule memory newRule;
        newRule.startingPrice = _startingPrice;
        newRule.minimumStep = _minimumStep;

        rule = newRule;
        currentPrice = _startingPrice;
    }

    function register(address _account, uint8 _token)
        public
        onlyAuctioneer
        onlyValidState(Action.REGISTER)
    {
        IBidder memory newBidder;

        newBidder.token = _token;
        newBidder.deposit = 0;

        bidders[_account] = newBidder;
    }

    function startSession() public onlyValidState(Action.START_SESSION) {
        state = State.STARTED;
    }

    function bid(uint8 _price) public onlyValidState(Action.BID) {
        address biddersAddr = msg.sender;
        IBidder storage currentBidder = bidders[biddersAddr];

        require(
            _price > currentPrice + rule.minimumStep,
            "Should set higher price"
        );
        require(currentBidder.token > 0, "Not enough token");

        currentBidder.deposit += _price;
        currentBidder.token -= _price;

        totalDeposit += _price;

        currentPrice = _price;
        currentWinner = biddersAddr;

        announcementTimes = 0;
    }

    function anounce() public onlyValidState(Action.ANNOUNCE) {
        announcementTimes++;

        if (announcementTimes > 3) {
            state = State.CLOSING;
        }
    }

    function getDeposit() public onlyValidState(Action.GET_DEPOSIT) {
        address bidderAddr = msg.sender;

        if (bidderAddr != currentWinner) {
            bidders[bidderAddr].token = bidders[bidderAddr].deposit;
            bidders[bidderAddr].deposit = 0;

            totalDeposit -= bidders[bidderAddr].deposit;

            if (totalDeposit <= 0) {
                state = State.CLOSED;
            }
        }
    }
}
