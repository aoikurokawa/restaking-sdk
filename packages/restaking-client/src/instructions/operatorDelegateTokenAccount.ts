/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/kinobi-so/kinobi
 */

import {
  combineCodec,
  getStructDecoder,
  getStructEncoder,
  getU8Decoder,
  getU8Encoder,
  transformEncoder,
  type Address,
  type Codec,
  type Decoder,
  type Encoder,
  type IAccountMeta,
  type IAccountSignerMeta,
  type IInstruction,
  type IInstructionWithAccounts,
  type IInstructionWithData,
  type ReadonlyAccount,
  type ReadonlySignerAccount,
  type TransactionSigner,
  type WritableAccount,
} from "@solana/web3.js";
import { JITO_RESTAKING_PROGRAM_ADDRESS } from "../programs";
import { getAccountMetaFactory, type ResolvedAccount } from "../shared";

export const OPERATOR_DELEGATE_TOKEN_ACCOUNT_DISCRIMINATOR = 23;

export function getOperatorDelegateTokenAccountDiscriminatorBytes() {
  return getU8Encoder().encode(OPERATOR_DELEGATE_TOKEN_ACCOUNT_DISCRIMINATOR);
}

export type OperatorDelegateTokenAccountInstruction<
  TProgram extends string = typeof JITO_RESTAKING_PROGRAM_ADDRESS,
  TAccountOperator extends string | IAccountMeta<string> = string,
  TAccountDelegateAdmin extends string | IAccountMeta<string> = string,
  TAccountTokenMint extends string | IAccountMeta<string> = string,
  TAccountTokenAccount extends string | IAccountMeta<string> = string,
  TAccountDelegate extends string | IAccountMeta<string> = string,
  TAccountTokenProgram extends
    | string
    | IAccountMeta<string> = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountOperator extends string
        ? ReadonlyAccount<TAccountOperator>
        : TAccountOperator,
      TAccountDelegateAdmin extends string
        ? ReadonlySignerAccount<TAccountDelegateAdmin> &
            IAccountSignerMeta<TAccountDelegateAdmin>
        : TAccountDelegateAdmin,
      TAccountTokenMint extends string
        ? ReadonlyAccount<TAccountTokenMint>
        : TAccountTokenMint,
      TAccountTokenAccount extends string
        ? WritableAccount<TAccountTokenAccount>
        : TAccountTokenAccount,
      TAccountDelegate extends string
        ? ReadonlyAccount<TAccountDelegate>
        : TAccountDelegate,
      TAccountTokenProgram extends string
        ? ReadonlyAccount<TAccountTokenProgram>
        : TAccountTokenProgram,
      ...TRemainingAccounts,
    ]
  >;

export type OperatorDelegateTokenAccountInstructionData = {
  discriminator: number;
};

export type OperatorDelegateTokenAccountInstructionDataArgs = {};

export function getOperatorDelegateTokenAccountInstructionDataEncoder(): Encoder<OperatorDelegateTokenAccountInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([["discriminator", getU8Encoder()]]),
    (value) => ({
      ...value,
      discriminator: OPERATOR_DELEGATE_TOKEN_ACCOUNT_DISCRIMINATOR,
    }),
  );
}

export function getOperatorDelegateTokenAccountInstructionDataDecoder(): Decoder<OperatorDelegateTokenAccountInstructionData> {
  return getStructDecoder([["discriminator", getU8Decoder()]]);
}

export function getOperatorDelegateTokenAccountInstructionDataCodec(): Codec<
  OperatorDelegateTokenAccountInstructionDataArgs,
  OperatorDelegateTokenAccountInstructionData
> {
  return combineCodec(
    getOperatorDelegateTokenAccountInstructionDataEncoder(),
    getOperatorDelegateTokenAccountInstructionDataDecoder(),
  );
}

export type OperatorDelegateTokenAccountInput<
  TAccountOperator extends string = string,
  TAccountDelegateAdmin extends string = string,
  TAccountTokenMint extends string = string,
  TAccountTokenAccount extends string = string,
  TAccountDelegate extends string = string,
  TAccountTokenProgram extends string = string,
