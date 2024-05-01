import { useMemo } from "react";
import PokerAbi from "../contracts/abi/PokerAbi.json";
import ERC20USDTAbi from "../contracts/abi/ERC20USDTAbi.json";
import { getContract } from "../utils";
import useActiveWeb3React from "./useActiveWeb3React";
import { PokerContractAddress, ERC20USDTContractAddress } from "../contracts/address";
// returns null on errors
function useContract(address, ABI, withSignerIfPossible = true) {
  const { library, account } = useActiveWeb3React();

  return useMemo(() => {
    if (!address || !ABI || !library) return null;
    try {
      return getContract(
        address,
        ABI,
        library,
        withSignerIfPossible && account ? account : undefined
      );
    } catch (error) {
      console.error("Failed to get contract", error);
      return null;
    }
  }, [address, ABI, library, withSignerIfPossible, account]);
}


export function usePokerContract(withSignerIfPossible = true) {
  return useContract(PokerContractAddress, PokerAbi, withSignerIfPossible);
}

export function useERC20USDTContract(withSignerIfPossible = true) {
  return useContract(ERC20USDTContractAddress, ERC20USDTAbi, withSignerIfPossible);
}
