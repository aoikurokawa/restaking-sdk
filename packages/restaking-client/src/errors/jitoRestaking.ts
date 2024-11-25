/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/kinobi-so/kinobi
 */

import {
  isProgramError,
  type Address,
  type SOLANA_ERROR__INSTRUCTION_ERROR__CUSTOM,
  type SolanaError,
} from "@solana/web3.js";
import { JITO_RESTAKING_PROGRAM_ADDRESS } from "../programs";

/** NcnOperatorAdminInvalid: NcnOperatorAdminInvalid */
export const JITO_RESTAKING_ERROR__NCN_OPERATOR_ADMIN_INVALID = 0x3e8; // 1000
/** NcnCooldownOperatorFailed: NcnCooldownOperatorFailed */
export const JITO_RESTAKING_ERROR__NCN_COOLDOWN_OPERATOR_FAILED = 0x3e9; // 1001
/** NcnSlasherAdminInvalid: NcnSlasherAdminInvalid */
export const JITO_RESTAKING_ERROR__NCN_SLASHER_ADMIN_INVALID = 0x3ea; // 1002
/** NcnVaultAdminInvalid: NcnVaultAdminInvalid */
export const JITO_RESTAKING_ERROR__NCN_VAULT_ADMIN_INVALID = 0x3eb; // 1003
/** NcnAdminInvalid: NcnAdminInvalid */
export const JITO_RESTAKING_ERROR__NCN_ADMIN_INVALID = 0x3ec; // 1004
/** NcnDelegateAdminInvalid: NcnDelegateAdminInvalid */
export const JITO_RESTAKING_ERROR__NCN_DELEGATE_ADMIN_INVALID = 0x3ed; // 1005
/** NcnVaultSlasherTicketFailedCooldown: NcnVaultSlasherTicketFailedCooldown */
export const JITO_RESTAKING_ERROR__NCN_VAULT_SLASHER_TICKET_FAILED_COOLDOWN = 0x3ee; // 1006
/** NcnVaultTicketFailedCooldown: NcnVaultTicketFailedCooldown */
export const JITO_RESTAKING_ERROR__NCN_VAULT_TICKET_FAILED_COOLDOWN = 0x3ef; // 1007
/** NcnWarmupOperatorFailed: NcnWarmupOperatorFailed */
export const JITO_RESTAKING_ERROR__NCN_WARMUP_OPERATOR_FAILED = 0x3f0; // 1008
/** NcnVaultSlasherTicketFailedWarmup: NcnVaultSlasherTicketFailedWarmup */
export const JITO_RESTAKING_ERROR__NCN_VAULT_SLASHER_TICKET_FAILED_WARMUP = 0x3f1; // 1009
/** NcnVaultTicketFailedWarmup: NcnVaultTicketFailedWarmup */
export const JITO_RESTAKING_ERROR__NCN_VAULT_TICKET_FAILED_WARMUP = 0x3f2; // 1010
/** OperatorNcnAdminInvalid: OperatorNcnAdminInvalid */
export const JITO_RESTAKING_ERROR__OPERATOR_NCN_ADMIN_INVALID = 0x7d0; // 2000
/** OperatorVaultAdminInvalid: OperatorVaultAdminInvalid */
export const JITO_RESTAKING_ERROR__OPERATOR_VAULT_ADMIN_INVALID = 0x7d1; // 2001
/** OperatorAdminInvalid: OperatorAdminInvalid */
export const JITO_RESTAKING_ERROR__OPERATOR_ADMIN_INVALID = 0x7d2; // 2002
/** OperatorDelegateAdminInvalid: OperatorDelegateAdminInvalid */
export const JITO_RESTAKING_ERROR__OPERATOR_DELEGATE_ADMIN_INVALID = 0x7d3; // 2003
/** OperatorCooldownNcnFailed: OperatorCooldownNcnFailed */
export const JITO_RESTAKING_ERROR__OPERATOR_COOLDOWN_NCN_FAILED = 0x7d4; // 2004
/** OperatorVaultTicketFailedCooldown: OperatorVaultTicketFailedCooldown */
export const JITO_RESTAKING_ERROR__OPERATOR_VAULT_TICKET_FAILED_COOLDOWN = 0x7d5; // 2005
/** OperatorVaultTicketFailedWarmup: OperatorVaultTicketFailedWarmup */
export const JITO_RESTAKING_ERROR__OPERATOR_VAULT_TICKET_FAILED_WARMUP = 0x7d6; // 2006
/** OperatorWarmupNcnFailed: OperatorWarmupNcnFailed */
export const JITO_RESTAKING_ERROR__OPERATOR_WARMUP_NCN_FAILED = 0x7d7; // 2007
/** OperatorFeeCapExceeded: OperatorFeeCapExceeded */
export const JITO_RESTAKING_ERROR__OPERATOR_FEE_CAP_EXCEEDED = 0x7d8; // 2008
/** NcnOverflow: NcnOverflow */
export const JITO_RESTAKING_ERROR__NCN_OVERFLOW = 0x7d9; // 2009
/** OperatorOverflow: OperatorOverflow */
export const JITO_RESTAKING_ERROR__OPERATOR_OVERFLOW = 0x7da; // 2010
/** VaultOverflow: VaultOverflow */
export const JITO_RESTAKING_ERROR__VAULT_OVERFLOW = 0x7db; // 2011
/** SlasherOverflow: SlasherOverflow */
export const JITO_RESTAKING_ERROR__SLASHER_OVERFLOW = 0x7dc; // 2012
/** InvalidEpochLength: InvalidEpochLength */
export const JITO_RESTAKING_ERROR__INVALID_EPOCH_LENGTH = 0x7dd; // 2013
/** ConfigAdminInvalid: ConfigAdminInvalid */
export const JITO_RESTAKING_ERROR__CONFIG_ADMIN_INVALID = 0x7de; // 2014
/** ArithmeticOverflow: ArithmeticOverflow */
export const JITO_RESTAKING_ERROR__ARITHMETIC_OVERFLOW = 0xbb8; // 3000
/** ArithmeticUnderflow: ArithmeticUnderflow */
export const JITO_RESTAKING_ERROR__ARITHMETIC_UNDERFLOW = 0xbb9; // 3001
/** DivisionByZero: DivisionByZero */
export const JITO_RESTAKING_ERROR__DIVISION_BY_ZERO = 0xbba; // 3002

