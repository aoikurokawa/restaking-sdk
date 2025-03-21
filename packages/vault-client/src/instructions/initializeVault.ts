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
  getU16Decoder,
  getU16Encoder,
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
import { JITO_VAULT_PROGRAM_ADDRESS } from '../programs';
import { getAccountMetaFactory, type ResolvedAccount } from '../shared';

export const INITIALIZE_VAULT_DISCRIMINATOR = 1;

export function getInitializeVaultDiscriminatorBytes() {
  return getU8Encoder().encode(INITIALIZE_VAULT_DISCRIMINATOR);
}

export type InitializeVaultInstruction<
  TProgram extends string = typeof JITO_VAULT_PROGRAM_ADDRESS,
  TAccountConfig extends string | IAccountMeta<string> = string,
  TAccountVault extends string | IAccountMeta<string> = string,
  TAccountVrtMint extends string | IAccountMeta<string> = string,
  TAccountStMint extends string | IAccountMeta<string> = string,
  TAccountAdminStTokenAccount extends string | IAccountMeta<string> = string,
  TAccountVaultStTokenAccount extends string | IAccountMeta<string> = string,
  TAccountBurnVault extends string | IAccountMeta<string> = string,
  TAccountBurnVaultVrtTokenAccount extends
    | string
    | IAccountMeta<string> = string,
  TAccountAdmin extends string | IAccountMeta<string> = string,
  TAccountBase extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountAssociatedTokenProgram extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountConfig extends string
        ? WritableAccount<TAccountConfig>
        : TAccountConfig,
      TAccountVault extends string
        ? WritableAccount<TAccountVault>
        : TAccountVault,
      TAccountVrtMint extends string
        ? WritableSignerAccount<TAccountVrtMint> &
            IAccountSignerMeta<TAccountVrtMint>
        : TAccountVrtMint,
      TAccountStMint extends string
        ? ReadonlyAccount<TAccountStMint>
        : TAccountStMint,
      TAccountAdminStTokenAccount extends string
        ? WritableAccount<TAccountAdminStTokenAccount>
        : TAccountAdminStTokenAccount,
      TAccountVaultStTokenAccount extends string
        ? WritableAccount<TAccountVaultStTokenAccount>
        : TAccountVaultStTokenAccount,
      TAccountBurnVault extends string
        ? ReadonlyAccount<TAccountBurnVault>
        : TAccountBurnVault,
      TAccountBurnVaultVrtTokenAccount extends string
        ? WritableAccount<TAccountBurnVaultVrtTokenAccount>
        : TAccountBurnVaultVrtTokenAccount,
      TAccountAdmin extends string
        ? WritableSignerAccount<TAccountAdmin> &
            IAccountSignerMeta<TAccountAdmin>
        : TAccountAdmin,
      TAccountBase extends string
        ? ReadonlySignerAccount<TAccountBase> & IAccountSignerMeta<TAccountBase>
        : TAccountBase,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountTokenProgram extends string
        ? ReadonlyAccount<TAccountTokenProgram>
        : TAccountTokenProgram,
      TAccountAssociatedTokenProgram extends string
        ? ReadonlyAccount<TAccountAssociatedTokenProgram>
        : TAccountAssociatedTokenProgram,
      ...TRemainingAccounts,
    ]
  >;

export type InitializeVaultInstructionData = {
  discriminator: number;
  depositFeeBps: number;
  withdrawalFeeBps: number;
  rewardFeeBps: number;
  decimals: number;
  initializeTokenAmount: bigint;
};

export type InitializeVaultInstructionDataArgs = {
  depositFeeBps: number;
  withdrawalFeeBps: number;
  rewardFeeBps: number;
  decimals: number;
  initializeTokenAmount: number | bigint;
};

export function getInitializeVaultInstructionDataEncoder(): Encoder<InitializeVaultInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ['discriminator', getU8Encoder()],
      ['depositFeeBps', getU16Encoder()],
      ['withdrawalFeeBps', getU16Encoder()],
      ['rewardFeeBps', getU16Encoder()],
      ['decimals', getU8Encoder()],
      ['initializeTokenAmount', getU64Encoder()],
    ]),
    (value) => ({ ...value, discriminator: INITIALIZE_VAULT_DISCRIMINATOR })
  );
}

