import { Interface, Fragment, JsonFragment, defaultAbiCoder, LogDescription } from '@ethersproject/abi';
import { Description } from '@ethersproject/properties';
declare class ParsedLog extends LogDescription {
    readonly address: string;
    readonly event: string;
}
declare class ParsedLogDescription extends Description<ParsedLog> {
    readonly address: string;
    readonly event: string;
}
export { Interface, Fragment, JsonFragment, defaultAbiCoder, ParsedLogDescription, };