export type JitoRestakingError =
  | typeof JITO_RESTAKING_ERROR__ARITHMETIC_OVERFLOW
  | typeof JITO_RESTAKING_ERROR__ARITHMETIC_UNDERFLOW
  | typeof JITO_RESTAKING_ERROR__CONFIG_ADMIN_INVALID
  | typeof JITO_RESTAKING_ERROR__DIVISION_BY_ZERO
  | typeof JITO_RESTAKING_ERROR__INVALID_EPOCH_LENGTH
  | typeof JITO_RESTAKING_ERROR__NCN_ADMIN_INVALID
  | typeof JITO_RESTAKING_ERROR__NCN_COOLDOWN_OPERATOR_FAILED
  | typeof JITO_RESTAKING_ERROR__NCN_DELEGATE_ADMIN_INVALID
  | typeof JITO_RESTAKING_ERROR__NCN_OPERATOR_ADMIN_INVALID
  | typeof JITO_RESTAKING_ERROR__NCN_OVERFLOW
  | typeof JITO_RESTAKING_ERROR__NCN_SLASHER_ADMIN_INVALID
  | typeof JITO_RESTAKING_ERROR__NCN_VAULT_ADMIN_INVALID
  | typeof JITO_RESTAKING_ERROR__NCN_VAULT_SLASHER_TICKET_FAILED_COOLDOWN
  | typeof JITO_RESTAKING_ERROR__NCN_VAULT_SLASHER_TICKET_FAILED_WARMUP
  | typeof JITO_RESTAKING_ERROR__NCN_VAULT_TICKET_FAILED_COOLDOWN
  | typeof JITO_RESTAKING_ERROR__NCN_VAULT_TICKET_FAILED_WARMUP
  | typeof JITO_RESTAKING_ERROR__NCN_WARMUP_OPERATOR_FAILED
  | typeof JITO_RESTAKING_ERROR__OPERATOR_ADMIN_INVALID
  | typeof JITO_RESTAKING_ERROR__OPERATOR_COOLDOWN_NCN_FAILED
  | typeof JITO_RESTAKING_ERROR__OPERATOR_DELEGATE_ADMIN_INVALID
  | typeof JITO_RESTAKING_ERROR__OPERATOR_FEE_CAP_EXCEEDED
  | typeof JITO_RESTAKING_ERROR__OPERATOR_NCN_ADMIN_INVALID
  | typeof JITO_RESTAKING_ERROR__OPERATOR_OVERFLOW
  | typeof JITO_RESTAKING_ERROR__OPERATOR_VAULT_ADMIN_INVALID
  | typeof JITO_RESTAKING_ERROR__OPERATOR_VAULT_TICKET_FAILED_COOLDOWN
  | typeof JITO_RESTAKING_ERROR__OPERATOR_VAULT_TICKET_FAILED_WARMUP
  | typeof JITO_RESTAKING_ERROR__OPERATOR_WARMUP_NCN_FAILED
  | typeof JITO_RESTAKING_ERROR__SLASHER_OVERFLOW
  | typeof JITO_RESTAKING_ERROR__VAULT_OVERFLOW;

