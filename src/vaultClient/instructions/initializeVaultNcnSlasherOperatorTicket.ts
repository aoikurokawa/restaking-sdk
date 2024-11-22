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
  type TransactionSigner,
  type WritableAccount,
  type WritableSignerAccount,
} from "@solana/web3.js";
import { JITO_VAULT_PROGRAM_ADDRESS } from "../programs";
import { getAccountMetaFactory, type ResolvedAccount } from "../shared";

export const INITIALIZE_VAULT_NCN_SLASHER_OPERATOR_TICKET_DISCRIMINATOR = 5;

export function getInitializeVaultNcnSlasherOperatorTicketDiscriminatorBytes() {
  return getU8Encoder().encode(
    INITIALIZE_VAULT_NCN_SLASHER_OPERATOR_TICKET_DISCRIMINATOR,
  );
}

export type InitializeVaultNcnSlasherOperatorTicketInstruction<
  TProgram extends string = typeof JITO_VAULT_PROGRAM_ADDRESS,
  TAccountConfig extends string | IAccountMeta<string> = string,
  TAccountVault extends string | IAccountMeta<string> = string,
  TAccountNcn extends string | IAccountMeta<string> = string,
  TAccountSlasher extends string | IAccountMeta<string> = string,
  TAccountOperator extends string | IAccountMeta<string> = string,
  TAccountVaultNcnSlasherTicket extends string | IAccountMeta<string> = string,
  TAccountVaultNcnSlasherOperatorTicket extends
    | string
    | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = "11111111111111111111111111111111",
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountConfig extends string
        ? ReadonlyAccount<TAccountConfig>
        : TAccountConfig,
      TAccountVault extends string
        ? ReadonlyAccount<TAccountVault>
        : TAccountVault,
      TAccountNcn extends string ? ReadonlyAccount<TAccountNcn> : TAccountNcn,
      TAccountSlasher extends string
        ? ReadonlyAccount<TAccountSlasher>
        : TAccountSlasher,
      TAccountOperator extends string
        ? ReadonlyAccount<TAccountOperator>
        : TAccountOperator,
      TAccountVaultNcnSlasherTicket extends string
        ? ReadonlyAccount<TAccountVaultNcnSlasherTicket>
        : TAccountVaultNcnSlasherTicket,
      TAccountVaultNcnSlasherOperatorTicket extends string
        ? WritableAccount<TAccountVaultNcnSlasherOperatorTicket>
        : TAccountVaultNcnSlasherOperatorTicket,
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer> &
            IAccountSignerMeta<TAccountPayer>
        : TAccountPayer,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      ...TRemainingAccounts,
    ]
  >;

export type InitializeVaultNcnSlasherOperatorTicketInstructionData = {
  discriminator: number;
};

export type InitializeVaultNcnSlasherOperatorTicketInstructionDataArgs = {};

export function getInitializeVaultNcnSlasherOperatorTicketInstructionDataEncoder(): Encoder<InitializeVaultNcnSlasherOperatorTicketInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([["discriminator", getU8Encoder()]]),
    (value) => ({
      ...value,
      discriminator: INITIALIZE_VAULT_NCN_SLASHER_OPERATOR_TICKET_DISCRIMINATOR,
    }),
  );
}

export function getInitializeVaultNcnSlasherOperatorTicketInstructionDataDecoder(): Decoder<InitializeVaultNcnSlasherOperatorTicketInstructionData> {
  return getStructDecoder([["discriminator", getU8Decoder()]]);
}

export function getInitializeVaultNcnSlasherOperatorTicketInstructionDataCodec(): Codec<
  InitializeVaultNcnSlasherOperatorTicketInstructionDataArgs,
  InitializeVaultNcnSlasherOperatorTicketInstructionData
> {
  return combineCodec(
    getInitializeVaultNcnSlasherOperatorTicketInstructionDataEncoder(),
    getInitializeVaultNcnSlasherOperatorTicketInstructionDataDecoder(),
  );
}

export type InitializeVaultNcnSlasherOperatorTicketInput<
  TAccountConfig extends string = string,
  TAccountVault extends string = string,
  TAccountNcn extends string = string,
  TAccountSlasher extends string = string,
  TAccountOperator extends string = string,
  TAccountVaultNcnSlasherTicket extends string = string,
  TAccountVaultNcnSlasherOperatorTicket extends string = string,
  TAccountPayer extends string = string,
  TAccountSystemProgram extends string = string,
> = {
  config: Address<TAccountConfig>;
  vault: Address<TAccountVault>;
  ncn: Address<TAccountNcn>;
  slasher: Address<TAccountSlasher>;
  operator: Address<TAccountOperator>;
  vaultNcnSlasherTicket: Address<TAccountVaultNcnSlasherTicket>;
  vaultNcnSlasherOperatorTicket: Address<TAccountVaultNcnSlasherOperatorTicket>;
  payer: TransactionSigner<TAccountPayer>;
  systemProgram?: Address<TAccountSystemProgram>;
};