export function getInitializeVaultInstructionDataDecoder(): Decoder<InitializeVaultInstructionData> {
  return getStructDecoder([
    ['discriminator', getU8Decoder()],
    ['depositFeeBps', getU16Decoder()],
    ['withdrawalFeeBps', getU16Decoder()],
    ['rewardFeeBps', getU16Decoder()],
    ['decimals', getU8Decoder()],
    ['initializeTokenAmount', getU64Decoder()],
  ]);
}

export function getInitializeVaultInstructionDataCodec(): Codec<
  InitializeVaultInstructionDataArgs,
  InitializeVaultInstructionData
> {
  return combineCodec(
    getInitializeVaultInstructionDataEncoder(),
    getInitializeVaultInstructionDataDecoder()
  );
}

export type InitializeVaultInput<
  TAccountConfig extends string = string,
  TAccountVault extends string = string,
  TAccountVrtMint extends string = string,
  TAccountStMint extends string = string,
  TAccountAdminStTokenAccount extends string = string,
  TAccountVaultStTokenAccount extends string = string,
  TAccountBurnVault extends string = string,
  TAccountBurnVaultVrtTokenAccount extends string = string,
  TAccountAdmin extends string = string,
  TAccountBase extends string = string,
  TAccountSystemProgram extends string = string,
  TAccountTokenProgram extends string = string,
  TAccountAssociatedTokenProgram extends string = string,
> = {
  config: Address<TAccountConfig>;
  vault: Address<TAccountVault>;
  vrtMint: TransactionSigner<TAccountVrtMint>;
  stMint: Address<TAccountStMint>;
  adminStTokenAccount: Address<TAccountAdminStTokenAccount>;
  vaultStTokenAccount: Address<TAccountVaultStTokenAccount>;
  burnVault: Address<TAccountBurnVault>;
  burnVaultVrtTokenAccount: Address<TAccountBurnVaultVrtTokenAccount>;
  admin: TransactionSigner<TAccountAdmin>;
  base: TransactionSigner<TAccountBase>;
  systemProgram?: Address<TAccountSystemProgram>;
  tokenProgram?: Address<TAccountTokenProgram>;
  associatedTokenProgram: Address<TAccountAssociatedTokenProgram>;
  depositFeeBps: InitializeVaultInstructionDataArgs['depositFeeBps'];
  withdrawalFeeBps: InitializeVaultInstructionDataArgs['withdrawalFeeBps'];
  rewardFeeBps: InitializeVaultInstructionDataArgs['rewardFeeBps'];
  decimals: InitializeVaultInstructionDataArgs['decimals'];
  initializeTokenAmount: InitializeVaultInstructionDataArgs['initializeTokenAmount'];
};

export function getInitializeVaultInstruction<
  TAccountConfig extends string,
  TAccountVault extends string,
  TAccountVrtMint extends string,
  TAccountStMint extends string,
  TAccountAdminStTokenAccount extends string,
  TAccountVaultStTokenAccount extends string,
  TAccountBurnVault extends string,
  TAccountBurnVaultVrtTokenAccount extends string,
  TAccountAdmin extends string,
  TAccountBase extends string,
  TAccountSystemProgram extends string,
  TAccountTokenProgram extends string,
  TAccountAssociatedTokenProgram extends string,
  TProgramAddress extends Address = typeof JITO_VAULT_PROGRAM_ADDRESS,
>(
  input: InitializeVaultInput<
    TAccountConfig,
    TAccountVault,
    TAccountVrtMint,
    TAccountStMint,
    TAccountAdminStTokenAccount,
    TAccountVaultStTokenAccount,
    TAccountBurnVault,
    TAccountBurnVaultVrtTokenAccount,
    TAccountAdmin,
    TAccountBase,
    TAccountSystemProgram,
    TAccountTokenProgram,
    TAccountAssociatedTokenProgram
  >,
  config?: { programAddress?: TProgramAddress }
): InitializeVaultInstruction<
  TProgramAddress,
  TAccountConfig,
  TAccountVault,
  TAccountVrtMint,
  TAccountStMint,
  TAccountAdminStTokenAccount,
  TAccountVaultStTokenAccount,
  TAccountBurnVault,
  TAccountBurnVaultVrtTokenAccount,
  TAccountAdmin,
  TAccountBase,
  TAccountSystemProgram,
  TAccountTokenProgram,
  TAccountAssociatedTokenProgram
