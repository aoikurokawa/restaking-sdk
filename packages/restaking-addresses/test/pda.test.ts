import { expect } from "chai";
import { getRestakingConfigPubkey } from "../src/pda.js";
import { address } from "@solana/web3.js";
import { JITO_RESTAKING_PROGRAM_ID } from "../src/index.js";

describe("PDA Library", () => {
    it("", async () => {
        const expected = address("4vvKh3Ws4vGzgXRVdo8SdL4jePXDvCqKVmi21BCBGwvn");

        const pubkey = await getRestakingConfigPubkey(JITO_RESTAKING_PROGRAM_ID);

        expect(pubkey[0]).to.equal(expected);
    })
});
