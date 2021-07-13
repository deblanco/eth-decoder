import { BigNumberish } from "@ethersproject/bignumber";
import Decoder from "./decoder";
export default class TxDecoder extends Decoder {
    decodeTx(tx: {
        data: string;
        value?: BigNumberish;
    }): {
        functionFragment: import("@ethersproject/abi").FunctionFragment;
        name: string;
        args: import("@ethersproject/abi").Result;
        signature: string;
        sighash: string;
        value: import("@ethersproject/bignumber").BigNumber;
        parsedArgs: import("@ethersproject/abi").Result;
    };
}
