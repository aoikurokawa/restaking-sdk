import { address, createSolanaRpc } from "@solana/web3.js";
import { fetchConfig } from "re-client";

const rpc = createSolanaRpc("https://api.devnet.solana.com");

const configPubkey = address("4vvKh3Ws4vGzgXRVdo8SdL4jePXDvCqKVmi21BCBGwvn");

const config = await fetchConfig(rpc, configPubkey);

console.log("Config: {}", config);