
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model department
 * 
 */
export type department = $Result.DefaultSelection<Prisma.$departmentPayload>
/**
 * Model meetingmember
 * 
 */
export type meetingmember = $Result.DefaultSelection<Prisma.$meetingmemberPayload>
/**
 * Model meetings
 * 
 */
export type meetings = $Result.DefaultSelection<Prisma.$meetingsPayload>
/**
 * Model meetingtype
 * 
 */
export type meetingtype = $Result.DefaultSelection<Prisma.$meetingtypePayload>
/**
 * Model staff
 * 
 */
export type staff = $Result.DefaultSelection<Prisma.$staffPayload>
/**
 * Model venue
 * 
 */
export type venue = $Result.DefaultSelection<Prisma.$venuePayload>
/**
 * Model actionitem
 * 
 */
export type actionitem = $Result.DefaultSelection<Prisma.$actionitemPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const action_item_status: {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED'
};

export type action_item_status = (typeof action_item_status)[keyof typeof action_item_status]


export const user_role: {
  ADMIN: 'ADMIN',
  CONVENER: 'CONVENER',
  STAFF: 'STAFF'
};

export type user_role = (typeof user_role)[keyof typeof user_role]

}

export type action_item_status = $Enums.action_item_status

export const action_item_status: typeof $Enums.action_item_status

export type user_role = $Enums.user_role

