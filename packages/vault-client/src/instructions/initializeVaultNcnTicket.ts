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
  type WritableSignerAccount,
} from "@solana/web3.js";
import { JITO_VAULT_PROGRAM_ADDRESS } from "../programs";
import { getAccountMetaFactory, type ResolvedAccount } from "../shared";

export const INITIALIZE_VAULT_NCN_TICKET_DISCRIMINATOR = 4;

export function getInitializeVaultNcnTicketDiscriminatorBytes() {
  return getU8Encoder().encode(INITIALIZE_VAULT_NCN_TICKET_DISCRIMINATOR);
}

export type InitializeVaultNcnTicketInstruction<
  TProgram extends string = typeof JITO_VAULT_PROGRAM_ADDRESS,
  TAccountConfig extends string | IAccountMeta<string> = string,
  TAccountVault extends string | IAccountMeta<string> = string,
  TAccountNcn extends string | IAccountMeta<string> = string,
  TAccountNcnVaultTicket extends string | IAccountMeta<string> = string,
  TAccountVaultNcnTicket extends string | IAccountMeta<string> = string,
  TAccountAdmin extends string | IAccountMeta<string> = string,
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
        ? WritableAccount<TAccountVault>
        : TAccountVault,
      TAccountNcn extends string ? ReadonlyAccount<TAccountNcn> : TAccountNcn,
      TAccountNcnVaultTicket extends string
        ? ReadonlyAccount<TAccountNcnVaultTicket>
        : TAccountNcnVaultTicket,
      TAccountVaultNcnTicket extends string
        ? WritableAccount<TAccountVaultNcnTicket>
        : TAccountVaultNcnTicket,
      TAccountAdmin extends string
        ? ReadonlySignerAccount<TAccountAdmin> &
            IAccountSignerMeta<TAccountAdmin>
        : TAccountAdmin,
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

export type InitializeVaultNcnTicketInstructionData = { discriminator: number };

export type InitializeVaultNcnTicketInstructionDataArgs = {};

export function getInitializeVaultNcnTicketInstructionDataEncoder(): Encoder<InitializeVaultNcnTicketInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([["discriminator", getU8Encoder()]]),
    (value) => ({
      ...value,
      discriminator: INITIALIZE_VAULT_NCN_TICKET_DISCRIMINATOR,
    }),
  );
}

export function getInitializeVaultNcnTicketInstructionDataDecoder(): Decoder<InitializeVaultNcnTicketInstructionData> {
  return getStructDecoder([["discriminator", getU8Decoder()]]);
}

export function getInitializeVaultNcnTicketInstructionDataCodec(): Codec<
  InitializeVaultNcnTicketInstructionDataArgs,
  InitializeVaultNcnTicketInstructionData
> {
  return combineCodec(
    getInitializeVaultNcnTicketInstructionDataEncoder(),
    getInitializeVaultNcnTicketInstructionDataDecoder(),
  );
}

export type InitializeVaultNcnTicketInput<
  TAccountConfig extends string = string,
  TAccountVault extends string = string,
  TAccountNcn extends string = string,
  TAccountNcnVaultTicket extends string = string,
  TAccountVaultNcnTicket extends string = string,
  TAccountAdmin extends string = string,
  TAccountPayer extends string = string,
  TAccountSystemProgram extends string = string,
> = {
  config: Address<TAccountConfig>;
  vault: Address<TAccountVault>;
  ncn: Address<TAccountNcn>;
  ncnVaultTicket: Address<TAccountNcnVaultTicket>;
  vaultNcnTicket: Address<TAccountVaultNcnTicket>;
  admin: TransactionSigner<TAccountAdmin>;
  payer: TransactionSigner<TAccountPayer>;
  systemProgram?: Address<TAccountSystemProgram>;
};

export function getInitializeVaultNcnTicketInstruction<
  TAccountConfig extends string,
  TAccountVault extends string,
  TAccountNcn extends string,
  TAccountNcnVaultTicket extends string,
  TAccountVaultNcnTicket extends string,
  TAccountAdmin extends string,
  TAccountPayer extends string,
  TAccountSystemProgram extends string,
  TProgramAddress extends Address = typeof JITO_VAULT_PROGRAM_ADDRESS,
>(
  input: InitializeVaultNcnTicketInput<
    TAccountConfig,
    TAccountVault,
    TAccountNcn,
    TAccountNcnVaultTicket,
    TAccountVaultNcnTicket,
    TAccountAdmin,
    TAccountPayer,
    TAccountSystemProgram
  >,
  config?: { programAddress?: TProgramAddress },
): InitializeVaultNcnTicketInstruction<
  TProgramAddress,
  TAccountConfig,
  TAccountVault,
  TAccountNcn,
  TAccountNcnVaultTicket,
  TAccountVaultNcnTicket,
  TAccountAdmin,
  TAccountPayer,
  TAccountSystemProgram
> {
  // Program address.
  const programAddress = config?.programAddress ?? JITO_VAULT_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    config: { value: input.config ?? null, isWritable: false },
    vault: { value: input.vault ?? null, isWritable: true },
    ncn: { value: input.ncn ?? null, isWritable: false },
    ncnVaultTicket: { value: input.ncnVaultTicket ?? null, isWritable: false },
    vaultNcnTicket: { value: input.vaultNcnTicket ?? null, isWritable: true },
    admin: { value: input.admin ?? null, isWritable: false },
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
      getAccountMeta(accounts.ncnVaultTicket),
      getAccountMeta(accounts.vaultNcnTicket),
      getAccountMeta(accounts.admin),
      getAccountMeta(accounts.payer),
      getAccountMeta(accounts.systemProgram),
    ],
    programAddress,
    data: getInitializeVaultNcnTicketInstructionDataEncoder().encode({}),
  } as InitializeVaultNcnTicketInstruction<
    TProgramAddress,
    TAccountConfig,
    TAccountVault,
    TAccountNcn,
    TAccountNcnVaultTicket,
    TAccountVaultNcnTicket,
    TAccountAdmin,
    TAccountPayer,
    TAccountSystemProgram
  >;

  return instruction;
}

export type ParsedInitializeVaultNcnTicketInstruction<
  TProgram extends string = typeof JITO_VAULT_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    config: TAccountMetas[0];
    vault: TAccountMetas[1];
    ncn: TAccountMetas[2];
    ncnVaultTicket: TAccountMetas[3];
    vaultNcnTicket: TAccountMetas[4];
    admin: TAccountMetas[5];
    payer: TAccountMetas[6];
    systemProgram: TAccountMetas[7];
  };
  data: InitializeVaultNcnTicketInstructionData;
};

export function parseInitializeVaultNcnTicketInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>,
): ParsedInitializeVaultNcnTicketInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 8) {
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
      ncnVaultTicket: getNextAccount(),
      vaultNcnTicket: getNextAccount(),
      admin: getNextAccount(),
      payer: getNextAccount(),
      systemProgram: getNextAccount(),
    },
    data: getInitializeVaultNcnTicketInstructionDataDecoder().decode(
      instruction.data,
    ),
  };
}
