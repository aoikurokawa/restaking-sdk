/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/kinobi-so/kinobi
 */

import {
  assertAccountExists,
  assertAccountsExist,
  combineCodec,
  decodeAccount,
  fetchEncodedAccount,
  fetchEncodedAccounts,
  getAddressDecoder,
  getAddressEncoder,
  getArrayDecoder,
  getArrayEncoder,
  getStructDecoder,
  getStructEncoder,
  getU64Decoder,
  getU64Encoder,
  getU8Decoder,
  getU8Encoder,
  type Account,
  type Address,
  type Codec,
  type Decoder,
  type EncodedAccount,
  type Encoder,
  type FetchAccountConfig,
  type FetchAccountsConfig,
  type MaybeAccount,
  type MaybeEncodedAccount,
} from "@solana/web3.js";
import {
  getDelegationStateDecoder,
  getDelegationStateEncoder,
  type DelegationState,
  type DelegationStateArgs,
} from "../types";

export type VaultOperatorDelegation = {
  discriminator: bigint;
  vault: Address;
  operator: Address;
  delegationState: DelegationState;
  lastUpdateSlot: bigint;
  index: bigint;
  bump: number;
  reserved: Array<number>;
};

export type VaultOperatorDelegationArgs = {
  discriminator: number | bigint;
  vault: Address;
  operator: Address;
  delegationState: DelegationStateArgs;
  lastUpdateSlot: number | bigint;
  index: number | bigint;
  bump: number;
  reserved: Array<number>;
};

export function getVaultOperatorDelegationEncoder(): Encoder<VaultOperatorDelegationArgs> {
  return getStructEncoder([
    ["discriminator", getU64Encoder()],
    ["vault", getAddressEncoder()],
    ["operator", getAddressEncoder()],
    ["delegationState", getDelegationStateEncoder()],
    ["lastUpdateSlot", getU64Encoder()],
    ["index", getU64Encoder()],
    ["bump", getU8Encoder()],
    ["reserved", getArrayEncoder(getU8Encoder(), { size: 263 })],
  ]);
}

export function getVaultOperatorDelegationDecoder(): Decoder<VaultOperatorDelegation> {
  return getStructDecoder([
    ["discriminator", getU64Decoder()],
    ["vault", getAddressDecoder()],
    ["operator", getAddressDecoder()],
    ["delegationState", getDelegationStateDecoder()],
    ["lastUpdateSlot", getU64Decoder()],
    ["index", getU64Decoder()],
    ["bump", getU8Decoder()],
    ["reserved", getArrayDecoder(getU8Decoder(), { size: 263 })],
  ]);
}

export function getVaultOperatorDelegationCodec(): Codec<
  VaultOperatorDelegationArgs,
  VaultOperatorDelegation
> {
  return combineCodec(
    getVaultOperatorDelegationEncoder(),
    getVaultOperatorDelegationDecoder(),
  );
}

export function decodeVaultOperatorDelegation<TAddress extends string = string>(
  encodedAccount: EncodedAccount<TAddress>,
): Account<VaultOperatorDelegation, TAddress>;
export function decodeVaultOperatorDelegation<TAddress extends string = string>(
  encodedAccount: MaybeEncodedAccount<TAddress>,
): MaybeAccount<VaultOperatorDelegation, TAddress>;
export function decodeVaultOperatorDelegation<TAddress extends string = string>(
  encodedAccount: EncodedAccount<TAddress> | MaybeEncodedAccount<TAddress>,
):
  | Account<VaultOperatorDelegation, TAddress>
  | MaybeAccount<VaultOperatorDelegation, TAddress> {
  return decodeAccount(
    encodedAccount as MaybeEncodedAccount<TAddress>,
    getVaultOperatorDelegationDecoder(),
  );
}

export async function fetchVaultOperatorDelegation<
  TAddress extends string = string,
>(
  rpc: Parameters<typeof fetchEncodedAccount>[0],
  address: Address<TAddress>,
  config?: FetchAccountConfig,
): Promise<Account<VaultOperatorDelegation, TAddress>> {
  const maybeAccount = await fetchMaybeVaultOperatorDelegation(
    rpc,
    address,
    config,
  );
  assertAccountExists(maybeAccount);
  return maybeAccount;
}

export async function fetchMaybeVaultOperatorDelegation<
  TAddress extends string = string,
>(
  rpc: Parameters<typeof fetchEncodedAccount>[0],
  address: Address<TAddress>,
  config?: FetchAccountConfig,
): Promise<MaybeAccount<VaultOperatorDelegation, TAddress>> {
  const maybeAccount = await fetchEncodedAccount(rpc, address, config);
  return decodeVaultOperatorDelegation(maybeAccount);
}

export async function fetchAllVaultOperatorDelegation(
  rpc: Parameters<typeof fetchEncodedAccounts>[0],
  addresses: Array<Address>,
  config?: FetchAccountsConfig,
): Promise<Account<VaultOperatorDelegation>[]> {
  const maybeAccounts = await fetchAllMaybeVaultOperatorDelegation(
    rpc,
    addresses,
    config,
  );
  assertAccountsExist(maybeAccounts);
  return maybeAccounts;
}

export async function fetchAllMaybeVaultOperatorDelegation(
  rpc: Parameters<typeof fetchEncodedAccounts>[0],
  addresses: Array<Address>,
  config?: FetchAccountsConfig,
): Promise<MaybeAccount<VaultOperatorDelegation>[]> {
  const maybeAccounts = await fetchEncodedAccounts(rpc, addresses, config);
  return maybeAccounts.map((maybeAccount) =>
    decodeVaultOperatorDelegation(maybeAccount),
  );
}
