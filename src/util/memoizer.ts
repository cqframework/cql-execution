import * as ucum from '@lhncbc/ucum-lhc';
import Immutable from 'immutable';
import { Code, DateTime, Interval, Quantity, Ratio, Uncertainty } from '../datatypes/datatypes';
import { decimalAdjust } from './math';
import { convertUnit } from './units';

namespace Memoizer {
    const ucumUtilInstance = ucum.UcumLhcUtils.getInstance();

    /** 
     * Options for Memoize classes
      */
    export interface IMemoizeOptions {
        useCache?: boolean,
        cacheMax?: number
    }

    type Primitive = string | number | boolean | bigint | symbol | undefined | null;
    type KeyValuePair<KEY, VALUE> = { key: KEY, value: VALUE }

    /** 
     * Options for Memoize classes
      */
    export interface IMemoizeOptions {
        useCache?: boolean,
        cacheMax?: number
    }

    /** 
     * Let S, T, P, and Q be categories with the following diagram
     * 
     * ```js
     *  CACHE
     *    ↑   ↘  
     *  P[][] → Q[]
     *    ↑      ↓
     *  S[][] → T[]
     * ```
     * 
     * This abstract class facilitates calculating S[][] → T[] via S[][] → P[][] → Q[] → T[] with the assumption that functors are chosen such that the diagram commutes.
     * 
     * Moreover, this class optionally allows caching the calculation of P[][] → Q[] via the use of a unique CACHEKEY for P[][].
     */
    abstract class Memoizer<S, S_KEY, P extends KeyValuePair<S_KEY, S>, T, T_KEY, Q extends KeyValuePair<T_KEY, T>, CACHEKEY> {
        constructor(protected readonly options?: IMemoizeOptions) { }

        /**
         * Generate a unique CACHEKEY for P[][].  
         * 
         * ```js
         *  CACHE
         *    ↑   ↘  
         *  P[][] → Q[]
         *    ↑     ↓
         *  S[][] → T[]
         * ```
         * 
         * If Q[] has been cached from a prior computation of P[][] → Q[], the CACHEKEY for P[][] may be used to quickly retrieve Q[]
         * 
         * @param {P[][]} list P[][]
         * @returns {CACHEKEY} Cache key for P[][]
         */
        protected abstract getListCacheKey: (...list: P[][]) => CACHEKEY

        /**
         * Given a CACHEKEY for P[][], return Q[] from the cache.  If CACHEKEY is not in the cache, return undefined.
         * 
         * ```js
         *  CACHE
         *    ↑   ↘  
         *  P[][] → Q[]
         *    ↑     ↓
         *  S[][] → T[]
         * ```
         * 
         * @param {CACHEKEY} key CACHEKEY for P[]
         * @returns {Q[] | undefined} Cached Q[] or undefined
         */
        protected abstract getListCacheValue: (key: CACHEKEY) => Q[] | undefined

        /**
         * Given a CACHEKEY for P[], and a computed Q[] from P[][] → Q[], add the pair CACHEKEY : Q[] to the cache
         * 
         * ```js
         *  CACHE
         *    ↑   ↘  
         *  P[][] → Q[]
         *    ↑     ↓
         *  S[][] → T[]
         * ```
         * 
         * @param {CACHEKEY} key CACHEKEY for P[]
         * @param {Q[]} value Computed Q[]
         * @return {void}
         */
        protected abstract setListCacheValue: (key: CACHEKEY, value: Q[]) => void

        /**
         * Given P[][] → Q[], return a new functor P[][] → Q[] that incorporates a cache
         * 
         * ```js
         *  CACHE
         *    ↑   ↘  
         *  P[][] → Q[]
         *    ↑     ↓
         *  S[][] → T[]
         * ```
         * 
         * @param {(list: P[][]) => Q[]} fn Functor P[][] → Q[]
         * @return {(list: P[][]) => Q[]} Caching Functor P[][] → Q[]
         */
        protected abstract addCacheToFunction: (fn: (...list: P[][]) => Q[]) => (...list: P[][]) => Q[]

        /**
         * Return a unique key for item in the category S
         * 
         * ```js
         *  CACHE
         *    ↑   ↘  
         *  P[][] → Q[]
         *    ↑     ↓
         *  S[][] → T[]
         * ```
         * 
         * @param {S} item Member of S
         * @return {S_KEY} Unique key for item in S
         */
        protected abstract convertToObjectKey: (item: S) => S_KEY

        /**
         * Functor S[][] → P[]
         * 
         * ```js
         *  CACHE
         *    ↑   ↘  
         *  P[][] → Q[]
         *    ↑     ↓
         *  S[][] → T[]
         * ```
         * 
         * @param {S[][]} list S[][]
         * @return {S_KEY} Unique key for item in S
         */
        protected abstract convertToKeyList: (...list: S[][]) => P[][]

