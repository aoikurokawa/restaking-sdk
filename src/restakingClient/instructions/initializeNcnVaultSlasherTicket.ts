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
  getU64Decoder,
  getU64Encoder,
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
} from '@solana/web3.js';
import { JITO_RESTAKING_PROGRAM_ADDRESS } from '../programs';
import { getAccountMetaFactory, type ResolvedAccount } from '../shared';

export const INITIALIZE_NCN_VAULT_SLASHER_TICKET_DISCRIMINATOR = 3;

export function getInitializeNcnVaultSlasherTicketDiscriminatorBytes() {
  return getU8Encoder().encode(
    INITIALIZE_NCN_VAULT_SLASHER_TICKET_DISCRIMINATOR
  );
}

export type InitializeNcnVaultSlasherTicketInstruction<
  TProgram extends string = typeof JITO_RESTAKING_PROGRAM_ADDRESS,
  TAccountConfig extends string | IAccountMeta<string> = string,
  TAccountNcn extends string | IAccountMeta<string> = string,
  TAccountVault extends string | IAccountMeta<string> = string,
  TAccountSlasher extends string | IAccountMeta<string> = string,
  TAccountNcnVaultTicket extends string | IAccountMeta<string> = string,
  TAccountNcnVaultSlasherTicket extends string | IAccountMeta<string> = string,
  TAccountAdmin extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountConfig extends string
        ? ReadonlyAccount<TAccountConfig>
        : TAccountConfig,
      TAccountNcn extends string ? WritableAccount<TAccountNcn> : TAccountNcn,
      TAccountVault extends string
        ? ReadonlyAccount<TAccountVault>
        : TAccountVault,
      TAccountSlasher extends string
        ? ReadonlyAccount<TAccountSlasher>
        : TAccountSlasher,
      TAccountNcnVaultTicket extends string
        ? ReadonlyAccount<TAccountNcnVaultTicket>
        : TAccountNcnVaultTicket,
      TAccountNcnVaultSlasherTicket extends string
        ? WritableAccount<TAccountNcnVaultSlasherTicket>
        : TAccountNcnVaultSlasherTicket,
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

export type InitializeNcnVaultSlasherTicketInstructionData = {
  discriminator: number;
  maxSlashablePerEpoch: bigint;
};

export type InitializeNcnVaultSlasherTicketInstructionDataArgs = {
  maxSlashablePerEpoch: number | bigint;
};

export function getInitializeNcnVaultSlasherTicketInstructionDataEncoder(): Encoder<InitializeNcnVaultSlasherTicketInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ['discriminator', getU8Encoder()],
      ['maxSlashablePerEpoch', getU64Encoder()],
    ]),
    (value) => ({
      ...value,
      discriminator: INITIALIZE_NCN_VAULT_SLASHER_TICKET_DISCRIMINATOR,
    })
  );
}

export function getInitializeNcnVaultSlasherTicketInstructionDataDecoder(): Decoder<InitializeNcnVaultSlasherTicketInstructionData> {
  return getStructDecoder([
    ['discriminator', getU8Decoder()],
    ['maxSlashablePerEpoch', getU64Decoder()],
  ]);
}

export function getInitializeNcnVaultSlasherTicketInstructionDataCodec(): Codec<
  InitializeNcnVaultSlasherTicketInstructionDataArgs,
  InitializeNcnVaultSlasherTicketInstructionData
> {
  return combineCodec(
    getInitializeNcnVaultSlasherTicketInstructionDataEncoder(),
    getInitializeNcnVaultSlasherTicketInstructionDataDecoder()
  );
}

export type InitializeNcnVaultSlasherTicketInput<
  TAccountConfig extends string = string,
  TAccountNcn extends string = string,
  TAccountVault extends string = string,
  TAccountSlasher extends string = string,
  TAccountNcnVaultTicket extends string = string,
  TAccountNcnVaultSlasherTicket extends string = string,
  TAccountAdmin extends string = string,
  TAccountPayer extends string = string,
  TAccountSystemProgram extends string = string,
> = {
  config: Address<TAccountConfig>;
  ncn: Address<TAccountNcn>;
  vault: Address<TAccountVault>;
  slasher: Address<TAccountSlasher>;
  ncnVaultTicket: Address<TAccountNcnVaultTicket>;
  ncnVaultSlasherTicket: Address<TAccountNcnVaultSlasherTicket>;
  admin: TransactionSigner<TAccountAdmin>;
  payer: TransactionSigner<TAccountPayer>;
  systemProgram?: Address<TAccountSystemProgram>;
  maxSlashablePerEpoch: InitializeNcnVaultSlasherTicketInstructionDataArgs['maxSlashablePerEpoch'];
};

