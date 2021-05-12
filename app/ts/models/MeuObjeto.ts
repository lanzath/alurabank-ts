import { Igualavel } from './Igualavel';
import { Imprimivel } from './Imprimivel';

// Uma interface pode herdar várias outras
export interface MeuObjeto<T> extends Imprimivel, Igualavel<T> {
    //
}