        /**
         * Functor Q[] → T[]
         * 
         * ```js
         *  CACHE
         *    ↑   ↘  
         *  P[][] → Q[]
         *    ↑     ↓
         *  S[][] → T[]
         * ```
         * 
         * @param {Q[]} list Q[]
         * @return {T[]} T[]
         */
        protected abstract convertToValueList: (list: Q[]) => T[]

        /** 
         * Given a functor P[][] → Q[], returns functor S[][] → T[] via S[][] → P[][] → Q[] → T[]
         * 
         * ```js
         *  CACHE
         *    ↑   ↘  
         *  P[][] → Q[]
         *    ↑     ↓
         *  S[][] → T[]
         * ```
         * 
         * Functors must be chosen such that this diagram commutes
         * 
         * @param {(list: P[][]) => Q[]} fn Functor P[][] → Q[]
         * @return {(list: S[][]) => T[]} Functor S[][] → P[][] → Q[] → T[]
         */
        public abstract memoize: (fn: (...list: P[][]) => Q[]) => (...list: S[][]) => T[]
    }


    /** 
     * Let S, T, P, and Q be categories with the following diagram
     * 
     * ```js
     *  CACHE
     *    ↑   ↘  
     *  P[][] → Q[]
     *    ↑      ↓
     *  S[][] → T[]
     * ```
     * 
     * This abstract class facilitates calculating S[][] → T[] via S[][] → P[][] → Q[] → T[] with the assumption that functors are chosen such that the diagram commutes,
     * and extends the base class by adding default implementations for:
     * 1. convertToKeyList
     * 2. convertToValueList
     * 3. addCacheToFunction
     * 4. memoize
     */
    abstract class InMemoryCacheMemoizer<S, S_KEY, P extends KeyValuePair<S_KEY, S>, T, T_KEY, Q extends KeyValuePair<T_KEY, T>, CACHEKEY>
        extends Memoizer<S, S_KEY, P, T, T_KEY, Q, CACHEKEY> {

        constructor(options?: IMemoizeOptions) {
            super(options)
        }

        protected addCacheToFunction = (fn: (...list: P[][]) => Q[]): (...list: P[][]) => Q[] => {
            return (...list: P[][]) => {
                // Check the cache
                let cacheKey = this.getListCacheKey(...list)
                let cacheValue = this.getListCacheValue(cacheKey)
                if (cacheValue)
                    return cacheValue

                // Evaluate the function
                let functionResult = fn(...list)

                // Set the cache value
                this.setListCacheValue(cacheKey, functionResult);

                // Return result
                return functionResult;
            }
        }

        protected convertToKeyList = (...list: S[][]): P[][] => {
            return list.map(x => {
                return x.map(y => {
                    return <P>{
                        key: this.convertToObjectKey(y),
                        value: y
                    }
                })
            })
        }

        protected convertToValueList = (list: Q[]): T[] => list.map(x => x.value)

        public memoize = (fn: (...list: P[][]) => Q[]): (...list: S[][]) => T[] => {
            if (this.options && this.options.useCache)
                return (...list: S[][]) => this.convertToValueList(this.addCacheToFunction(fn)(...this.convertToKeyList(...list)))

            return (...list: S[][]) => this.convertToValueList(fn(...this.convertToKeyList(...list)))
        }
    }


    /** 
     * Type for Immutable JS objects that can be used for value equality
     */
    export type ImmutableObjectKey = Primitive | Immutable.Collection<ImmutableObjectKey, unknown>

    /** 
     * Type for a JS object and it's Immutable JS key
     */
    export type ImmutableKeyValuePair<VALUE> = KeyValuePair<ImmutableObjectKey, VALUE>

    /** 
     * Immutable JS type for CACHEKEY
     */
    type ImmutableListKey = Immutable.List<ImmutableObjectKey>

    /** 
     * Let S, T, P, and Q be categories with the following diagram
     * 
     * ```js
     *  CACHE
     *    ↑   ↘  
     *  P[][] → Q[]
     *    ↑      ↓
     *  S[][] → T[]
     * ```
     * 
     * This class facilitates calculating S[][] → T[] via S[][] → P[][] → Q[] → T[] with the assumption that functors are chosen such that the diagram commutes.
     * Care should be taken in Functor P[][] → Q[] such that the underlying functor P.value → Q.value = S → T
     * 
     * Immutable JS is used for S → S_KEY (used by Functor S[][] → P[]) and P[][] → CACHEKEY.  
     * Moreover, P.key and Q.key are Immutable.Collections.  See {@link https://immutable-js.com/docs/v4.1.0/Collection/}
     * 
     * Caching is implemented via an Immutable.Map from Immutable JS.  See {@link https://immutable-js.com/docs/v4.1.0/Map/#Map()}
     */
    export class ImmutableMemoizer<S, T> extends InMemoryCacheMemoizer<S, ImmutableObjectKey, ImmutableKeyValuePair<S>, T, ImmutableObjectKey, ImmutableKeyValuePair<T>, ImmutableListKey> {
        protected readonly cache = Immutable.Map<ImmutableListKey, ImmutableKeyValuePair<T>[]>().asMutable();