> {
  // Program address.
  const programAddress = config?.programAddress ?? JITO_VAULT_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    config: { value: input.config ?? null, isWritable: true },
    vault: { value: input.vault ?? null, isWritable: true },
    vrtMint: { value: input.vrtMint ?? null, isWritable: true },
    stMint: { value: input.stMint ?? null, isWritable: false },
    adminStTokenAccount: {
      value: input.adminStTokenAccount ?? null,
      isWritable: true,
    },
    vaultStTokenAccount: {
      value: input.vaultStTokenAccount ?? null,
      isWritable: true,
    },
    burnVault: { value: input.burnVault ?? null, isWritable: false },
    burnVaultVrtTokenAccount: {
      value: input.burnVaultVrtTokenAccount ?? null,
      isWritable: true,
    },
    admin: { value: input.admin ?? null, isWritable: true },
    base: { value: input.base ?? null, isWritable: false },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    tokenProgram: { value: input.tokenProgram ?? null, isWritable: false },
    associatedTokenProgram: {
      value: input.associatedTokenProgram ?? null,
      isWritable: false,
    },
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
  if (!accounts.tokenProgram.value) {
    accounts.tokenProgram.value =
      'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Address<'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'>;
  }

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.config),
      getAccountMeta(accounts.vault),
      getAccountMeta(accounts.vrtMint),
      getAccountMeta(accounts.stMint),
      getAccountMeta(accounts.adminStTokenAccount),
      getAccountMeta(accounts.vaultStTokenAccount),
      getAccountMeta(accounts.burnVault),
      getAccountMeta(accounts.burnVaultVrtTokenAccount),
      getAccountMeta(accounts.admin),
      getAccountMeta(accounts.base),
      getAccountMeta(accounts.systemProgram),
      getAccountMeta(accounts.tokenProgram),
      getAccountMeta(accounts.associatedTokenProgram),
    ],
    programAddress,
    data: getInitializeVaultInstructionDataEncoder().encode(
      args as InitializeVaultInstructionDataArgs
    ),
  } as InitializeVaultInstruction<
    TProgramAddress,
    TAccountConfig,
    TAccountVault,
    TAccountVrtMint,
    TAccountStMint,
    TAccountAdminStTokenAccount,
    TAccountVaultStTokenAccount,
    TAccountBurnVault,
    TAccountBurnVaultVrtTokenAccount,
    TAccountAdmin,
    TAccountBase,
    TAccountSystemProgram,
    TAccountTokenProgram,
    TAccountAssociatedTokenProgram
  >;

  return instruction;
}

export type ParsedInitializeVaultInstruction<
  TProgram extends string = typeof JITO_VAULT_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    config: TAccountMetas[0];
    vault: TAccountMetas[1];
    vrtMint: TAccountMetas[2];
    stMint: TAccountMetas[3];
    adminStTokenAccount: TAccountMetas[4];
    vaultStTokenAccount: TAccountMetas[5];
    burnVault: TAccountMetas[6];
    burnVaultVrtTokenAccount: TAccountMetas[7];
    admin: TAccountMetas[8];
    base: TAccountMetas[9];
    systemProgram: TAccountMetas[10];
    tokenProgram: TAccountMetas[11];
    associatedTokenProgram: TAccountMetas[12];
  };
  data: InitializeVaultInstructionData;
};

export function parseInitializeVaultInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedInitializeVaultInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 13) {
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
      vault: getNextAccount(),
      vrtMint: getNextAccount(),
      stMint: getNextAccount(),
      adminStTokenAccount: getNextAccount(),
      vaultStTokenAccount: getNextAccount(),
      burnVault: getNextAccount(),
      burnVaultVrtTokenAccount: getNextAccount(),
      admin: getNextAccount(),
      base: getNextAccount(),
      systemProgram: getNextAccount(),
      tokenProgram: getNextAccount(),
      associatedTokenProgram: getNextAccount(),
    },
    data: getInitializeVaultInstructionDataDecoder().decode(instruction.data),
  };
}