export function getInitializeVaultNcnSlasherOperatorTicketInstruction<
  TAccountConfig extends string,
  TAccountVault extends string,
  TAccountNcn extends string,
  TAccountSlasher extends string,
  TAccountOperator extends string,
  TAccountVaultNcnSlasherTicket extends string,
  TAccountVaultNcnSlasherOperatorTicket extends string,
  TAccountPayer extends string,
  TAccountSystemProgram extends string,
>(
  input: InitializeVaultNcnSlasherOperatorTicketInput<
    TAccountConfig,
    TAccountVault,
    TAccountNcn,
    TAccountSlasher,
    TAccountOperator,
    TAccountVaultNcnSlasherTicket,
    TAccountVaultNcnSlasherOperatorTicket,
    TAccountPayer,
    TAccountSystemProgram
  >,
): InitializeVaultNcnSlasherOperatorTicketInstruction<
  typeof JITO_VAULT_PROGRAM_ADDRESS,
  TAccountConfig,
  TAccountVault,
  TAccountNcn,
  TAccountSlasher,
  TAccountOperator,
  TAccountVaultNcnSlasherTicket,
  TAccountVaultNcnSlasherOperatorTicket,
  TAccountPayer,
  TAccountSystemProgram
> {
  // Program address.
  const programAddress = JITO_VAULT_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    config: { value: input.config ?? null, isWritable: false },
    vault: { value: input.vault ?? null, isWritable: false },
    ncn: { value: input.ncn ?? null, isWritable: false },
    slasher: { value: input.slasher ?? null, isWritable: false },
    operator: { value: input.operator ?? null, isWritable: false },
    vaultNcnSlasherTicket: {
      value: input.vaultNcnSlasherTicket ?? null,
      isWritable: false,
    },
    vaultNcnSlasherOperatorTicket: {
      value: input.vaultNcnSlasherOperatorTicket ?? null,
      isWritable: true,
    },
    payer: { value: input.payer ?? null, isWritable: true },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Resolve default values.
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value =
      "11111111111111111111111111111111" as Address<"11111111111111111111111111111111">;
  }

  const getAccountMeta = getAccountMetaFactory(programAddress, "programId");
  const instruction = {
    accounts: [
      getAccountMeta(accounts.config),
      getAccountMeta(accounts.vault),
      getAccountMeta(accounts.ncn),
      getAccountMeta(accounts.slasher),
      getAccountMeta(accounts.operator),
      getAccountMeta(accounts.vaultNcnSlasherTicket),
      getAccountMeta(accounts.vaultNcnSlasherOperatorTicket),
      getAccountMeta(accounts.payer),
      getAccountMeta(accounts.systemProgram),
    ],
    programAddress,
    data: getInitializeVaultNcnSlasherOperatorTicketInstructionDataEncoder().encode(
      {},
    ),
  } as InitializeVaultNcnSlasherOperatorTicketInstruction<
    typeof JITO_VAULT_PROGRAM_ADDRESS,
    TAccountConfig,
    TAccountVault,
    TAccountNcn,
    TAccountSlasher,
    TAccountOperator,
    TAccountVaultNcnSlasherTicket,
    TAccountVaultNcnSlasherOperatorTicket,
    TAccountPayer,
    TAccountSystemProgram
  >;

  return instruction;
}

export type ParsedInitializeVaultNcnSlasherOperatorTicketInstruction<
  TProgram extends string = typeof JITO_VAULT_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    config: TAccountMetas[0];
    vault: TAccountMetas[1];
    ncn: TAccountMetas[2];
    slasher: TAccountMetas[3];
    operator: TAccountMetas[4];
    vaultNcnSlasherTicket: TAccountMetas[5];
    vaultNcnSlasherOperatorTicket: TAccountMetas[6];
    payer: TAccountMetas[7];
    systemProgram: TAccountMetas[8];
  };
  data: InitializeVaultNcnSlasherOperatorTicketInstructionData;
};

export function parseInitializeVaultNcnSlasherOperatorTicketInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>,
): ParsedInitializeVaultNcnSlasherOperatorTicketInstruction<
  TProgram,
  TAccountMetas
> {
  if (instruction.accounts.length < 9) {
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
      config: getNextAccount(),
      vault: getNextAccount(),
      ncn: getNextAccount(),
      slasher: getNextAccount(),
      operator: getNextAccount(),
      vaultNcnSlasherTicket: getNextAccount(),
      vaultNcnSlasherOperatorTicket: getNextAccount(),
      payer: getNextAccount(),
      systemProgram: getNextAccount(),
    },
    data: getInitializeVaultNcnSlasherOperatorTicketInstructionDataDecoder().decode(
      instruction.data,
    ),
  };
}
