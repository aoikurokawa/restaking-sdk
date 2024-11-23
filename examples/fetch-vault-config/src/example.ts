import { address, createSolanaRpc } from "@solana/web3.js";
import { fetchConfig } from "va-client";

const rpc = createSolanaRpc("https://api.devnet.solana.com");

const configPubkey = address("UwuSgAq4zByffCGCrWH87DsjfsewYjuqHfJEpzw1Jq3");

const config = await fetchConfig(rpc, configPubkey);

console.log("Config: {}", config);