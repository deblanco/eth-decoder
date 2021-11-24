import { TransactionDescription } from "@ethersproject/abi";
import { BigNumberish } from "@ethersproject/bignumber";
import { defaultAbiCoder } from "./types";

import Decoder from "./decoder";

export default class TxDecoder extends Decoder {
  decodeTx(tx: { data: string; value?: BigNumberish }) {
    let decodingError: Error;
    for (let i = 0; i < this.interfaces.length; i++) {
      const iface = this.interfaces[i];
      let parsedTransaction: TransactionDescription;
      try {
        parsedTransaction = iface.parseTransaction(tx);
      } catch (error) {
        decodingError = error;
      }
      if (parsedTransaction) {
        const abiFunction =
          iface.functions[parsedTransaction.name] ||
          iface.functions[parsedTransaction.signature];
        const parsedArgs = defaultAbiCoder.decode(
          abiFunction.inputs,
          `0x${tx.data.substring(10)}`
        );

        return {
          parsedArgs,
          ...parsedTransaction,
        };
      }
    }
    if (decodingError) {
      throw decodingError;
    }
    return null;
  }
}
