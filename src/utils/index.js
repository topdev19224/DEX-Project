import {Contract} from '@ethersproject/contracts';
import { getAddress } from "@ethersproject/address";
import { AddressZero } from "@ethersproject/constants";

export function isAddress(value) {
    try {
        return getAddress(value);
    } catch {
        return false;
    }
}

export function getSigner(library, account) {
    return library.getSigner(account).connectUnchecked();
}

export function getProviderOrSigner(library, account = "") {
    return account ? getSigner(library, account) : library;
}

export function getContract(address, ABI, library, account = "") {
    if (!isAddress(address) || address === AddressZero) {
        throw Error(`Invalid 'address' parameter '${address}'.`);
    }

    return new Contract(address, ABI, getProviderOrSigner(library, account));
}

export function BigInt(value) {
    if (typeof value === 'number' && !Number.isSafeInteger(value)) {
      throw new Error('Value is outside the safe integer range.');
    }
  
    if (typeof value === 'string') {
      if (/^-?\d+$/.test(value)) {
        return value;
      } else {
        throw new Error('Invalid string format for BigInt.');
      }
    }
  
    throw new Error('Invalid argument type for BigInt.');
  }
  
