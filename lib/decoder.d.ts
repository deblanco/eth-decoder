import { Interface, Fragment, JsonFragment } from './types';
export default class Decoder {
    readonly interfaces: Array<Interface>;
    constructor(abis?: Array<string | Array<Fragment | JsonFragment | string>>);
}
