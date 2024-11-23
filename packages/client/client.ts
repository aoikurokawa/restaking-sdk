import { createSolanaRpc, Rpc, SolanaRpcApi } from "@solana/web3.js";

export class Client {
  rpc: Rpc<SolanaRpcApi>;

  public constructor(clusterUrl: string) {
    this.rpc = createSolanaRpc(clusterUrl);
  }

  public initializeNcn() {}

  public initializeVault() {}
}