> = {
  operator: Address<TAccountOperator>;
  delegateAdmin: TransactionSigner<TAccountDelegateAdmin>;
  tokenMint: Address<TAccountTokenMint>;
  tokenAccount: Address<TAccountTokenAccount>;
  delegate: Address<TAccountDelegate>;
  tokenProgram?: Address<TAccountTokenProgram>;
};

export function getOperatorDelegateTokenAccountInstruction<
  TAccountOperator extends string,
  TAccountDelegateAdmin extends string,
  TAccountTokenMint extends string,
  TAccountTokenAccount extends string,
  TAccountDelegate extends string,
  TAccountTokenProgram extends string,
>(
  input: OperatorDelegateTokenAccountInput<
    TAccountOperator,
    TAccountDelegateAdmin,
    TAccountTokenMint,
    TAccountTokenAccount,
    TAccountDelegate,
    TAccountTokenProgram
  >,
): OperatorDelegateTokenAccountInstruction<
  typeof JITO_RESTAKING_PROGRAM_ADDRESS,
  TAccountOperator,
  TAccountDelegateAdmin,
  TAccountTokenMint,
  TAccountTokenAccount,
  TAccountDelegate,
  TAccountTokenProgram
> {
  // Program address.
  const programAddress = JITO_RESTAKING_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    operator: { value: input.operator ?? null, isWritable: false },
    delegateAdmin: { value: input.delegateAdmin ?? null, isWritable: false },
    tokenMint: { value: input.tokenMint ?? null, isWritable: false },
    tokenAccount: { value: input.tokenAccount ?? null, isWritable: true },
    delegate: { value: input.delegate ?? null, isWritable: false },
    tokenProgram: { value: input.tokenProgram ?? null, isWritable: false },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Resolve default values.
  if (!accounts.tokenProgram.value) {
    accounts.tokenProgram.value =
      "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA" as Address<"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA">;
  }

  const getAccountMeta = getAccountMetaFactory(programAddress, "programId");
  const instruction = {
    accounts: [
      getAccountMeta(accounts.operator),
      getAccountMeta(accounts.delegateAdmin),
      getAccountMeta(accounts.tokenMint),
      getAccountMeta(accounts.tokenAccount),
      getAccountMeta(accounts.delegate),
      getAccountMeta(accounts.tokenProgram),
    ],
    programAddress,
    data: getOperatorDelegateTokenAccountInstructionDataEncoder().encode({}),
  } as OperatorDelegateTokenAccountInstruction<
    typeof JITO_RESTAKING_PROGRAM_ADDRESS,
    TAccountOperator,
    TAccountDelegateAdmin,
    TAccountTokenMint,
    TAccountTokenAccount,
    TAccountDelegate,
    TAccountTokenProgram
  >;

  return instruction;
}

export type ParsedOperatorDelegateTokenAccountInstruction<
  TProgram extends string = typeof JITO_RESTAKING_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    operator: TAccountMetas[0];
    delegateAdmin: TAccountMetas[1];
    tokenMint: TAccountMetas[2];
    tokenAccount: TAccountMetas[3];
    delegate: TAccountMetas[4];
    tokenProgram: TAccountMetas[5];
  };
  data: OperatorDelegateTokenAccountInstructionData;
};

export function parseOperatorDelegateTokenAccountInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>,
): ParsedOperatorDelegateTokenAccountInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 6) {
    // TODO: Coded error.
    throw new Error("Not enough accounts");
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts![accountIndex]!;
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      operator: getNextAccount(),
      delegateAdmin: getNextAccount(),
      tokenMint: getNextAccount(),
      tokenAccount: getNextAccount(),
      delegate: getNextAccount(),
      tokenProgram: getNextAccount(),
    },
    data: getOperatorDelegateTokenAccountInstructionDataDecoder().decode(
      instruction.data,
    ),
  };
}