let jitoRestakingErrorMessages: Record<JitoRestakingError, string> | undefined;
if (process.env.NODE_ENV !== "production") {
  jitoRestakingErrorMessages = {
    [JITO_RESTAKING_ERROR__ARITHMETIC_OVERFLOW]: `ArithmeticOverflow`,
    [JITO_RESTAKING_ERROR__ARITHMETIC_UNDERFLOW]: `ArithmeticUnderflow`,
    [JITO_RESTAKING_ERROR__CONFIG_ADMIN_INVALID]: `ConfigAdminInvalid`,
    [JITO_RESTAKING_ERROR__DIVISION_BY_ZERO]: `DivisionByZero`,
    [JITO_RESTAKING_ERROR__INVALID_EPOCH_LENGTH]: `InvalidEpochLength`,
    [JITO_RESTAKING_ERROR__NCN_ADMIN_INVALID]: `NcnAdminInvalid`,
    [JITO_RESTAKING_ERROR__NCN_COOLDOWN_OPERATOR_FAILED]: `NcnCooldownOperatorFailed`,
    [JITO_RESTAKING_ERROR__NCN_DELEGATE_ADMIN_INVALID]: `NcnDelegateAdminInvalid`,
    [JITO_RESTAKING_ERROR__NCN_OPERATOR_ADMIN_INVALID]: `NcnOperatorAdminInvalid`,
    [JITO_RESTAKING_ERROR__NCN_OVERFLOW]: `NcnOverflow`,
    [JITO_RESTAKING_ERROR__NCN_SLASHER_ADMIN_INVALID]: `NcnSlasherAdminInvalid`,
    [JITO_RESTAKING_ERROR__NCN_VAULT_ADMIN_INVALID]: `NcnVaultAdminInvalid`,
    [JITO_RESTAKING_ERROR__NCN_VAULT_SLASHER_TICKET_FAILED_COOLDOWN]: `NcnVaultSlasherTicketFailedCooldown`,
    [JITO_RESTAKING_ERROR__NCN_VAULT_SLASHER_TICKET_FAILED_WARMUP]: `NcnVaultSlasherTicketFailedWarmup`,
    [JITO_RESTAKING_ERROR__NCN_VAULT_TICKET_FAILED_COOLDOWN]: `NcnVaultTicketFailedCooldown`,
    [JITO_RESTAKING_ERROR__NCN_VAULT_TICKET_FAILED_WARMUP]: `NcnVaultTicketFailedWarmup`,
    [JITO_RESTAKING_ERROR__NCN_WARMUP_OPERATOR_FAILED]: `NcnWarmupOperatorFailed`,
    [JITO_RESTAKING_ERROR__OPERATOR_ADMIN_INVALID]: `OperatorAdminInvalid`,
    [JITO_RESTAKING_ERROR__OPERATOR_COOLDOWN_NCN_FAILED]: `OperatorCooldownNcnFailed`,
    [JITO_RESTAKING_ERROR__OPERATOR_DELEGATE_ADMIN_INVALID]: `OperatorDelegateAdminInvalid`,
    [JITO_RESTAKING_ERROR__OPERATOR_FEE_CAP_EXCEEDED]: `OperatorFeeCapExceeded`,
    [JITO_RESTAKING_ERROR__OPERATOR_NCN_ADMIN_INVALID]: `OperatorNcnAdminInvalid`,
    [JITO_RESTAKING_ERROR__OPERATOR_OVERFLOW]: `OperatorOverflow`,
    [JITO_RESTAKING_ERROR__OPERATOR_VAULT_ADMIN_INVALID]: `OperatorVaultAdminInvalid`,
    [JITO_RESTAKING_ERROR__OPERATOR_VAULT_TICKET_FAILED_COOLDOWN]: `OperatorVaultTicketFailedCooldown`,
    [JITO_RESTAKING_ERROR__OPERATOR_VAULT_TICKET_FAILED_WARMUP]: `OperatorVaultTicketFailedWarmup`,
    [JITO_RESTAKING_ERROR__OPERATOR_WARMUP_NCN_FAILED]: `OperatorWarmupNcnFailed`,
    [JITO_RESTAKING_ERROR__SLASHER_OVERFLOW]: `SlasherOverflow`,
    [JITO_RESTAKING_ERROR__VAULT_OVERFLOW]: `VaultOverflow`,
  };
}

export function getJitoRestakingErrorMessage(code: JitoRestakingError): string {
  if (process.env.NODE_ENV !== "production") {
    return (jitoRestakingErrorMessages as Record<JitoRestakingError, string>)[
      code
    ];
  }

  return "Error message not available in production bundles.";
}

export function isJitoRestakingError<
  TProgramErrorCode extends JitoRestakingError,
>(
  error: unknown,
  transactionMessage: {
    instructions: Record<number, { programAddress: Address }>;
  },
  code?: TProgramErrorCode,
): error is SolanaError<typeof SOLANA_ERROR__INSTRUCTION_ERROR__CUSTOM> &
  Readonly<{ context: Readonly<{ code: TProgramErrorCode }> }> {
  return isProgramError<TProgramErrorCode>(
    error,
    transactionMessage,
    JITO_RESTAKING_PROGRAM_ADDRESS,
    code,
  );
}