        constructor(options?: IMemoizeOptions) {
            super(options)
        }

        protected getListCacheKey = (...list: ImmutableKeyValuePair<S>[][]) => Immutable.List(list.map(x => Immutable.List(x.map(y => y.key))))
        protected getListCacheValue = (key: ImmutableListKey) => this.cache.get(key)
        protected convertToObjectKey = (obj: S) => this.toImmutableObjectKey(obj)

        protected setListCacheValue = (key: ImmutableListKey, value: ImmutableKeyValuePair<T>[]) => {
            this.cache.withMutations(map => {
                if (this.options && this.options.useCache && this.options.cacheMax && map.size == this.options.cacheMax)
                    map.delete(map.keySeq().first())

                map.set(key, value)
            })
        }

        public toImmutableObjectKey = (js: any): ImmutableObjectKey => {
            // This is necessary because of the oddities of CQL
            // It allows ignoring non-set values in tuples to be compared correctly with set as null values in tuples
            if (js === null || js === undefined)
                return null

            // Handle the edge case of functions
            if (typeof js === 'function')
                return Immutable.Map({
                    name: js.toString(),
                    __instance: js.constructor.name
                })

            // Simple return non-objects
            if (typeof js !== 'object')
                return js


            // Handle objects - normalize as necessary to generate unique keys
            switch (js.constructor) {
                case Array:
                    return Immutable.Seq(js).map((x: any) => this.toImmutableObjectKey(x)).toList()

                case Code:
                    return Immutable.Map({
                        code: this.toImmutableObjectKey(js.code),
                        system: this.toImmutableObjectKey(js.system),
                        __instance: js.constructor.name
                    })

                case Date:
                    return Immutable.Map({
                        epochMs: js.getTime(),
                        __instance: js.constructor.name
                    })

                case DateTime:
                    if (typeof js.timezoneOffset === 'number' && js.timezoneOffset !== 0)
                        return Immutable.Seq(js.convertToTimezoneOffset(0)).map((x: any) => this.toImmutableObjectKey(x)).toMap().set('__instance', js.constructor.name)
                    else
                        return Immutable.Seq(js).map((x: any) => this.toImmutableObjectKey(x)).toMap().set('__instance', js.constructor.name)

                case Interval:
                    return Immutable.Seq(js.toClosed()).map((x: any) => this.toImmutableObjectKey(x)).toMap().set('__instance', js.constructor.name)

                case Quantity:
                    if (!js.unit) {
                        return Immutable.Map({
                            value: js.value ?? null,
                            unit: null,
                            __instance: js.constructor.name
                        })
                    }

                    // Get the normalized base unit
                    let baseUnitKey = ucumUtilInstance.commensurablesList(js.unit!)[0]

                    if (!baseUnitKey) {
                        // No units found - normalization not possible and use provided values
                        return Immutable.Map({
                            value: js.value ?? null,
                            unit: js.unit ?? null,
                            __instance: js.constructor.name
                        })
                    }
                    else {
                        // Unit was found - convert to baseUnit and normalize
                        let baseUnitKeyCode = baseUnitKey[0].csCode_;
                        let conversionValue = convertUnit(js.value, js.unit, baseUnitKeyCode)
                        let finalValue = conversionValue ? decimalAdjust('round', conversionValue, -8) : null
                        return Immutable.Map({
                            value: finalValue ?? null,
                            unit: baseUnitKeyCode ?? null,
                            __instance: js.constructor.name
                        })
                    }

                case Ratio:
                    return Immutable.Map({
                        numerator: this.toImmutableObjectKey(js.numerator),
                        denominator: this.toImmutableObjectKey(js.denominator),
                        __instance: js.constructor.name
                    })

                case RegExp:
                    return Immutable.Map({
                        source: this.toImmutableObjectKey(js.source),
                        global: this.toImmutableObjectKey(js.global),
                        ignoreCase: this.toImmutableObjectKey(js.ignoreCase),
                        multiline: this.toImmutableObjectKey(js.multiline),
                        __instance: js.constructor.name
                    })

                case Uncertainty:
                    if (js.isPoint())
                        return this.toImmutableObjectKey(js.low)
                    else
                        return Immutable.Seq(js).map((x: any) => this.toImmutableObjectKey(x)).toMap().set('__instance', js.constructor?.name)

                default:
                    return Immutable.Seq(js).map((x: any) => this.toImmutableObjectKey(x)).toMap().set('__instance', js.constructor?.name)
            }
        }
    }
}

export default Memoizer