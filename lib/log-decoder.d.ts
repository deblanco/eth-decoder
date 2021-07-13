import Decoder from './decoder';
import { ParsedLogDescription } from './types';
export default class LogDecoder extends Decoder {
    decodeLogs(logs?: any[]): Array<ParsedLogDescription>;
}
