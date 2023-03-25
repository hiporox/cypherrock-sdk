import {
  GetPublicKeyFormat,
  GetPublicKeysStatus,
  IGetPublicKeysDerivationPath,
} from '../../proto/generated/types';

export type GetPublicKeysEventHandler = (event: GetPublicKeysStatus) => void;

export interface IGetPublicKeysParams {
  onEvent?: GetPublicKeysEventHandler;

  walletId: Uint8Array;
  derivationPaths: IGetPublicKeysDerivationPath[];
  chainId: number;
  format?: GetPublicKeyFormat;
  doVerifyOnDevice?: boolean;
}