export const user_role: typeof $Enums.user_role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Departments
 * const departments = await prisma.department.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Departments
   * const departments = await prisma.department.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.department`: Exposes CRUD operations for the **department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.departmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meetingmember`: Exposes CRUD operations for the **meetingmember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meetingmembers
    * const meetingmembers = await prisma.meetingmember.findMany()
    * ```
    */
  get meetingmember(): Prisma.meetingmemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meetings`: Exposes CRUD operations for the **meetings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meetings
    * const meetings = await prisma.meetings.findMany()
    * ```
    */
  get meetings(): Prisma.meetingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meetingtype`: Exposes CRUD operations for the **meetingtype** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meetingtypes
    * const meetingtypes = await prisma.meetingtype.findMany()
    * ```
    */
  get meetingtype(): Prisma.meetingtypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staff`: Exposes CRUD operations for the **staff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Staff
    * const staff = await prisma.staff.findMany()
    * ```
    */
  get staff(): Prisma.staffDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.venue`: Exposes CRUD operations for the **venue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Venues
    * const venues = await prisma.venue.findMany()
    * ```
    */
  get venue(): Prisma.venueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.actionitem`: Exposes CRUD operations for the **actionitem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Actionitems
    * const actionitems = await prisma.actionitem.findMany()
    * ```
    */
  get actionitem(): Prisma.actionitemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    department: 'department',
    meetingmember: 'meetingmember',
    meetings: 'meetings',
    meetingtype: 'meetingtype',
    staff: 'staff',
    venue: 'venue',
    actionitem: 'actionitem',
    user: 'user'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "department" | "meetingmember" | "meetings" | "meetingtype" | "staff" | "venue" | "actionitem" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      department: {
        payload: Prisma.$departmentPayload<ExtArgs>
        fields: Prisma.departmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.departmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.departmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>
          }
          findFirst: {
            args: Prisma.departmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.departmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>
          }
          findMany: {
            args: Prisma.departmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>[]
          }
          create: {
            args: Prisma.departmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>
          }
          createMany: {
            args: Prisma.departmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.departmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>
          }
          update: {
            args: Prisma.departmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>
          }
          deleteMany: {
            args: Prisma.departmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.departmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.departmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>
          }
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartment>
          }
          groupBy: {
            args: Prisma.departmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.departmentCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number
          }
        }
      }
      meetingmember: {
        payload: Prisma.$meetingmemberPayload<ExtArgs>
        fields: Prisma.meetingmemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.meetingmemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingmemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.meetingmemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingmemberPayload>
          }
          findFirst: {
            args: Prisma.meetingmemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingmemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.meetingmemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingmemberPayload>
          }
          findMany: {
            args: Prisma.meetingmemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingmemberPayload>[]
          }
          create: {
            args: Prisma.meetingmemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingmemberPayload>
          }
          createMany: {
            args: Prisma.meetingmemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.meetingmemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingmemberPayload>
          }
          update: {
            args: Prisma.meetingmemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingmemberPayload>
          }
          deleteMany: {
            args: Prisma.meetingmemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.meetingmemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.meetingmemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingmemberPayload>
          }
          aggregate: {
            args: Prisma.MeetingmemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeetingmember>
          }
          groupBy: {
            args: Prisma.meetingmemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeetingmemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.meetingmemberCountArgs<ExtArgs>
            result: $Utils.Optional<MeetingmemberCountAggregateOutputType> | number
          }
        }
      }
      meetings: {
        payload: Prisma.$meetingsPayload<ExtArgs>
        fields: Prisma.meetingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.meetingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.meetingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingsPayload>
          }
          findFirst: {
            args: Prisma.meetingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.meetingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingsPayload>
          }
          findMany: {
            args: Prisma.meetingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingsPayload>[]
          }
          create: {
            args: Prisma.meetingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingsPayload>
          }
          createMany: {
            args: Prisma.meetingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.meetingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingsPayload>
          }
          update: {
            args: Prisma.meetingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingsPayload>
          }
          deleteMany: {
            args: Prisma.meetingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.meetingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.meetingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingsPayload>
          }
          aggregate: {
            args: Prisma.MeetingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeetings>
          }
          groupBy: {
            args: Prisma.meetingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeetingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.meetingsCountArgs<ExtArgs>
            result: $Utils.Optional<MeetingsCountAggregateOutputType> | number
          }
        }
      }
      meetingtype: {
        payload: Prisma.$meetingtypePayload<ExtArgs>
        fields: Prisma.meetingtypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.meetingtypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingtypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.meetingtypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingtypePayload>
          }
          findFirst: {
            args: Prisma.meetingtypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingtypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.meetingtypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingtypePayload>
          }
          findMany: {
            args: Prisma.meetingtypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingtypePayload>[]
          }
          create: {
            args: Prisma.meetingtypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingtypePayload>
          }
          createMany: {
            args: Prisma.meetingtypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.meetingtypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingtypePayload>
          }
          update: {
            args: Prisma.meetingtypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingtypePayload>
          }
          deleteMany: {
            args: Prisma.meetingtypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.meetingtypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.meetingtypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingtypePayload>
          }
          aggregate: {
            args: Prisma.MeetingtypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeetingtype>
          }
          groupBy: {
            args: Prisma.meetingtypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeetingtypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.meetingtypeCountArgs<ExtArgs>
            result: $Utils.Optional<MeetingtypeCountAggregateOutputType> | number
          }
        }
      }
      staff: {
        payload: Prisma.$staffPayload<ExtArgs>
        fields: Prisma.staffFieldRefs
        operations: {
          findUnique: {
            args: Prisma.staffFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.staffFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>
          }
          findFirst: {
            args: Prisma.staffFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.staffFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>
          }
          findMany: {
            args: Prisma.staffFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>[]
          }
          create: {
            args: Prisma.staffCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>
          }
          createMany: {
            args: Prisma.staffCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.staffDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>
          }
          update: {
            args: Prisma.staffUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>
          }
          deleteMany: {
            args: Prisma.staffDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.staffUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.staffUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>
          }
          aggregate: {
            args: Prisma.StaffAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaff>
          }
          groupBy: {
            args: Prisma.staffGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffGroupByOutputType>[]
          }
          count: {
            args: Prisma.staffCountArgs<ExtArgs>
            result: $Utils.Optional<StaffCountAggregateOutputType> | number
          }
        }
      }
      venue: {
        payload: Prisma.$venuePayload<ExtArgs>
        fields: Prisma.venueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.venueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$venuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.venueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$venuePayload>
          }
          findFirst: {
            args: Prisma.venueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$venuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.venueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$venuePayload>
          }
          findMany: {
            args: Prisma.venueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$venuePayload>[]
          }
          create: {
            args: Prisma.venueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$venuePayload>
          }
          createMany: {
            args: Prisma.venueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.venueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$venuePayload>
          }
          update: {
            args: Prisma.venueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$venuePayload>
          }
          deleteMany: {
            args: Prisma.venueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.venueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.venueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$venuePayload>
          }
          aggregate: {
            args: Prisma.VenueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVenue>
          }
          groupBy: {
            args: Prisma.venueGroupByArgs<ExtArgs>
            result: $Utils.Optional<VenueGroupByOutputType>[]
          }
          count: {
            args: Prisma.venueCountArgs<ExtArgs>
            result: $Utils.Optional<VenueCountAggregateOutputType> | number
          }
        }
      }
      actionitem: {
        payload: Prisma.$actionitemPayload<ExtArgs>
        fields: Prisma.actionitemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.actionitemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actionitemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.actionitemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actionitemPayload>
          }
          findFirst: {
            args: Prisma.actionitemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actionitemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.actionitemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actionitemPayload>
          }
          findMany: {
            args: Prisma.actionitemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actionitemPayload>[]
          }
          create: {
            args: Prisma.actionitemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actionitemPayload>
          }
          createMany: {
            args: Prisma.actionitemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.actionitemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actionitemPayload>
          }
          update: {
            args: Prisma.actionitemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actionitemPayload>
          }
          deleteMany: {
            args: Prisma.actionitemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.actionitemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.actionitemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actionitemPayload>
          }
          aggregate: {
            args: Prisma.ActionitemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActionitem>
          }
          groupBy: {
            args: Prisma.actionitemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActionitemGroupByOutputType>[]
          }
          count: {
            args: Prisma.actionitemCountArgs<ExtArgs>
            result: $Utils.Optional<ActionitemCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    department?: departmentOmit
    meetingmember?: meetingmemberOmit
    meetings?: meetingsOmit
    meetingtype?: meetingtypeOmit
    staff?: staffOmit
    venue?: venueOmit
    actionitem?: actionitemOmit
    user?: userOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DepartmentCountOutputType
   */

  export type DepartmentCountOutputType = {
    staff: number
  }

  export type DepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | DepartmentCountOutputTypeCountStaffArgs
  }

  // Custom InputTypes
  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     */
    select?: DepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountStaffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: staffWhereInput
  }


  /**
   * Count Type MeetingsCountOutputType
   */

  export type MeetingsCountOutputType = {
    meetingmember: number
    actionitem: number
  }

  export type MeetingsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meetingmember?: boolean | MeetingsCountOutputTypeCountMeetingmemberArgs
    actionitem?: boolean | MeetingsCountOutputTypeCountActionitemArgs
  }

  // Custom InputTypes
  /**
   * MeetingsCountOutputType without action
   */
  export type MeetingsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingsCountOutputType
     */
    select?: MeetingsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MeetingsCountOutputType without action
   */
  export type MeetingsCountOutputTypeCountMeetingmemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: meetingmemberWhereInput
  }

  /**
   * MeetingsCountOutputType without action
   */
  export type MeetingsCountOutputTypeCountActionitemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: actionitemWhereInput
  }


  /**
   * Count Type MeetingtypeCountOutputType
   */

  export type MeetingtypeCountOutputType = {
    meetings: number
  }

  export type MeetingtypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meetings?: boolean | MeetingtypeCountOutputTypeCountMeetingsArgs
  }

  // Custom InputTypes
  /**
   * MeetingtypeCountOutputType without action
   */
  export type MeetingtypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingtypeCountOutputType
     */
    select?: MeetingtypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MeetingtypeCountOutputType without action
   */
  export type MeetingtypeCountOutputTypeCountMeetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: meetingsWhereInput
  }


  /**
   * Count Type StaffCountOutputType
   */

  export type StaffCountOutputType = {
    meetingmember: number
    actionitem: number
  }

  export type StaffCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meetingmember?: boolean | StaffCountOutputTypeCountMeetingmemberArgs
    actionitem?: boolean | StaffCountOutputTypeCountActionitemArgs
  }

  // Custom InputTypes
  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffCountOutputType
     */
    select?: StaffCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountMeetingmemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: meetingmemberWhereInput
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountActionitemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: actionitemWhereInput
  }


  /**
   * Count Type VenueCountOutputType
   */

  export type VenueCountOutputType = {
    meetings: number
  }

  export type VenueCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meetings?: boolean | VenueCountOutputTypeCountMeetingsArgs
  }

  // Custom InputTypes
  /**
   * VenueCountOutputType without action
   */
  export type VenueCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueCountOutputType
     */
    select?: VenueCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VenueCountOutputType without action
   */
  export type VenueCountOutputTypeCountMeetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: meetingsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _avg: DepartmentAvgAggregateOutputType | null
    _sum: DepartmentSumAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentAvgAggregateOutputType = {
    DepartmentID: number | null
  }

  export type DepartmentSumAggregateOutputType = {
    DepartmentID: number | null
  }

  export type DepartmentMinAggregateOutputType = {
    DepartmentID: number | null
    DepartmentName: string | null
    DepartmentCode: string | null
    Created: Date | null
    Modified: Date | null
  }

  export type DepartmentMaxAggregateOutputType = {
    DepartmentID: number | null
    DepartmentName: string | null
    DepartmentCode: string | null
    Created: Date | null
    Modified: Date | null
  }

  export type DepartmentCountAggregateOutputType = {
    DepartmentID: number
    DepartmentName: number
    DepartmentCode: number
    Created: number
    Modified: number
    _all: number
  }


  export type DepartmentAvgAggregateInputType = {
    DepartmentID?: true
  }

  export type DepartmentSumAggregateInputType = {
    DepartmentID?: true
  }

  export type DepartmentMinAggregateInputType = {
    DepartmentID?: true
    DepartmentName?: true
    DepartmentCode?: true
    Created?: true
    Modified?: true
  }

  export type DepartmentMaxAggregateInputType = {
    DepartmentID?: true
    DepartmentName?: true
    DepartmentCode?: true
    Created?: true
    Modified?: true
  }

  export type DepartmentCountAggregateInputType = {
    DepartmentID?: true
    DepartmentName?: true
    DepartmentCode?: true
    Created?: true
    Modified?: true
    _all?: true
  }

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which department to aggregate.
     */
    where?: departmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentOrderByWithRelationInput | departmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: departmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepartmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepartmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type departmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: departmentWhereInput
    orderBy?: departmentOrderByWithAggregationInput | departmentOrderByWithAggregationInput[]
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum
    having?: departmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _avg?: DepartmentAvgAggregateInputType
    _sum?: DepartmentSumAggregateInputType
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }

  export type DepartmentGroupByOutputType = {
    DepartmentID: number
    DepartmentName: string
    DepartmentCode: string | null
    Created: Date | null
    Modified: Date | null
    _count: DepartmentCountAggregateOutputType | null
    _avg: DepartmentAvgAggregateOutputType | null
    _sum: DepartmentSumAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends departmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type departmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    DepartmentID?: boolean
    DepartmentName?: boolean
    DepartmentCode?: boolean
    Created?: boolean
    Modified?: boolean
    staff?: boolean | department$staffArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>



  export type departmentSelectScalar = {
    DepartmentID?: boolean
    DepartmentName?: boolean
    DepartmentCode?: boolean
    Created?: boolean
    Modified?: boolean
  }

  export type departmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"DepartmentID" | "DepartmentName" | "DepartmentCode" | "Created" | "Modified", ExtArgs["result"]["department"]>
  export type departmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | department$staffArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $departmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "department"
    objects: {
      staff: Prisma.$staffPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      DepartmentID: number
      DepartmentName: string
      DepartmentCode: string | null
      Created: Date | null
      Modified: Date | null
    }, ExtArgs["result"]["department"]>
    composites: {}
  }

  type departmentGetPayload<S extends boolean | null | undefined | departmentDefaultArgs> = $Result.GetResult<Prisma.$departmentPayload, S>

  type departmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<departmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentCountAggregateInputType | true
    }

  export interface departmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['department'], meta: { name: 'department' } }
    /**
     * Find zero or one Department that matches the filter.
     * @param {departmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends departmentFindUniqueArgs>(args: SelectSubset<T, departmentFindUniqueArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Department that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {departmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends departmentFindUniqueOrThrowArgs>(args: SelectSubset<T, departmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends departmentFindFirstArgs>(args?: SelectSubset<T, departmentFindFirstArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends departmentFindFirstOrThrowArgs>(args?: SelectSubset<T, departmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `DepartmentID`
     * const departmentWithDepartmentIDOnly = await prisma.department.findMany({ select: { DepartmentID: true } })
     * 
     */
    findMany<T extends departmentFindManyArgs>(args?: SelectSubset<T, departmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Department.
     * @param {departmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
     */
    create<T extends departmentCreateArgs>(args: SelectSubset<T, departmentCreateArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departments.
     * @param {departmentCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends departmentCreateManyArgs>(args?: SelectSubset<T, departmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Department.
     * @param {departmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
     */
    delete<T extends departmentDeleteArgs>(args: SelectSubset<T, departmentDeleteArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Department.
     * @param {departmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends departmentUpdateArgs>(args: SelectSubset<T, departmentUpdateArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departments.
     * @param {departmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends departmentDeleteManyArgs>(args?: SelectSubset<T, departmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends departmentUpdateManyArgs>(args: SelectSubset<T, departmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Department.
     * @param {departmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     */
    upsert<T extends departmentUpsertArgs>(args: SelectSubset<T, departmentUpsertArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends departmentCountArgs>(
      args?: Subset<T, departmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends departmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: departmentGroupByArgs['orderBy'] }
        : { orderBy?: departmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, departmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the department model
   */
  readonly fields: departmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__departmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    staff<T extends department$staffArgs<ExtArgs> = {}>(args?: Subset<T, department$staffArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the department model
   */
  interface departmentFieldRefs {
    readonly DepartmentID: FieldRef<"department", 'Int'>
    readonly DepartmentName: FieldRef<"department", 'String'>
    readonly DepartmentCode: FieldRef<"department", 'String'>
    readonly Created: FieldRef<"department", 'DateTime'>
    readonly Modified: FieldRef<"department", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * department findUnique
   */
  export type departmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * Filter, which department to fetch.
     */
    where: departmentWhereUniqueInput
  }

  /**
   * department findUniqueOrThrow
   */
  export type departmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * Filter, which department to fetch.
     */
    where: departmentWhereUniqueInput
  }

  /**
   * department findFirst
   */
  export type departmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * Filter, which department to fetch.
     */
    where?: departmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentOrderByWithRelationInput | departmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for departments.
     */
    cursor?: departmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * department findFirstOrThrow
   */
  export type departmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * Filter, which department to fetch.
     */
    where?: departmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentOrderByWithRelationInput | departmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for departments.
     */
    cursor?: departmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * department findMany
   */
  export type departmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * Filter, which departments to fetch.
     */
    where?: departmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentOrderByWithRelationInput | departmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing departments.
     */
    cursor?: departmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * department create
   */
  export type departmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * The data needed to create a department.
     */
    data: XOR<departmentCreateInput, departmentUncheckedCreateInput>
  }

  /**
   * department createMany
   */
  export type departmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many departments.
     */
    data: departmentCreateManyInput | departmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * department update
   */
  export type departmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * The data needed to update a department.
     */
    data: XOR<departmentUpdateInput, departmentUncheckedUpdateInput>
    /**
     * Choose, which department to update.
     */
    where: departmentWhereUniqueInput
  }

  /**
   * department updateMany
   */
  export type departmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update departments.
     */
    data: XOR<departmentUpdateManyMutationInput, departmentUncheckedUpdateManyInput>
    /**
     * Filter which departments to update
     */
    where?: departmentWhereInput
    /**
     * Limit how many departments to update.
     */
    limit?: number
  }

  /**
   * department upsert
   */
  export type departmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * The filter to search for the department to update in case it exists.
     */
    where: departmentWhereUniqueInput
    /**
     * In case the department found by the `where` argument doesn't exist, create a new department with this data.
     */
    create: XOR<departmentCreateInput, departmentUncheckedCreateInput>
    /**
     * In case the department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<departmentUpdateInput, departmentUncheckedUpdateInput>
  }

  /**
   * department delete
   */
  export type departmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * Filter which department to delete.
     */
    where: departmentWhereUniqueInput
  }

  /**
   * department deleteMany
   */
  export type departmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which departments to delete
     */
    where?: departmentWhereInput
    /**
     * Limit how many departments to delete.
     */
    limit?: number
  }

  /**
   * department.staff
   */
  export type department$staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    where?: staffWhereInput
    orderBy?: staffOrderByWithRelationInput | staffOrderByWithRelationInput[]
    cursor?: staffWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * department without action
   */
  export type departmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
  }


  /**
   * Model meetingmember
   */

  export type AggregateMeetingmember = {
    _count: MeetingmemberCountAggregateOutputType | null
    _avg: MeetingmemberAvgAggregateOutputType | null
    _sum: MeetingmemberSumAggregateOutputType | null
    _min: MeetingmemberMinAggregateOutputType | null
    _max: MeetingmemberMaxAggregateOutputType | null
  }

  export type MeetingmemberAvgAggregateOutputType = {
    MeetingMemberID: number | null
    MeetingID: number | null
    StaffID: number | null
  }

  export type MeetingmemberSumAggregateOutputType = {
    MeetingMemberID: number | null
    MeetingID: number | null
    StaffID: number | null
  }

  export type MeetingmemberMinAggregateOutputType = {
    MeetingMemberID: number | null
    MeetingID: number | null
    StaffID: number | null
    IsPresent: boolean | null
    Remarks: string | null
    Created: Date | null
    Modified: Date | null
  }

  export type MeetingmemberMaxAggregateOutputType = {
    MeetingMemberID: number | null
    MeetingID: number | null
    StaffID: number | null
    IsPresent: boolean | null
    Remarks: string | null
    Created: Date | null
    Modified: Date | null
  }

  export type MeetingmemberCountAggregateOutputType = {
    MeetingMemberID: number
    MeetingID: number
    StaffID: number
    IsPresent: number
    Remarks: number
    Created: number
    Modified: number
    _all: number
  }


  export type MeetingmemberAvgAggregateInputType = {
    MeetingMemberID?: true
    MeetingID?: true
    StaffID?: true
  }

  export type MeetingmemberSumAggregateInputType = {
    MeetingMemberID?: true
    MeetingID?: true
    StaffID?: true
  }

  export type MeetingmemberMinAggregateInputType = {
    MeetingMemberID?: true
    MeetingID?: true
    StaffID?: true
    IsPresent?: true
    Remarks?: true
    Created?: true
    Modified?: true
  }

  export type MeetingmemberMaxAggregateInputType = {
    MeetingMemberID?: true
    MeetingID?: true
    StaffID?: true
    IsPresent?: true
    Remarks?: true
    Created?: true
    Modified?: true
  }

  export type MeetingmemberCountAggregateInputType = {
    MeetingMemberID?: true
    MeetingID?: true
    StaffID?: true
    IsPresent?: true
    Remarks?: true
    Created?: true
    Modified?: true
    _all?: true
  }

  export type MeetingmemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which meetingmember to aggregate.
     */
    where?: meetingmemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meetingmembers to fetch.
     */
    orderBy?: meetingmemberOrderByWithRelationInput | meetingmemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: meetingmemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meetingmembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meetingmembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned meetingmembers
    **/
    _count?: true | MeetingmemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MeetingmemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MeetingmemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeetingmemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeetingmemberMaxAggregateInputType
  }

  export type GetMeetingmemberAggregateType<T extends MeetingmemberAggregateArgs> = {
        [P in keyof T & keyof AggregateMeetingmember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeetingmember[P]>
      : GetScalarType<T[P], AggregateMeetingmember[P]>
  }




  export type meetingmemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: meetingmemberWhereInput
    orderBy?: meetingmemberOrderByWithAggregationInput | meetingmemberOrderByWithAggregationInput[]
    by: MeetingmemberScalarFieldEnum[] | MeetingmemberScalarFieldEnum
    having?: meetingmemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeetingmemberCountAggregateInputType | true
    _avg?: MeetingmemberAvgAggregateInputType
    _sum?: MeetingmemberSumAggregateInputType
    _min?: MeetingmemberMinAggregateInputType
    _max?: MeetingmemberMaxAggregateInputType
  }

  export type MeetingmemberGroupByOutputType = {
    MeetingMemberID: number
    MeetingID: number
    StaffID: number
    IsPresent: boolean | null
    Remarks: string | null
    Created: Date | null
    Modified: Date | null
    _count: MeetingmemberCountAggregateOutputType | null
    _avg: MeetingmemberAvgAggregateOutputType | null
    _sum: MeetingmemberSumAggregateOutputType | null
    _min: MeetingmemberMinAggregateOutputType | null
    _max: MeetingmemberMaxAggregateOutputType | null
  }

  type GetMeetingmemberGroupByPayload<T extends meetingmemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeetingmemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeetingmemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeetingmemberGroupByOutputType[P]>
            : GetScalarType<T[P], MeetingmemberGroupByOutputType[P]>
        }
      >
    >


  export type meetingmemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MeetingMemberID?: boolean
    MeetingID?: boolean
    StaffID?: boolean
    IsPresent?: boolean
    Remarks?: boolean
    Created?: boolean
    Modified?: boolean
    meetings?: boolean | meetingsDefaultArgs<ExtArgs>
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meetingmember"]>



  export type meetingmemberSelectScalar = {
    MeetingMemberID?: boolean
    MeetingID?: boolean
    StaffID?: boolean
    IsPresent?: boolean
    Remarks?: boolean
    Created?: boolean
    Modified?: boolean
  }

  export type meetingmemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"MeetingMemberID" | "MeetingID" | "StaffID" | "IsPresent" | "Remarks" | "Created" | "Modified", ExtArgs["result"]["meetingmember"]>
  export type meetingmemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meetings?: boolean | meetingsDefaultArgs<ExtArgs>
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }

  export type $meetingmemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "meetingmember"
    objects: {
      meetings: Prisma.$meetingsPayload<ExtArgs>
      staff: Prisma.$staffPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      MeetingMemberID: number
      MeetingID: number
      StaffID: number
      IsPresent: boolean | null
      Remarks: string | null
      Created: Date | null
      Modified: Date | null
    }, ExtArgs["result"]["meetingmember"]>
    composites: {}
  }

  type meetingmemberGetPayload<S extends boolean | null | undefined | meetingmemberDefaultArgs> = $Result.GetResult<Prisma.$meetingmemberPayload, S>

  type meetingmemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<meetingmemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MeetingmemberCountAggregateInputType | true
    }

  export interface meetingmemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['meetingmember'], meta: { name: 'meetingmember' } }
    /**
     * Find zero or one Meetingmember that matches the filter.
     * @param {meetingmemberFindUniqueArgs} args - Arguments to find a Meetingmember
     * @example
     * // Get one Meetingmember
     * const meetingmember = await prisma.meetingmember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends meetingmemberFindUniqueArgs>(args: SelectSubset<T, meetingmemberFindUniqueArgs<ExtArgs>>): Prisma__meetingmemberClient<$Result.GetResult<Prisma.$meetingmemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meetingmember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {meetingmemberFindUniqueOrThrowArgs} args - Arguments to find a Meetingmember
     * @example
     * // Get one Meetingmember
     * const meetingmember = await prisma.meetingmember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends meetingmemberFindUniqueOrThrowArgs>(args: SelectSubset<T, meetingmemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__meetingmemberClient<$Result.GetResult<Prisma.$meetingmemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meetingmember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingmemberFindFirstArgs} args - Arguments to find a Meetingmember
     * @example
     * // Get one Meetingmember
     * const meetingmember = await prisma.meetingmember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends meetingmemberFindFirstArgs>(args?: SelectSubset<T, meetingmemberFindFirstArgs<ExtArgs>>): Prisma__meetingmemberClient<$Result.GetResult<Prisma.$meetingmemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meetingmember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingmemberFindFirstOrThrowArgs} args - Arguments to find a Meetingmember
     * @example
     * // Get one Meetingmember
     * const meetingmember = await prisma.meetingmember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends meetingmemberFindFirstOrThrowArgs>(args?: SelectSubset<T, meetingmemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__meetingmemberClient<$Result.GetResult<Prisma.$meetingmemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Meetingmembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingmemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meetingmembers
     * const meetingmembers = await prisma.meetingmember.findMany()
     * 
     * // Get first 10 Meetingmembers
     * const meetingmembers = await prisma.meetingmember.findMany({ take: 10 })
     * 
     * // Only select the `MeetingMemberID`
     * const meetingmemberWithMeetingMemberIDOnly = await prisma.meetingmember.findMany({ select: { MeetingMemberID: true } })
     * 
     */
    findMany<T extends meetingmemberFindManyArgs>(args?: SelectSubset<T, meetingmemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$meetingmemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meetingmember.
     * @param {meetingmemberCreateArgs} args - Arguments to create a Meetingmember.
     * @example
     * // Create one Meetingmember
     * const Meetingmember = await prisma.meetingmember.create({
     *   data: {
     *     // ... data to create a Meetingmember
     *   }
     * })
     * 
     */
    create<T extends meetingmemberCreateArgs>(args: SelectSubset<T, meetingmemberCreateArgs<ExtArgs>>): Prisma__meetingmemberClient<$Result.GetResult<Prisma.$meetingmemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Meetingmembers.
     * @param {meetingmemberCreateManyArgs} args - Arguments to create many Meetingmembers.
     * @example
     * // Create many Meetingmembers
     * const meetingmember = await prisma.meetingmember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends meetingmemberCreateManyArgs>(args?: SelectSubset<T, meetingmemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Meetingmember.
     * @param {meetingmemberDeleteArgs} args - Arguments to delete one Meetingmember.
     * @example
     * // Delete one Meetingmember
     * const Meetingmember = await prisma.meetingmember.delete({
     *   where: {
     *     // ... filter to delete one Meetingmember
     *   }
     * })
     * 
     */
    delete<T extends meetingmemberDeleteArgs>(args: SelectSubset<T, meetingmemberDeleteArgs<ExtArgs>>): Prisma__meetingmemberClient<$Result.GetResult<Prisma.$meetingmemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meetingmember.
     * @param {meetingmemberUpdateArgs} args - Arguments to update one Meetingmember.
     * @example
     * // Update one Meetingmember
     * const meetingmember = await prisma.meetingmember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends meetingmemberUpdateArgs>(args: SelectSubset<T, meetingmemberUpdateArgs<ExtArgs>>): Prisma__meetingmemberClient<$Result.GetResult<Prisma.$meetingmemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Meetingmembers.
     * @param {meetingmemberDeleteManyArgs} args - Arguments to filter Meetingmembers to delete.
     * @example
     * // Delete a few Meetingmembers
     * const { count } = await prisma.meetingmember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends meetingmemberDeleteManyArgs>(args?: SelectSubset<T, meetingmemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meetingmembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingmemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meetingmembers
     * const meetingmember = await prisma.meetingmember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends meetingmemberUpdateManyArgs>(args: SelectSubset<T, meetingmemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Meetingmember.
     * @param {meetingmemberUpsertArgs} args - Arguments to update or create a Meetingmember.
     * @example
     * // Update or create a Meetingmember
     * const meetingmember = await prisma.meetingmember.upsert({
     *   create: {
     *     // ... data to create a Meetingmember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meetingmember we want to update
     *   }
     * })
     */
    upsert<T extends meetingmemberUpsertArgs>(args: SelectSubset<T, meetingmemberUpsertArgs<ExtArgs>>): Prisma__meetingmemberClient<$Result.GetResult<Prisma.$meetingmemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Meetingmembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingmemberCountArgs} args - Arguments to filter Meetingmembers to count.
     * @example
     * // Count the number of Meetingmembers
     * const count = await prisma.meetingmember.count({
     *   where: {
     *     // ... the filter for the Meetingmembers we want to count
     *   }
     * })
    **/
    count<T extends meetingmemberCountArgs>(
      args?: Subset<T, meetingmemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeetingmemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meetingmember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingmemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MeetingmemberAggregateArgs>(args: Subset<T, MeetingmemberAggregateArgs>): Prisma.PrismaPromise<GetMeetingmemberAggregateType<T>>

    /**
     * Group by Meetingmember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingmemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends meetingmemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: meetingmemberGroupByArgs['orderBy'] }
        : { orderBy?: meetingmemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, meetingmemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeetingmemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the meetingmember model
   */
  readonly fields: meetingmemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for meetingmember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__meetingmemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meetings<T extends meetingsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, meetingsDefaultArgs<ExtArgs>>): Prisma__meetingsClient<$Result.GetResult<Prisma.$meetingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    staff<T extends staffDefaultArgs<ExtArgs> = {}>(args?: Subset<T, staffDefaultArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the meetingmember model
   */
  interface meetingmemberFieldRefs {
    readonly MeetingMemberID: FieldRef<"meetingmember", 'Int'>
    readonly MeetingID: FieldRef<"meetingmember", 'Int'>
    readonly StaffID: FieldRef<"meetingmember", 'Int'>
    readonly IsPresent: FieldRef<"meetingmember", 'Boolean'>
    readonly Remarks: FieldRef<"meetingmember", 'String'>
    readonly Created: FieldRef<"meetingmember", 'DateTime'>
    readonly Modified: FieldRef<"meetingmember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * meetingmember findUnique
   */
  export type meetingmemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetingmember
     */
    select?: meetingmemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetingmember
     */
    omit?: meetingmemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingmemberInclude<ExtArgs> | null
    /**
     * Filter, which meetingmember to fetch.
     */
    where: meetingmemberWhereUniqueInput
  }

  /**
   * meetingmember findUniqueOrThrow
   */
  export type meetingmemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetingmember
     */
    select?: meetingmemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetingmember
     */
    omit?: meetingmemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingmemberInclude<ExtArgs> | null
    /**
     * Filter, which meetingmember to fetch.
     */
    where: meetingmemberWhereUniqueInput
  }

  /**
   * meetingmember findFirst
   */
  export type meetingmemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetingmember
     */
    select?: meetingmemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetingmember
     */
    omit?: meetingmemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingmemberInclude<ExtArgs> | null
    /**
     * Filter, which meetingmember to fetch.
     */
    where?: meetingmemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meetingmembers to fetch.
     */
    orderBy?: meetingmemberOrderByWithRelationInput | meetingmemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for meetingmembers.
     */
    cursor?: meetingmemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meetingmembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meetingmembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of meetingmembers.
     */
    distinct?: MeetingmemberScalarFieldEnum | MeetingmemberScalarFieldEnum[]
  }

  /**
   * meetingmember findFirstOrThrow
   */
  export type meetingmemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetingmember
     */
    select?: meetingmemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetingmember
     */
    omit?: meetingmemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingmemberInclude<ExtArgs> | null
    /**
     * Filter, which meetingmember to fetch.
     */
    where?: meetingmemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meetingmembers to fetch.
     */
    orderBy?: meetingmemberOrderByWithRelationInput | meetingmemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for meetingmembers.
     */
    cursor?: meetingmemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meetingmembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meetingmembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of meetingmembers.
     */
    distinct?: MeetingmemberScalarFieldEnum | MeetingmemberScalarFieldEnum[]
  }

  /**
   * meetingmember findMany
   */
  export type meetingmemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetingmember
     */
    select?: meetingmemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetingmember
     */
    omit?: meetingmemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingmemberInclude<ExtArgs> | null
    /**
     * Filter, which meetingmembers to fetch.
     */
    where?: meetingmemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meetingmembers to fetch.
     */
    orderBy?: meetingmemberOrderByWithRelationInput | meetingmemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing meetingmembers.
     */
    cursor?: meetingmemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meetingmembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meetingmembers.
     */
    skip?: number
    distinct?: MeetingmemberScalarFieldEnum | MeetingmemberScalarFieldEnum[]
  }

  /**
   * meetingmember create
   */
  export type meetingmemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetingmember
     */
    select?: meetingmemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetingmember
     */
    omit?: meetingmemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingmemberInclude<ExtArgs> | null
    /**
     * The data needed to create a meetingmember.
     */
    data: XOR<meetingmemberCreateInput, meetingmemberUncheckedCreateInput>
  }

  /**
   * meetingmember createMany
   */
  export type meetingmemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many meetingmembers.
     */
    data: meetingmemberCreateManyInput | meetingmemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * meetingmember update
   */
  export type meetingmemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetingmember
     */
    select?: meetingmemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetingmember
     */
    omit?: meetingmemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingmemberInclude<ExtArgs> | null
    /**
     * The data needed to update a meetingmember.
     */
    data: XOR<meetingmemberUpdateInput, meetingmemberUncheckedUpdateInput>
    /**
     * Choose, which meetingmember to update.
     */
    where: meetingmemberWhereUniqueInput
  }

  /**
   * meetingmember updateMany
   */
  export type meetingmemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update meetingmembers.
     */
    data: XOR<meetingmemberUpdateManyMutationInput, meetingmemberUncheckedUpdateManyInput>
    /**
     * Filter which meetingmembers to update
     */
    where?: meetingmemberWhereInput
    /**
     * Limit how many meetingmembers to update.
     */
    limit?: number
  }

  /**
   * meetingmember upsert
   */
  export type meetingmemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetingmember
     */
    select?: meetingmemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetingmember
     */
    omit?: meetingmemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingmemberInclude<ExtArgs> | null
    /**
     * The filter to search for the meetingmember to update in case it exists.
     */
    where: meetingmemberWhereUniqueInput
    /**
     * In case the meetingmember found by the `where` argument doesn't exist, create a new meetingmember with this data.
     */
    create: XOR<meetingmemberCreateInput, meetingmemberUncheckedCreateInput>
    /**
     * In case the meetingmember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<meetingmemberUpdateInput, meetingmemberUncheckedUpdateInput>
  }

  /**
   * meetingmember delete
   */
  export type meetingmemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetingmember
     */
    select?: meetingmemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetingmember
     */
    omit?: meetingmemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingmemberInclude<ExtArgs> | null
    /**
     * Filter which meetingmember to delete.
     */
    where: meetingmemberWhereUniqueInput
  }

  /**
   * meetingmember deleteMany
   */
  export type meetingmemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which meetingmembers to delete
     */
    where?: meetingmemberWhereInput
    /**
     * Limit how many meetingmembers to delete.
     */
    limit?: number
  }

  /**
   * meetingmember without action
   */
  export type meetingmemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetingmember
     */
    select?: meetingmemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetingmember
     */
    omit?: meetingmemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingmemberInclude<ExtArgs> | null
  }


  /**
   * Model meetings
   */

  export type AggregateMeetings = {
    _count: MeetingsCountAggregateOutputType | null
    _avg: MeetingsAvgAggregateOutputType | null
    _sum: MeetingsSumAggregateOutputType | null
    _min: MeetingsMinAggregateOutputType | null
    _max: MeetingsMaxAggregateOutputType | null
  }

  export type MeetingsAvgAggregateOutputType = {
    MeetingID: number | null
    MeetingTypeID: number | null
    VenueID: number | null
  }

  export type MeetingsSumAggregateOutputType = {
    MeetingID: number | null
    MeetingTypeID: number | null
    VenueID: number | null
  }

  export type MeetingsMinAggregateOutputType = {
    MeetingID: number | null
    MeetingDate: Date | null
    MeetingTypeID: number | null
    VenueID: number | null
    MeetingDescription: string | null
    DocumentPath: string | null
    Created: Date | null
    Modified: Date | null
    IsCancelled: boolean | null
    CancellationDateTime: Date | null
    CancellationReason: string | null
  }

  export type MeetingsMaxAggregateOutputType = {
    MeetingID: number | null
    MeetingDate: Date | null
    MeetingTypeID: number | null
    VenueID: number | null
    MeetingDescription: string | null
    DocumentPath: string | null
    Created: Date | null
    Modified: Date | null
    IsCancelled: boolean | null
    CancellationDateTime: Date | null
    CancellationReason: string | null
  }

  export type MeetingsCountAggregateOutputType = {
    MeetingID: number
    MeetingDate: number
    MeetingTypeID: number
    VenueID: number
    MeetingDescription: number
    DocumentPath: number
    Created: number
    Modified: number
    IsCancelled: number
    CancellationDateTime: number
    CancellationReason: number
    _all: number
  }


  export type MeetingsAvgAggregateInputType = {
    MeetingID?: true
    MeetingTypeID?: true
    VenueID?: true
  }

  export type MeetingsSumAggregateInputType = {
    MeetingID?: true
    MeetingTypeID?: true
    VenueID?: true
  }

  export type MeetingsMinAggregateInputType = {
    MeetingID?: true
    MeetingDate?: true
    MeetingTypeID?: true
    VenueID?: true
    MeetingDescription?: true
    DocumentPath?: true
    Created?: true
    Modified?: true
    IsCancelled?: true
    CancellationDateTime?: true
    CancellationReason?: true
  }

  export type MeetingsMaxAggregateInputType = {
    MeetingID?: true
    MeetingDate?: true
    MeetingTypeID?: true
    VenueID?: true
    MeetingDescription?: true
    DocumentPath?: true
    Created?: true
    Modified?: true
    IsCancelled?: true
    CancellationDateTime?: true
    CancellationReason?: true
  }

  export type MeetingsCountAggregateInputType = {
    MeetingID?: true
    MeetingDate?: true
    MeetingTypeID?: true
    VenueID?: true
    MeetingDescription?: true
    DocumentPath?: true
    Created?: true
    Modified?: true
    IsCancelled?: true
    CancellationDateTime?: true
    CancellationReason?: true
    _all?: true
  }

  export type MeetingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which meetings to aggregate.
     */
    where?: meetingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meetings to fetch.
     */
    orderBy?: meetingsOrderByWithRelationInput | meetingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: meetingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned meetings
    **/
    _count?: true | MeetingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MeetingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MeetingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeetingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeetingsMaxAggregateInputType
  }

  export type GetMeetingsAggregateType<T extends MeetingsAggregateArgs> = {
        [P in keyof T & keyof AggregateMeetings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeetings[P]>
      : GetScalarType<T[P], AggregateMeetings[P]>
  }




  export type meetingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: meetingsWhereInput
    orderBy?: meetingsOrderByWithAggregationInput | meetingsOrderByWithAggregationInput[]
    by: MeetingsScalarFieldEnum[] | MeetingsScalarFieldEnum
    having?: meetingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeetingsCountAggregateInputType | true
    _avg?: MeetingsAvgAggregateInputType
    _sum?: MeetingsSumAggregateInputType
    _min?: MeetingsMinAggregateInputType
    _max?: MeetingsMaxAggregateInputType
  }

  export type MeetingsGroupByOutputType = {
    MeetingID: number
    MeetingDate: Date
    MeetingTypeID: number
    VenueID: number | null
    MeetingDescription: string | null
    DocumentPath: string | null
    Created: Date | null
    Modified: Date | null
    IsCancelled: boolean | null
    CancellationDateTime: Date | null
    CancellationReason: string | null
    _count: MeetingsCountAggregateOutputType | null
    _avg: MeetingsAvgAggregateOutputType | null
    _sum: MeetingsSumAggregateOutputType | null
    _min: MeetingsMinAggregateOutputType | null
    _max: MeetingsMaxAggregateOutputType | null
  }

  type GetMeetingsGroupByPayload<T extends meetingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeetingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeetingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeetingsGroupByOutputType[P]>
            : GetScalarType<T[P], MeetingsGroupByOutputType[P]>
        }
      >
    >


  export type meetingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MeetingID?: boolean
    MeetingDate?: boolean
    MeetingTypeID?: boolean
    VenueID?: boolean
    MeetingDescription?: boolean
    DocumentPath?: boolean
    Created?: boolean
    Modified?: boolean
    IsCancelled?: boolean
    CancellationDateTime?: boolean
    CancellationReason?: boolean
    meetingmember?: boolean | meetings$meetingmemberArgs<ExtArgs>
    actionitem?: boolean | meetings$actionitemArgs<ExtArgs>
    meetingtype?: boolean | meetingtypeDefaultArgs<ExtArgs>
    venue?: boolean | meetings$venueArgs<ExtArgs>
    _count?: boolean | MeetingsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meetings"]>



  export type meetingsSelectScalar = {
    MeetingID?: boolean
    MeetingDate?: boolean
    MeetingTypeID?: boolean
    VenueID?: boolean
    MeetingDescription?: boolean
    DocumentPath?: boolean
    Created?: boolean
    Modified?: boolean
    IsCancelled?: boolean
    CancellationDateTime?: boolean
    CancellationReason?: boolean
  }

  export type meetingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"MeetingID" | "MeetingDate" | "MeetingTypeID" | "VenueID" | "MeetingDescription" | "DocumentPath" | "Created" | "Modified" | "IsCancelled" | "CancellationDateTime" | "CancellationReason", ExtArgs["result"]["meetings"]>
  export type meetingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meetingmember?: boolean | meetings$meetingmemberArgs<ExtArgs>
    actionitem?: boolean | meetings$actionitemArgs<ExtArgs>
    meetingtype?: boolean | meetingtypeDefaultArgs<ExtArgs>
    venue?: boolean | meetings$venueArgs<ExtArgs>
    _count?: boolean | MeetingsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $meetingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "meetings"
    objects: {
      meetingmember: Prisma.$meetingmemberPayload<ExtArgs>[]
      actionitem: Prisma.$actionitemPayload<ExtArgs>[]
      meetingtype: Prisma.$meetingtypePayload<ExtArgs>
      venue: Prisma.$venuePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      MeetingID: number
      MeetingDate: Date
      MeetingTypeID: number
      VenueID: number | null
      MeetingDescription: string | null
      DocumentPath: string | null
      Created: Date | null
      Modified: Date | null
      IsCancelled: boolean | null
      CancellationDateTime: Date | null
      CancellationReason: string | null
    }, ExtArgs["result"]["meetings"]>
    composites: {}
  }

  type meetingsGetPayload<S extends boolean | null | undefined | meetingsDefaultArgs> = $Result.GetResult<Prisma.$meetingsPayload, S>

  type meetingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<meetingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MeetingsCountAggregateInputType | true
    }

  export interface meetingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['meetings'], meta: { name: 'meetings' } }
    /**
     * Find zero or one Meetings that matches the filter.
     * @param {meetingsFindUniqueArgs} args - Arguments to find a Meetings
     * @example
     * // Get one Meetings
     * const meetings = await prisma.meetings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends meetingsFindUniqueArgs>(args: SelectSubset<T, meetingsFindUniqueArgs<ExtArgs>>): Prisma__meetingsClient<$Result.GetResult<Prisma.$meetingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meetings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {meetingsFindUniqueOrThrowArgs} args - Arguments to find a Meetings
     * @example
     * // Get one Meetings
     * const meetings = await prisma.meetings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends meetingsFindUniqueOrThrowArgs>(args: SelectSubset<T, meetingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__meetingsClient<$Result.GetResult<Prisma.$meetingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meetings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingsFindFirstArgs} args - Arguments to find a Meetings
     * @example
     * // Get one Meetings
     * const meetings = await prisma.meetings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends meetingsFindFirstArgs>(args?: SelectSubset<T, meetingsFindFirstArgs<ExtArgs>>): Prisma__meetingsClient<$Result.GetResult<Prisma.$meetingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meetings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingsFindFirstOrThrowArgs} args - Arguments to find a Meetings
     * @example
     * // Get one Meetings
     * const meetings = await prisma.meetings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends meetingsFindFirstOrThrowArgs>(args?: SelectSubset<T, meetingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__meetingsClient<$Result.GetResult<Prisma.$meetingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Meetings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meetings
     * const meetings = await prisma.meetings.findMany()
     * 
     * // Get first 10 Meetings
     * const meetings = await prisma.meetings.findMany({ take: 10 })
     * 
     * // Only select the `MeetingID`
     * const meetingsWithMeetingIDOnly = await prisma.meetings.findMany({ select: { MeetingID: true } })
     * 
     */
    findMany<T extends meetingsFindManyArgs>(args?: SelectSubset<T, meetingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$meetingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meetings.
     * @param {meetingsCreateArgs} args - Arguments to create a Meetings.
     * @example
     * // Create one Meetings
     * const Meetings = await prisma.meetings.create({
     *   data: {
     *     // ... data to create a Meetings
     *   }
     * })
     * 
     */
    create<T extends meetingsCreateArgs>(args: SelectSubset<T, meetingsCreateArgs<ExtArgs>>): Prisma__meetingsClient<$Result.GetResult<Prisma.$meetingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Meetings.
     * @param {meetingsCreateManyArgs} args - Arguments to create many Meetings.
     * @example
     * // Create many Meetings
     * const meetings = await prisma.meetings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends meetingsCreateManyArgs>(args?: SelectSubset<T, meetingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Meetings.
     * @param {meetingsDeleteArgs} args - Arguments to delete one Meetings.
     * @example
     * // Delete one Meetings
     * const Meetings = await prisma.meetings.delete({
     *   where: {
     *     // ... filter to delete one Meetings
     *   }
     * })
     * 
     */
    delete<T extends meetingsDeleteArgs>(args: SelectSubset<T, meetingsDeleteArgs<ExtArgs>>): Prisma__meetingsClient<$Result.GetResult<Prisma.$meetingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meetings.
     * @param {meetingsUpdateArgs} args - Arguments to update one Meetings.
     * @example
     * // Update one Meetings
     * const meetings = await prisma.meetings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends meetingsUpdateArgs>(args: SelectSubset<T, meetingsUpdateArgs<ExtArgs>>): Prisma__meetingsClient<$Result.GetResult<Prisma.$meetingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Meetings.
     * @param {meetingsDeleteManyArgs} args - Arguments to filter Meetings to delete.
     * @example
     * // Delete a few Meetings
     * const { count } = await prisma.meetings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends meetingsDeleteManyArgs>(args?: SelectSubset<T, meetingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meetings
     * const meetings = await prisma.meetings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends meetingsUpdateManyArgs>(args: SelectSubset<T, meetingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Meetings.
     * @param {meetingsUpsertArgs} args - Arguments to update or create a Meetings.
     * @example
     * // Update or create a Meetings
     * const meetings = await prisma.meetings.upsert({
     *   create: {
     *     // ... data to create a Meetings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meetings we want to update
     *   }
     * })
     */
    upsert<T extends meetingsUpsertArgs>(args: SelectSubset<T, meetingsUpsertArgs<ExtArgs>>): Prisma__meetingsClient<$Result.GetResult<Prisma.$meetingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Meetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingsCountArgs} args - Arguments to filter Meetings to count.
     * @example
     * // Count the number of Meetings
     * const count = await prisma.meetings.count({
     *   where: {
     *     // ... the filter for the Meetings we want to count
     *   }
     * })
    **/
    count<T extends meetingsCountArgs>(
      args?: Subset<T, meetingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeetingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MeetingsAggregateArgs>(args: Subset<T, MeetingsAggregateArgs>): Prisma.PrismaPromise<GetMeetingsAggregateType<T>>

    /**
     * Group by Meetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends meetingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: meetingsGroupByArgs['orderBy'] }
        : { orderBy?: meetingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, meetingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeetingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the meetings model
   */
  readonly fields: meetingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for meetings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__meetingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meetingmember<T extends meetings$meetingmemberArgs<ExtArgs> = {}>(args?: Subset<T, meetings$meetingmemberArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$meetingmemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    actionitem<T extends meetings$actionitemArgs<ExtArgs> = {}>(args?: Subset<T, meetings$actionitemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$actionitemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    meetingtype<T extends meetingtypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, meetingtypeDefaultArgs<ExtArgs>>): Prisma__meetingtypeClient<$Result.GetResult<Prisma.$meetingtypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    venue<T extends meetings$venueArgs<ExtArgs> = {}>(args?: Subset<T, meetings$venueArgs<ExtArgs>>): Prisma__venueClient<$Result.GetResult<Prisma.$venuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the meetings model
   */
  interface meetingsFieldRefs {
    readonly MeetingID: FieldRef<"meetings", 'Int'>
    readonly MeetingDate: FieldRef<"meetings", 'DateTime'>
    readonly MeetingTypeID: FieldRef<"meetings", 'Int'>
    readonly VenueID: FieldRef<"meetings", 'Int'>
    readonly MeetingDescription: FieldRef<"meetings", 'String'>
    readonly DocumentPath: FieldRef<"meetings", 'String'>
    readonly Created: FieldRef<"meetings", 'DateTime'>
    readonly Modified: FieldRef<"meetings", 'DateTime'>
    readonly IsCancelled: FieldRef<"meetings", 'Boolean'>
    readonly CancellationDateTime: FieldRef<"meetings", 'DateTime'>
    readonly CancellationReason: FieldRef<"meetings", 'String'>
  }
    

  // Custom InputTypes
  /**
   * meetings findUnique
   */
  export type meetingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetings
     */
    select?: meetingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetings
     */
    omit?: meetingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingsInclude<ExtArgs> | null
    /**
     * Filter, which meetings to fetch.
     */
    where: meetingsWhereUniqueInput
  }

  /**
   * meetings findUniqueOrThrow
   */
  export type meetingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetings
     */
    select?: meetingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetings
     */
    omit?: meetingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingsInclude<ExtArgs> | null
    /**
     * Filter, which meetings to fetch.
     */
    where: meetingsWhereUniqueInput
  }

  /**
   * meetings findFirst
   */
  export type meetingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetings
     */
    select?: meetingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetings
     */
    omit?: meetingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingsInclude<ExtArgs> | null
    /**
     * Filter, which meetings to fetch.
     */
    where?: meetingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meetings to fetch.
     */
    orderBy?: meetingsOrderByWithRelationInput | meetingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for meetings.
     */
    cursor?: meetingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of meetings.
     */
    distinct?: MeetingsScalarFieldEnum | MeetingsScalarFieldEnum[]
  }

  /**
   * meetings findFirstOrThrow
   */
  export type meetingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetings
     */
    select?: meetingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetings
     */
    omit?: meetingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingsInclude<ExtArgs> | null
    /**
     * Filter, which meetings to fetch.
     */
    where?: meetingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meetings to fetch.
     */
    orderBy?: meetingsOrderByWithRelationInput | meetingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for meetings.
     */
    cursor?: meetingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of meetings.
     */
    distinct?: MeetingsScalarFieldEnum | MeetingsScalarFieldEnum[]
  }

  /**
   * meetings findMany
   */
  export type meetingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetings
     */
    select?: meetingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetings
     */
    omit?: meetingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingsInclude<ExtArgs> | null
    /**
     * Filter, which meetings to fetch.
     */
    where?: meetingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meetings to fetch.
     */
    orderBy?: meetingsOrderByWithRelationInput | meetingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing meetings.
     */
    cursor?: meetingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meetings.
     */
    skip?: number
    distinct?: MeetingsScalarFieldEnum | MeetingsScalarFieldEnum[]
  }

  /**
   * meetings create
   */
  export type meetingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetings
     */
    select?: meetingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetings
     */
    omit?: meetingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingsInclude<ExtArgs> | null
    /**
     * The data needed to create a meetings.
     */
    data: XOR<meetingsCreateInput, meetingsUncheckedCreateInput>
  }

  /**
   * meetings createMany
   */
  export type meetingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many meetings.
     */
    data: meetingsCreateManyInput | meetingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * meetings update
   */
  export type meetingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetings
     */
    select?: meetingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetings
     */
    omit?: meetingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingsInclude<ExtArgs> | null
    /**
     * The data needed to update a meetings.
     */
    data: XOR<meetingsUpdateInput, meetingsUncheckedUpdateInput>
    /**
     * Choose, which meetings to update.
     */
    where: meetingsWhereUniqueInput
  }

  /**
   * meetings updateMany
   */
  export type meetingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update meetings.
     */
    data: XOR<meetingsUpdateManyMutationInput, meetingsUncheckedUpdateManyInput>
    /**
     * Filter which meetings to update
     */
    where?: meetingsWhereInput
    /**
     * Limit how many meetings to update.
     */
    limit?: number
  }

  /**
   * meetings upsert
   */
  export type meetingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetings
     */
    select?: meetingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetings
     */
    omit?: meetingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingsInclude<ExtArgs> | null
    /**
     * The filter to search for the meetings to update in case it exists.
     */
    where: meetingsWhereUniqueInput
    /**
     * In case the meetings found by the `where` argument doesn't exist, create a new meetings with this data.
     */
    create: XOR<meetingsCreateInput, meetingsUncheckedCreateInput>
    /**
     * In case the meetings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<meetingsUpdateInput, meetingsUncheckedUpdateInput>
  }

  /**
   * meetings delete
   */
  export type meetingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetings
     */
    select?: meetingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetings
     */
    omit?: meetingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingsInclude<ExtArgs> | null
    /**
     * Filter which meetings to delete.
     */
    where: meetingsWhereUniqueInput
  }

  /**
   * meetings deleteMany
   */
  export type meetingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which meetings to delete
     */
    where?: meetingsWhereInput
    /**
     * Limit how many meetings to delete.
     */
    limit?: number
  }

  /**
   * meetings.meetingmember
   */
  export type meetings$meetingmemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetingmember
     */
    select?: meetingmemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetingmember
     */
    omit?: meetingmemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingmemberInclude<ExtArgs> | null
    where?: meetingmemberWhereInput
    orderBy?: meetingmemberOrderByWithRelationInput | meetingmemberOrderByWithRelationInput[]
    cursor?: meetingmemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeetingmemberScalarFieldEnum | MeetingmemberScalarFieldEnum[]
  }

  /**
   * meetings.actionitem
   */
  export type meetings$actionitemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actionitem
     */
    select?: actionitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actionitem
     */
    omit?: actionitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actionitemInclude<ExtArgs> | null
    where?: actionitemWhereInput
    orderBy?: actionitemOrderByWithRelationInput | actionitemOrderByWithRelationInput[]
    cursor?: actionitemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActionitemScalarFieldEnum | ActionitemScalarFieldEnum[]
  }

  /**
   * meetings.venue
   */
  export type meetings$venueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the venue
     */
    select?: venueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the venue
     */
    omit?: venueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: venueInclude<ExtArgs> | null
    where?: venueWhereInput
  }

  /**
   * meetings without action
   */
  export type meetingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetings
     */
    select?: meetingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetings
     */
    omit?: meetingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingsInclude<ExtArgs> | null
  }


  /**
   * Model meetingtype
   */

  export type AggregateMeetingtype = {
    _count: MeetingtypeCountAggregateOutputType | null
    _avg: MeetingtypeAvgAggregateOutputType | null
    _sum: MeetingtypeSumAggregateOutputType | null
    _min: MeetingtypeMinAggregateOutputType | null
    _max: MeetingtypeMaxAggregateOutputType | null
  }

  export type MeetingtypeAvgAggregateOutputType = {
    MeetingTypeID: number | null
  }

  export type MeetingtypeSumAggregateOutputType = {
    MeetingTypeID: number | null
  }

  export type MeetingtypeMinAggregateOutputType = {
    MeetingTypeID: number | null
    MeetingTypeName: string | null
    Remarks: string | null
    Created: Date | null
    Modified: Date | null
  }

  export type MeetingtypeMaxAggregateOutputType = {
    MeetingTypeID: number | null
    MeetingTypeName: string | null
    Remarks: string | null
    Created: Date | null
    Modified: Date | null
  }

  export type MeetingtypeCountAggregateOutputType = {
    MeetingTypeID: number
    MeetingTypeName: number
    Remarks: number
    Created: number
    Modified: number
    _all: number
  }


  export type MeetingtypeAvgAggregateInputType = {
    MeetingTypeID?: true
  }

  export type MeetingtypeSumAggregateInputType = {
    MeetingTypeID?: true
  }

  export type MeetingtypeMinAggregateInputType = {
    MeetingTypeID?: true
    MeetingTypeName?: true
    Remarks?: true
    Created?: true
    Modified?: true
  }

  export type MeetingtypeMaxAggregateInputType = {
    MeetingTypeID?: true
    MeetingTypeName?: true
    Remarks?: true
    Created?: true
    Modified?: true
  }

  export type MeetingtypeCountAggregateInputType = {
    MeetingTypeID?: true
    MeetingTypeName?: true
    Remarks?: true
    Created?: true
    Modified?: true
    _all?: true
  }

  export type MeetingtypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which meetingtype to aggregate.
     */
    where?: meetingtypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meetingtypes to fetch.
     */
    orderBy?: meetingtypeOrderByWithRelationInput | meetingtypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: meetingtypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meetingtypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meetingtypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned meetingtypes
    **/
    _count?: true | MeetingtypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MeetingtypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MeetingtypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeetingtypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeetingtypeMaxAggregateInputType
  }

  export type GetMeetingtypeAggregateType<T extends MeetingtypeAggregateArgs> = {
        [P in keyof T & keyof AggregateMeetingtype]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeetingtype[P]>
      : GetScalarType<T[P], AggregateMeetingtype[P]>
  }




  export type meetingtypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: meetingtypeWhereInput
    orderBy?: meetingtypeOrderByWithAggregationInput | meetingtypeOrderByWithAggregationInput[]
    by: MeetingtypeScalarFieldEnum[] | MeetingtypeScalarFieldEnum
    having?: meetingtypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeetingtypeCountAggregateInputType | true
    _avg?: MeetingtypeAvgAggregateInputType
    _sum?: MeetingtypeSumAggregateInputType
    _min?: MeetingtypeMinAggregateInputType
    _max?: MeetingtypeMaxAggregateInputType
  }

  export type MeetingtypeGroupByOutputType = {
    MeetingTypeID: number
    MeetingTypeName: string
    Remarks: string | null
    Created: Date | null
    Modified: Date | null
    _count: MeetingtypeCountAggregateOutputType | null
    _avg: MeetingtypeAvgAggregateOutputType | null
    _sum: MeetingtypeSumAggregateOutputType | null
    _min: MeetingtypeMinAggregateOutputType | null
    _max: MeetingtypeMaxAggregateOutputType | null
  }

  type GetMeetingtypeGroupByPayload<T extends meetingtypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeetingtypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeetingtypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeetingtypeGroupByOutputType[P]>
            : GetScalarType<T[P], MeetingtypeGroupByOutputType[P]>
        }
      >
    >


  export type meetingtypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MeetingTypeID?: boolean
    MeetingTypeName?: boolean
    Remarks?: boolean
    Created?: boolean
    Modified?: boolean
    meetings?: boolean | meetingtype$meetingsArgs<ExtArgs>
    _count?: boolean | MeetingtypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meetingtype"]>



  export type meetingtypeSelectScalar = {
    MeetingTypeID?: boolean
    MeetingTypeName?: boolean
    Remarks?: boolean
    Created?: boolean
    Modified?: boolean
  }

  export type meetingtypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"MeetingTypeID" | "MeetingTypeName" | "Remarks" | "Created" | "Modified", ExtArgs["result"]["meetingtype"]>
  export type meetingtypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meetings?: boolean | meetingtype$meetingsArgs<ExtArgs>
    _count?: boolean | MeetingtypeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $meetingtypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "meetingtype"
    objects: {
      meetings: Prisma.$meetingsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      MeetingTypeID: number
      MeetingTypeName: string
      Remarks: string | null
      Created: Date | null
      Modified: Date | null
    }, ExtArgs["result"]["meetingtype"]>
    composites: {}
  }

  type meetingtypeGetPayload<S extends boolean | null | undefined | meetingtypeDefaultArgs> = $Result.GetResult<Prisma.$meetingtypePayload, S>

  type meetingtypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<meetingtypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MeetingtypeCountAggregateInputType | true
    }

  export interface meetingtypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['meetingtype'], meta: { name: 'meetingtype' } }
    /**
     * Find zero or one Meetingtype that matches the filter.
     * @param {meetingtypeFindUniqueArgs} args - Arguments to find a Meetingtype
     * @example
     * // Get one Meetingtype
     * const meetingtype = await prisma.meetingtype.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends meetingtypeFindUniqueArgs>(args: SelectSubset<T, meetingtypeFindUniqueArgs<ExtArgs>>): Prisma__meetingtypeClient<$Result.GetResult<Prisma.$meetingtypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meetingtype that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {meetingtypeFindUniqueOrThrowArgs} args - Arguments to find a Meetingtype
     * @example
     * // Get one Meetingtype
     * const meetingtype = await prisma.meetingtype.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends meetingtypeFindUniqueOrThrowArgs>(args: SelectSubset<T, meetingtypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__meetingtypeClient<$Result.GetResult<Prisma.$meetingtypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meetingtype that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingtypeFindFirstArgs} args - Arguments to find a Meetingtype
     * @example
     * // Get one Meetingtype
     * const meetingtype = await prisma.meetingtype.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends meetingtypeFindFirstArgs>(args?: SelectSubset<T, meetingtypeFindFirstArgs<ExtArgs>>): Prisma__meetingtypeClient<$Result.GetResult<Prisma.$meetingtypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meetingtype that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingtypeFindFirstOrThrowArgs} args - Arguments to find a Meetingtype
     * @example
     * // Get one Meetingtype
     * const meetingtype = await prisma.meetingtype.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends meetingtypeFindFirstOrThrowArgs>(args?: SelectSubset<T, meetingtypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__meetingtypeClient<$Result.GetResult<Prisma.$meetingtypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Meetingtypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingtypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meetingtypes
     * const meetingtypes = await prisma.meetingtype.findMany()
     * 
     * // Get first 10 Meetingtypes
     * const meetingtypes = await prisma.meetingtype.findMany({ take: 10 })
     * 
     * // Only select the `MeetingTypeID`
     * const meetingtypeWithMeetingTypeIDOnly = await prisma.meetingtype.findMany({ select: { MeetingTypeID: true } })
     * 
     */
    findMany<T extends meetingtypeFindManyArgs>(args?: SelectSubset<T, meetingtypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$meetingtypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meetingtype.
     * @param {meetingtypeCreateArgs} args - Arguments to create a Meetingtype.
     * @example
     * // Create one Meetingtype
     * const Meetingtype = await prisma.meetingtype.create({
     *   data: {
     *     // ... data to create a Meetingtype
     *   }
     * })
     * 
     */
    create<T extends meetingtypeCreateArgs>(args: SelectSubset<T, meetingtypeCreateArgs<ExtArgs>>): Prisma__meetingtypeClient<$Result.GetResult<Prisma.$meetingtypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Meetingtypes.
     * @param {meetingtypeCreateManyArgs} args - Arguments to create many Meetingtypes.
     * @example
     * // Create many Meetingtypes
     * const meetingtype = await prisma.meetingtype.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends meetingtypeCreateManyArgs>(args?: SelectSubset<T, meetingtypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Meetingtype.
     * @param {meetingtypeDeleteArgs} args - Arguments to delete one Meetingtype.
     * @example
     * // Delete one Meetingtype
     * const Meetingtype = await prisma.meetingtype.delete({
     *   where: {
     *     // ... filter to delete one Meetingtype
     *   }
     * })
     * 
     */
    delete<T extends meetingtypeDeleteArgs>(args: SelectSubset<T, meetingtypeDeleteArgs<ExtArgs>>): Prisma__meetingtypeClient<$Result.GetResult<Prisma.$meetingtypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meetingtype.
     * @param {meetingtypeUpdateArgs} args - Arguments to update one Meetingtype.
     * @example
     * // Update one Meetingtype
     * const meetingtype = await prisma.meetingtype.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends meetingtypeUpdateArgs>(args: SelectSubset<T, meetingtypeUpdateArgs<ExtArgs>>): Prisma__meetingtypeClient<$Result.GetResult<Prisma.$meetingtypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Meetingtypes.
     * @param {meetingtypeDeleteManyArgs} args - Arguments to filter Meetingtypes to delete.
     * @example
     * // Delete a few Meetingtypes
     * const { count } = await prisma.meetingtype.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends meetingtypeDeleteManyArgs>(args?: SelectSubset<T, meetingtypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meetingtypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingtypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meetingtypes
     * const meetingtype = await prisma.meetingtype.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends meetingtypeUpdateManyArgs>(args: SelectSubset<T, meetingtypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Meetingtype.
     * @param {meetingtypeUpsertArgs} args - Arguments to update or create a Meetingtype.
     * @example
     * // Update or create a Meetingtype
     * const meetingtype = await prisma.meetingtype.upsert({
     *   create: {
     *     // ... data to create a Meetingtype
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meetingtype we want to update
     *   }
     * })
     */
    upsert<T extends meetingtypeUpsertArgs>(args: SelectSubset<T, meetingtypeUpsertArgs<ExtArgs>>): Prisma__meetingtypeClient<$Result.GetResult<Prisma.$meetingtypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Meetingtypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingtypeCountArgs} args - Arguments to filter Meetingtypes to count.
     * @example
     * // Count the number of Meetingtypes
     * const count = await prisma.meetingtype.count({
     *   where: {
     *     // ... the filter for the Meetingtypes we want to count
     *   }
     * })
    **/
    count<T extends meetingtypeCountArgs>(
      args?: Subset<T, meetingtypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeetingtypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meetingtype.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingtypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MeetingtypeAggregateArgs>(args: Subset<T, MeetingtypeAggregateArgs>): Prisma.PrismaPromise<GetMeetingtypeAggregateType<T>>

    /**
     * Group by Meetingtype.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingtypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends meetingtypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: meetingtypeGroupByArgs['orderBy'] }
        : { orderBy?: meetingtypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, meetingtypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeetingtypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the meetingtype model
   */
  readonly fields: meetingtypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for meetingtype.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__meetingtypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meetings<T extends meetingtype$meetingsArgs<ExtArgs> = {}>(args?: Subset<T, meetingtype$meetingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$meetingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the meetingtype model
   */
  interface meetingtypeFieldRefs {
    readonly MeetingTypeID: FieldRef<"meetingtype", 'Int'>
    readonly MeetingTypeName: FieldRef<"meetingtype", 'String'>
    readonly Remarks: FieldRef<"meetingtype", 'String'>
    readonly Created: FieldRef<"meetingtype", 'DateTime'>
    readonly Modified: FieldRef<"meetingtype", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * meetingtype findUnique
   */
  export type meetingtypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetingtype
     */
    select?: meetingtypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetingtype
     */
    omit?: meetingtypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingtypeInclude<ExtArgs> | null
    /**
     * Filter, which meetingtype to fetch.
     */
    where: meetingtypeWhereUniqueInput
  }

  /**
   * meetingtype findUniqueOrThrow
   */
  export type meetingtypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetingtype
     */
    select?: meetingtypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetingtype
     */
    omit?: meetingtypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingtypeInclude<ExtArgs> | null
    /**
     * Filter, which meetingtype to fetch.
     */
    where: meetingtypeWhereUniqueInput
  }

  /**
   * meetingtype findFirst
   */
  export type meetingtypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetingtype
     */
    select?: meetingtypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetingtype
     */
    omit?: meetingtypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingtypeInclude<ExtArgs> | null
    /**
     * Filter, which meetingtype to fetch.
     */
    where?: meetingtypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meetingtypes to fetch.
     */
    orderBy?: meetingtypeOrderByWithRelationInput | meetingtypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for meetingtypes.
     */
    cursor?: meetingtypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meetingtypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meetingtypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of meetingtypes.
     */
    distinct?: MeetingtypeScalarFieldEnum | MeetingtypeScalarFieldEnum[]
  }

  /**
   * meetingtype findFirstOrThrow
   */
  export type meetingtypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetingtype
     */
    select?: meetingtypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetingtype
     */
    omit?: meetingtypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingtypeInclude<ExtArgs> | null
    /**
     * Filter, which meetingtype to fetch.
     */
    where?: meetingtypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meetingtypes to fetch.
     */
    orderBy?: meetingtypeOrderByWithRelationInput | meetingtypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for meetingtypes.
     */
    cursor?: meetingtypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meetingtypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meetingtypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of meetingtypes.
     */
    distinct?: MeetingtypeScalarFieldEnum | MeetingtypeScalarFieldEnum[]
  }

  /**
   * meetingtype findMany
   */
  export type meetingtypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetingtype
     */
    select?: meetingtypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetingtype
     */
    omit?: meetingtypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingtypeInclude<ExtArgs> | null
    /**
     * Filter, which meetingtypes to fetch.
     */
    where?: meetingtypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meetingtypes to fetch.
     */
    orderBy?: meetingtypeOrderByWithRelationInput | meetingtypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing meetingtypes.
     */
    cursor?: meetingtypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meetingtypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meetingtypes.
     */
    skip?: number
    distinct?: MeetingtypeScalarFieldEnum | MeetingtypeScalarFieldEnum[]
  }

  /**
   * meetingtype create
   */
  export type meetingtypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetingtype
     */
    select?: meetingtypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetingtype
     */
    omit?: meetingtypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingtypeInclude<ExtArgs> | null
    /**
     * The data needed to create a meetingtype.
     */
    data: XOR<meetingtypeCreateInput, meetingtypeUncheckedCreateInput>
  }

  /**
   * meetingtype createMany
   */
  export type meetingtypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many meetingtypes.
     */
    data: meetingtypeCreateManyInput | meetingtypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * meetingtype update
   */
  export type meetingtypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetingtype
     */
    select?: meetingtypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetingtype
     */
    omit?: meetingtypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingtypeInclude<ExtArgs> | null
    /**
     * The data needed to update a meetingtype.
     */
    data: XOR<meetingtypeUpdateInput, meetingtypeUncheckedUpdateInput>
    /**
     * Choose, which meetingtype to update.
     */
    where: meetingtypeWhereUniqueInput
  }

  /**
   * meetingtype updateMany
   */
  export type meetingtypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update meetingtypes.
     */
    data: XOR<meetingtypeUpdateManyMutationInput, meetingtypeUncheckedUpdateManyInput>
    /**
     * Filter which meetingtypes to update
     */
    where?: meetingtypeWhereInput
    /**
     * Limit how many meetingtypes to update.
     */
    limit?: number
  }

  /**
   * meetingtype upsert
   */
  export type meetingtypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetingtype
     */
    select?: meetingtypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetingtype
     */
    omit?: meetingtypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingtypeInclude<ExtArgs> | null
    /**
     * The filter to search for the meetingtype to update in case it exists.
     */
    where: meetingtypeWhereUniqueInput
    /**
     * In case the meetingtype found by the `where` argument doesn't exist, create a new meetingtype with this data.
     */
    create: XOR<meetingtypeCreateInput, meetingtypeUncheckedCreateInput>
    /**
     * In case the meetingtype was found with the provided `where` argument, update it with this data.
     */
    update: XOR<meetingtypeUpdateInput, meetingtypeUncheckedUpdateInput>
  }

  /**
   * meetingtype delete
   */
  export type meetingtypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetingtype
     */
    select?: meetingtypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetingtype
     */
    omit?: meetingtypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingtypeInclude<ExtArgs> | null
    /**
     * Filter which meetingtype to delete.
     */
    where: meetingtypeWhereUniqueInput
  }

  /**
   * meetingtype deleteMany
   */
  export type meetingtypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which meetingtypes to delete
     */
    where?: meetingtypeWhereInput
    /**
     * Limit how many meetingtypes to delete.
     */
    limit?: number
  }

  /**
   * meetingtype.meetings
   */
  export type meetingtype$meetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetings
     */
    select?: meetingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetings
     */
    omit?: meetingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingsInclude<ExtArgs> | null
    where?: meetingsWhereInput
    orderBy?: meetingsOrderByWithRelationInput | meetingsOrderByWithRelationInput[]
    cursor?: meetingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeetingsScalarFieldEnum | MeetingsScalarFieldEnum[]
  }

  /**
   * meetingtype without action
   */
  export type meetingtypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetingtype
     */
    select?: meetingtypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetingtype
     */
    omit?: meetingtypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingtypeInclude<ExtArgs> | null
  }


  /**
   * Model staff
   */

  export type AggregateStaff = {
    _count: StaffCountAggregateOutputType | null
    _avg: StaffAvgAggregateOutputType | null
    _sum: StaffSumAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  export type StaffAvgAggregateOutputType = {
    StaffID: number | null
    DepartmentID: number | null
  }

  export type StaffSumAggregateOutputType = {
    StaffID: number | null
    DepartmentID: number | null
  }

  export type StaffMinAggregateOutputType = {
    StaffID: number | null
    StaffName: string | null
    MobileNo: string | null
    EmailAddress: string | null
    DepartmentID: number | null
    Remarks: string | null
    Created: Date | null
    Modified: Date | null
  }

  export type StaffMaxAggregateOutputType = {
    StaffID: number | null
    StaffName: string | null
    MobileNo: string | null
    EmailAddress: string | null
    DepartmentID: number | null
    Remarks: string | null
    Created: Date | null
    Modified: Date | null
  }

  export type StaffCountAggregateOutputType = {
    StaffID: number
    StaffName: number
    MobileNo: number
    EmailAddress: number
    DepartmentID: number
    Remarks: number
    Created: number
    Modified: number
    _all: number
  }


  export type StaffAvgAggregateInputType = {
    StaffID?: true
    DepartmentID?: true
  }

  export type StaffSumAggregateInputType = {
    StaffID?: true
    DepartmentID?: true
  }

  export type StaffMinAggregateInputType = {
    StaffID?: true
    StaffName?: true
    MobileNo?: true
    EmailAddress?: true
    DepartmentID?: true
    Remarks?: true
    Created?: true
    Modified?: true
  }

  export type StaffMaxAggregateInputType = {
    StaffID?: true
    StaffName?: true
    MobileNo?: true
    EmailAddress?: true
    DepartmentID?: true
    Remarks?: true
    Created?: true
    Modified?: true
  }

  export type StaffCountAggregateInputType = {
    StaffID?: true
    StaffName?: true
    MobileNo?: true
    EmailAddress?: true
    DepartmentID?: true
    Remarks?: true
    Created?: true
    Modified?: true
    _all?: true
  }

  export type StaffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which staff to aggregate.
     */
    where?: staffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staff to fetch.
     */
    orderBy?: staffOrderByWithRelationInput | staffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: staffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned staff
    **/
    _count?: true | StaffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StaffAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StaffSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffMaxAggregateInputType
  }

  export type GetStaffAggregateType<T extends StaffAggregateArgs> = {
        [P in keyof T & keyof AggregateStaff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaff[P]>
      : GetScalarType<T[P], AggregateStaff[P]>
  }




  export type staffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: staffWhereInput
    orderBy?: staffOrderByWithAggregationInput | staffOrderByWithAggregationInput[]
    by: StaffScalarFieldEnum[] | StaffScalarFieldEnum
    having?: staffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffCountAggregateInputType | true
    _avg?: StaffAvgAggregateInputType
    _sum?: StaffSumAggregateInputType
    _min?: StaffMinAggregateInputType
    _max?: StaffMaxAggregateInputType
  }

  export type StaffGroupByOutputType = {
    StaffID: number
    StaffName: string
    MobileNo: string | null
    EmailAddress: string | null
    DepartmentID: number | null
    Remarks: string | null
    Created: Date | null
    Modified: Date | null
    _count: StaffCountAggregateOutputType | null
    _avg: StaffAvgAggregateOutputType | null
    _sum: StaffSumAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  type GetStaffGroupByPayload<T extends staffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffGroupByOutputType[P]>
            : GetScalarType<T[P], StaffGroupByOutputType[P]>
        }
      >
    >


  export type staffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    StaffID?: boolean
    StaffName?: boolean
    MobileNo?: boolean
    EmailAddress?: boolean
    DepartmentID?: boolean
    Remarks?: boolean
    Created?: boolean
    Modified?: boolean
    department?: boolean | staff$departmentArgs<ExtArgs>
    meetingmember?: boolean | staff$meetingmemberArgs<ExtArgs>
    actionitem?: boolean | staff$actionitemArgs<ExtArgs>
    _count?: boolean | StaffCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>



  export type staffSelectScalar = {
    StaffID?: boolean
    StaffName?: boolean
    MobileNo?: boolean
    EmailAddress?: boolean
    DepartmentID?: boolean
    Remarks?: boolean
    Created?: boolean
    Modified?: boolean
  }

  export type staffOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"StaffID" | "StaffName" | "MobileNo" | "EmailAddress" | "DepartmentID" | "Remarks" | "Created" | "Modified", ExtArgs["result"]["staff"]>
  export type staffInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | staff$departmentArgs<ExtArgs>
    meetingmember?: boolean | staff$meetingmemberArgs<ExtArgs>
    actionitem?: boolean | staff$actionitemArgs<ExtArgs>
    _count?: boolean | StaffCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $staffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "staff"
    objects: {
      department: Prisma.$departmentPayload<ExtArgs> | null
      meetingmember: Prisma.$meetingmemberPayload<ExtArgs>[]
      actionitem: Prisma.$actionitemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      StaffID: number
      StaffName: string
      MobileNo: string | null
      EmailAddress: string | null
      DepartmentID: number | null
      Remarks: string | null
      Created: Date | null
      Modified: Date | null
    }, ExtArgs["result"]["staff"]>
    composites: {}
  }

  type staffGetPayload<S extends boolean | null | undefined | staffDefaultArgs> = $Result.GetResult<Prisma.$staffPayload, S>

  type staffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<staffFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaffCountAggregateInputType | true
    }

  export interface staffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['staff'], meta: { name: 'staff' } }
    /**
     * Find zero or one Staff that matches the filter.
     * @param {staffFindUniqueArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends staffFindUniqueArgs>(args: SelectSubset<T, staffFindUniqueArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Staff that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {staffFindUniqueOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends staffFindUniqueOrThrowArgs>(args: SelectSubset<T, staffFindUniqueOrThrowArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffFindFirstArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends staffFindFirstArgs>(args?: SelectSubset<T, staffFindFirstArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffFindFirstOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends staffFindFirstOrThrowArgs>(args?: SelectSubset<T, staffFindFirstOrThrowArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Staff
     * const staff = await prisma.staff.findMany()
     * 
     * // Get first 10 Staff
     * const staff = await prisma.staff.findMany({ take: 10 })
     * 
     * // Only select the `StaffID`
     * const staffWithStaffIDOnly = await prisma.staff.findMany({ select: { StaffID: true } })
     * 
     */
    findMany<T extends staffFindManyArgs>(args?: SelectSubset<T, staffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Staff.
     * @param {staffCreateArgs} args - Arguments to create a Staff.
     * @example
     * // Create one Staff
     * const Staff = await prisma.staff.create({
     *   data: {
     *     // ... data to create a Staff
     *   }
     * })
     * 
     */
    create<T extends staffCreateArgs>(args: SelectSubset<T, staffCreateArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Staff.
     * @param {staffCreateManyArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends staffCreateManyArgs>(args?: SelectSubset<T, staffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Staff.
     * @param {staffDeleteArgs} args - Arguments to delete one Staff.
     * @example
     * // Delete one Staff
     * const Staff = await prisma.staff.delete({
     *   where: {
     *     // ... filter to delete one Staff
     *   }
     * })
     * 
     */
    delete<T extends staffDeleteArgs>(args: SelectSubset<T, staffDeleteArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Staff.
     * @param {staffUpdateArgs} args - Arguments to update one Staff.
     * @example
     * // Update one Staff
     * const staff = await prisma.staff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends staffUpdateArgs>(args: SelectSubset<T, staffUpdateArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Staff.
     * @param {staffDeleteManyArgs} args - Arguments to filter Staff to delete.
     * @example
     * // Delete a few Staff
     * const { count } = await prisma.staff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends staffDeleteManyArgs>(args?: SelectSubset<T, staffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends staffUpdateManyArgs>(args: SelectSubset<T, staffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Staff.
     * @param {staffUpsertArgs} args - Arguments to update or create a Staff.
     * @example
     * // Update or create a Staff
     * const staff = await prisma.staff.upsert({
     *   create: {
     *     // ... data to create a Staff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Staff we want to update
     *   }
     * })
     */
    upsert<T extends staffUpsertArgs>(args: SelectSubset<T, staffUpsertArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffCountArgs} args - Arguments to filter Staff to count.
     * @example
     * // Count the number of Staff
     * const count = await prisma.staff.count({
     *   where: {
     *     // ... the filter for the Staff we want to count
     *   }
     * })
    **/
    count<T extends staffCountArgs>(
      args?: Subset<T, staffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StaffAggregateArgs>(args: Subset<T, StaffAggregateArgs>): Prisma.PrismaPromise<GetStaffAggregateType<T>>

    /**
     * Group by Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends staffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: staffGroupByArgs['orderBy'] }
        : { orderBy?: staffGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, staffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the staff model
   */
  readonly fields: staffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for staff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__staffClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    department<T extends staff$departmentArgs<ExtArgs> = {}>(args?: Subset<T, staff$departmentArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    meetingmember<T extends staff$meetingmemberArgs<ExtArgs> = {}>(args?: Subset<T, staff$meetingmemberArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$meetingmemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    actionitem<T extends staff$actionitemArgs<ExtArgs> = {}>(args?: Subset<T, staff$actionitemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$actionitemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the staff model
   */
  interface staffFieldRefs {
    readonly StaffID: FieldRef<"staff", 'Int'>
    readonly StaffName: FieldRef<"staff", 'String'>
    readonly MobileNo: FieldRef<"staff", 'String'>
    readonly EmailAddress: FieldRef<"staff", 'String'>
    readonly DepartmentID: FieldRef<"staff", 'Int'>
    readonly Remarks: FieldRef<"staff", 'String'>
    readonly Created: FieldRef<"staff", 'DateTime'>
    readonly Modified: FieldRef<"staff", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * staff findUnique
   */
  export type staffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * Filter, which staff to fetch.
     */
    where: staffWhereUniqueInput
  }

  /**
   * staff findUniqueOrThrow
   */
  export type staffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * Filter, which staff to fetch.
     */
    where: staffWhereUniqueInput
  }

  /**
   * staff findFirst
   */
  export type staffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * Filter, which staff to fetch.
     */
    where?: staffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staff to fetch.
     */
    orderBy?: staffOrderByWithRelationInput | staffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for staff.
     */
    cursor?: staffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * staff findFirstOrThrow
   */
  export type staffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * Filter, which staff to fetch.
     */
    where?: staffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staff to fetch.
     */
    orderBy?: staffOrderByWithRelationInput | staffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for staff.
     */
    cursor?: staffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * staff findMany
   */
  export type staffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * Filter, which staff to fetch.
     */
    where?: staffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staff to fetch.
     */
    orderBy?: staffOrderByWithRelationInput | staffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing staff.
     */
    cursor?: staffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staff.
     */
    skip?: number
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * staff create
   */
  export type staffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * The data needed to create a staff.
     */
    data: XOR<staffCreateInput, staffUncheckedCreateInput>
  }

  /**
   * staff createMany
   */
  export type staffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many staff.
     */
    data: staffCreateManyInput | staffCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * staff update
   */
  export type staffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * The data needed to update a staff.
     */
    data: XOR<staffUpdateInput, staffUncheckedUpdateInput>
    /**
     * Choose, which staff to update.
     */
    where: staffWhereUniqueInput
  }

  /**
   * staff updateMany
   */
  export type staffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update staff.
     */
    data: XOR<staffUpdateManyMutationInput, staffUncheckedUpdateManyInput>
    /**
     * Filter which staff to update
     */
    where?: staffWhereInput
    /**
     * Limit how many staff to update.
     */
    limit?: number
  }

  /**
   * staff upsert
   */
  export type staffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * The filter to search for the staff to update in case it exists.
     */
    where: staffWhereUniqueInput
    /**
     * In case the staff found by the `where` argument doesn't exist, create a new staff with this data.
     */
    create: XOR<staffCreateInput, staffUncheckedCreateInput>
    /**
     * In case the staff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<staffUpdateInput, staffUncheckedUpdateInput>
  }

  /**
   * staff delete
   */
  export type staffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * Filter which staff to delete.
     */
    where: staffWhereUniqueInput
  }

  /**
   * staff deleteMany
   */
  export type staffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which staff to delete
     */
    where?: staffWhereInput
    /**
     * Limit how many staff to delete.
     */
    limit?: number
  }

  /**
   * staff.department
   */
  export type staff$departmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    where?: departmentWhereInput
  }

  /**
   * staff.meetingmember
   */
  export type staff$meetingmemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetingmember
     */
    select?: meetingmemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetingmember
     */
    omit?: meetingmemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingmemberInclude<ExtArgs> | null
    where?: meetingmemberWhereInput
    orderBy?: meetingmemberOrderByWithRelationInput | meetingmemberOrderByWithRelationInput[]
    cursor?: meetingmemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeetingmemberScalarFieldEnum | MeetingmemberScalarFieldEnum[]
  }

  /**
   * staff.actionitem
   */
  export type staff$actionitemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actionitem
     */
    select?: actionitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actionitem
     */
    omit?: actionitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actionitemInclude<ExtArgs> | null
    where?: actionitemWhereInput
    orderBy?: actionitemOrderByWithRelationInput | actionitemOrderByWithRelationInput[]
    cursor?: actionitemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActionitemScalarFieldEnum | ActionitemScalarFieldEnum[]
  }

  /**
   * staff without action
   */
  export type staffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
  }


  /**
   * Model venue
   */

  export type AggregateVenue = {
    _count: VenueCountAggregateOutputType | null
    _avg: VenueAvgAggregateOutputType | null
    _sum: VenueSumAggregateOutputType | null
    _min: VenueMinAggregateOutputType | null
    _max: VenueMaxAggregateOutputType | null
  }

  export type VenueAvgAggregateOutputType = {
    VenueID: number | null
    Capacity: number | null
  }

  export type VenueSumAggregateOutputType = {
    VenueID: number | null
    Capacity: number | null
  }

  export type VenueMinAggregateOutputType = {
    VenueID: number | null
    VenueName: string | null
    Location: string | null
    Capacity: number | null
    Created: Date | null
    Modified: Date | null
  }

  export type VenueMaxAggregateOutputType = {
    VenueID: number | null
    VenueName: string | null
    Location: string | null
    Capacity: number | null
    Created: Date | null
    Modified: Date | null
  }

  export type VenueCountAggregateOutputType = {
    VenueID: number
    VenueName: number
    Location: number
    Capacity: number
    Created: number
    Modified: number
    _all: number
  }


  export type VenueAvgAggregateInputType = {
    VenueID?: true
    Capacity?: true
  }

  export type VenueSumAggregateInputType = {
    VenueID?: true
    Capacity?: true
  }

  export type VenueMinAggregateInputType = {
    VenueID?: true
    VenueName?: true
    Location?: true
    Capacity?: true
    Created?: true
    Modified?: true
  }

  export type VenueMaxAggregateInputType = {
    VenueID?: true
    VenueName?: true
    Location?: true
    Capacity?: true
    Created?: true
    Modified?: true
  }

  export type VenueCountAggregateInputType = {
    VenueID?: true
    VenueName?: true
    Location?: true
    Capacity?: true
    Created?: true
    Modified?: true
    _all?: true
  }

  export type VenueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which venue to aggregate.
     */
    where?: venueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of venues to fetch.
     */
    orderBy?: venueOrderByWithRelationInput | venueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: venueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` venues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned venues
    **/
    _count?: true | VenueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VenueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VenueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VenueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VenueMaxAggregateInputType
  }

  export type GetVenueAggregateType<T extends VenueAggregateArgs> = {
        [P in keyof T & keyof AggregateVenue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVenue[P]>
      : GetScalarType<T[P], AggregateVenue[P]>
  }




  export type venueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: venueWhereInput
    orderBy?: venueOrderByWithAggregationInput | venueOrderByWithAggregationInput[]
    by: VenueScalarFieldEnum[] | VenueScalarFieldEnum
    having?: venueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VenueCountAggregateInputType | true
    _avg?: VenueAvgAggregateInputType
    _sum?: VenueSumAggregateInputType
    _min?: VenueMinAggregateInputType
    _max?: VenueMaxAggregateInputType
  }

  export type VenueGroupByOutputType = {
    VenueID: number
    VenueName: string
    Location: string | null
    Capacity: number | null
    Created: Date | null
    Modified: Date | null
    _count: VenueCountAggregateOutputType | null
    _avg: VenueAvgAggregateOutputType | null
    _sum: VenueSumAggregateOutputType | null
    _min: VenueMinAggregateOutputType | null
    _max: VenueMaxAggregateOutputType | null
  }

  type GetVenueGroupByPayload<T extends venueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VenueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VenueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VenueGroupByOutputType[P]>
            : GetScalarType<T[P], VenueGroupByOutputType[P]>
        }
      >
    >


  export type venueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    VenueID?: boolean
    VenueName?: boolean
    Location?: boolean
    Capacity?: boolean
    Created?: boolean
    Modified?: boolean
    meetings?: boolean | venue$meetingsArgs<ExtArgs>
    _count?: boolean | VenueCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venue"]>



  export type venueSelectScalar = {
    VenueID?: boolean
    VenueName?: boolean
    Location?: boolean
    Capacity?: boolean
    Created?: boolean
    Modified?: boolean
  }

  export type venueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"VenueID" | "VenueName" | "Location" | "Capacity" | "Created" | "Modified", ExtArgs["result"]["venue"]>
  export type venueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meetings?: boolean | venue$meetingsArgs<ExtArgs>
    _count?: boolean | VenueCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $venuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "venue"
    objects: {
      meetings: Prisma.$meetingsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      VenueID: number
      VenueName: string
      Location: string | null
      Capacity: number | null
      Created: Date | null
      Modified: Date | null
    }, ExtArgs["result"]["venue"]>
    composites: {}
  }

  type venueGetPayload<S extends boolean | null | undefined | venueDefaultArgs> = $Result.GetResult<Prisma.$venuePayload, S>

  type venueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<venueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VenueCountAggregateInputType | true
    }

  export interface venueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['venue'], meta: { name: 'venue' } }
    /**
     * Find zero or one Venue that matches the filter.
     * @param {venueFindUniqueArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends venueFindUniqueArgs>(args: SelectSubset<T, venueFindUniqueArgs<ExtArgs>>): Prisma__venueClient<$Result.GetResult<Prisma.$venuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Venue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {venueFindUniqueOrThrowArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends venueFindUniqueOrThrowArgs>(args: SelectSubset<T, venueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__venueClient<$Result.GetResult<Prisma.$venuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {venueFindFirstArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends venueFindFirstArgs>(args?: SelectSubset<T, venueFindFirstArgs<ExtArgs>>): Prisma__venueClient<$Result.GetResult<Prisma.$venuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {venueFindFirstOrThrowArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends venueFindFirstOrThrowArgs>(args?: SelectSubset<T, venueFindFirstOrThrowArgs<ExtArgs>>): Prisma__venueClient<$Result.GetResult<Prisma.$venuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Venues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {venueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Venues
     * const venues = await prisma.venue.findMany()
     * 
     * // Get first 10 Venues
     * const venues = await prisma.venue.findMany({ take: 10 })
     * 
     * // Only select the `VenueID`
     * const venueWithVenueIDOnly = await prisma.venue.findMany({ select: { VenueID: true } })
     * 
     */
    findMany<T extends venueFindManyArgs>(args?: SelectSubset<T, venueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$venuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Venue.
     * @param {venueCreateArgs} args - Arguments to create a Venue.
     * @example
     * // Create one Venue
     * const Venue = await prisma.venue.create({
     *   data: {
     *     // ... data to create a Venue
     *   }
     * })
     * 
     */
    create<T extends venueCreateArgs>(args: SelectSubset<T, venueCreateArgs<ExtArgs>>): Prisma__venueClient<$Result.GetResult<Prisma.$venuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Venues.
     * @param {venueCreateManyArgs} args - Arguments to create many Venues.
     * @example
     * // Create many Venues
     * const venue = await prisma.venue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends venueCreateManyArgs>(args?: SelectSubset<T, venueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Venue.
     * @param {venueDeleteArgs} args - Arguments to delete one Venue.
     * @example
     * // Delete one Venue
     * const Venue = await prisma.venue.delete({
     *   where: {
     *     // ... filter to delete one Venue
     *   }
     * })
     * 
     */
    delete<T extends venueDeleteArgs>(args: SelectSubset<T, venueDeleteArgs<ExtArgs>>): Prisma__venueClient<$Result.GetResult<Prisma.$venuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Venue.
     * @param {venueUpdateArgs} args - Arguments to update one Venue.
     * @example
     * // Update one Venue
     * const venue = await prisma.venue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends venueUpdateArgs>(args: SelectSubset<T, venueUpdateArgs<ExtArgs>>): Prisma__venueClient<$Result.GetResult<Prisma.$venuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Venues.
     * @param {venueDeleteManyArgs} args - Arguments to filter Venues to delete.
     * @example
     * // Delete a few Venues
     * const { count } = await prisma.venue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends venueDeleteManyArgs>(args?: SelectSubset<T, venueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Venues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {venueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Venues
     * const venue = await prisma.venue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends venueUpdateManyArgs>(args: SelectSubset<T, venueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Venue.
     * @param {venueUpsertArgs} args - Arguments to update or create a Venue.
     * @example
     * // Update or create a Venue
     * const venue = await prisma.venue.upsert({
     *   create: {
     *     // ... data to create a Venue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Venue we want to update
     *   }
     * })
     */
    upsert<T extends venueUpsertArgs>(args: SelectSubset<T, venueUpsertArgs<ExtArgs>>): Prisma__venueClient<$Result.GetResult<Prisma.$venuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Venues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {venueCountArgs} args - Arguments to filter Venues to count.
     * @example
     * // Count the number of Venues
     * const count = await prisma.venue.count({
     *   where: {
     *     // ... the filter for the Venues we want to count
     *   }
     * })
    **/
    count<T extends venueCountArgs>(
      args?: Subset<T, venueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VenueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Venue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VenueAggregateArgs>(args: Subset<T, VenueAggregateArgs>): Prisma.PrismaPromise<GetVenueAggregateType<T>>

    /**
     * Group by Venue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {venueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends venueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: venueGroupByArgs['orderBy'] }
        : { orderBy?: venueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, venueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVenueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the venue model
   */
  readonly fields: venueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for venue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__venueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meetings<T extends venue$meetingsArgs<ExtArgs> = {}>(args?: Subset<T, venue$meetingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$meetingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the venue model
   */
  interface venueFieldRefs {
    readonly VenueID: FieldRef<"venue", 'Int'>
    readonly VenueName: FieldRef<"venue", 'String'>
    readonly Location: FieldRef<"venue", 'String'>
    readonly Capacity: FieldRef<"venue", 'Int'>
    readonly Created: FieldRef<"venue", 'DateTime'>
    readonly Modified: FieldRef<"venue", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * venue findUnique
   */
  export type venueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the venue
     */
    select?: venueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the venue
     */
    omit?: venueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: venueInclude<ExtArgs> | null
    /**
     * Filter, which venue to fetch.
     */
    where: venueWhereUniqueInput
  }

  /**
   * venue findUniqueOrThrow
   */
  export type venueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the venue
     */
    select?: venueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the venue
     */
    omit?: venueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: venueInclude<ExtArgs> | null
    /**
     * Filter, which venue to fetch.
     */
    where: venueWhereUniqueInput
  }

  /**
   * venue findFirst
   */
  export type venueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the venue
     */
    select?: venueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the venue
     */
    omit?: venueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: venueInclude<ExtArgs> | null
    /**
     * Filter, which venue to fetch.
     */
    where?: venueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of venues to fetch.
     */
    orderBy?: venueOrderByWithRelationInput | venueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for venues.
     */
    cursor?: venueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` venues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of venues.
     */
    distinct?: VenueScalarFieldEnum | VenueScalarFieldEnum[]
  }

  /**
   * venue findFirstOrThrow
   */
  export type venueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the venue
     */
    select?: venueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the venue
     */
    omit?: venueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: venueInclude<ExtArgs> | null
    /**
     * Filter, which venue to fetch.
     */
    where?: venueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of venues to fetch.
     */
    orderBy?: venueOrderByWithRelationInput | venueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for venues.
     */
    cursor?: venueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` venues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of venues.
     */
    distinct?: VenueScalarFieldEnum | VenueScalarFieldEnum[]
  }

  /**
   * venue findMany
   */
  export type venueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the venue
     */
    select?: venueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the venue
     */
    omit?: venueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: venueInclude<ExtArgs> | null
    /**
     * Filter, which venues to fetch.
     */
    where?: venueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of venues to fetch.
     */
    orderBy?: venueOrderByWithRelationInput | venueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing venues.
     */
    cursor?: venueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` venues.
     */
    skip?: number
    distinct?: VenueScalarFieldEnum | VenueScalarFieldEnum[]
  }

  /**
   * venue create
   */
  export type venueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the venue
     */
    select?: venueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the venue
     */
    omit?: venueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: venueInclude<ExtArgs> | null
    /**
     * The data needed to create a venue.
     */
    data: XOR<venueCreateInput, venueUncheckedCreateInput>
  }

  /**
   * venue createMany
   */
  export type venueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many venues.
     */
    data: venueCreateManyInput | venueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * venue update
   */
  export type venueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the venue
     */
    select?: venueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the venue
     */
    omit?: venueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: venueInclude<ExtArgs> | null
    /**
     * The data needed to update a venue.
     */
    data: XOR<venueUpdateInput, venueUncheckedUpdateInput>
    /**
     * Choose, which venue to update.
     */
    where: venueWhereUniqueInput
  }

  /**
   * venue updateMany
   */
  export type venueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update venues.
     */
    data: XOR<venueUpdateManyMutationInput, venueUncheckedUpdateManyInput>
    /**
     * Filter which venues to update
     */
    where?: venueWhereInput
    /**
     * Limit how many venues to update.
     */
    limit?: number
  }

  /**
   * venue upsert
   */
  export type venueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the venue
     */
    select?: venueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the venue
     */
    omit?: venueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: venueInclude<ExtArgs> | null
    /**
     * The filter to search for the venue to update in case it exists.
     */
    where: venueWhereUniqueInput
    /**
     * In case the venue found by the `where` argument doesn't exist, create a new venue with this data.
     */
    create: XOR<venueCreateInput, venueUncheckedCreateInput>
    /**
     * In case the venue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<venueUpdateInput, venueUncheckedUpdateInput>
  }

  /**
   * venue delete
   */
  export type venueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the venue
     */
    select?: venueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the venue
     */
    omit?: venueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: venueInclude<ExtArgs> | null
    /**
     * Filter which venue to delete.
     */
    where: venueWhereUniqueInput
  }

  /**
   * venue deleteMany
   */
  export type venueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which venues to delete
     */
    where?: venueWhereInput
    /**
     * Limit how many venues to delete.
     */
    limit?: number
  }

  /**
   * venue.meetings
   */
  export type venue$meetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetings
     */
    select?: meetingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetings
     */
    omit?: meetingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingsInclude<ExtArgs> | null
    where?: meetingsWhereInput
    orderBy?: meetingsOrderByWithRelationInput | meetingsOrderByWithRelationInput[]
    cursor?: meetingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeetingsScalarFieldEnum | MeetingsScalarFieldEnum[]
  }

  /**
   * venue without action
   */
  export type venueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the venue
     */
    select?: venueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the venue
     */
    omit?: venueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: venueInclude<ExtArgs> | null
  }


  /**
   * Model actionitem
   */

  export type AggregateActionitem = {
    _count: ActionitemCountAggregateOutputType | null
    _avg: ActionitemAvgAggregateOutputType | null
    _sum: ActionitemSumAggregateOutputType | null
    _min: ActionitemMinAggregateOutputType | null
    _max: ActionitemMaxAggregateOutputType | null
  }

  export type ActionitemAvgAggregateOutputType = {
    ActionItemID: number | null
    MeetingID: number | null
    StaffID: number | null
  }

  export type ActionitemSumAggregateOutputType = {
    ActionItemID: number | null
    MeetingID: number | null
    StaffID: number | null
  }

  export type ActionitemMinAggregateOutputType = {
    ActionItemID: number | null
    MeetingID: number | null
    StaffID: number | null
    Description: string | null
    Status: $Enums.action_item_status | null
    DueDate: Date | null
    Created: Date | null
    Modified: Date | null
  }

  export type ActionitemMaxAggregateOutputType = {
    ActionItemID: number | null
    MeetingID: number | null
    StaffID: number | null
    Description: string | null
    Status: $Enums.action_item_status | null
    DueDate: Date | null
    Created: Date | null
    Modified: Date | null
  }

  export type ActionitemCountAggregateOutputType = {
    ActionItemID: number
    MeetingID: number
    StaffID: number
    Description: number
    Status: number
    DueDate: number
    Created: number
    Modified: number
    _all: number
  }


  export type ActionitemAvgAggregateInputType = {
    ActionItemID?: true
    MeetingID?: true
    StaffID?: true
  }

  export type ActionitemSumAggregateInputType = {
    ActionItemID?: true
    MeetingID?: true
    StaffID?: true
  }

  export type ActionitemMinAggregateInputType = {
    ActionItemID?: true
    MeetingID?: true
    StaffID?: true
    Description?: true
    Status?: true
    DueDate?: true
    Created?: true
    Modified?: true
  }

  export type ActionitemMaxAggregateInputType = {
    ActionItemID?: true
    MeetingID?: true
    StaffID?: true
    Description?: true
    Status?: true
    DueDate?: true
    Created?: true
    Modified?: true
  }

  export type ActionitemCountAggregateInputType = {
    ActionItemID?: true
    MeetingID?: true
    StaffID?: true
    Description?: true
    Status?: true
    DueDate?: true
    Created?: true
    Modified?: true
    _all?: true
  }

  export type ActionitemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which actionitem to aggregate.
     */
    where?: actionitemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of actionitems to fetch.
     */
    orderBy?: actionitemOrderByWithRelationInput | actionitemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: actionitemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` actionitems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` actionitems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned actionitems
    **/
    _count?: true | ActionitemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActionitemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActionitemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActionitemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActionitemMaxAggregateInputType
  }

  export type GetActionitemAggregateType<T extends ActionitemAggregateArgs> = {
        [P in keyof T & keyof AggregateActionitem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActionitem[P]>
      : GetScalarType<T[P], AggregateActionitem[P]>
  }




  export type actionitemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: actionitemWhereInput
    orderBy?: actionitemOrderByWithAggregationInput | actionitemOrderByWithAggregationInput[]
    by: ActionitemScalarFieldEnum[] | ActionitemScalarFieldEnum
    having?: actionitemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActionitemCountAggregateInputType | true
    _avg?: ActionitemAvgAggregateInputType
    _sum?: ActionitemSumAggregateInputType
    _min?: ActionitemMinAggregateInputType
    _max?: ActionitemMaxAggregateInputType
  }

  export type ActionitemGroupByOutputType = {
    ActionItemID: number
    MeetingID: number | null
    StaffID: number | null
    Description: string
    Status: $Enums.action_item_status
    DueDate: Date | null
    Created: Date | null
    Modified: Date | null
    _count: ActionitemCountAggregateOutputType | null
    _avg: ActionitemAvgAggregateOutputType | null
    _sum: ActionitemSumAggregateOutputType | null
    _min: ActionitemMinAggregateOutputType | null
    _max: ActionitemMaxAggregateOutputType | null
  }

  type GetActionitemGroupByPayload<T extends actionitemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActionitemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActionitemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActionitemGroupByOutputType[P]>
            : GetScalarType<T[P], ActionitemGroupByOutputType[P]>
        }
      >
    >


  export type actionitemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ActionItemID?: boolean
    MeetingID?: boolean
    StaffID?: boolean
    Description?: boolean
    Status?: boolean
    DueDate?: boolean
    Created?: boolean
    Modified?: boolean
    meetings?: boolean | actionitem$meetingsArgs<ExtArgs>
    staff?: boolean | actionitem$staffArgs<ExtArgs>
  }, ExtArgs["result"]["actionitem"]>



  export type actionitemSelectScalar = {
    ActionItemID?: boolean
    MeetingID?: boolean
    StaffID?: boolean
    Description?: boolean
    Status?: boolean
    DueDate?: boolean
    Created?: boolean
    Modified?: boolean
  }

  export type actionitemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ActionItemID" | "MeetingID" | "StaffID" | "Description" | "Status" | "DueDate" | "Created" | "Modified", ExtArgs["result"]["actionitem"]>
  export type actionitemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meetings?: boolean | actionitem$meetingsArgs<ExtArgs>
    staff?: boolean | actionitem$staffArgs<ExtArgs>
  }

  export type $actionitemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "actionitem"
    objects: {
      meetings: Prisma.$meetingsPayload<ExtArgs> | null
      staff: Prisma.$staffPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      ActionItemID: number
      MeetingID: number | null
      StaffID: number | null
      Description: string
      Status: $Enums.action_item_status
      DueDate: Date | null
      Created: Date | null
      Modified: Date | null
    }, ExtArgs["result"]["actionitem"]>
    composites: {}
  }

  type actionitemGetPayload<S extends boolean | null | undefined | actionitemDefaultArgs> = $Result.GetResult<Prisma.$actionitemPayload, S>

  type actionitemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<actionitemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActionitemCountAggregateInputType | true
    }

  export interface actionitemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['actionitem'], meta: { name: 'actionitem' } }
    /**
     * Find zero or one Actionitem that matches the filter.
     * @param {actionitemFindUniqueArgs} args - Arguments to find a Actionitem
     * @example
     * // Get one Actionitem
     * const actionitem = await prisma.actionitem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends actionitemFindUniqueArgs>(args: SelectSubset<T, actionitemFindUniqueArgs<ExtArgs>>): Prisma__actionitemClient<$Result.GetResult<Prisma.$actionitemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Actionitem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {actionitemFindUniqueOrThrowArgs} args - Arguments to find a Actionitem
     * @example
     * // Get one Actionitem
     * const actionitem = await prisma.actionitem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends actionitemFindUniqueOrThrowArgs>(args: SelectSubset<T, actionitemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__actionitemClient<$Result.GetResult<Prisma.$actionitemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Actionitem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actionitemFindFirstArgs} args - Arguments to find a Actionitem
     * @example
     * // Get one Actionitem
     * const actionitem = await prisma.actionitem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends actionitemFindFirstArgs>(args?: SelectSubset<T, actionitemFindFirstArgs<ExtArgs>>): Prisma__actionitemClient<$Result.GetResult<Prisma.$actionitemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Actionitem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actionitemFindFirstOrThrowArgs} args - Arguments to find a Actionitem
     * @example
     * // Get one Actionitem
     * const actionitem = await prisma.actionitem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends actionitemFindFirstOrThrowArgs>(args?: SelectSubset<T, actionitemFindFirstOrThrowArgs<ExtArgs>>): Prisma__actionitemClient<$Result.GetResult<Prisma.$actionitemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Actionitems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actionitemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Actionitems
     * const actionitems = await prisma.actionitem.findMany()
     * 
     * // Get first 10 Actionitems
     * const actionitems = await prisma.actionitem.findMany({ take: 10 })
     * 
     * // Only select the `ActionItemID`
     * const actionitemWithActionItemIDOnly = await prisma.actionitem.findMany({ select: { ActionItemID: true } })
     * 
     */
    findMany<T extends actionitemFindManyArgs>(args?: SelectSubset<T, actionitemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$actionitemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Actionitem.
     * @param {actionitemCreateArgs} args - Arguments to create a Actionitem.
     * @example
     * // Create one Actionitem
     * const Actionitem = await prisma.actionitem.create({
     *   data: {
     *     // ... data to create a Actionitem
     *   }
     * })
     * 
     */
    create<T extends actionitemCreateArgs>(args: SelectSubset<T, actionitemCreateArgs<ExtArgs>>): Prisma__actionitemClient<$Result.GetResult<Prisma.$actionitemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Actionitems.
     * @param {actionitemCreateManyArgs} args - Arguments to create many Actionitems.
     * @example
     * // Create many Actionitems
     * const actionitem = await prisma.actionitem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends actionitemCreateManyArgs>(args?: SelectSubset<T, actionitemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Actionitem.
     * @param {actionitemDeleteArgs} args - Arguments to delete one Actionitem.
     * @example
     * // Delete one Actionitem
     * const Actionitem = await prisma.actionitem.delete({
     *   where: {
     *     // ... filter to delete one Actionitem
     *   }
     * })
     * 
     */
    delete<T extends actionitemDeleteArgs>(args: SelectSubset<T, actionitemDeleteArgs<ExtArgs>>): Prisma__actionitemClient<$Result.GetResult<Prisma.$actionitemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Actionitem.
     * @param {actionitemUpdateArgs} args - Arguments to update one Actionitem.
     * @example
     * // Update one Actionitem
     * const actionitem = await prisma.actionitem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends actionitemUpdateArgs>(args: SelectSubset<T, actionitemUpdateArgs<ExtArgs>>): Prisma__actionitemClient<$Result.GetResult<Prisma.$actionitemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Actionitems.
     * @param {actionitemDeleteManyArgs} args - Arguments to filter Actionitems to delete.
     * @example
     * // Delete a few Actionitems
     * const { count } = await prisma.actionitem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends actionitemDeleteManyArgs>(args?: SelectSubset<T, actionitemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actionitems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actionitemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Actionitems
     * const actionitem = await prisma.actionitem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends actionitemUpdateManyArgs>(args: SelectSubset<T, actionitemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Actionitem.
     * @param {actionitemUpsertArgs} args - Arguments to update or create a Actionitem.
     * @example
     * // Update or create a Actionitem
     * const actionitem = await prisma.actionitem.upsert({
     *   create: {
     *     // ... data to create a Actionitem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Actionitem we want to update
     *   }
     * })
     */
    upsert<T extends actionitemUpsertArgs>(args: SelectSubset<T, actionitemUpsertArgs<ExtArgs>>): Prisma__actionitemClient<$Result.GetResult<Prisma.$actionitemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Actionitems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actionitemCountArgs} args - Arguments to filter Actionitems to count.
     * @example
     * // Count the number of Actionitems
     * const count = await prisma.actionitem.count({
     *   where: {
     *     // ... the filter for the Actionitems we want to count
     *   }
     * })
    **/
    count<T extends actionitemCountArgs>(
      args?: Subset<T, actionitemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActionitemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Actionitem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionitemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActionitemAggregateArgs>(args: Subset<T, ActionitemAggregateArgs>): Prisma.PrismaPromise<GetActionitemAggregateType<T>>

    /**
     * Group by Actionitem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actionitemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends actionitemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: actionitemGroupByArgs['orderBy'] }
        : { orderBy?: actionitemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, actionitemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActionitemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the actionitem model
   */
  readonly fields: actionitemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for actionitem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__actionitemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meetings<T extends actionitem$meetingsArgs<ExtArgs> = {}>(args?: Subset<T, actionitem$meetingsArgs<ExtArgs>>): Prisma__meetingsClient<$Result.GetResult<Prisma.$meetingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    staff<T extends actionitem$staffArgs<ExtArgs> = {}>(args?: Subset<T, actionitem$staffArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the actionitem model
   */
  interface actionitemFieldRefs {
    readonly ActionItemID: FieldRef<"actionitem", 'Int'>
    readonly MeetingID: FieldRef<"actionitem", 'Int'>
    readonly StaffID: FieldRef<"actionitem", 'Int'>
    readonly Description: FieldRef<"actionitem", 'String'>
    readonly Status: FieldRef<"actionitem", 'action_item_status'>
    readonly DueDate: FieldRef<"actionitem", 'DateTime'>
    readonly Created: FieldRef<"actionitem", 'DateTime'>
    readonly Modified: FieldRef<"actionitem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * actionitem findUnique
   */
  export type actionitemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actionitem
     */
    select?: actionitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actionitem
     */
    omit?: actionitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actionitemInclude<ExtArgs> | null
    /**
     * Filter, which actionitem to fetch.
     */
    where: actionitemWhereUniqueInput
  }

  /**
   * actionitem findUniqueOrThrow
   */
  export type actionitemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actionitem
     */
    select?: actionitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actionitem
     */
    omit?: actionitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actionitemInclude<ExtArgs> | null
    /**
     * Filter, which actionitem to fetch.
     */
    where: actionitemWhereUniqueInput
  }

  /**
   * actionitem findFirst
   */
  export type actionitemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actionitem
     */
    select?: actionitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actionitem
     */
    omit?: actionitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actionitemInclude<ExtArgs> | null
    /**
     * Filter, which actionitem to fetch.
     */
    where?: actionitemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of actionitems to fetch.
     */
    orderBy?: actionitemOrderByWithRelationInput | actionitemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for actionitems.
     */
    cursor?: actionitemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` actionitems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` actionitems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of actionitems.
     */
    distinct?: ActionitemScalarFieldEnum | ActionitemScalarFieldEnum[]
  }

  /**
   * actionitem findFirstOrThrow
   */
  export type actionitemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actionitem
     */
    select?: actionitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actionitem
     */
    omit?: actionitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actionitemInclude<ExtArgs> | null
    /**
     * Filter, which actionitem to fetch.
     */
    where?: actionitemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of actionitems to fetch.
     */
    orderBy?: actionitemOrderByWithRelationInput | actionitemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for actionitems.
     */
    cursor?: actionitemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` actionitems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` actionitems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of actionitems.
     */
    distinct?: ActionitemScalarFieldEnum | ActionitemScalarFieldEnum[]
  }

  /**
   * actionitem findMany
   */
  export type actionitemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actionitem
     */
    select?: actionitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actionitem
     */
    omit?: actionitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actionitemInclude<ExtArgs> | null
    /**
     * Filter, which actionitems to fetch.
     */
    where?: actionitemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of actionitems to fetch.
     */
    orderBy?: actionitemOrderByWithRelationInput | actionitemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing actionitems.
     */
    cursor?: actionitemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` actionitems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` actionitems.
     */
    skip?: number
    distinct?: ActionitemScalarFieldEnum | ActionitemScalarFieldEnum[]
  }

  /**
   * actionitem create
   */
  export type actionitemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actionitem
     */
    select?: actionitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actionitem
     */
    omit?: actionitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actionitemInclude<ExtArgs> | null
    /**
     * The data needed to create a actionitem.
     */
    data: XOR<actionitemCreateInput, actionitemUncheckedCreateInput>
  }

  /**
   * actionitem createMany
   */
  export type actionitemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many actionitems.
     */
    data: actionitemCreateManyInput | actionitemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * actionitem update
   */
  export type actionitemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actionitem
     */
    select?: actionitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actionitem
     */
    omit?: actionitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actionitemInclude<ExtArgs> | null
    /**
     * The data needed to update a actionitem.
     */
    data: XOR<actionitemUpdateInput, actionitemUncheckedUpdateInput>
    /**
     * Choose, which actionitem to update.
     */
    where: actionitemWhereUniqueInput
  }

  /**
   * actionitem updateMany
   */
  export type actionitemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update actionitems.
     */
    data: XOR<actionitemUpdateManyMutationInput, actionitemUncheckedUpdateManyInput>
    /**
     * Filter which actionitems to update
     */
    where?: actionitemWhereInput
    /**
     * Limit how many actionitems to update.
     */
    limit?: number
  }

  /**
   * actionitem upsert
   */
  export type actionitemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actionitem
     */
    select?: actionitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actionitem
     */
    omit?: actionitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actionitemInclude<ExtArgs> | null
    /**
     * The filter to search for the actionitem to update in case it exists.
     */
    where: actionitemWhereUniqueInput
    /**
     * In case the actionitem found by the `where` argument doesn't exist, create a new actionitem with this data.
     */
    create: XOR<actionitemCreateInput, actionitemUncheckedCreateInput>
    /**
     * In case the actionitem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<actionitemUpdateInput, actionitemUncheckedUpdateInput>
  }

  /**
   * actionitem delete
   */
  export type actionitemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actionitem
     */
    select?: actionitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actionitem
     */
    omit?: actionitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actionitemInclude<ExtArgs> | null
    /**
     * Filter which actionitem to delete.
     */
    where: actionitemWhereUniqueInput
  }

  /**
   * actionitem deleteMany
   */
  export type actionitemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which actionitems to delete
     */
    where?: actionitemWhereInput
    /**
     * Limit how many actionitems to delete.
     */
    limit?: number
  }

  /**
   * actionitem.meetings
   */
  export type actionitem$meetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meetings
     */
    select?: meetingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the meetings
     */
    omit?: meetingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingsInclude<ExtArgs> | null
    where?: meetingsWhereInput
  }

  /**
   * actionitem.staff
   */
  export type actionitem$staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    where?: staffWhereInput
  }

  /**
   * actionitem without action
   */
  export type actionitemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actionitem
     */
    select?: actionitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actionitem
     */
    omit?: actionitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actionitemInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    phone: string | null
    organization: string | null
    password: string | null
    role: $Enums.user_role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    phone: string | null
    organization: string | null
    password: string | null
    role: $Enums.user_role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    phone: number
    organization: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    phone?: true
    organization?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    phone?: true
    organization?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    phone?: true
    organization?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    fullName: string
    email: string
    phone: string | null
    organization: string | null
    password: string
    role: $Enums.user_role | null
    createdAt: Date | null
    updatedAt: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    organization?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    organization?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "email" | "phone" | "organization" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      email: string
      phone: string | null
      organization: string | null
      password: string
      role: $Enums.user_role | null
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'String'>
    readonly fullName: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly phone: FieldRef<"user", 'String'>
    readonly organization: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly role: FieldRef<"user", 'user_role'>
    readonly createdAt: FieldRef<"user", 'DateTime'>
    readonly updatedAt: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DepartmentScalarFieldEnum: {
    DepartmentID: 'DepartmentID',
    DepartmentName: 'DepartmentName',
    DepartmentCode: 'DepartmentCode',
    Created: 'Created',
    Modified: 'Modified'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


  export const MeetingmemberScalarFieldEnum: {
    MeetingMemberID: 'MeetingMemberID',
    MeetingID: 'MeetingID',
    StaffID: 'StaffID',
    IsPresent: 'IsPresent',
    Remarks: 'Remarks',
    Created: 'Created',
    Modified: 'Modified'
  };

  export type MeetingmemberScalarFieldEnum = (typeof MeetingmemberScalarFieldEnum)[keyof typeof MeetingmemberScalarFieldEnum]


  export const MeetingsScalarFieldEnum: {
    MeetingID: 'MeetingID',
    MeetingDate: 'MeetingDate',
    MeetingTypeID: 'MeetingTypeID',
    VenueID: 'VenueID',
    MeetingDescription: 'MeetingDescription',
    DocumentPath: 'DocumentPath',
    Created: 'Created',
    Modified: 'Modified',
    IsCancelled: 'IsCancelled',
    CancellationDateTime: 'CancellationDateTime',
    CancellationReason: 'CancellationReason'
  };

  export type MeetingsScalarFieldEnum = (typeof MeetingsScalarFieldEnum)[keyof typeof MeetingsScalarFieldEnum]


  export const MeetingtypeScalarFieldEnum: {
    MeetingTypeID: 'MeetingTypeID',
    MeetingTypeName: 'MeetingTypeName',
    Remarks: 'Remarks',
    Created: 'Created',
    Modified: 'Modified'
  };

  export type MeetingtypeScalarFieldEnum = (typeof MeetingtypeScalarFieldEnum)[keyof typeof MeetingtypeScalarFieldEnum]


  export const StaffScalarFieldEnum: {
    StaffID: 'StaffID',
    StaffName: 'StaffName',
    MobileNo: 'MobileNo',
    EmailAddress: 'EmailAddress',
    DepartmentID: 'DepartmentID',
    Remarks: 'Remarks',
    Created: 'Created',
    Modified: 'Modified'
  };

  export type StaffScalarFieldEnum = (typeof StaffScalarFieldEnum)[keyof typeof StaffScalarFieldEnum]


  export const VenueScalarFieldEnum: {
    VenueID: 'VenueID',
    VenueName: 'VenueName',
    Location: 'Location',
    Capacity: 'Capacity',
    Created: 'Created',
    Modified: 'Modified'
  };

  export type VenueScalarFieldEnum = (typeof VenueScalarFieldEnum)[keyof typeof VenueScalarFieldEnum]


  export const ActionitemScalarFieldEnum: {
    ActionItemID: 'ActionItemID',
    MeetingID: 'MeetingID',
    StaffID: 'StaffID',
    Description: 'Description',
    Status: 'Status',
    DueDate: 'DueDate',
    Created: 'Created',
    Modified: 'Modified'
  };

  export type ActionitemScalarFieldEnum = (typeof ActionitemScalarFieldEnum)[keyof typeof ActionitemScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    email: 'email',
    phone: 'phone',
    organization: 'organization',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const departmentOrderByRelevanceFieldEnum: {
    DepartmentName: 'DepartmentName',
    DepartmentCode: 'DepartmentCode'
  };

  export type departmentOrderByRelevanceFieldEnum = (typeof departmentOrderByRelevanceFieldEnum)[keyof typeof departmentOrderByRelevanceFieldEnum]


  export const meetingmemberOrderByRelevanceFieldEnum: {
    Remarks: 'Remarks'
  };

  export type meetingmemberOrderByRelevanceFieldEnum = (typeof meetingmemberOrderByRelevanceFieldEnum)[keyof typeof meetingmemberOrderByRelevanceFieldEnum]


  export const meetingsOrderByRelevanceFieldEnum: {
    MeetingDescription: 'MeetingDescription',
    DocumentPath: 'DocumentPath',
    CancellationReason: 'CancellationReason'
  };

  export type meetingsOrderByRelevanceFieldEnum = (typeof meetingsOrderByRelevanceFieldEnum)[keyof typeof meetingsOrderByRelevanceFieldEnum]


  export const meetingtypeOrderByRelevanceFieldEnum: {
    MeetingTypeName: 'MeetingTypeName',
    Remarks: 'Remarks'
  };

  export type meetingtypeOrderByRelevanceFieldEnum = (typeof meetingtypeOrderByRelevanceFieldEnum)[keyof typeof meetingtypeOrderByRelevanceFieldEnum]


  export const staffOrderByRelevanceFieldEnum: {
    StaffName: 'StaffName',
    MobileNo: 'MobileNo',
    EmailAddress: 'EmailAddress',
    Remarks: 'Remarks'
  };

  export type staffOrderByRelevanceFieldEnum = (typeof staffOrderByRelevanceFieldEnum)[keyof typeof staffOrderByRelevanceFieldEnum]


  export const venueOrderByRelevanceFieldEnum: {
    VenueName: 'VenueName',
    Location: 'Location'
  };

  export type venueOrderByRelevanceFieldEnum = (typeof venueOrderByRelevanceFieldEnum)[keyof typeof venueOrderByRelevanceFieldEnum]


  export const actionitemOrderByRelevanceFieldEnum: {
    Description: 'Description'
  };

  export type actionitemOrderByRelevanceFieldEnum = (typeof actionitemOrderByRelevanceFieldEnum)[keyof typeof actionitemOrderByRelevanceFieldEnum]


  export const userOrderByRelevanceFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    email: 'email',
    phone: 'phone',
    organization: 'organization',
    password: 'password'
  };

  export type userOrderByRelevanceFieldEnum = (typeof userOrderByRelevanceFieldEnum)[keyof typeof userOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'action_item_status'
   */
  export type Enumaction_item_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'action_item_status'>
    


  /**
   * Reference to a field of type 'user_role'
   */
  export type Enumuser_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_role'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type departmentWhereInput = {
    AND?: departmentWhereInput | departmentWhereInput[]
    OR?: departmentWhereInput[]
    NOT?: departmentWhereInput | departmentWhereInput[]
    DepartmentID?: IntFilter<"department"> | number
    DepartmentName?: StringFilter<"department"> | string
    DepartmentCode?: StringNullableFilter<"department"> | string | null
    Created?: DateTimeNullableFilter<"department"> | Date | string | null
    Modified?: DateTimeNullableFilter<"department"> | Date | string | null
    staff?: StaffListRelationFilter
  }

  export type departmentOrderByWithRelationInput = {
    DepartmentID?: SortOrder
    DepartmentName?: SortOrder
    DepartmentCode?: SortOrderInput | SortOrder
    Created?: SortOrderInput | SortOrder
    Modified?: SortOrderInput | SortOrder
    staff?: staffOrderByRelationAggregateInput
    _relevance?: departmentOrderByRelevanceInput
  }

  export type departmentWhereUniqueInput = Prisma.AtLeast<{
    DepartmentID?: number
    AND?: departmentWhereInput | departmentWhereInput[]
    OR?: departmentWhereInput[]
    NOT?: departmentWhereInput | departmentWhereInput[]
    DepartmentName?: StringFilter<"department"> | string
    DepartmentCode?: StringNullableFilter<"department"> | string | null
    Created?: DateTimeNullableFilter<"department"> | Date | string | null
    Modified?: DateTimeNullableFilter<"department"> | Date | string | null
    staff?: StaffListRelationFilter
  }, "DepartmentID">

  export type departmentOrderByWithAggregationInput = {
    DepartmentID?: SortOrder
    DepartmentName?: SortOrder
    DepartmentCode?: SortOrderInput | SortOrder
    Created?: SortOrderInput | SortOrder
    Modified?: SortOrderInput | SortOrder
    _count?: departmentCountOrderByAggregateInput
    _avg?: departmentAvgOrderByAggregateInput
    _max?: departmentMaxOrderByAggregateInput
    _min?: departmentMinOrderByAggregateInput
    _sum?: departmentSumOrderByAggregateInput
  }

  export type departmentScalarWhereWithAggregatesInput = {
    AND?: departmentScalarWhereWithAggregatesInput | departmentScalarWhereWithAggregatesInput[]
    OR?: departmentScalarWhereWithAggregatesInput[]
    NOT?: departmentScalarWhereWithAggregatesInput | departmentScalarWhereWithAggregatesInput[]
    DepartmentID?: IntWithAggregatesFilter<"department"> | number
    DepartmentName?: StringWithAggregatesFilter<"department"> | string
    DepartmentCode?: StringNullableWithAggregatesFilter<"department"> | string | null
    Created?: DateTimeNullableWithAggregatesFilter<"department"> | Date | string | null
    Modified?: DateTimeNullableWithAggregatesFilter<"department"> | Date | string | null
  }

  export type meetingmemberWhereInput = {
    AND?: meetingmemberWhereInput | meetingmemberWhereInput[]
    OR?: meetingmemberWhereInput[]
    NOT?: meetingmemberWhereInput | meetingmemberWhereInput[]
    MeetingMemberID?: IntFilter<"meetingmember"> | number
    MeetingID?: IntFilter<"meetingmember"> | number
    StaffID?: IntFilter<"meetingmember"> | number
    IsPresent?: BoolNullableFilter<"meetingmember"> | boolean | null
    Remarks?: StringNullableFilter<"meetingmember"> | string | null
    Created?: DateTimeNullableFilter<"meetingmember"> | Date | string | null
    Modified?: DateTimeNullableFilter<"meetingmember"> | Date | string | null
    meetings?: XOR<MeetingsScalarRelationFilter, meetingsWhereInput>
    staff?: XOR<StaffScalarRelationFilter, staffWhereInput>
  }

  export type meetingmemberOrderByWithRelationInput = {
    MeetingMemberID?: SortOrder
    MeetingID?: SortOrder
    StaffID?: SortOrder
    IsPresent?: SortOrderInput | SortOrder
    Remarks?: SortOrderInput | SortOrder
    Created?: SortOrderInput | SortOrder
    Modified?: SortOrderInput | SortOrder
    meetings?: meetingsOrderByWithRelationInput
    staff?: staffOrderByWithRelationInput
    _relevance?: meetingmemberOrderByRelevanceInput
  }

  export type meetingmemberWhereUniqueInput = Prisma.AtLeast<{
    MeetingMemberID?: number
    AND?: meetingmemberWhereInput | meetingmemberWhereInput[]
    OR?: meetingmemberWhereInput[]
    NOT?: meetingmemberWhereInput | meetingmemberWhereInput[]
    MeetingID?: IntFilter<"meetingmember"> | number
    StaffID?: IntFilter<"meetingmember"> | number
    IsPresent?: BoolNullableFilter<"meetingmember"> | boolean | null
    Remarks?: StringNullableFilter<"meetingmember"> | string | null
    Created?: DateTimeNullableFilter<"meetingmember"> | Date | string | null
    Modified?: DateTimeNullableFilter<"meetingmember"> | Date | string | null
    meetings?: XOR<MeetingsScalarRelationFilter, meetingsWhereInput>
    staff?: XOR<StaffScalarRelationFilter, staffWhereInput>
  }, "MeetingMemberID">

  export type meetingmemberOrderByWithAggregationInput = {
    MeetingMemberID?: SortOrder
    MeetingID?: SortOrder
    StaffID?: SortOrder
    IsPresent?: SortOrderInput | SortOrder
    Remarks?: SortOrderInput | SortOrder
    Created?: SortOrderInput | SortOrder
    Modified?: SortOrderInput | SortOrder
    _count?: meetingmemberCountOrderByAggregateInput
    _avg?: meetingmemberAvgOrderByAggregateInput
    _max?: meetingmemberMaxOrderByAggregateInput
    _min?: meetingmemberMinOrderByAggregateInput
    _sum?: meetingmemberSumOrderByAggregateInput
  }

  export type meetingmemberScalarWhereWithAggregatesInput = {
    AND?: meetingmemberScalarWhereWithAggregatesInput | meetingmemberScalarWhereWithAggregatesInput[]
    OR?: meetingmemberScalarWhereWithAggregatesInput[]
    NOT?: meetingmemberScalarWhereWithAggregatesInput | meetingmemberScalarWhereWithAggregatesInput[]
    MeetingMemberID?: IntWithAggregatesFilter<"meetingmember"> | number
    MeetingID?: IntWithAggregatesFilter<"meetingmember"> | number
    StaffID?: IntWithAggregatesFilter<"meetingmember"> | number
    IsPresent?: BoolNullableWithAggregatesFilter<"meetingmember"> | boolean | null
    Remarks?: StringNullableWithAggregatesFilter<"meetingmember"> | string | null
    Created?: DateTimeNullableWithAggregatesFilter<"meetingmember"> | Date | string | null
    Modified?: DateTimeNullableWithAggregatesFilter<"meetingmember"> | Date | string | null
  }

  export type meetingsWhereInput = {
    AND?: meetingsWhereInput | meetingsWhereInput[]
    OR?: meetingsWhereInput[]
    NOT?: meetingsWhereInput | meetingsWhereInput[]
    MeetingID?: IntFilter<"meetings"> | number
    MeetingDate?: DateTimeFilter<"meetings"> | Date | string
    MeetingTypeID?: IntFilter<"meetings"> | number
    VenueID?: IntNullableFilter<"meetings"> | number | null
    MeetingDescription?: StringNullableFilter<"meetings"> | string | null
    DocumentPath?: StringNullableFilter<"meetings"> | string | null
    Created?: DateTimeNullableFilter<"meetings"> | Date | string | null
    Modified?: DateTimeNullableFilter<"meetings"> | Date | string | null
    IsCancelled?: BoolNullableFilter<"meetings"> | boolean | null
    CancellationDateTime?: DateTimeNullableFilter<"meetings"> | Date | string | null
    CancellationReason?: StringNullableFilter<"meetings"> | string | null
    meetingmember?: MeetingmemberListRelationFilter
    actionitem?: ActionitemListRelationFilter
    meetingtype?: XOR<MeetingtypeScalarRelationFilter, meetingtypeWhereInput>
    venue?: XOR<VenueNullableScalarRelationFilter, venueWhereInput> | null
  }

  export type meetingsOrderByWithRelationInput = {
    MeetingID?: SortOrder
    MeetingDate?: SortOrder
    MeetingTypeID?: SortOrder
    VenueID?: SortOrderInput | SortOrder
    MeetingDescription?: SortOrderInput | SortOrder
    DocumentPath?: SortOrderInput | SortOrder
    Created?: SortOrderInput | SortOrder
    Modified?: SortOrderInput | SortOrder
    IsCancelled?: SortOrderInput | SortOrder
    CancellationDateTime?: SortOrderInput | SortOrder
    CancellationReason?: SortOrderInput | SortOrder
    meetingmember?: meetingmemberOrderByRelationAggregateInput
    actionitem?: actionitemOrderByRelationAggregateInput
    meetingtype?: meetingtypeOrderByWithRelationInput
    venue?: venueOrderByWithRelationInput
    _relevance?: meetingsOrderByRelevanceInput
  }

  export type meetingsWhereUniqueInput = Prisma.AtLeast<{
    MeetingID?: number
    AND?: meetingsWhereInput | meetingsWhereInput[]
    OR?: meetingsWhereInput[]
    NOT?: meetingsWhereInput | meetingsWhereInput[]
    MeetingDate?: DateTimeFilter<"meetings"> | Date | string
    MeetingTypeID?: IntFilter<"meetings"> | number
    VenueID?: IntNullableFilter<"meetings"> | number | null
    MeetingDescription?: StringNullableFilter<"meetings"> | string | null
    DocumentPath?: StringNullableFilter<"meetings"> | string | null
    Created?: DateTimeNullableFilter<"meetings"> | Date | string | null
    Modified?: DateTimeNullableFilter<"meetings"> | Date | string | null
    IsCancelled?: BoolNullableFilter<"meetings"> | boolean | null
    CancellationDateTime?: DateTimeNullableFilter<"meetings"> | Date | string | null
    CancellationReason?: StringNullableFilter<"meetings"> | string | null
    meetingmember?: MeetingmemberListRelationFilter
    actionitem?: ActionitemListRelationFilter
    meetingtype?: XOR<MeetingtypeScalarRelationFilter, meetingtypeWhereInput>
    venue?: XOR<VenueNullableScalarRelationFilter, venueWhereInput> | null
  }, "MeetingID">

  export type meetingsOrderByWithAggregationInput = {
    MeetingID?: SortOrder
    MeetingDate?: SortOrder
    MeetingTypeID?: SortOrder
    VenueID?: SortOrderInput | SortOrder
    MeetingDescription?: SortOrderInput | SortOrder
    DocumentPath?: SortOrderInput | SortOrder
    Created?: SortOrderInput | SortOrder
    Modified?: SortOrderInput | SortOrder
    IsCancelled?: SortOrderInput | SortOrder
    CancellationDateTime?: SortOrderInput | SortOrder
    CancellationReason?: SortOrderInput | SortOrder
    _count?: meetingsCountOrderByAggregateInput
    _avg?: meetingsAvgOrderByAggregateInput
    _max?: meetingsMaxOrderByAggregateInput
    _min?: meetingsMinOrderByAggregateInput
    _sum?: meetingsSumOrderByAggregateInput
  }

  export type meetingsScalarWhereWithAggregatesInput = {
    AND?: meetingsScalarWhereWithAggregatesInput | meetingsScalarWhereWithAggregatesInput[]
    OR?: meetingsScalarWhereWithAggregatesInput[]
    NOT?: meetingsScalarWhereWithAggregatesInput | meetingsScalarWhereWithAggregatesInput[]
    MeetingID?: IntWithAggregatesFilter<"meetings"> | number
    MeetingDate?: DateTimeWithAggregatesFilter<"meetings"> | Date | string
    MeetingTypeID?: IntWithAggregatesFilter<"meetings"> | number
    VenueID?: IntNullableWithAggregatesFilter<"meetings"> | number | null
    MeetingDescription?: StringNullableWithAggregatesFilter<"meetings"> | string | null
    DocumentPath?: StringNullableWithAggregatesFilter<"meetings"> | string | null
    Created?: DateTimeNullableWithAggregatesFilter<"meetings"> | Date | string | null
    Modified?: DateTimeNullableWithAggregatesFilter<"meetings"> | Date | string | null
    IsCancelled?: BoolNullableWithAggregatesFilter<"meetings"> | boolean | null
    CancellationDateTime?: DateTimeNullableWithAggregatesFilter<"meetings"> | Date | string | null
    CancellationReason?: StringNullableWithAggregatesFilter<"meetings"> | string | null
  }

  export type meetingtypeWhereInput = {
    AND?: meetingtypeWhereInput | meetingtypeWhereInput[]
    OR?: meetingtypeWhereInput[]
    NOT?: meetingtypeWhereInput | meetingtypeWhereInput[]
    MeetingTypeID?: IntFilter<"meetingtype"> | number
    MeetingTypeName?: StringFilter<"meetingtype"> | string
    Remarks?: StringNullableFilter<"meetingtype"> | string | null
    Created?: DateTimeNullableFilter<"meetingtype"> | Date | string | null
    Modified?: DateTimeNullableFilter<"meetingtype"> | Date | string | null
    meetings?: MeetingsListRelationFilter
  }

  export type meetingtypeOrderByWithRelationInput = {
    MeetingTypeID?: SortOrder
    MeetingTypeName?: SortOrder
    Remarks?: SortOrderInput | SortOrder
    Created?: SortOrderInput | SortOrder
    Modified?: SortOrderInput | SortOrder
    meetings?: meetingsOrderByRelationAggregateInput
    _relevance?: meetingtypeOrderByRelevanceInput
  }

  export type meetingtypeWhereUniqueInput = Prisma.AtLeast<{
    MeetingTypeID?: number
    AND?: meetingtypeWhereInput | meetingtypeWhereInput[]
    OR?: meetingtypeWhereInput[]
    NOT?: meetingtypeWhereInput | meetingtypeWhereInput[]
    MeetingTypeName?: StringFilter<"meetingtype"> | string
    Remarks?: StringNullableFilter<"meetingtype"> | string | null
    Created?: DateTimeNullableFilter<"meetingtype"> | Date | string | null
    Modified?: DateTimeNullableFilter<"meetingtype"> | Date | string | null
    meetings?: MeetingsListRelationFilter
  }, "MeetingTypeID">

  export type meetingtypeOrderByWithAggregationInput = {
    MeetingTypeID?: SortOrder
    MeetingTypeName?: SortOrder
    Remarks?: SortOrderInput | SortOrder
    Created?: SortOrderInput | SortOrder
    Modified?: SortOrderInput | SortOrder
    _count?: meetingtypeCountOrderByAggregateInput
    _avg?: meetingtypeAvgOrderByAggregateInput
    _max?: meetingtypeMaxOrderByAggregateInput
    _min?: meetingtypeMinOrderByAggregateInput
    _sum?: meetingtypeSumOrderByAggregateInput
  }

  export type meetingtypeScalarWhereWithAggregatesInput = {
    AND?: meetingtypeScalarWhereWithAggregatesInput | meetingtypeScalarWhereWithAggregatesInput[]
    OR?: meetingtypeScalarWhereWithAggregatesInput[]
    NOT?: meetingtypeScalarWhereWithAggregatesInput | meetingtypeScalarWhereWithAggregatesInput[]
    MeetingTypeID?: IntWithAggregatesFilter<"meetingtype"> | number
    MeetingTypeName?: StringWithAggregatesFilter<"meetingtype"> | string
    Remarks?: StringNullableWithAggregatesFilter<"meetingtype"> | string | null
    Created?: DateTimeNullableWithAggregatesFilter<"meetingtype"> | Date | string | null
    Modified?: DateTimeNullableWithAggregatesFilter<"meetingtype"> | Date | string | null
  }

  export type staffWhereInput = {
    AND?: staffWhereInput | staffWhereInput[]
    OR?: staffWhereInput[]
    NOT?: staffWhereInput | staffWhereInput[]
    StaffID?: IntFilter<"staff"> | number
    StaffName?: StringFilter<"staff"> | string
    MobileNo?: StringNullableFilter<"staff"> | string | null
    EmailAddress?: StringNullableFilter<"staff"> | string | null
    DepartmentID?: IntNullableFilter<"staff"> | number | null
    Remarks?: StringNullableFilter<"staff"> | string | null
    Created?: DateTimeNullableFilter<"staff"> | Date | string | null
    Modified?: DateTimeNullableFilter<"staff"> | Date | string | null
    department?: XOR<DepartmentNullableScalarRelationFilter, departmentWhereInput> | null
    meetingmember?: MeetingmemberListRelationFilter
    actionitem?: ActionitemListRelationFilter
  }

  export type staffOrderByWithRelationInput = {
    StaffID?: SortOrder
    StaffName?: SortOrder
    MobileNo?: SortOrderInput | SortOrder
    EmailAddress?: SortOrderInput | SortOrder
    DepartmentID?: SortOrderInput | SortOrder
    Remarks?: SortOrderInput | SortOrder
    Created?: SortOrderInput | SortOrder
    Modified?: SortOrderInput | SortOrder
    department?: departmentOrderByWithRelationInput
    meetingmember?: meetingmemberOrderByRelationAggregateInput
    actionitem?: actionitemOrderByRelationAggregateInput
    _relevance?: staffOrderByRelevanceInput
  }

  export type staffWhereUniqueInput = Prisma.AtLeast<{
    StaffID?: number
    AND?: staffWhereInput | staffWhereInput[]
    OR?: staffWhereInput[]
    NOT?: staffWhereInput | staffWhereInput[]
    StaffName?: StringFilter<"staff"> | string
    MobileNo?: StringNullableFilter<"staff"> | string | null
    EmailAddress?: StringNullableFilter<"staff"> | string | null
    DepartmentID?: IntNullableFilter<"staff"> | number | null
    Remarks?: StringNullableFilter<"staff"> | string | null
    Created?: DateTimeNullableFilter<"staff"> | Date | string | null
    Modified?: DateTimeNullableFilter<"staff"> | Date | string | null
    department?: XOR<DepartmentNullableScalarRelationFilter, departmentWhereInput> | null
    meetingmember?: MeetingmemberListRelationFilter
    actionitem?: ActionitemListRelationFilter
  }, "StaffID">

  export type staffOrderByWithAggregationInput = {
    StaffID?: SortOrder
    StaffName?: SortOrder
    MobileNo?: SortOrderInput | SortOrder
    EmailAddress?: SortOrderInput | SortOrder
    DepartmentID?: SortOrderInput | SortOrder
    Remarks?: SortOrderInput | SortOrder
    Created?: SortOrderInput | SortOrder
    Modified?: SortOrderInput | SortOrder
    _count?: staffCountOrderByAggregateInput
    _avg?: staffAvgOrderByAggregateInput
    _max?: staffMaxOrderByAggregateInput
    _min?: staffMinOrderByAggregateInput
    _sum?: staffSumOrderByAggregateInput
  }

  export type staffScalarWhereWithAggregatesInput = {
    AND?: staffScalarWhereWithAggregatesInput | staffScalarWhereWithAggregatesInput[]
    OR?: staffScalarWhereWithAggregatesInput[]
    NOT?: staffScalarWhereWithAggregatesInput | staffScalarWhereWithAggregatesInput[]
    StaffID?: IntWithAggregatesFilter<"staff"> | number
    StaffName?: StringWithAggregatesFilter<"staff"> | string
    MobileNo?: StringNullableWithAggregatesFilter<"staff"> | string | null
    EmailAddress?: StringNullableWithAggregatesFilter<"staff"> | string | null
    DepartmentID?: IntNullableWithAggregatesFilter<"staff"> | number | null
    Remarks?: StringNullableWithAggregatesFilter<"staff"> | string | null
    Created?: DateTimeNullableWithAggregatesFilter<"staff"> | Date | string | null
    Modified?: DateTimeNullableWithAggregatesFilter<"staff"> | Date | string | null
  }

  export type venueWhereInput = {
    AND?: venueWhereInput | venueWhereInput[]
    OR?: venueWhereInput[]
    NOT?: venueWhereInput | venueWhereInput[]
    VenueID?: IntFilter<"venue"> | number
    VenueName?: StringFilter<"venue"> | string
    Location?: StringNullableFilter<"venue"> | string | null
    Capacity?: IntNullableFilter<"venue"> | number | null
    Created?: DateTimeNullableFilter<"venue"> | Date | string | null
    Modified?: DateTimeNullableFilter<"venue"> | Date | string | null
    meetings?: MeetingsListRelationFilter
  }

  export type venueOrderByWithRelationInput = {
    VenueID?: SortOrder
    VenueName?: SortOrder
    Location?: SortOrderInput | SortOrder
    Capacity?: SortOrderInput | SortOrder
    Created?: SortOrderInput | SortOrder
    Modified?: SortOrderInput | SortOrder
    meetings?: meetingsOrderByRelationAggregateInput
    _relevance?: venueOrderByRelevanceInput
  }

  export type venueWhereUniqueInput = Prisma.AtLeast<{
    VenueID?: number
    AND?: venueWhereInput | venueWhereInput[]
    OR?: venueWhereInput[]
    NOT?: venueWhereInput | venueWhereInput[]
    VenueName?: StringFilter<"venue"> | string
    Location?: StringNullableFilter<"venue"> | string | null
    Capacity?: IntNullableFilter<"venue"> | number | null
    Created?: DateTimeNullableFilter<"venue"> | Date | string | null
    Modified?: DateTimeNullableFilter<"venue"> | Date | string | null
    meetings?: MeetingsListRelationFilter
  }, "VenueID">

  export type venueOrderByWithAggregationInput = {
    VenueID?: SortOrder
    VenueName?: SortOrder
    Location?: SortOrderInput | SortOrder
    Capacity?: SortOrderInput | SortOrder
    Created?: SortOrderInput | SortOrder
    Modified?: SortOrderInput | SortOrder
    _count?: venueCountOrderByAggregateInput
    _avg?: venueAvgOrderByAggregateInput
    _max?: venueMaxOrderByAggregateInput
    _min?: venueMinOrderByAggregateInput
    _sum?: venueSumOrderByAggregateInput
  }

  export type venueScalarWhereWithAggregatesInput = {
    AND?: venueScalarWhereWithAggregatesInput | venueScalarWhereWithAggregatesInput[]
    OR?: venueScalarWhereWithAggregatesInput[]
    NOT?: venueScalarWhereWithAggregatesInput | venueScalarWhereWithAggregatesInput[]
    VenueID?: IntWithAggregatesFilter<"venue"> | number
    VenueName?: StringWithAggregatesFilter<"venue"> | string
    Location?: StringNullableWithAggregatesFilter<"venue"> | string | null
    Capacity?: IntNullableWithAggregatesFilter<"venue"> | number | null
    Created?: DateTimeNullableWithAggregatesFilter<"venue"> | Date | string | null
    Modified?: DateTimeNullableWithAggregatesFilter<"venue"> | Date | string | null
  }

  export type actionitemWhereInput = {
    AND?: actionitemWhereInput | actionitemWhereInput[]
    OR?: actionitemWhereInput[]
    NOT?: actionitemWhereInput | actionitemWhereInput[]
    ActionItemID?: IntFilter<"actionitem"> | number
    MeetingID?: IntNullableFilter<"actionitem"> | number | null
    StaffID?: IntNullableFilter<"actionitem"> | number | null
    Description?: StringFilter<"actionitem"> | string
    Status?: Enumaction_item_statusFilter<"actionitem"> | $Enums.action_item_status
    DueDate?: DateTimeNullableFilter<"actionitem"> | Date | string | null
    Created?: DateTimeNullableFilter<"actionitem"> | Date | string | null
    Modified?: DateTimeNullableFilter<"actionitem"> | Date | string | null
    meetings?: XOR<MeetingsNullableScalarRelationFilter, meetingsWhereInput> | null
    staff?: XOR<StaffNullableScalarRelationFilter, staffWhereInput> | null
  }

  export type actionitemOrderByWithRelationInput = {
    ActionItemID?: SortOrder
    MeetingID?: SortOrderInput | SortOrder
    StaffID?: SortOrderInput | SortOrder
    Description?: SortOrder
    Status?: SortOrder
    DueDate?: SortOrderInput | SortOrder
    Created?: SortOrderInput | SortOrder
    Modified?: SortOrderInput | SortOrder
    meetings?: meetingsOrderByWithRelationInput
    staff?: staffOrderByWithRelationInput
    _relevance?: actionitemOrderByRelevanceInput
  }

  export type actionitemWhereUniqueInput = Prisma.AtLeast<{
    ActionItemID?: number
    AND?: actionitemWhereInput | actionitemWhereInput[]
    OR?: actionitemWhereInput[]
    NOT?: actionitemWhereInput | actionitemWhereInput[]
    MeetingID?: IntNullableFilter<"actionitem"> | number | null
    StaffID?: IntNullableFilter<"actionitem"> | number | null
    Description?: StringFilter<"actionitem"> | string
    Status?: Enumaction_item_statusFilter<"actionitem"> | $Enums.action_item_status
    DueDate?: DateTimeNullableFilter<"actionitem"> | Date | string | null
    Created?: DateTimeNullableFilter<"actionitem"> | Date | string | null
    Modified?: DateTimeNullableFilter<"actionitem"> | Date | string | null
    meetings?: XOR<MeetingsNullableScalarRelationFilter, meetingsWhereInput> | null
    staff?: XOR<StaffNullableScalarRelationFilter, staffWhereInput> | null
  }, "ActionItemID">

  export type actionitemOrderByWithAggregationInput = {
    ActionItemID?: SortOrder
    MeetingID?: SortOrderInput | SortOrder
    StaffID?: SortOrderInput | SortOrder
    Description?: SortOrder
    Status?: SortOrder
    DueDate?: SortOrderInput | SortOrder
    Created?: SortOrderInput | SortOrder
    Modified?: SortOrderInput | SortOrder
    _count?: actionitemCountOrderByAggregateInput
    _avg?: actionitemAvgOrderByAggregateInput
    _max?: actionitemMaxOrderByAggregateInput
    _min?: actionitemMinOrderByAggregateInput
    _sum?: actionitemSumOrderByAggregateInput
  }

  export type actionitemScalarWhereWithAggregatesInput = {
    AND?: actionitemScalarWhereWithAggregatesInput | actionitemScalarWhereWithAggregatesInput[]
    OR?: actionitemScalarWhereWithAggregatesInput[]
    NOT?: actionitemScalarWhereWithAggregatesInput | actionitemScalarWhereWithAggregatesInput[]
    ActionItemID?: IntWithAggregatesFilter<"actionitem"> | number
    MeetingID?: IntNullableWithAggregatesFilter<"actionitem"> | number | null
    StaffID?: IntNullableWithAggregatesFilter<"actionitem"> | number | null
    Description?: StringWithAggregatesFilter<"actionitem"> | string
    Status?: Enumaction_item_statusWithAggregatesFilter<"actionitem"> | $Enums.action_item_status
    DueDate?: DateTimeNullableWithAggregatesFilter<"actionitem"> | Date | string | null
    Created?: DateTimeNullableWithAggregatesFilter<"actionitem"> | Date | string | null
    Modified?: DateTimeNullableWithAggregatesFilter<"actionitem"> | Date | string | null
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: StringFilter<"user"> | string
    fullName?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    phone?: StringNullableFilter<"user"> | string | null
    organization?: StringNullableFilter<"user"> | string | null
    password?: StringFilter<"user"> | string
    role?: Enumuser_roleNullableFilter<"user"> | $Enums.user_role | null
    createdAt?: DateTimeNullableFilter<"user"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"user"> | Date | string | null
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    organization?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _relevance?: userOrderByRelevanceInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    fullName?: StringFilter<"user"> | string
    phone?: StringNullableFilter<"user"> | string | null
    organization?: StringNullableFilter<"user"> | string | null
    password?: StringFilter<"user"> | string
    role?: Enumuser_roleNullableFilter<"user"> | $Enums.user_role | null
    createdAt?: DateTimeNullableFilter<"user"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"user"> | Date | string | null
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    organization?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user"> | string
    fullName?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    phone?: StringNullableWithAggregatesFilter<"user"> | string | null
    organization?: StringNullableWithAggregatesFilter<"user"> | string | null
    password?: StringWithAggregatesFilter<"user"> | string
    role?: Enumuser_roleNullableWithAggregatesFilter<"user"> | $Enums.user_role | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
  }

  export type departmentCreateInput = {
    DepartmentName: string
    DepartmentCode?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    staff?: staffCreateNestedManyWithoutDepartmentInput
  }

  export type departmentUncheckedCreateInput = {
    DepartmentID?: number
    DepartmentName: string
    DepartmentCode?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    staff?: staffUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type departmentUpdateInput = {
    DepartmentName?: StringFieldUpdateOperationsInput | string
    DepartmentCode?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    staff?: staffUpdateManyWithoutDepartmentNestedInput
  }

  export type departmentUncheckedUpdateInput = {
    DepartmentID?: IntFieldUpdateOperationsInput | number
    DepartmentName?: StringFieldUpdateOperationsInput | string
    DepartmentCode?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    staff?: staffUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type departmentCreateManyInput = {
    DepartmentID?: number
    DepartmentName: string
    DepartmentCode?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
  }

  export type departmentUpdateManyMutationInput = {
    DepartmentName?: StringFieldUpdateOperationsInput | string
    DepartmentCode?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type departmentUncheckedUpdateManyInput = {
    DepartmentID?: IntFieldUpdateOperationsInput | number
    DepartmentName?: StringFieldUpdateOperationsInput | string
    DepartmentCode?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type meetingmemberCreateInput = {
    IsPresent?: boolean | null
    Remarks?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    meetings: meetingsCreateNestedOneWithoutMeetingmemberInput
    staff: staffCreateNestedOneWithoutMeetingmemberInput
  }

  export type meetingmemberUncheckedCreateInput = {
    MeetingMemberID?: number
    MeetingID: number
    StaffID: number
    IsPresent?: boolean | null
    Remarks?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
  }

  export type meetingmemberUpdateInput = {
    IsPresent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meetings?: meetingsUpdateOneRequiredWithoutMeetingmemberNestedInput
    staff?: staffUpdateOneRequiredWithoutMeetingmemberNestedInput
  }

  export type meetingmemberUncheckedUpdateInput = {
    MeetingMemberID?: IntFieldUpdateOperationsInput | number
    MeetingID?: IntFieldUpdateOperationsInput | number
    StaffID?: IntFieldUpdateOperationsInput | number
    IsPresent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type meetingmemberCreateManyInput = {
    MeetingMemberID?: number
    MeetingID: number
    StaffID: number
    IsPresent?: boolean | null
    Remarks?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
  }

  export type meetingmemberUpdateManyMutationInput = {
    IsPresent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type meetingmemberUncheckedUpdateManyInput = {
    MeetingMemberID?: IntFieldUpdateOperationsInput | number
    MeetingID?: IntFieldUpdateOperationsInput | number
    StaffID?: IntFieldUpdateOperationsInput | number
    IsPresent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type meetingsCreateInput = {
    MeetingDate: Date | string
    MeetingDescription?: string | null
    DocumentPath?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    IsCancelled?: boolean | null
    CancellationDateTime?: Date | string | null
    CancellationReason?: string | null
    meetingmember?: meetingmemberCreateNestedManyWithoutMeetingsInput
    actionitem?: actionitemCreateNestedManyWithoutMeetingsInput
    meetingtype: meetingtypeCreateNestedOneWithoutMeetingsInput
    venue?: venueCreateNestedOneWithoutMeetingsInput
  }

  export type meetingsUncheckedCreateInput = {
    MeetingID?: number
    MeetingDate: Date | string
    MeetingTypeID: number
    VenueID?: number | null
    MeetingDescription?: string | null
    DocumentPath?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    IsCancelled?: boolean | null
    CancellationDateTime?: Date | string | null
    CancellationReason?: string | null
    meetingmember?: meetingmemberUncheckedCreateNestedManyWithoutMeetingsInput
    actionitem?: actionitemUncheckedCreateNestedManyWithoutMeetingsInput
  }

  export type meetingsUpdateInput = {
    MeetingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    MeetingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsCancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    CancellationDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    meetingmember?: meetingmemberUpdateManyWithoutMeetingsNestedInput
    actionitem?: actionitemUpdateManyWithoutMeetingsNestedInput
    meetingtype?: meetingtypeUpdateOneRequiredWithoutMeetingsNestedInput
    venue?: venueUpdateOneWithoutMeetingsNestedInput
  }

  export type meetingsUncheckedUpdateInput = {
    MeetingID?: IntFieldUpdateOperationsInput | number
    MeetingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    MeetingTypeID?: IntFieldUpdateOperationsInput | number
    VenueID?: NullableIntFieldUpdateOperationsInput | number | null
    MeetingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsCancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    CancellationDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    meetingmember?: meetingmemberUncheckedUpdateManyWithoutMeetingsNestedInput
    actionitem?: actionitemUncheckedUpdateManyWithoutMeetingsNestedInput
  }

  export type meetingsCreateManyInput = {
    MeetingID?: number
    MeetingDate: Date | string
    MeetingTypeID: number
    VenueID?: number | null
    MeetingDescription?: string | null
    DocumentPath?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    IsCancelled?: boolean | null
    CancellationDateTime?: Date | string | null
    CancellationReason?: string | null
  }

  export type meetingsUpdateManyMutationInput = {
    MeetingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    MeetingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsCancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    CancellationDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type meetingsUncheckedUpdateManyInput = {
    MeetingID?: IntFieldUpdateOperationsInput | number
    MeetingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    MeetingTypeID?: IntFieldUpdateOperationsInput | number
    VenueID?: NullableIntFieldUpdateOperationsInput | number | null
    MeetingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsCancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    CancellationDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type meetingtypeCreateInput = {
    MeetingTypeName: string
    Remarks?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    meetings?: meetingsCreateNestedManyWithoutMeetingtypeInput
  }

  export type meetingtypeUncheckedCreateInput = {
    MeetingTypeID?: number
    MeetingTypeName: string
    Remarks?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    meetings?: meetingsUncheckedCreateNestedManyWithoutMeetingtypeInput
  }

  export type meetingtypeUpdateInput = {
    MeetingTypeName?: StringFieldUpdateOperationsInput | string
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meetings?: meetingsUpdateManyWithoutMeetingtypeNestedInput
  }

  export type meetingtypeUncheckedUpdateInput = {
    MeetingTypeID?: IntFieldUpdateOperationsInput | number
    MeetingTypeName?: StringFieldUpdateOperationsInput | string
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meetings?: meetingsUncheckedUpdateManyWithoutMeetingtypeNestedInput
  }

  export type meetingtypeCreateManyInput = {
    MeetingTypeID?: number
    MeetingTypeName: string
    Remarks?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
  }

  export type meetingtypeUpdateManyMutationInput = {
    MeetingTypeName?: StringFieldUpdateOperationsInput | string
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type meetingtypeUncheckedUpdateManyInput = {
    MeetingTypeID?: IntFieldUpdateOperationsInput | number
    MeetingTypeName?: StringFieldUpdateOperationsInput | string
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type staffCreateInput = {
    StaffName: string
    MobileNo?: string | null
    EmailAddress?: string | null
    Remarks?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    department?: departmentCreateNestedOneWithoutStaffInput
    meetingmember?: meetingmemberCreateNestedManyWithoutStaffInput
    actionitem?: actionitemCreateNestedManyWithoutStaffInput
  }

  export type staffUncheckedCreateInput = {
    StaffID?: number
    StaffName: string
    MobileNo?: string | null
    EmailAddress?: string | null
    DepartmentID?: number | null
    Remarks?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    meetingmember?: meetingmemberUncheckedCreateNestedManyWithoutStaffInput
    actionitem?: actionitemUncheckedCreateNestedManyWithoutStaffInput
  }

  export type staffUpdateInput = {
    StaffName?: StringFieldUpdateOperationsInput | string
    MobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    EmailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    department?: departmentUpdateOneWithoutStaffNestedInput
    meetingmember?: meetingmemberUpdateManyWithoutStaffNestedInput
    actionitem?: actionitemUpdateManyWithoutStaffNestedInput
  }

  export type staffUncheckedUpdateInput = {
    StaffID?: IntFieldUpdateOperationsInput | number
    StaffName?: StringFieldUpdateOperationsInput | string
    MobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    EmailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    DepartmentID?: NullableIntFieldUpdateOperationsInput | number | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meetingmember?: meetingmemberUncheckedUpdateManyWithoutStaffNestedInput
    actionitem?: actionitemUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type staffCreateManyInput = {
    StaffID?: number
    StaffName: string
    MobileNo?: string | null
    EmailAddress?: string | null
    DepartmentID?: number | null
    Remarks?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
  }

  export type staffUpdateManyMutationInput = {
    StaffName?: StringFieldUpdateOperationsInput | string
    MobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    EmailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type staffUncheckedUpdateManyInput = {
    StaffID?: IntFieldUpdateOperationsInput | number
    StaffName?: StringFieldUpdateOperationsInput | string
    MobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    EmailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    DepartmentID?: NullableIntFieldUpdateOperationsInput | number | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type venueCreateInput = {
    VenueName: string
    Location?: string | null
    Capacity?: number | null
    Created?: Date | string | null
    Modified?: Date | string | null
    meetings?: meetingsCreateNestedManyWithoutVenueInput
  }

  export type venueUncheckedCreateInput = {
    VenueID?: number
    VenueName: string
    Location?: string | null
    Capacity?: number | null
    Created?: Date | string | null
    Modified?: Date | string | null
    meetings?: meetingsUncheckedCreateNestedManyWithoutVenueInput
  }

  export type venueUpdateInput = {
    VenueName?: StringFieldUpdateOperationsInput | string
    Location?: NullableStringFieldUpdateOperationsInput | string | null
    Capacity?: NullableIntFieldUpdateOperationsInput | number | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meetings?: meetingsUpdateManyWithoutVenueNestedInput
  }

  export type venueUncheckedUpdateInput = {
    VenueID?: IntFieldUpdateOperationsInput | number
    VenueName?: StringFieldUpdateOperationsInput | string
    Location?: NullableStringFieldUpdateOperationsInput | string | null
    Capacity?: NullableIntFieldUpdateOperationsInput | number | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meetings?: meetingsUncheckedUpdateManyWithoutVenueNestedInput
  }

  export type venueCreateManyInput = {
    VenueID?: number
    VenueName: string
    Location?: string | null
    Capacity?: number | null
    Created?: Date | string | null
    Modified?: Date | string | null
  }

  export type venueUpdateManyMutationInput = {
    VenueName?: StringFieldUpdateOperationsInput | string
    Location?: NullableStringFieldUpdateOperationsInput | string | null
    Capacity?: NullableIntFieldUpdateOperationsInput | number | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type venueUncheckedUpdateManyInput = {
    VenueID?: IntFieldUpdateOperationsInput | number
    VenueName?: StringFieldUpdateOperationsInput | string
    Location?: NullableStringFieldUpdateOperationsInput | string | null
    Capacity?: NullableIntFieldUpdateOperationsInput | number | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type actionitemCreateInput = {
    Description: string
    Status?: $Enums.action_item_status
    DueDate?: Date | string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    meetings?: meetingsCreateNestedOneWithoutActionitemInput
    staff?: staffCreateNestedOneWithoutActionitemInput
  }

  export type actionitemUncheckedCreateInput = {
    ActionItemID?: number
    MeetingID?: number | null
    StaffID?: number | null
    Description: string
    Status?: $Enums.action_item_status
    DueDate?: Date | string | null
    Created?: Date | string | null
    Modified?: Date | string | null
  }

  export type actionitemUpdateInput = {
    Description?: StringFieldUpdateOperationsInput | string
    Status?: Enumaction_item_statusFieldUpdateOperationsInput | $Enums.action_item_status
    DueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meetings?: meetingsUpdateOneWithoutActionitemNestedInput
    staff?: staffUpdateOneWithoutActionitemNestedInput
  }

  export type actionitemUncheckedUpdateInput = {
    ActionItemID?: IntFieldUpdateOperationsInput | number
    MeetingID?: NullableIntFieldUpdateOperationsInput | number | null
    StaffID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: StringFieldUpdateOperationsInput | string
    Status?: Enumaction_item_statusFieldUpdateOperationsInput | $Enums.action_item_status
    DueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type actionitemCreateManyInput = {
    ActionItemID?: number
    MeetingID?: number | null
    StaffID?: number | null
    Description: string
    Status?: $Enums.action_item_status
    DueDate?: Date | string | null
    Created?: Date | string | null
    Modified?: Date | string | null
  }

  export type actionitemUpdateManyMutationInput = {
    Description?: StringFieldUpdateOperationsInput | string
    Status?: Enumaction_item_statusFieldUpdateOperationsInput | $Enums.action_item_status
    DueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type actionitemUncheckedUpdateManyInput = {
    ActionItemID?: IntFieldUpdateOperationsInput | number
    MeetingID?: NullableIntFieldUpdateOperationsInput | number | null
    StaffID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: StringFieldUpdateOperationsInput | string
    Status?: Enumaction_item_statusFieldUpdateOperationsInput | $Enums.action_item_status
    DueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userCreateInput = {
    id?: string
    fullName: string
    email: string
    phone?: string | null
    organization?: string | null
    password: string
    role?: $Enums.user_role | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type userUncheckedCreateInput = {
    id?: string
    fullName: string
    email: string
    phone?: string | null
    organization?: string | null
    password: string
    role?: $Enums.user_role | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userCreateManyInput = {
    id?: string
    fullName: string
    email: string
    phone?: string | null
    organization?: string | null
    password: string
    role?: $Enums.user_role | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StaffListRelationFilter = {
    every?: staffWhereInput
    some?: staffWhereInput
    none?: staffWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type staffOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type departmentOrderByRelevanceInput = {
    fields: departmentOrderByRelevanceFieldEnum | departmentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type departmentCountOrderByAggregateInput = {
    DepartmentID?: SortOrder
    DepartmentName?: SortOrder
    DepartmentCode?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type departmentAvgOrderByAggregateInput = {
    DepartmentID?: SortOrder
  }

  export type departmentMaxOrderByAggregateInput = {
    DepartmentID?: SortOrder
    DepartmentName?: SortOrder
    DepartmentCode?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type departmentMinOrderByAggregateInput = {
    DepartmentID?: SortOrder
    DepartmentName?: SortOrder
    DepartmentCode?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type departmentSumOrderByAggregateInput = {
    DepartmentID?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type MeetingsScalarRelationFilter = {
    is?: meetingsWhereInput
    isNot?: meetingsWhereInput
  }

  export type StaffScalarRelationFilter = {
    is?: staffWhereInput
    isNot?: staffWhereInput
  }

  export type meetingmemberOrderByRelevanceInput = {
    fields: meetingmemberOrderByRelevanceFieldEnum | meetingmemberOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type meetingmemberCountOrderByAggregateInput = {
    MeetingMemberID?: SortOrder
    MeetingID?: SortOrder
    StaffID?: SortOrder
    IsPresent?: SortOrder
    Remarks?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type meetingmemberAvgOrderByAggregateInput = {
    MeetingMemberID?: SortOrder
    MeetingID?: SortOrder
    StaffID?: SortOrder
  }

  export type meetingmemberMaxOrderByAggregateInput = {
    MeetingMemberID?: SortOrder
    MeetingID?: SortOrder
    StaffID?: SortOrder
    IsPresent?: SortOrder
    Remarks?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type meetingmemberMinOrderByAggregateInput = {
    MeetingMemberID?: SortOrder
    MeetingID?: SortOrder
    StaffID?: SortOrder
    IsPresent?: SortOrder
    Remarks?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type meetingmemberSumOrderByAggregateInput = {
    MeetingMemberID?: SortOrder
    MeetingID?: SortOrder
    StaffID?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type MeetingmemberListRelationFilter = {
    every?: meetingmemberWhereInput
    some?: meetingmemberWhereInput
    none?: meetingmemberWhereInput
  }

  export type ActionitemListRelationFilter = {
    every?: actionitemWhereInput
    some?: actionitemWhereInput
    none?: actionitemWhereInput
  }

  export type MeetingtypeScalarRelationFilter = {
    is?: meetingtypeWhereInput
    isNot?: meetingtypeWhereInput
  }

  export type VenueNullableScalarRelationFilter = {
    is?: venueWhereInput | null
    isNot?: venueWhereInput | null
  }

  export type meetingmemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type actionitemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type meetingsOrderByRelevanceInput = {
    fields: meetingsOrderByRelevanceFieldEnum | meetingsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type meetingsCountOrderByAggregateInput = {
    MeetingID?: SortOrder
    MeetingDate?: SortOrder
    MeetingTypeID?: SortOrder
    VenueID?: SortOrder
    MeetingDescription?: SortOrder
    DocumentPath?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    IsCancelled?: SortOrder
    CancellationDateTime?: SortOrder
    CancellationReason?: SortOrder
  }

  export type meetingsAvgOrderByAggregateInput = {
    MeetingID?: SortOrder
    MeetingTypeID?: SortOrder
    VenueID?: SortOrder
  }

  export type meetingsMaxOrderByAggregateInput = {
    MeetingID?: SortOrder
    MeetingDate?: SortOrder
    MeetingTypeID?: SortOrder
    VenueID?: SortOrder
    MeetingDescription?: SortOrder
    DocumentPath?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    IsCancelled?: SortOrder
    CancellationDateTime?: SortOrder
    CancellationReason?: SortOrder
  }

  export type meetingsMinOrderByAggregateInput = {
    MeetingID?: SortOrder
    MeetingDate?: SortOrder
    MeetingTypeID?: SortOrder
    VenueID?: SortOrder
    MeetingDescription?: SortOrder
    DocumentPath?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    IsCancelled?: SortOrder
    CancellationDateTime?: SortOrder
    CancellationReason?: SortOrder
  }

  export type meetingsSumOrderByAggregateInput = {
    MeetingID?: SortOrder
    MeetingTypeID?: SortOrder
    VenueID?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type MeetingsListRelationFilter = {
    every?: meetingsWhereInput
    some?: meetingsWhereInput
    none?: meetingsWhereInput
  }

  export type meetingsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type meetingtypeOrderByRelevanceInput = {
    fields: meetingtypeOrderByRelevanceFieldEnum | meetingtypeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type meetingtypeCountOrderByAggregateInput = {
    MeetingTypeID?: SortOrder
    MeetingTypeName?: SortOrder
    Remarks?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type meetingtypeAvgOrderByAggregateInput = {
    MeetingTypeID?: SortOrder
  }

  export type meetingtypeMaxOrderByAggregateInput = {
    MeetingTypeID?: SortOrder
    MeetingTypeName?: SortOrder
    Remarks?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type meetingtypeMinOrderByAggregateInput = {
    MeetingTypeID?: SortOrder
    MeetingTypeName?: SortOrder
    Remarks?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type meetingtypeSumOrderByAggregateInput = {
    MeetingTypeID?: SortOrder
  }

  export type DepartmentNullableScalarRelationFilter = {
    is?: departmentWhereInput | null
    isNot?: departmentWhereInput | null
  }

  export type staffOrderByRelevanceInput = {
    fields: staffOrderByRelevanceFieldEnum | staffOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type staffCountOrderByAggregateInput = {
    StaffID?: SortOrder
    StaffName?: SortOrder
    MobileNo?: SortOrder
    EmailAddress?: SortOrder
    DepartmentID?: SortOrder
    Remarks?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type staffAvgOrderByAggregateInput = {
    StaffID?: SortOrder
    DepartmentID?: SortOrder
  }

  export type staffMaxOrderByAggregateInput = {
    StaffID?: SortOrder
    StaffName?: SortOrder
    MobileNo?: SortOrder
    EmailAddress?: SortOrder
    DepartmentID?: SortOrder
    Remarks?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type staffMinOrderByAggregateInput = {
    StaffID?: SortOrder
    StaffName?: SortOrder
    MobileNo?: SortOrder
    EmailAddress?: SortOrder
    DepartmentID?: SortOrder
    Remarks?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type staffSumOrderByAggregateInput = {
    StaffID?: SortOrder
    DepartmentID?: SortOrder
  }

  export type venueOrderByRelevanceInput = {
    fields: venueOrderByRelevanceFieldEnum | venueOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type venueCountOrderByAggregateInput = {
    VenueID?: SortOrder
    VenueName?: SortOrder
    Location?: SortOrder
    Capacity?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type venueAvgOrderByAggregateInput = {
    VenueID?: SortOrder
    Capacity?: SortOrder
  }

  export type venueMaxOrderByAggregateInput = {
    VenueID?: SortOrder
    VenueName?: SortOrder
    Location?: SortOrder
    Capacity?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type venueMinOrderByAggregateInput = {
    VenueID?: SortOrder
    VenueName?: SortOrder
    Location?: SortOrder
    Capacity?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type venueSumOrderByAggregateInput = {
    VenueID?: SortOrder
    Capacity?: SortOrder
  }

  export type Enumaction_item_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.action_item_status | Enumaction_item_statusFieldRefInput<$PrismaModel>
    in?: $Enums.action_item_status[]
    notIn?: $Enums.action_item_status[]
    not?: NestedEnumaction_item_statusFilter<$PrismaModel> | $Enums.action_item_status
  }

  export type MeetingsNullableScalarRelationFilter = {
    is?: meetingsWhereInput | null
    isNot?: meetingsWhereInput | null
  }

  export type StaffNullableScalarRelationFilter = {
    is?: staffWhereInput | null
    isNot?: staffWhereInput | null
  }

  export type actionitemOrderByRelevanceInput = {
    fields: actionitemOrderByRelevanceFieldEnum | actionitemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type actionitemCountOrderByAggregateInput = {
    ActionItemID?: SortOrder
    MeetingID?: SortOrder
    StaffID?: SortOrder
    Description?: SortOrder
    Status?: SortOrder
    DueDate?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type actionitemAvgOrderByAggregateInput = {
    ActionItemID?: SortOrder
    MeetingID?: SortOrder
    StaffID?: SortOrder
  }

  export type actionitemMaxOrderByAggregateInput = {
    ActionItemID?: SortOrder
    MeetingID?: SortOrder
    StaffID?: SortOrder
    Description?: SortOrder
    Status?: SortOrder
    DueDate?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type actionitemMinOrderByAggregateInput = {
    ActionItemID?: SortOrder
    MeetingID?: SortOrder
    StaffID?: SortOrder
    Description?: SortOrder
    Status?: SortOrder
    DueDate?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type actionitemSumOrderByAggregateInput = {
    ActionItemID?: SortOrder
    MeetingID?: SortOrder
    StaffID?: SortOrder
  }

  export type Enumaction_item_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.action_item_status | Enumaction_item_statusFieldRefInput<$PrismaModel>
    in?: $Enums.action_item_status[]
    notIn?: $Enums.action_item_status[]
    not?: NestedEnumaction_item_statusWithAggregatesFilter<$PrismaModel> | $Enums.action_item_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumaction_item_statusFilter<$PrismaModel>
    _max?: NestedEnumaction_item_statusFilter<$PrismaModel>
  }

  export type Enumuser_roleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_role[] | null
    notIn?: $Enums.user_role[] | null
    not?: NestedEnumuser_roleNullableFilter<$PrismaModel> | $Enums.user_role | null
  }

  export type userOrderByRelevanceInput = {
    fields: userOrderByRelevanceFieldEnum | userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    organization?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    organization?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    organization?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Enumuser_roleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_role[] | null
    notIn?: $Enums.user_role[] | null
    not?: NestedEnumuser_roleNullableWithAggregatesFilter<$PrismaModel> | $Enums.user_role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumuser_roleNullableFilter<$PrismaModel>
    _max?: NestedEnumuser_roleNullableFilter<$PrismaModel>
  }

  export type staffCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<staffCreateWithoutDepartmentInput, staffUncheckedCreateWithoutDepartmentInput> | staffCreateWithoutDepartmentInput[] | staffUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: staffCreateOrConnectWithoutDepartmentInput | staffCreateOrConnectWithoutDepartmentInput[]
    createMany?: staffCreateManyDepartmentInputEnvelope
    connect?: staffWhereUniqueInput | staffWhereUniqueInput[]
  }

  export type staffUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<staffCreateWithoutDepartmentInput, staffUncheckedCreateWithoutDepartmentInput> | staffCreateWithoutDepartmentInput[] | staffUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: staffCreateOrConnectWithoutDepartmentInput | staffCreateOrConnectWithoutDepartmentInput[]
    createMany?: staffCreateManyDepartmentInputEnvelope
    connect?: staffWhereUniqueInput | staffWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type staffUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<staffCreateWithoutDepartmentInput, staffUncheckedCreateWithoutDepartmentInput> | staffCreateWithoutDepartmentInput[] | staffUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: staffCreateOrConnectWithoutDepartmentInput | staffCreateOrConnectWithoutDepartmentInput[]
    upsert?: staffUpsertWithWhereUniqueWithoutDepartmentInput | staffUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: staffCreateManyDepartmentInputEnvelope
    set?: staffWhereUniqueInput | staffWhereUniqueInput[]
    disconnect?: staffWhereUniqueInput | staffWhereUniqueInput[]
    delete?: staffWhereUniqueInput | staffWhereUniqueInput[]
    connect?: staffWhereUniqueInput | staffWhereUniqueInput[]
    update?: staffUpdateWithWhereUniqueWithoutDepartmentInput | staffUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: staffUpdateManyWithWhereWithoutDepartmentInput | staffUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: staffScalarWhereInput | staffScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type staffUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<staffCreateWithoutDepartmentInput, staffUncheckedCreateWithoutDepartmentInput> | staffCreateWithoutDepartmentInput[] | staffUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: staffCreateOrConnectWithoutDepartmentInput | staffCreateOrConnectWithoutDepartmentInput[]
    upsert?: staffUpsertWithWhereUniqueWithoutDepartmentInput | staffUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: staffCreateManyDepartmentInputEnvelope
    set?: staffWhereUniqueInput | staffWhereUniqueInput[]
    disconnect?: staffWhereUniqueInput | staffWhereUniqueInput[]
    delete?: staffWhereUniqueInput | staffWhereUniqueInput[]
    connect?: staffWhereUniqueInput | staffWhereUniqueInput[]
    update?: staffUpdateWithWhereUniqueWithoutDepartmentInput | staffUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: staffUpdateManyWithWhereWithoutDepartmentInput | staffUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: staffScalarWhereInput | staffScalarWhereInput[]
  }

  export type meetingsCreateNestedOneWithoutMeetingmemberInput = {
    create?: XOR<meetingsCreateWithoutMeetingmemberInput, meetingsUncheckedCreateWithoutMeetingmemberInput>
    connectOrCreate?: meetingsCreateOrConnectWithoutMeetingmemberInput
    connect?: meetingsWhereUniqueInput
  }

  export type staffCreateNestedOneWithoutMeetingmemberInput = {
    create?: XOR<staffCreateWithoutMeetingmemberInput, staffUncheckedCreateWithoutMeetingmemberInput>
    connectOrCreate?: staffCreateOrConnectWithoutMeetingmemberInput
    connect?: staffWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type meetingsUpdateOneRequiredWithoutMeetingmemberNestedInput = {
    create?: XOR<meetingsCreateWithoutMeetingmemberInput, meetingsUncheckedCreateWithoutMeetingmemberInput>
    connectOrCreate?: meetingsCreateOrConnectWithoutMeetingmemberInput
    upsert?: meetingsUpsertWithoutMeetingmemberInput
    connect?: meetingsWhereUniqueInput
    update?: XOR<XOR<meetingsUpdateToOneWithWhereWithoutMeetingmemberInput, meetingsUpdateWithoutMeetingmemberInput>, meetingsUncheckedUpdateWithoutMeetingmemberInput>
  }

  export type staffUpdateOneRequiredWithoutMeetingmemberNestedInput = {
    create?: XOR<staffCreateWithoutMeetingmemberInput, staffUncheckedCreateWithoutMeetingmemberInput>
    connectOrCreate?: staffCreateOrConnectWithoutMeetingmemberInput
    upsert?: staffUpsertWithoutMeetingmemberInput
    connect?: staffWhereUniqueInput
    update?: XOR<XOR<staffUpdateToOneWithWhereWithoutMeetingmemberInput, staffUpdateWithoutMeetingmemberInput>, staffUncheckedUpdateWithoutMeetingmemberInput>
  }

  export type meetingmemberCreateNestedManyWithoutMeetingsInput = {
    create?: XOR<meetingmemberCreateWithoutMeetingsInput, meetingmemberUncheckedCreateWithoutMeetingsInput> | meetingmemberCreateWithoutMeetingsInput[] | meetingmemberUncheckedCreateWithoutMeetingsInput[]
    connectOrCreate?: meetingmemberCreateOrConnectWithoutMeetingsInput | meetingmemberCreateOrConnectWithoutMeetingsInput[]
    createMany?: meetingmemberCreateManyMeetingsInputEnvelope
    connect?: meetingmemberWhereUniqueInput | meetingmemberWhereUniqueInput[]
  }

  export type actionitemCreateNestedManyWithoutMeetingsInput = {
    create?: XOR<actionitemCreateWithoutMeetingsInput, actionitemUncheckedCreateWithoutMeetingsInput> | actionitemCreateWithoutMeetingsInput[] | actionitemUncheckedCreateWithoutMeetingsInput[]
    connectOrCreate?: actionitemCreateOrConnectWithoutMeetingsInput | actionitemCreateOrConnectWithoutMeetingsInput[]
    createMany?: actionitemCreateManyMeetingsInputEnvelope
    connect?: actionitemWhereUniqueInput | actionitemWhereUniqueInput[]
  }

  export type meetingtypeCreateNestedOneWithoutMeetingsInput = {
    create?: XOR<meetingtypeCreateWithoutMeetingsInput, meetingtypeUncheckedCreateWithoutMeetingsInput>
    connectOrCreate?: meetingtypeCreateOrConnectWithoutMeetingsInput
    connect?: meetingtypeWhereUniqueInput
  }

  export type venueCreateNestedOneWithoutMeetingsInput = {
    create?: XOR<venueCreateWithoutMeetingsInput, venueUncheckedCreateWithoutMeetingsInput>
    connectOrCreate?: venueCreateOrConnectWithoutMeetingsInput
    connect?: venueWhereUniqueInput
  }

  export type meetingmemberUncheckedCreateNestedManyWithoutMeetingsInput = {
    create?: XOR<meetingmemberCreateWithoutMeetingsInput, meetingmemberUncheckedCreateWithoutMeetingsInput> | meetingmemberCreateWithoutMeetingsInput[] | meetingmemberUncheckedCreateWithoutMeetingsInput[]
    connectOrCreate?: meetingmemberCreateOrConnectWithoutMeetingsInput | meetingmemberCreateOrConnectWithoutMeetingsInput[]
    createMany?: meetingmemberCreateManyMeetingsInputEnvelope
    connect?: meetingmemberWhereUniqueInput | meetingmemberWhereUniqueInput[]
  }

  export type actionitemUncheckedCreateNestedManyWithoutMeetingsInput = {
    create?: XOR<actionitemCreateWithoutMeetingsInput, actionitemUncheckedCreateWithoutMeetingsInput> | actionitemCreateWithoutMeetingsInput[] | actionitemUncheckedCreateWithoutMeetingsInput[]
    connectOrCreate?: actionitemCreateOrConnectWithoutMeetingsInput | actionitemCreateOrConnectWithoutMeetingsInput[]
    createMany?: actionitemCreateManyMeetingsInputEnvelope
    connect?: actionitemWhereUniqueInput | actionitemWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type meetingmemberUpdateManyWithoutMeetingsNestedInput = {
    create?: XOR<meetingmemberCreateWithoutMeetingsInput, meetingmemberUncheckedCreateWithoutMeetingsInput> | meetingmemberCreateWithoutMeetingsInput[] | meetingmemberUncheckedCreateWithoutMeetingsInput[]
    connectOrCreate?: meetingmemberCreateOrConnectWithoutMeetingsInput | meetingmemberCreateOrConnectWithoutMeetingsInput[]
    upsert?: meetingmemberUpsertWithWhereUniqueWithoutMeetingsInput | meetingmemberUpsertWithWhereUniqueWithoutMeetingsInput[]
    createMany?: meetingmemberCreateManyMeetingsInputEnvelope
    set?: meetingmemberWhereUniqueInput | meetingmemberWhereUniqueInput[]
    disconnect?: meetingmemberWhereUniqueInput | meetingmemberWhereUniqueInput[]
    delete?: meetingmemberWhereUniqueInput | meetingmemberWhereUniqueInput[]
    connect?: meetingmemberWhereUniqueInput | meetingmemberWhereUniqueInput[]
    update?: meetingmemberUpdateWithWhereUniqueWithoutMeetingsInput | meetingmemberUpdateWithWhereUniqueWithoutMeetingsInput[]
    updateMany?: meetingmemberUpdateManyWithWhereWithoutMeetingsInput | meetingmemberUpdateManyWithWhereWithoutMeetingsInput[]
    deleteMany?: meetingmemberScalarWhereInput | meetingmemberScalarWhereInput[]
  }

  export type actionitemUpdateManyWithoutMeetingsNestedInput = {
    create?: XOR<actionitemCreateWithoutMeetingsInput, actionitemUncheckedCreateWithoutMeetingsInput> | actionitemCreateWithoutMeetingsInput[] | actionitemUncheckedCreateWithoutMeetingsInput[]
    connectOrCreate?: actionitemCreateOrConnectWithoutMeetingsInput | actionitemCreateOrConnectWithoutMeetingsInput[]
    upsert?: actionitemUpsertWithWhereUniqueWithoutMeetingsInput | actionitemUpsertWithWhereUniqueWithoutMeetingsInput[]
    createMany?: actionitemCreateManyMeetingsInputEnvelope
    set?: actionitemWhereUniqueInput | actionitemWhereUniqueInput[]
    disconnect?: actionitemWhereUniqueInput | actionitemWhereUniqueInput[]
    delete?: actionitemWhereUniqueInput | actionitemWhereUniqueInput[]
    connect?: actionitemWhereUniqueInput | actionitemWhereUniqueInput[]
    update?: actionitemUpdateWithWhereUniqueWithoutMeetingsInput | actionitemUpdateWithWhereUniqueWithoutMeetingsInput[]
    updateMany?: actionitemUpdateManyWithWhereWithoutMeetingsInput | actionitemUpdateManyWithWhereWithoutMeetingsInput[]
    deleteMany?: actionitemScalarWhereInput | actionitemScalarWhereInput[]
  }

  export type meetingtypeUpdateOneRequiredWithoutMeetingsNestedInput = {
    create?: XOR<meetingtypeCreateWithoutMeetingsInput, meetingtypeUncheckedCreateWithoutMeetingsInput>
    connectOrCreate?: meetingtypeCreateOrConnectWithoutMeetingsInput
    upsert?: meetingtypeUpsertWithoutMeetingsInput
    connect?: meetingtypeWhereUniqueInput
    update?: XOR<XOR<meetingtypeUpdateToOneWithWhereWithoutMeetingsInput, meetingtypeUpdateWithoutMeetingsInput>, meetingtypeUncheckedUpdateWithoutMeetingsInput>
  }

  export type venueUpdateOneWithoutMeetingsNestedInput = {
    create?: XOR<venueCreateWithoutMeetingsInput, venueUncheckedCreateWithoutMeetingsInput>
    connectOrCreate?: venueCreateOrConnectWithoutMeetingsInput
    upsert?: venueUpsertWithoutMeetingsInput
    disconnect?: venueWhereInput | boolean
    delete?: venueWhereInput | boolean
    connect?: venueWhereUniqueInput
    update?: XOR<XOR<venueUpdateToOneWithWhereWithoutMeetingsInput, venueUpdateWithoutMeetingsInput>, venueUncheckedUpdateWithoutMeetingsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type meetingmemberUncheckedUpdateManyWithoutMeetingsNestedInput = {
    create?: XOR<meetingmemberCreateWithoutMeetingsInput, meetingmemberUncheckedCreateWithoutMeetingsInput> | meetingmemberCreateWithoutMeetingsInput[] | meetingmemberUncheckedCreateWithoutMeetingsInput[]
    connectOrCreate?: meetingmemberCreateOrConnectWithoutMeetingsInput | meetingmemberCreateOrConnectWithoutMeetingsInput[]
    upsert?: meetingmemberUpsertWithWhereUniqueWithoutMeetingsInput | meetingmemberUpsertWithWhereUniqueWithoutMeetingsInput[]
    createMany?: meetingmemberCreateManyMeetingsInputEnvelope
    set?: meetingmemberWhereUniqueInput | meetingmemberWhereUniqueInput[]
    disconnect?: meetingmemberWhereUniqueInput | meetingmemberWhereUniqueInput[]
    delete?: meetingmemberWhereUniqueInput | meetingmemberWhereUniqueInput[]
    connect?: meetingmemberWhereUniqueInput | meetingmemberWhereUniqueInput[]
    update?: meetingmemberUpdateWithWhereUniqueWithoutMeetingsInput | meetingmemberUpdateWithWhereUniqueWithoutMeetingsInput[]
    updateMany?: meetingmemberUpdateManyWithWhereWithoutMeetingsInput | meetingmemberUpdateManyWithWhereWithoutMeetingsInput[]
    deleteMany?: meetingmemberScalarWhereInput | meetingmemberScalarWhereInput[]
  }

  export type actionitemUncheckedUpdateManyWithoutMeetingsNestedInput = {
    create?: XOR<actionitemCreateWithoutMeetingsInput, actionitemUncheckedCreateWithoutMeetingsInput> | actionitemCreateWithoutMeetingsInput[] | actionitemUncheckedCreateWithoutMeetingsInput[]
    connectOrCreate?: actionitemCreateOrConnectWithoutMeetingsInput | actionitemCreateOrConnectWithoutMeetingsInput[]
    upsert?: actionitemUpsertWithWhereUniqueWithoutMeetingsInput | actionitemUpsertWithWhereUniqueWithoutMeetingsInput[]
    createMany?: actionitemCreateManyMeetingsInputEnvelope
    set?: actionitemWhereUniqueInput | actionitemWhereUniqueInput[]
    disconnect?: actionitemWhereUniqueInput | actionitemWhereUniqueInput[]
    delete?: actionitemWhereUniqueInput | actionitemWhereUniqueInput[]
    connect?: actionitemWhereUniqueInput | actionitemWhereUniqueInput[]
    update?: actionitemUpdateWithWhereUniqueWithoutMeetingsInput | actionitemUpdateWithWhereUniqueWithoutMeetingsInput[]
    updateMany?: actionitemUpdateManyWithWhereWithoutMeetingsInput | actionitemUpdateManyWithWhereWithoutMeetingsInput[]
    deleteMany?: actionitemScalarWhereInput | actionitemScalarWhereInput[]
  }

  export type meetingsCreateNestedManyWithoutMeetingtypeInput = {
    create?: XOR<meetingsCreateWithoutMeetingtypeInput, meetingsUncheckedCreateWithoutMeetingtypeInput> | meetingsCreateWithoutMeetingtypeInput[] | meetingsUncheckedCreateWithoutMeetingtypeInput[]
    connectOrCreate?: meetingsCreateOrConnectWithoutMeetingtypeInput | meetingsCreateOrConnectWithoutMeetingtypeInput[]
    createMany?: meetingsCreateManyMeetingtypeInputEnvelope
    connect?: meetingsWhereUniqueInput | meetingsWhereUniqueInput[]
  }

  export type meetingsUncheckedCreateNestedManyWithoutMeetingtypeInput = {
    create?: XOR<meetingsCreateWithoutMeetingtypeInput, meetingsUncheckedCreateWithoutMeetingtypeInput> | meetingsCreateWithoutMeetingtypeInput[] | meetingsUncheckedCreateWithoutMeetingtypeInput[]
    connectOrCreate?: meetingsCreateOrConnectWithoutMeetingtypeInput | meetingsCreateOrConnectWithoutMeetingtypeInput[]
    createMany?: meetingsCreateManyMeetingtypeInputEnvelope
    connect?: meetingsWhereUniqueInput | meetingsWhereUniqueInput[]
  }

  export type meetingsUpdateManyWithoutMeetingtypeNestedInput = {
    create?: XOR<meetingsCreateWithoutMeetingtypeInput, meetingsUncheckedCreateWithoutMeetingtypeInput> | meetingsCreateWithoutMeetingtypeInput[] | meetingsUncheckedCreateWithoutMeetingtypeInput[]
    connectOrCreate?: meetingsCreateOrConnectWithoutMeetingtypeInput | meetingsCreateOrConnectWithoutMeetingtypeInput[]
    upsert?: meetingsUpsertWithWhereUniqueWithoutMeetingtypeInput | meetingsUpsertWithWhereUniqueWithoutMeetingtypeInput[]
    createMany?: meetingsCreateManyMeetingtypeInputEnvelope
    set?: meetingsWhereUniqueInput | meetingsWhereUniqueInput[]
    disconnect?: meetingsWhereUniqueInput | meetingsWhereUniqueInput[]
    delete?: meetingsWhereUniqueInput | meetingsWhereUniqueInput[]
    connect?: meetingsWhereUniqueInput | meetingsWhereUniqueInput[]
    update?: meetingsUpdateWithWhereUniqueWithoutMeetingtypeInput | meetingsUpdateWithWhereUniqueWithoutMeetingtypeInput[]
    updateMany?: meetingsUpdateManyWithWhereWithoutMeetingtypeInput | meetingsUpdateManyWithWhereWithoutMeetingtypeInput[]
    deleteMany?: meetingsScalarWhereInput | meetingsScalarWhereInput[]
  }

  export type meetingsUncheckedUpdateManyWithoutMeetingtypeNestedInput = {
    create?: XOR<meetingsCreateWithoutMeetingtypeInput, meetingsUncheckedCreateWithoutMeetingtypeInput> | meetingsCreateWithoutMeetingtypeInput[] | meetingsUncheckedCreateWithoutMeetingtypeInput[]
    connectOrCreate?: meetingsCreateOrConnectWithoutMeetingtypeInput | meetingsCreateOrConnectWithoutMeetingtypeInput[]
    upsert?: meetingsUpsertWithWhereUniqueWithoutMeetingtypeInput | meetingsUpsertWithWhereUniqueWithoutMeetingtypeInput[]
    createMany?: meetingsCreateManyMeetingtypeInputEnvelope
    set?: meetingsWhereUniqueInput | meetingsWhereUniqueInput[]
    disconnect?: meetingsWhereUniqueInput | meetingsWhereUniqueInput[]
    delete?: meetingsWhereUniqueInput | meetingsWhereUniqueInput[]
    connect?: meetingsWhereUniqueInput | meetingsWhereUniqueInput[]
    update?: meetingsUpdateWithWhereUniqueWithoutMeetingtypeInput | meetingsUpdateWithWhereUniqueWithoutMeetingtypeInput[]
    updateMany?: meetingsUpdateManyWithWhereWithoutMeetingtypeInput | meetingsUpdateManyWithWhereWithoutMeetingtypeInput[]
    deleteMany?: meetingsScalarWhereInput | meetingsScalarWhereInput[]
  }

  export type departmentCreateNestedOneWithoutStaffInput = {
    create?: XOR<departmentCreateWithoutStaffInput, departmentUncheckedCreateWithoutStaffInput>
    connectOrCreate?: departmentCreateOrConnectWithoutStaffInput
    connect?: departmentWhereUniqueInput
  }

  export type meetingmemberCreateNestedManyWithoutStaffInput = {
    create?: XOR<meetingmemberCreateWithoutStaffInput, meetingmemberUncheckedCreateWithoutStaffInput> | meetingmemberCreateWithoutStaffInput[] | meetingmemberUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: meetingmemberCreateOrConnectWithoutStaffInput | meetingmemberCreateOrConnectWithoutStaffInput[]
    createMany?: meetingmemberCreateManyStaffInputEnvelope
    connect?: meetingmemberWhereUniqueInput | meetingmemberWhereUniqueInput[]
  }

  export type actionitemCreateNestedManyWithoutStaffInput = {
    create?: XOR<actionitemCreateWithoutStaffInput, actionitemUncheckedCreateWithoutStaffInput> | actionitemCreateWithoutStaffInput[] | actionitemUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: actionitemCreateOrConnectWithoutStaffInput | actionitemCreateOrConnectWithoutStaffInput[]
    createMany?: actionitemCreateManyStaffInputEnvelope
    connect?: actionitemWhereUniqueInput | actionitemWhereUniqueInput[]
  }

  export type meetingmemberUncheckedCreateNestedManyWithoutStaffInput = {
    create?: XOR<meetingmemberCreateWithoutStaffInput, meetingmemberUncheckedCreateWithoutStaffInput> | meetingmemberCreateWithoutStaffInput[] | meetingmemberUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: meetingmemberCreateOrConnectWithoutStaffInput | meetingmemberCreateOrConnectWithoutStaffInput[]
    createMany?: meetingmemberCreateManyStaffInputEnvelope
    connect?: meetingmemberWhereUniqueInput | meetingmemberWhereUniqueInput[]
  }

  export type actionitemUncheckedCreateNestedManyWithoutStaffInput = {
    create?: XOR<actionitemCreateWithoutStaffInput, actionitemUncheckedCreateWithoutStaffInput> | actionitemCreateWithoutStaffInput[] | actionitemUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: actionitemCreateOrConnectWithoutStaffInput | actionitemCreateOrConnectWithoutStaffInput[]
    createMany?: actionitemCreateManyStaffInputEnvelope
    connect?: actionitemWhereUniqueInput | actionitemWhereUniqueInput[]
  }

  export type departmentUpdateOneWithoutStaffNestedInput = {
    create?: XOR<departmentCreateWithoutStaffInput, departmentUncheckedCreateWithoutStaffInput>
    connectOrCreate?: departmentCreateOrConnectWithoutStaffInput
    upsert?: departmentUpsertWithoutStaffInput
    disconnect?: departmentWhereInput | boolean
    delete?: departmentWhereInput | boolean
    connect?: departmentWhereUniqueInput
    update?: XOR<XOR<departmentUpdateToOneWithWhereWithoutStaffInput, departmentUpdateWithoutStaffInput>, departmentUncheckedUpdateWithoutStaffInput>
  }

  export type meetingmemberUpdateManyWithoutStaffNestedInput = {
    create?: XOR<meetingmemberCreateWithoutStaffInput, meetingmemberUncheckedCreateWithoutStaffInput> | meetingmemberCreateWithoutStaffInput[] | meetingmemberUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: meetingmemberCreateOrConnectWithoutStaffInput | meetingmemberCreateOrConnectWithoutStaffInput[]
    upsert?: meetingmemberUpsertWithWhereUniqueWithoutStaffInput | meetingmemberUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: meetingmemberCreateManyStaffInputEnvelope
    set?: meetingmemberWhereUniqueInput | meetingmemberWhereUniqueInput[]
    disconnect?: meetingmemberWhereUniqueInput | meetingmemberWhereUniqueInput[]
    delete?: meetingmemberWhereUniqueInput | meetingmemberWhereUniqueInput[]
    connect?: meetingmemberWhereUniqueInput | meetingmemberWhereUniqueInput[]
    update?: meetingmemberUpdateWithWhereUniqueWithoutStaffInput | meetingmemberUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: meetingmemberUpdateManyWithWhereWithoutStaffInput | meetingmemberUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: meetingmemberScalarWhereInput | meetingmemberScalarWhereInput[]
  }

  export type actionitemUpdateManyWithoutStaffNestedInput = {
    create?: XOR<actionitemCreateWithoutStaffInput, actionitemUncheckedCreateWithoutStaffInput> | actionitemCreateWithoutStaffInput[] | actionitemUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: actionitemCreateOrConnectWithoutStaffInput | actionitemCreateOrConnectWithoutStaffInput[]
    upsert?: actionitemUpsertWithWhereUniqueWithoutStaffInput | actionitemUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: actionitemCreateManyStaffInputEnvelope
    set?: actionitemWhereUniqueInput | actionitemWhereUniqueInput[]
    disconnect?: actionitemWhereUniqueInput | actionitemWhereUniqueInput[]
    delete?: actionitemWhereUniqueInput | actionitemWhereUniqueInput[]
    connect?: actionitemWhereUniqueInput | actionitemWhereUniqueInput[]
    update?: actionitemUpdateWithWhereUniqueWithoutStaffInput | actionitemUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: actionitemUpdateManyWithWhereWithoutStaffInput | actionitemUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: actionitemScalarWhereInput | actionitemScalarWhereInput[]
  }

  export type meetingmemberUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: XOR<meetingmemberCreateWithoutStaffInput, meetingmemberUncheckedCreateWithoutStaffInput> | meetingmemberCreateWithoutStaffInput[] | meetingmemberUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: meetingmemberCreateOrConnectWithoutStaffInput | meetingmemberCreateOrConnectWithoutStaffInput[]
    upsert?: meetingmemberUpsertWithWhereUniqueWithoutStaffInput | meetingmemberUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: meetingmemberCreateManyStaffInputEnvelope
    set?: meetingmemberWhereUniqueInput | meetingmemberWhereUniqueInput[]
    disconnect?: meetingmemberWhereUniqueInput | meetingmemberWhereUniqueInput[]
    delete?: meetingmemberWhereUniqueInput | meetingmemberWhereUniqueInput[]
    connect?: meetingmemberWhereUniqueInput | meetingmemberWhereUniqueInput[]
    update?: meetingmemberUpdateWithWhereUniqueWithoutStaffInput | meetingmemberUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: meetingmemberUpdateManyWithWhereWithoutStaffInput | meetingmemberUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: meetingmemberScalarWhereInput | meetingmemberScalarWhereInput[]
  }

  export type actionitemUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: XOR<actionitemCreateWithoutStaffInput, actionitemUncheckedCreateWithoutStaffInput> | actionitemCreateWithoutStaffInput[] | actionitemUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: actionitemCreateOrConnectWithoutStaffInput | actionitemCreateOrConnectWithoutStaffInput[]
    upsert?: actionitemUpsertWithWhereUniqueWithoutStaffInput | actionitemUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: actionitemCreateManyStaffInputEnvelope
    set?: actionitemWhereUniqueInput | actionitemWhereUniqueInput[]
    disconnect?: actionitemWhereUniqueInput | actionitemWhereUniqueInput[]
    delete?: actionitemWhereUniqueInput | actionitemWhereUniqueInput[]
    connect?: actionitemWhereUniqueInput | actionitemWhereUniqueInput[]
    update?: actionitemUpdateWithWhereUniqueWithoutStaffInput | actionitemUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: actionitemUpdateManyWithWhereWithoutStaffInput | actionitemUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: actionitemScalarWhereInput | actionitemScalarWhereInput[]
  }

  export type meetingsCreateNestedManyWithoutVenueInput = {
    create?: XOR<meetingsCreateWithoutVenueInput, meetingsUncheckedCreateWithoutVenueInput> | meetingsCreateWithoutVenueInput[] | meetingsUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: meetingsCreateOrConnectWithoutVenueInput | meetingsCreateOrConnectWithoutVenueInput[]
    createMany?: meetingsCreateManyVenueInputEnvelope
    connect?: meetingsWhereUniqueInput | meetingsWhereUniqueInput[]
  }

  export type meetingsUncheckedCreateNestedManyWithoutVenueInput = {
    create?: XOR<meetingsCreateWithoutVenueInput, meetingsUncheckedCreateWithoutVenueInput> | meetingsCreateWithoutVenueInput[] | meetingsUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: meetingsCreateOrConnectWithoutVenueInput | meetingsCreateOrConnectWithoutVenueInput[]
    createMany?: meetingsCreateManyVenueInputEnvelope
    connect?: meetingsWhereUniqueInput | meetingsWhereUniqueInput[]
  }

  export type meetingsUpdateManyWithoutVenueNestedInput = {
    create?: XOR<meetingsCreateWithoutVenueInput, meetingsUncheckedCreateWithoutVenueInput> | meetingsCreateWithoutVenueInput[] | meetingsUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: meetingsCreateOrConnectWithoutVenueInput | meetingsCreateOrConnectWithoutVenueInput[]
    upsert?: meetingsUpsertWithWhereUniqueWithoutVenueInput | meetingsUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: meetingsCreateManyVenueInputEnvelope
    set?: meetingsWhereUniqueInput | meetingsWhereUniqueInput[]
    disconnect?: meetingsWhereUniqueInput | meetingsWhereUniqueInput[]
    delete?: meetingsWhereUniqueInput | meetingsWhereUniqueInput[]
    connect?: meetingsWhereUniqueInput | meetingsWhereUniqueInput[]
    update?: meetingsUpdateWithWhereUniqueWithoutVenueInput | meetingsUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: meetingsUpdateManyWithWhereWithoutVenueInput | meetingsUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: meetingsScalarWhereInput | meetingsScalarWhereInput[]
  }

  export type meetingsUncheckedUpdateManyWithoutVenueNestedInput = {
    create?: XOR<meetingsCreateWithoutVenueInput, meetingsUncheckedCreateWithoutVenueInput> | meetingsCreateWithoutVenueInput[] | meetingsUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: meetingsCreateOrConnectWithoutVenueInput | meetingsCreateOrConnectWithoutVenueInput[]
    upsert?: meetingsUpsertWithWhereUniqueWithoutVenueInput | meetingsUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: meetingsCreateManyVenueInputEnvelope
    set?: meetingsWhereUniqueInput | meetingsWhereUniqueInput[]
    disconnect?: meetingsWhereUniqueInput | meetingsWhereUniqueInput[]
    delete?: meetingsWhereUniqueInput | meetingsWhereUniqueInput[]
    connect?: meetingsWhereUniqueInput | meetingsWhereUniqueInput[]
    update?: meetingsUpdateWithWhereUniqueWithoutVenueInput | meetingsUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: meetingsUpdateManyWithWhereWithoutVenueInput | meetingsUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: meetingsScalarWhereInput | meetingsScalarWhereInput[]
  }

  export type meetingsCreateNestedOneWithoutActionitemInput = {
    create?: XOR<meetingsCreateWithoutActionitemInput, meetingsUncheckedCreateWithoutActionitemInput>
    connectOrCreate?: meetingsCreateOrConnectWithoutActionitemInput
    connect?: meetingsWhereUniqueInput
  }

  export type staffCreateNestedOneWithoutActionitemInput = {
    create?: XOR<staffCreateWithoutActionitemInput, staffUncheckedCreateWithoutActionitemInput>
    connectOrCreate?: staffCreateOrConnectWithoutActionitemInput
    connect?: staffWhereUniqueInput
  }

  export type Enumaction_item_statusFieldUpdateOperationsInput = {
    set?: $Enums.action_item_status
  }

  export type meetingsUpdateOneWithoutActionitemNestedInput = {
    create?: XOR<meetingsCreateWithoutActionitemInput, meetingsUncheckedCreateWithoutActionitemInput>
    connectOrCreate?: meetingsCreateOrConnectWithoutActionitemInput
    upsert?: meetingsUpsertWithoutActionitemInput
    disconnect?: meetingsWhereInput | boolean
    delete?: meetingsWhereInput | boolean
    connect?: meetingsWhereUniqueInput
    update?: XOR<XOR<meetingsUpdateToOneWithWhereWithoutActionitemInput, meetingsUpdateWithoutActionitemInput>, meetingsUncheckedUpdateWithoutActionitemInput>
  }

  export type staffUpdateOneWithoutActionitemNestedInput = {
    create?: XOR<staffCreateWithoutActionitemInput, staffUncheckedCreateWithoutActionitemInput>
    connectOrCreate?: staffCreateOrConnectWithoutActionitemInput
    upsert?: staffUpsertWithoutActionitemInput
    disconnect?: staffWhereInput | boolean
    delete?: staffWhereInput | boolean
    connect?: staffWhereUniqueInput
    update?: XOR<XOR<staffUpdateToOneWithWhereWithoutActionitemInput, staffUpdateWithoutActionitemInput>, staffUncheckedUpdateWithoutActionitemInput>
  }

  export type NullableEnumuser_roleFieldUpdateOperationsInput = {
    set?: $Enums.user_role | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumaction_item_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.action_item_status | Enumaction_item_statusFieldRefInput<$PrismaModel>
    in?: $Enums.action_item_status[]
    notIn?: $Enums.action_item_status[]
    not?: NestedEnumaction_item_statusFilter<$PrismaModel> | $Enums.action_item_status
  }

  export type NestedEnumaction_item_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.action_item_status | Enumaction_item_statusFieldRefInput<$PrismaModel>
    in?: $Enums.action_item_status[]
    notIn?: $Enums.action_item_status[]
    not?: NestedEnumaction_item_statusWithAggregatesFilter<$PrismaModel> | $Enums.action_item_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumaction_item_statusFilter<$PrismaModel>
    _max?: NestedEnumaction_item_statusFilter<$PrismaModel>
  }

  export type NestedEnumuser_roleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_role[] | null
    notIn?: $Enums.user_role[] | null
    not?: NestedEnumuser_roleNullableFilter<$PrismaModel> | $Enums.user_role | null
  }

  export type NestedEnumuser_roleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_role[] | null
    notIn?: $Enums.user_role[] | null
    not?: NestedEnumuser_roleNullableWithAggregatesFilter<$PrismaModel> | $Enums.user_role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumuser_roleNullableFilter<$PrismaModel>
    _max?: NestedEnumuser_roleNullableFilter<$PrismaModel>
  }

  export type staffCreateWithoutDepartmentInput = {
    StaffName: string
    MobileNo?: string | null
    EmailAddress?: string | null
    Remarks?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    meetingmember?: meetingmemberCreateNestedManyWithoutStaffInput
    actionitem?: actionitemCreateNestedManyWithoutStaffInput
  }

  export type staffUncheckedCreateWithoutDepartmentInput = {
    StaffID?: number
    StaffName: string
    MobileNo?: string | null
    EmailAddress?: string | null
    Remarks?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    meetingmember?: meetingmemberUncheckedCreateNestedManyWithoutStaffInput
    actionitem?: actionitemUncheckedCreateNestedManyWithoutStaffInput
  }

  export type staffCreateOrConnectWithoutDepartmentInput = {
    where: staffWhereUniqueInput
    create: XOR<staffCreateWithoutDepartmentInput, staffUncheckedCreateWithoutDepartmentInput>
  }

  export type staffCreateManyDepartmentInputEnvelope = {
    data: staffCreateManyDepartmentInput | staffCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type staffUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: staffWhereUniqueInput
    update: XOR<staffUpdateWithoutDepartmentInput, staffUncheckedUpdateWithoutDepartmentInput>
    create: XOR<staffCreateWithoutDepartmentInput, staffUncheckedCreateWithoutDepartmentInput>
  }

  export type staffUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: staffWhereUniqueInput
    data: XOR<staffUpdateWithoutDepartmentInput, staffUncheckedUpdateWithoutDepartmentInput>
  }

  export type staffUpdateManyWithWhereWithoutDepartmentInput = {
    where: staffScalarWhereInput
    data: XOR<staffUpdateManyMutationInput, staffUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type staffScalarWhereInput = {
    AND?: staffScalarWhereInput | staffScalarWhereInput[]
    OR?: staffScalarWhereInput[]
    NOT?: staffScalarWhereInput | staffScalarWhereInput[]
    StaffID?: IntFilter<"staff"> | number
    StaffName?: StringFilter<"staff"> | string
    MobileNo?: StringNullableFilter<"staff"> | string | null
    EmailAddress?: StringNullableFilter<"staff"> | string | null
    DepartmentID?: IntNullableFilter<"staff"> | number | null
    Remarks?: StringNullableFilter<"staff"> | string | null
    Created?: DateTimeNullableFilter<"staff"> | Date | string | null
    Modified?: DateTimeNullableFilter<"staff"> | Date | string | null
  }

  export type meetingsCreateWithoutMeetingmemberInput = {
    MeetingDate: Date | string
    MeetingDescription?: string | null
    DocumentPath?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    IsCancelled?: boolean | null
    CancellationDateTime?: Date | string | null
    CancellationReason?: string | null
    actionitem?: actionitemCreateNestedManyWithoutMeetingsInput
    meetingtype: meetingtypeCreateNestedOneWithoutMeetingsInput
    venue?: venueCreateNestedOneWithoutMeetingsInput
  }

  export type meetingsUncheckedCreateWithoutMeetingmemberInput = {
    MeetingID?: number
    MeetingDate: Date | string
    MeetingTypeID: number
    VenueID?: number | null
    MeetingDescription?: string | null
    DocumentPath?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    IsCancelled?: boolean | null
    CancellationDateTime?: Date | string | null
    CancellationReason?: string | null
    actionitem?: actionitemUncheckedCreateNestedManyWithoutMeetingsInput
  }

  export type meetingsCreateOrConnectWithoutMeetingmemberInput = {
    where: meetingsWhereUniqueInput
    create: XOR<meetingsCreateWithoutMeetingmemberInput, meetingsUncheckedCreateWithoutMeetingmemberInput>
  }

  export type staffCreateWithoutMeetingmemberInput = {
    StaffName: string
    MobileNo?: string | null
    EmailAddress?: string | null
    Remarks?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    department?: departmentCreateNestedOneWithoutStaffInput
    actionitem?: actionitemCreateNestedManyWithoutStaffInput
  }

  export type staffUncheckedCreateWithoutMeetingmemberInput = {
    StaffID?: number
    StaffName: string
    MobileNo?: string | null
    EmailAddress?: string | null
    DepartmentID?: number | null
    Remarks?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    actionitem?: actionitemUncheckedCreateNestedManyWithoutStaffInput
  }

  export type staffCreateOrConnectWithoutMeetingmemberInput = {
    where: staffWhereUniqueInput
    create: XOR<staffCreateWithoutMeetingmemberInput, staffUncheckedCreateWithoutMeetingmemberInput>
  }

  export type meetingsUpsertWithoutMeetingmemberInput = {
    update: XOR<meetingsUpdateWithoutMeetingmemberInput, meetingsUncheckedUpdateWithoutMeetingmemberInput>
    create: XOR<meetingsCreateWithoutMeetingmemberInput, meetingsUncheckedCreateWithoutMeetingmemberInput>
    where?: meetingsWhereInput
  }

  export type meetingsUpdateToOneWithWhereWithoutMeetingmemberInput = {
    where?: meetingsWhereInput
    data: XOR<meetingsUpdateWithoutMeetingmemberInput, meetingsUncheckedUpdateWithoutMeetingmemberInput>
  }

  export type meetingsUpdateWithoutMeetingmemberInput = {
    MeetingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    MeetingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsCancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    CancellationDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    actionitem?: actionitemUpdateManyWithoutMeetingsNestedInput
    meetingtype?: meetingtypeUpdateOneRequiredWithoutMeetingsNestedInput
    venue?: venueUpdateOneWithoutMeetingsNestedInput
  }

  export type meetingsUncheckedUpdateWithoutMeetingmemberInput = {
    MeetingID?: IntFieldUpdateOperationsInput | number
    MeetingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    MeetingTypeID?: IntFieldUpdateOperationsInput | number
    VenueID?: NullableIntFieldUpdateOperationsInput | number | null
    MeetingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsCancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    CancellationDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    actionitem?: actionitemUncheckedUpdateManyWithoutMeetingsNestedInput
  }

  export type staffUpsertWithoutMeetingmemberInput = {
    update: XOR<staffUpdateWithoutMeetingmemberInput, staffUncheckedUpdateWithoutMeetingmemberInput>
    create: XOR<staffCreateWithoutMeetingmemberInput, staffUncheckedCreateWithoutMeetingmemberInput>
    where?: staffWhereInput
  }

  export type staffUpdateToOneWithWhereWithoutMeetingmemberInput = {
    where?: staffWhereInput
    data: XOR<staffUpdateWithoutMeetingmemberInput, staffUncheckedUpdateWithoutMeetingmemberInput>
  }

  export type staffUpdateWithoutMeetingmemberInput = {
    StaffName?: StringFieldUpdateOperationsInput | string
    MobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    EmailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    department?: departmentUpdateOneWithoutStaffNestedInput
    actionitem?: actionitemUpdateManyWithoutStaffNestedInput
  }

  export type staffUncheckedUpdateWithoutMeetingmemberInput = {
    StaffID?: IntFieldUpdateOperationsInput | number
    StaffName?: StringFieldUpdateOperationsInput | string
    MobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    EmailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    DepartmentID?: NullableIntFieldUpdateOperationsInput | number | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actionitem?: actionitemUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type meetingmemberCreateWithoutMeetingsInput = {
    IsPresent?: boolean | null
    Remarks?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    staff: staffCreateNestedOneWithoutMeetingmemberInput
  }

  export type meetingmemberUncheckedCreateWithoutMeetingsInput = {
    MeetingMemberID?: number
    StaffID: number
    IsPresent?: boolean | null
    Remarks?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
  }

  export type meetingmemberCreateOrConnectWithoutMeetingsInput = {
    where: meetingmemberWhereUniqueInput
    create: XOR<meetingmemberCreateWithoutMeetingsInput, meetingmemberUncheckedCreateWithoutMeetingsInput>
  }

  export type meetingmemberCreateManyMeetingsInputEnvelope = {
    data: meetingmemberCreateManyMeetingsInput | meetingmemberCreateManyMeetingsInput[]
    skipDuplicates?: boolean
  }

  export type actionitemCreateWithoutMeetingsInput = {
    Description: string
    Status?: $Enums.action_item_status
    DueDate?: Date | string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    staff?: staffCreateNestedOneWithoutActionitemInput
  }

  export type actionitemUncheckedCreateWithoutMeetingsInput = {
    ActionItemID?: number
    StaffID?: number | null
    Description: string
    Status?: $Enums.action_item_status
    DueDate?: Date | string | null
    Created?: Date | string | null
    Modified?: Date | string | null
  }

  export type actionitemCreateOrConnectWithoutMeetingsInput = {
    where: actionitemWhereUniqueInput
    create: XOR<actionitemCreateWithoutMeetingsInput, actionitemUncheckedCreateWithoutMeetingsInput>
  }

  export type actionitemCreateManyMeetingsInputEnvelope = {
    data: actionitemCreateManyMeetingsInput | actionitemCreateManyMeetingsInput[]
    skipDuplicates?: boolean
  }

  export type meetingtypeCreateWithoutMeetingsInput = {
    MeetingTypeName: string
    Remarks?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
  }

  export type meetingtypeUncheckedCreateWithoutMeetingsInput = {
    MeetingTypeID?: number
    MeetingTypeName: string
    Remarks?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
  }

  export type meetingtypeCreateOrConnectWithoutMeetingsInput = {
    where: meetingtypeWhereUniqueInput
    create: XOR<meetingtypeCreateWithoutMeetingsInput, meetingtypeUncheckedCreateWithoutMeetingsInput>
  }

  export type venueCreateWithoutMeetingsInput = {
    VenueName: string
    Location?: string | null
    Capacity?: number | null
    Created?: Date | string | null
    Modified?: Date | string | null
  }

  export type venueUncheckedCreateWithoutMeetingsInput = {
    VenueID?: number
    VenueName: string
    Location?: string | null
    Capacity?: number | null
    Created?: Date | string | null
    Modified?: Date | string | null
  }

  export type venueCreateOrConnectWithoutMeetingsInput = {
    where: venueWhereUniqueInput
    create: XOR<venueCreateWithoutMeetingsInput, venueUncheckedCreateWithoutMeetingsInput>
  }

  export type meetingmemberUpsertWithWhereUniqueWithoutMeetingsInput = {
    where: meetingmemberWhereUniqueInput
    update: XOR<meetingmemberUpdateWithoutMeetingsInput, meetingmemberUncheckedUpdateWithoutMeetingsInput>
    create: XOR<meetingmemberCreateWithoutMeetingsInput, meetingmemberUncheckedCreateWithoutMeetingsInput>
  }

  export type meetingmemberUpdateWithWhereUniqueWithoutMeetingsInput = {
    where: meetingmemberWhereUniqueInput
    data: XOR<meetingmemberUpdateWithoutMeetingsInput, meetingmemberUncheckedUpdateWithoutMeetingsInput>
  }

  export type meetingmemberUpdateManyWithWhereWithoutMeetingsInput = {
    where: meetingmemberScalarWhereInput
    data: XOR<meetingmemberUpdateManyMutationInput, meetingmemberUncheckedUpdateManyWithoutMeetingsInput>
  }

  export type meetingmemberScalarWhereInput = {
    AND?: meetingmemberScalarWhereInput | meetingmemberScalarWhereInput[]
    OR?: meetingmemberScalarWhereInput[]
    NOT?: meetingmemberScalarWhereInput | meetingmemberScalarWhereInput[]
    MeetingMemberID?: IntFilter<"meetingmember"> | number
    MeetingID?: IntFilter<"meetingmember"> | number
    StaffID?: IntFilter<"meetingmember"> | number
    IsPresent?: BoolNullableFilter<"meetingmember"> | boolean | null
    Remarks?: StringNullableFilter<"meetingmember"> | string | null
    Created?: DateTimeNullableFilter<"meetingmember"> | Date | string | null
    Modified?: DateTimeNullableFilter<"meetingmember"> | Date | string | null
  }

  export type actionitemUpsertWithWhereUniqueWithoutMeetingsInput = {
    where: actionitemWhereUniqueInput
    update: XOR<actionitemUpdateWithoutMeetingsInput, actionitemUncheckedUpdateWithoutMeetingsInput>
    create: XOR<actionitemCreateWithoutMeetingsInput, actionitemUncheckedCreateWithoutMeetingsInput>
  }

  export type actionitemUpdateWithWhereUniqueWithoutMeetingsInput = {
    where: actionitemWhereUniqueInput
    data: XOR<actionitemUpdateWithoutMeetingsInput, actionitemUncheckedUpdateWithoutMeetingsInput>
  }

  export type actionitemUpdateManyWithWhereWithoutMeetingsInput = {
    where: actionitemScalarWhereInput
    data: XOR<actionitemUpdateManyMutationInput, actionitemUncheckedUpdateManyWithoutMeetingsInput>
  }

  export type actionitemScalarWhereInput = {
    AND?: actionitemScalarWhereInput | actionitemScalarWhereInput[]
    OR?: actionitemScalarWhereInput[]
    NOT?: actionitemScalarWhereInput | actionitemScalarWhereInput[]
    ActionItemID?: IntFilter<"actionitem"> | number
    MeetingID?: IntNullableFilter<"actionitem"> | number | null
    StaffID?: IntNullableFilter<"actionitem"> | number | null
    Description?: StringFilter<"actionitem"> | string
    Status?: Enumaction_item_statusFilter<"actionitem"> | $Enums.action_item_status
    DueDate?: DateTimeNullableFilter<"actionitem"> | Date | string | null
    Created?: DateTimeNullableFilter<"actionitem"> | Date | string | null
    Modified?: DateTimeNullableFilter<"actionitem"> | Date | string | null
  }

  export type meetingtypeUpsertWithoutMeetingsInput = {
    update: XOR<meetingtypeUpdateWithoutMeetingsInput, meetingtypeUncheckedUpdateWithoutMeetingsInput>
    create: XOR<meetingtypeCreateWithoutMeetingsInput, meetingtypeUncheckedCreateWithoutMeetingsInput>
    where?: meetingtypeWhereInput
  }

  export type meetingtypeUpdateToOneWithWhereWithoutMeetingsInput = {
    where?: meetingtypeWhereInput
    data: XOR<meetingtypeUpdateWithoutMeetingsInput, meetingtypeUncheckedUpdateWithoutMeetingsInput>
  }

  export type meetingtypeUpdateWithoutMeetingsInput = {
    MeetingTypeName?: StringFieldUpdateOperationsInput | string
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type meetingtypeUncheckedUpdateWithoutMeetingsInput = {
    MeetingTypeID?: IntFieldUpdateOperationsInput | number
    MeetingTypeName?: StringFieldUpdateOperationsInput | string
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type venueUpsertWithoutMeetingsInput = {
    update: XOR<venueUpdateWithoutMeetingsInput, venueUncheckedUpdateWithoutMeetingsInput>
    create: XOR<venueCreateWithoutMeetingsInput, venueUncheckedCreateWithoutMeetingsInput>
    where?: venueWhereInput
  }

  export type venueUpdateToOneWithWhereWithoutMeetingsInput = {
    where?: venueWhereInput
    data: XOR<venueUpdateWithoutMeetingsInput, venueUncheckedUpdateWithoutMeetingsInput>
  }

  export type venueUpdateWithoutMeetingsInput = {
    VenueName?: StringFieldUpdateOperationsInput | string
    Location?: NullableStringFieldUpdateOperationsInput | string | null
    Capacity?: NullableIntFieldUpdateOperationsInput | number | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type venueUncheckedUpdateWithoutMeetingsInput = {
    VenueID?: IntFieldUpdateOperationsInput | number
    VenueName?: StringFieldUpdateOperationsInput | string
    Location?: NullableStringFieldUpdateOperationsInput | string | null
    Capacity?: NullableIntFieldUpdateOperationsInput | number | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type meetingsCreateWithoutMeetingtypeInput = {
    MeetingDate: Date | string
    MeetingDescription?: string | null
    DocumentPath?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    IsCancelled?: boolean | null
    CancellationDateTime?: Date | string | null
    CancellationReason?: string | null
    meetingmember?: meetingmemberCreateNestedManyWithoutMeetingsInput
    actionitem?: actionitemCreateNestedManyWithoutMeetingsInput
    venue?: venueCreateNestedOneWithoutMeetingsInput
  }

  export type meetingsUncheckedCreateWithoutMeetingtypeInput = {
    MeetingID?: number
    MeetingDate: Date | string
    VenueID?: number | null
    MeetingDescription?: string | null
    DocumentPath?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    IsCancelled?: boolean | null
    CancellationDateTime?: Date | string | null
    CancellationReason?: string | null
    meetingmember?: meetingmemberUncheckedCreateNestedManyWithoutMeetingsInput
    actionitem?: actionitemUncheckedCreateNestedManyWithoutMeetingsInput
  }

  export type meetingsCreateOrConnectWithoutMeetingtypeInput = {
    where: meetingsWhereUniqueInput
    create: XOR<meetingsCreateWithoutMeetingtypeInput, meetingsUncheckedCreateWithoutMeetingtypeInput>
  }

  export type meetingsCreateManyMeetingtypeInputEnvelope = {
    data: meetingsCreateManyMeetingtypeInput | meetingsCreateManyMeetingtypeInput[]
    skipDuplicates?: boolean
  }

  export type meetingsUpsertWithWhereUniqueWithoutMeetingtypeInput = {
    where: meetingsWhereUniqueInput
    update: XOR<meetingsUpdateWithoutMeetingtypeInput, meetingsUncheckedUpdateWithoutMeetingtypeInput>
    create: XOR<meetingsCreateWithoutMeetingtypeInput, meetingsUncheckedCreateWithoutMeetingtypeInput>
  }

  export type meetingsUpdateWithWhereUniqueWithoutMeetingtypeInput = {
    where: meetingsWhereUniqueInput
    data: XOR<meetingsUpdateWithoutMeetingtypeInput, meetingsUncheckedUpdateWithoutMeetingtypeInput>
  }

  export type meetingsUpdateManyWithWhereWithoutMeetingtypeInput = {
    where: meetingsScalarWhereInput
    data: XOR<meetingsUpdateManyMutationInput, meetingsUncheckedUpdateManyWithoutMeetingtypeInput>
  }

  export type meetingsScalarWhereInput = {
    AND?: meetingsScalarWhereInput | meetingsScalarWhereInput[]
    OR?: meetingsScalarWhereInput[]
    NOT?: meetingsScalarWhereInput | meetingsScalarWhereInput[]
    MeetingID?: IntFilter<"meetings"> | number
    MeetingDate?: DateTimeFilter<"meetings"> | Date | string
    MeetingTypeID?: IntFilter<"meetings"> | number
    VenueID?: IntNullableFilter<"meetings"> | number | null
    MeetingDescription?: StringNullableFilter<"meetings"> | string | null
    DocumentPath?: StringNullableFilter<"meetings"> | string | null
    Created?: DateTimeNullableFilter<"meetings"> | Date | string | null
    Modified?: DateTimeNullableFilter<"meetings"> | Date | string | null
    IsCancelled?: BoolNullableFilter<"meetings"> | boolean | null
    CancellationDateTime?: DateTimeNullableFilter<"meetings"> | Date | string | null
    CancellationReason?: StringNullableFilter<"meetings"> | string | null
  }

  export type departmentCreateWithoutStaffInput = {
    DepartmentName: string
    DepartmentCode?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
  }

  export type departmentUncheckedCreateWithoutStaffInput = {
    DepartmentID?: number
    DepartmentName: string
    DepartmentCode?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
  }

  export type departmentCreateOrConnectWithoutStaffInput = {
    where: departmentWhereUniqueInput
    create: XOR<departmentCreateWithoutStaffInput, departmentUncheckedCreateWithoutStaffInput>
  }

  export type meetingmemberCreateWithoutStaffInput = {
    IsPresent?: boolean | null
    Remarks?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    meetings: meetingsCreateNestedOneWithoutMeetingmemberInput
  }

  export type meetingmemberUncheckedCreateWithoutStaffInput = {
    MeetingMemberID?: number
    MeetingID: number
    IsPresent?: boolean | null
    Remarks?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
  }

  export type meetingmemberCreateOrConnectWithoutStaffInput = {
    where: meetingmemberWhereUniqueInput
    create: XOR<meetingmemberCreateWithoutStaffInput, meetingmemberUncheckedCreateWithoutStaffInput>
  }

  export type meetingmemberCreateManyStaffInputEnvelope = {
    data: meetingmemberCreateManyStaffInput | meetingmemberCreateManyStaffInput[]
    skipDuplicates?: boolean
  }

  export type actionitemCreateWithoutStaffInput = {
    Description: string
    Status?: $Enums.action_item_status
    DueDate?: Date | string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    meetings?: meetingsCreateNestedOneWithoutActionitemInput
  }

  export type actionitemUncheckedCreateWithoutStaffInput = {
    ActionItemID?: number
    MeetingID?: number | null
    Description: string
    Status?: $Enums.action_item_status
    DueDate?: Date | string | null
    Created?: Date | string | null
    Modified?: Date | string | null
  }

  export type actionitemCreateOrConnectWithoutStaffInput = {
    where: actionitemWhereUniqueInput
    create: XOR<actionitemCreateWithoutStaffInput, actionitemUncheckedCreateWithoutStaffInput>
  }

  export type actionitemCreateManyStaffInputEnvelope = {
    data: actionitemCreateManyStaffInput | actionitemCreateManyStaffInput[]
    skipDuplicates?: boolean
  }

  export type departmentUpsertWithoutStaffInput = {
    update: XOR<departmentUpdateWithoutStaffInput, departmentUncheckedUpdateWithoutStaffInput>
    create: XOR<departmentCreateWithoutStaffInput, departmentUncheckedCreateWithoutStaffInput>
    where?: departmentWhereInput
  }

  export type departmentUpdateToOneWithWhereWithoutStaffInput = {
    where?: departmentWhereInput
    data: XOR<departmentUpdateWithoutStaffInput, departmentUncheckedUpdateWithoutStaffInput>
  }

  export type departmentUpdateWithoutStaffInput = {
    DepartmentName?: StringFieldUpdateOperationsInput | string
    DepartmentCode?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type departmentUncheckedUpdateWithoutStaffInput = {
    DepartmentID?: IntFieldUpdateOperationsInput | number
    DepartmentName?: StringFieldUpdateOperationsInput | string
    DepartmentCode?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type meetingmemberUpsertWithWhereUniqueWithoutStaffInput = {
    where: meetingmemberWhereUniqueInput
    update: XOR<meetingmemberUpdateWithoutStaffInput, meetingmemberUncheckedUpdateWithoutStaffInput>
    create: XOR<meetingmemberCreateWithoutStaffInput, meetingmemberUncheckedCreateWithoutStaffInput>
  }

  export type meetingmemberUpdateWithWhereUniqueWithoutStaffInput = {
    where: meetingmemberWhereUniqueInput
    data: XOR<meetingmemberUpdateWithoutStaffInput, meetingmemberUncheckedUpdateWithoutStaffInput>
  }

  export type meetingmemberUpdateManyWithWhereWithoutStaffInput = {
    where: meetingmemberScalarWhereInput
    data: XOR<meetingmemberUpdateManyMutationInput, meetingmemberUncheckedUpdateManyWithoutStaffInput>
  }

  export type actionitemUpsertWithWhereUniqueWithoutStaffInput = {
    where: actionitemWhereUniqueInput
    update: XOR<actionitemUpdateWithoutStaffInput, actionitemUncheckedUpdateWithoutStaffInput>
    create: XOR<actionitemCreateWithoutStaffInput, actionitemUncheckedCreateWithoutStaffInput>
  }

  export type actionitemUpdateWithWhereUniqueWithoutStaffInput = {
    where: actionitemWhereUniqueInput
    data: XOR<actionitemUpdateWithoutStaffInput, actionitemUncheckedUpdateWithoutStaffInput>
  }

  export type actionitemUpdateManyWithWhereWithoutStaffInput = {
    where: actionitemScalarWhereInput
    data: XOR<actionitemUpdateManyMutationInput, actionitemUncheckedUpdateManyWithoutStaffInput>
  }

  export type meetingsCreateWithoutVenueInput = {
    MeetingDate: Date | string
    MeetingDescription?: string | null
    DocumentPath?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    IsCancelled?: boolean | null
    CancellationDateTime?: Date | string | null
    CancellationReason?: string | null
    meetingmember?: meetingmemberCreateNestedManyWithoutMeetingsInput
    actionitem?: actionitemCreateNestedManyWithoutMeetingsInput
    meetingtype: meetingtypeCreateNestedOneWithoutMeetingsInput
  }

  export type meetingsUncheckedCreateWithoutVenueInput = {
    MeetingID?: number
    MeetingDate: Date | string
    MeetingTypeID: number
    MeetingDescription?: string | null
    DocumentPath?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    IsCancelled?: boolean | null
    CancellationDateTime?: Date | string | null
    CancellationReason?: string | null
    meetingmember?: meetingmemberUncheckedCreateNestedManyWithoutMeetingsInput
    actionitem?: actionitemUncheckedCreateNestedManyWithoutMeetingsInput
  }

  export type meetingsCreateOrConnectWithoutVenueInput = {
    where: meetingsWhereUniqueInput
    create: XOR<meetingsCreateWithoutVenueInput, meetingsUncheckedCreateWithoutVenueInput>
  }

  export type meetingsCreateManyVenueInputEnvelope = {
    data: meetingsCreateManyVenueInput | meetingsCreateManyVenueInput[]
    skipDuplicates?: boolean
  }

  export type meetingsUpsertWithWhereUniqueWithoutVenueInput = {
    where: meetingsWhereUniqueInput
    update: XOR<meetingsUpdateWithoutVenueInput, meetingsUncheckedUpdateWithoutVenueInput>
    create: XOR<meetingsCreateWithoutVenueInput, meetingsUncheckedCreateWithoutVenueInput>
  }

  export type meetingsUpdateWithWhereUniqueWithoutVenueInput = {
    where: meetingsWhereUniqueInput
    data: XOR<meetingsUpdateWithoutVenueInput, meetingsUncheckedUpdateWithoutVenueInput>
  }

  export type meetingsUpdateManyWithWhereWithoutVenueInput = {
    where: meetingsScalarWhereInput
    data: XOR<meetingsUpdateManyMutationInput, meetingsUncheckedUpdateManyWithoutVenueInput>
  }

  export type meetingsCreateWithoutActionitemInput = {
    MeetingDate: Date | string
    MeetingDescription?: string | null
    DocumentPath?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    IsCancelled?: boolean | null
    CancellationDateTime?: Date | string | null
    CancellationReason?: string | null
    meetingmember?: meetingmemberCreateNestedManyWithoutMeetingsInput
    meetingtype: meetingtypeCreateNestedOneWithoutMeetingsInput
    venue?: venueCreateNestedOneWithoutMeetingsInput
  }

  export type meetingsUncheckedCreateWithoutActionitemInput = {
    MeetingID?: number
    MeetingDate: Date | string
    MeetingTypeID: number
    VenueID?: number | null
    MeetingDescription?: string | null
    DocumentPath?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    IsCancelled?: boolean | null
    CancellationDateTime?: Date | string | null
    CancellationReason?: string | null
    meetingmember?: meetingmemberUncheckedCreateNestedManyWithoutMeetingsInput
  }

  export type meetingsCreateOrConnectWithoutActionitemInput = {
    where: meetingsWhereUniqueInput
    create: XOR<meetingsCreateWithoutActionitemInput, meetingsUncheckedCreateWithoutActionitemInput>
  }

  export type staffCreateWithoutActionitemInput = {
    StaffName: string
    MobileNo?: string | null
    EmailAddress?: string | null
    Remarks?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    department?: departmentCreateNestedOneWithoutStaffInput
    meetingmember?: meetingmemberCreateNestedManyWithoutStaffInput
  }

  export type staffUncheckedCreateWithoutActionitemInput = {
    StaffID?: number
    StaffName: string
    MobileNo?: string | null
    EmailAddress?: string | null
    DepartmentID?: number | null
    Remarks?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    meetingmember?: meetingmemberUncheckedCreateNestedManyWithoutStaffInput
  }

  export type staffCreateOrConnectWithoutActionitemInput = {
    where: staffWhereUniqueInput
    create: XOR<staffCreateWithoutActionitemInput, staffUncheckedCreateWithoutActionitemInput>
  }

  export type meetingsUpsertWithoutActionitemInput = {
    update: XOR<meetingsUpdateWithoutActionitemInput, meetingsUncheckedUpdateWithoutActionitemInput>
    create: XOR<meetingsCreateWithoutActionitemInput, meetingsUncheckedCreateWithoutActionitemInput>
    where?: meetingsWhereInput
  }

  export type meetingsUpdateToOneWithWhereWithoutActionitemInput = {
    where?: meetingsWhereInput
    data: XOR<meetingsUpdateWithoutActionitemInput, meetingsUncheckedUpdateWithoutActionitemInput>
  }

  export type meetingsUpdateWithoutActionitemInput = {
    MeetingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    MeetingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsCancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    CancellationDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    meetingmember?: meetingmemberUpdateManyWithoutMeetingsNestedInput
    meetingtype?: meetingtypeUpdateOneRequiredWithoutMeetingsNestedInput
    venue?: venueUpdateOneWithoutMeetingsNestedInput
  }

  export type meetingsUncheckedUpdateWithoutActionitemInput = {
    MeetingID?: IntFieldUpdateOperationsInput | number
    MeetingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    MeetingTypeID?: IntFieldUpdateOperationsInput | number
    VenueID?: NullableIntFieldUpdateOperationsInput | number | null
    MeetingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsCancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    CancellationDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    meetingmember?: meetingmemberUncheckedUpdateManyWithoutMeetingsNestedInput
  }

  export type staffUpsertWithoutActionitemInput = {
    update: XOR<staffUpdateWithoutActionitemInput, staffUncheckedUpdateWithoutActionitemInput>
    create: XOR<staffCreateWithoutActionitemInput, staffUncheckedCreateWithoutActionitemInput>
    where?: staffWhereInput
  }

  export type staffUpdateToOneWithWhereWithoutActionitemInput = {
    where?: staffWhereInput
    data: XOR<staffUpdateWithoutActionitemInput, staffUncheckedUpdateWithoutActionitemInput>
  }

  export type staffUpdateWithoutActionitemInput = {
    StaffName?: StringFieldUpdateOperationsInput | string
    MobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    EmailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    department?: departmentUpdateOneWithoutStaffNestedInput
    meetingmember?: meetingmemberUpdateManyWithoutStaffNestedInput
  }

  export type staffUncheckedUpdateWithoutActionitemInput = {
    StaffID?: IntFieldUpdateOperationsInput | number
    StaffName?: StringFieldUpdateOperationsInput | string
    MobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    EmailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    DepartmentID?: NullableIntFieldUpdateOperationsInput | number | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meetingmember?: meetingmemberUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type staffCreateManyDepartmentInput = {
    StaffID?: number
    StaffName: string
    MobileNo?: string | null
    EmailAddress?: string | null
    Remarks?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
  }

  export type staffUpdateWithoutDepartmentInput = {
    StaffName?: StringFieldUpdateOperationsInput | string
    MobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    EmailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meetingmember?: meetingmemberUpdateManyWithoutStaffNestedInput
    actionitem?: actionitemUpdateManyWithoutStaffNestedInput
  }

  export type staffUncheckedUpdateWithoutDepartmentInput = {
    StaffID?: IntFieldUpdateOperationsInput | number
    StaffName?: StringFieldUpdateOperationsInput | string
    MobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    EmailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meetingmember?: meetingmemberUncheckedUpdateManyWithoutStaffNestedInput
    actionitem?: actionitemUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type staffUncheckedUpdateManyWithoutDepartmentInput = {
    StaffID?: IntFieldUpdateOperationsInput | number
    StaffName?: StringFieldUpdateOperationsInput | string
    MobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    EmailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type meetingmemberCreateManyMeetingsInput = {
    MeetingMemberID?: number
    StaffID: number
    IsPresent?: boolean | null
    Remarks?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
  }

  export type actionitemCreateManyMeetingsInput = {
    ActionItemID?: number
    StaffID?: number | null
    Description: string
    Status?: $Enums.action_item_status
    DueDate?: Date | string | null
    Created?: Date | string | null
    Modified?: Date | string | null
  }

  export type meetingmemberUpdateWithoutMeetingsInput = {
    IsPresent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    staff?: staffUpdateOneRequiredWithoutMeetingmemberNestedInput
  }

  export type meetingmemberUncheckedUpdateWithoutMeetingsInput = {
    MeetingMemberID?: IntFieldUpdateOperationsInput | number
    StaffID?: IntFieldUpdateOperationsInput | number
    IsPresent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type meetingmemberUncheckedUpdateManyWithoutMeetingsInput = {
    MeetingMemberID?: IntFieldUpdateOperationsInput | number
    StaffID?: IntFieldUpdateOperationsInput | number
    IsPresent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type actionitemUpdateWithoutMeetingsInput = {
    Description?: StringFieldUpdateOperationsInput | string
    Status?: Enumaction_item_statusFieldUpdateOperationsInput | $Enums.action_item_status
    DueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    staff?: staffUpdateOneWithoutActionitemNestedInput
  }

  export type actionitemUncheckedUpdateWithoutMeetingsInput = {
    ActionItemID?: IntFieldUpdateOperationsInput | number
    StaffID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: StringFieldUpdateOperationsInput | string
    Status?: Enumaction_item_statusFieldUpdateOperationsInput | $Enums.action_item_status
    DueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type actionitemUncheckedUpdateManyWithoutMeetingsInput = {
    ActionItemID?: IntFieldUpdateOperationsInput | number
    StaffID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: StringFieldUpdateOperationsInput | string
    Status?: Enumaction_item_statusFieldUpdateOperationsInput | $Enums.action_item_status
    DueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type meetingsCreateManyMeetingtypeInput = {
    MeetingID?: number
    MeetingDate: Date | string
    VenueID?: number | null
    MeetingDescription?: string | null
    DocumentPath?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    IsCancelled?: boolean | null
    CancellationDateTime?: Date | string | null
    CancellationReason?: string | null
  }

  export type meetingsUpdateWithoutMeetingtypeInput = {
    MeetingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    MeetingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsCancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    CancellationDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    meetingmember?: meetingmemberUpdateManyWithoutMeetingsNestedInput
    actionitem?: actionitemUpdateManyWithoutMeetingsNestedInput
    venue?: venueUpdateOneWithoutMeetingsNestedInput
  }

  export type meetingsUncheckedUpdateWithoutMeetingtypeInput = {
    MeetingID?: IntFieldUpdateOperationsInput | number
    MeetingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    VenueID?: NullableIntFieldUpdateOperationsInput | number | null
    MeetingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsCancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    CancellationDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    meetingmember?: meetingmemberUncheckedUpdateManyWithoutMeetingsNestedInput
    actionitem?: actionitemUncheckedUpdateManyWithoutMeetingsNestedInput
  }

  export type meetingsUncheckedUpdateManyWithoutMeetingtypeInput = {
    MeetingID?: IntFieldUpdateOperationsInput | number
    MeetingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    VenueID?: NullableIntFieldUpdateOperationsInput | number | null
    MeetingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsCancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    CancellationDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type meetingmemberCreateManyStaffInput = {
    MeetingMemberID?: number
    MeetingID: number
    IsPresent?: boolean | null
    Remarks?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
  }

  export type actionitemCreateManyStaffInput = {
    ActionItemID?: number
    MeetingID?: number | null
    Description: string
    Status?: $Enums.action_item_status
    DueDate?: Date | string | null
    Created?: Date | string | null
    Modified?: Date | string | null
  }

  export type meetingmemberUpdateWithoutStaffInput = {
    IsPresent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meetings?: meetingsUpdateOneRequiredWithoutMeetingmemberNestedInput
  }

  export type meetingmemberUncheckedUpdateWithoutStaffInput = {
    MeetingMemberID?: IntFieldUpdateOperationsInput | number
    MeetingID?: IntFieldUpdateOperationsInput | number
    IsPresent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type meetingmemberUncheckedUpdateManyWithoutStaffInput = {
    MeetingMemberID?: IntFieldUpdateOperationsInput | number
    MeetingID?: IntFieldUpdateOperationsInput | number
    IsPresent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type actionitemUpdateWithoutStaffInput = {
    Description?: StringFieldUpdateOperationsInput | string
    Status?: Enumaction_item_statusFieldUpdateOperationsInput | $Enums.action_item_status
    DueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meetings?: meetingsUpdateOneWithoutActionitemNestedInput
  }

  export type actionitemUncheckedUpdateWithoutStaffInput = {
    ActionItemID?: IntFieldUpdateOperationsInput | number
    MeetingID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: StringFieldUpdateOperationsInput | string
    Status?: Enumaction_item_statusFieldUpdateOperationsInput | $Enums.action_item_status
    DueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type actionitemUncheckedUpdateManyWithoutStaffInput = {
    ActionItemID?: IntFieldUpdateOperationsInput | number
    MeetingID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: StringFieldUpdateOperationsInput | string
    Status?: Enumaction_item_statusFieldUpdateOperationsInput | $Enums.action_item_status
    DueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type meetingsCreateManyVenueInput = {
    MeetingID?: number
    MeetingDate: Date | string
    MeetingTypeID: number
    MeetingDescription?: string | null
    DocumentPath?: string | null
    Created?: Date | string | null
    Modified?: Date | string | null
    IsCancelled?: boolean | null
    CancellationDateTime?: Date | string | null
    CancellationReason?: string | null
  }

  export type meetingsUpdateWithoutVenueInput = {
    MeetingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    MeetingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsCancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    CancellationDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    meetingmember?: meetingmemberUpdateManyWithoutMeetingsNestedInput
    actionitem?: actionitemUpdateManyWithoutMeetingsNestedInput
    meetingtype?: meetingtypeUpdateOneRequiredWithoutMeetingsNestedInput
  }

  export type meetingsUncheckedUpdateWithoutVenueInput = {
    MeetingID?: IntFieldUpdateOperationsInput | number
    MeetingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    MeetingTypeID?: IntFieldUpdateOperationsInput | number
    MeetingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsCancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    CancellationDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    meetingmember?: meetingmemberUncheckedUpdateManyWithoutMeetingsNestedInput
    actionitem?: actionitemUncheckedUpdateManyWithoutMeetingsNestedInput
  }

  export type meetingsUncheckedUpdateManyWithoutVenueInput = {
    MeetingID?: IntFieldUpdateOperationsInput | number
    MeetingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    MeetingTypeID?: IntFieldUpdateOperationsInput | number
    MeetingDescription?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentPath?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsCancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    CancellationDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}