export function getInitializeNcnVaultSlasherTicketInstruction<
  TAccountConfig extends string,
  TAccountNcn extends string,
  TAccountVault extends string,
  TAccountSlasher extends string,
  TAccountNcnVaultTicket extends string,
  TAccountNcnVaultSlasherTicket extends string,
  TAccountAdmin extends string,
  TAccountPayer extends string,
  TAccountSystemProgram extends string,
>(
  input: InitializeNcnVaultSlasherTicketInput<
    TAccountConfig,
    TAccountNcn,
    TAccountVault,
    TAccountSlasher,
    TAccountNcnVaultTicket,
    TAccountNcnVaultSlasherTicket,
    TAccountAdmin,
    TAccountPayer,
    TAccountSystemProgram
  >
): InitializeNcnVaultSlasherTicketInstruction<
  typeof JITO_RESTAKING_PROGRAM_ADDRESS,
  TAccountConfig,
  TAccountNcn,
  TAccountVault,
  TAccountSlasher,
  TAccountNcnVaultTicket,
  TAccountNcnVaultSlasherTicket,
  TAccountAdmin,
  TAccountPayer,
  TAccountSystemProgram
> {
  // Program address.
  const programAddress = JITO_RESTAKING_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    config: { value: input.config ?? null, isWritable: false },
    ncn: { value: input.ncn ?? null, isWritable: true },
    vault: { value: input.vault ?? null, isWritable: false },
    slasher: { value: input.slasher ?? null, isWritable: false },
    ncnVaultTicket: { value: input.ncnVaultTicket ?? null, isWritable: false },
    ncnVaultSlasherTicket: {
      value: input.ncnVaultSlasherTicket ?? null,
      isWritable: true,
    },
    admin: { value: input.admin ?? null, isWritable: false },
    payer: { value: input.payer ?? null, isWritable: true },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
  }

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.config),
      getAccountMeta(accounts.ncn),
      getAccountMeta(accounts.vault),
      getAccountMeta(accounts.slasher),
      getAccountMeta(accounts.ncnVaultTicket),
      getAccountMeta(accounts.ncnVaultSlasherTicket),
      getAccountMeta(accounts.admin),
      getAccountMeta(accounts.payer),
      getAccountMeta(accounts.systemProgram),
    ],
    programAddress,
    data: getInitializeNcnVaultSlasherTicketInstructionDataEncoder().encode(
      args as InitializeNcnVaultSlasherTicketInstructionDataArgs
    ),
  } as InitializeNcnVaultSlasherTicketInstruction<
    typeof JITO_RESTAKING_PROGRAM_ADDRESS,
    TAccountConfig,
    TAccountNcn,
    TAccountVault,
    TAccountSlasher,
    TAccountNcnVaultTicket,
    TAccountNcnVaultSlasherTicket,
    TAccountAdmin,
    TAccountPayer,
    TAccountSystemProgram
  >;

  return instruction;
}

export type ParsedInitializeNcnVaultSlasherTicketInstruction<
  TProgram extends string = typeof JITO_RESTAKING_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    config: TAccountMetas[0];
    ncn: TAccountMetas[1];
    vault: TAccountMetas[2];
    slasher: TAccountMetas[3];
    ncnVaultTicket: TAccountMetas[4];
    ncnVaultSlasherTicket: TAccountMetas[5];
    admin: TAccountMetas[6];
    payer: TAccountMetas[7];
    systemProgram: TAccountMetas[8];
  };
  data: InitializeNcnVaultSlasherTicketInstructionData;
};

export function parseInitializeNcnVaultSlasherTicketInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedInitializeNcnVaultSlasherTicketInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 9) {
    // TODO: Coded error.
    throw new Error('Not enough accounts');
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
      ncn: getNextAccount(),
      vault: getNextAccount(),
      slasher: getNextAccount(),
      ncnVaultTicket: getNextAccount(),
      ncnVaultSlasherTicket: getNextAccount(),
      admin: getNextAccount(),
      payer: getNextAccount(),
      systemProgram: getNextAccount(),
    },
    data: getInitializeNcnVaultSlasherTicketInstructionDataDecoder().decode(
      instruction.data
    ),
  };
}
