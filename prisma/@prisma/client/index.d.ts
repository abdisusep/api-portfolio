
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Services
 * 
 */
export type Services = $Result.DefaultSelection<Prisma.$ServicesPayload>
/**
 * Model Tools
 * 
 */
export type Tools = $Result.DefaultSelection<Prisma.$ToolsPayload>
/**
 * Model Socials
 * 
 */
export type Socials = $Result.DefaultSelection<Prisma.$SocialsPayload>
/**
 * Model Skills
 * 
 */
export type Skills = $Result.DefaultSelection<Prisma.$SkillsPayload>
/**
 * Model Categories
 * 
 */
export type Categories = $Result.DefaultSelection<Prisma.$CategoriesPayload>
/**
 * Model Project_images
 * 
 */
export type Project_images = $Result.DefaultSelection<Prisma.$Project_imagesPayload>
/**
 * Model Project_skills
 * 
 */
export type Project_skills = $Result.DefaultSelection<Prisma.$Project_skillsPayload>
/**
 * Model Projects
 * 
 */
export type Projects = $Result.DefaultSelection<Prisma.$ProjectsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Services
 * const services = await prisma.services.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Services
   * const services = await prisma.services.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.services`: Exposes CRUD operations for the **Services** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.services.findMany()
    * ```
    */
  get services(): Prisma.ServicesDelegate<ExtArgs>;

  /**
   * `prisma.tools`: Exposes CRUD operations for the **Tools** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tools
    * const tools = await prisma.tools.findMany()
    * ```
    */
  get tools(): Prisma.ToolsDelegate<ExtArgs>;

  /**
   * `prisma.socials`: Exposes CRUD operations for the **Socials** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Socials
    * const socials = await prisma.socials.findMany()
    * ```
    */
  get socials(): Prisma.SocialsDelegate<ExtArgs>;

  /**
   * `prisma.skills`: Exposes CRUD operations for the **Skills** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skills.findMany()
    * ```
    */
  get skills(): Prisma.SkillsDelegate<ExtArgs>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **Categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.CategoriesDelegate<ExtArgs>;

  /**
   * `prisma.project_images`: Exposes CRUD operations for the **Project_images** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Project_images
    * const project_images = await prisma.project_images.findMany()
    * ```
    */
  get project_images(): Prisma.Project_imagesDelegate<ExtArgs>;

  /**
   * `prisma.project_skills`: Exposes CRUD operations for the **Project_skills** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Project_skills
    * const project_skills = await prisma.project_skills.findMany()
    * ```
    */
  get project_skills(): Prisma.Project_skillsDelegate<ExtArgs>;

  /**
   * `prisma.projects`: Exposes CRUD operations for the **Projects** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.projects.findMany()
    * ```
    */
  get projects(): Prisma.ProjectsDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 5.9.1
   * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Services: 'Services',
    Tools: 'Tools',
    Socials: 'Socials',
    Skills: 'Skills',
    Categories: 'Categories',
    Project_images: 'Project_images',
    Project_skills: 'Project_skills',
    Projects: 'Projects'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'services' | 'tools' | 'socials' | 'skills' | 'categories' | 'project_images' | 'project_skills' | 'projects'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Services: {
        payload: Prisma.$ServicesPayload<ExtArgs>
        fields: Prisma.ServicesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServicesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServicesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>
          }
          findFirst: {
            args: Prisma.ServicesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServicesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>
          }
          findMany: {
            args: Prisma.ServicesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>[]
          }
          create: {
            args: Prisma.ServicesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>
          }
          createMany: {
            args: Prisma.ServicesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ServicesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>
          }
          update: {
            args: Prisma.ServicesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>
          }
          deleteMany: {
            args: Prisma.ServicesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ServicesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ServicesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>
          }
          aggregate: {
            args: Prisma.ServicesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateServices>
          }
          groupBy: {
            args: Prisma.ServicesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ServicesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServicesCountArgs<ExtArgs>,
            result: $Utils.Optional<ServicesCountAggregateOutputType> | number
          }
        }
      }
      Tools: {
        payload: Prisma.$ToolsPayload<ExtArgs>
        fields: Prisma.ToolsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ToolsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ToolsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ToolsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ToolsPayload>
          }
          findFirst: {
            args: Prisma.ToolsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ToolsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ToolsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ToolsPayload>
          }
          findMany: {
            args: Prisma.ToolsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ToolsPayload>[]
          }
          create: {
            args: Prisma.ToolsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ToolsPayload>
          }
          createMany: {
            args: Prisma.ToolsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ToolsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ToolsPayload>
          }
          update: {
            args: Prisma.ToolsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ToolsPayload>
          }
          deleteMany: {
            args: Prisma.ToolsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ToolsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ToolsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ToolsPayload>
          }
          aggregate: {
            args: Prisma.ToolsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTools>
          }
          groupBy: {
            args: Prisma.ToolsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ToolsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ToolsCountArgs<ExtArgs>,
            result: $Utils.Optional<ToolsCountAggregateOutputType> | number
          }
        }
      }
      Socials: {
        payload: Prisma.$SocialsPayload<ExtArgs>
        fields: Prisma.SocialsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SocialsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SocialsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SocialsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SocialsPayload>
          }
          findFirst: {
            args: Prisma.SocialsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SocialsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SocialsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SocialsPayload>
          }
          findMany: {
            args: Prisma.SocialsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SocialsPayload>[]
          }
          create: {
            args: Prisma.SocialsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SocialsPayload>
          }
          createMany: {
            args: Prisma.SocialsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SocialsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SocialsPayload>
          }
          update: {
            args: Prisma.SocialsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SocialsPayload>
          }
          deleteMany: {
            args: Prisma.SocialsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SocialsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SocialsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SocialsPayload>
          }
          aggregate: {
            args: Prisma.SocialsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSocials>
          }
          groupBy: {
            args: Prisma.SocialsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SocialsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SocialsCountArgs<ExtArgs>,
            result: $Utils.Optional<SocialsCountAggregateOutputType> | number
          }
        }
      }
      Skills: {
        payload: Prisma.$SkillsPayload<ExtArgs>
        fields: Prisma.SkillsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>
          }
          findFirst: {
            args: Prisma.SkillsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>
          }
          findMany: {
            args: Prisma.SkillsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>[]
          }
          create: {
            args: Prisma.SkillsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>
          }
          createMany: {
            args: Prisma.SkillsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SkillsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>
          }
          update: {
            args: Prisma.SkillsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>
          }
          deleteMany: {
            args: Prisma.SkillsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SkillsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SkillsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>
          }
          aggregate: {
            args: Prisma.SkillsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSkills>
          }
          groupBy: {
            args: Prisma.SkillsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SkillsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillsCountArgs<ExtArgs>,
            result: $Utils.Optional<SkillsCountAggregateOutputType> | number
          }
        }
      }
      Categories: {
        payload: Prisma.$CategoriesPayload<ExtArgs>
        fields: Prisma.CategoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findFirst: {
            args: Prisma.CategoriesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findMany: {
            args: Prisma.CategoriesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          create: {
            args: Prisma.CategoriesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          createMany: {
            args: Prisma.CategoriesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CategoriesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          update: {
            args: Prisma.CategoriesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          deleteMany: {
            args: Prisma.CategoriesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CategoriesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.CategoriesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriesCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      Project_images: {
        payload: Prisma.$Project_imagesPayload<ExtArgs>
        fields: Prisma.Project_imagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Project_imagesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Project_imagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Project_imagesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Project_imagesPayload>
          }
          findFirst: {
            args: Prisma.Project_imagesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Project_imagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Project_imagesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Project_imagesPayload>
          }
          findMany: {
            args: Prisma.Project_imagesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Project_imagesPayload>[]
          }
          create: {
            args: Prisma.Project_imagesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Project_imagesPayload>
          }
          createMany: {
            args: Prisma.Project_imagesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Project_imagesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Project_imagesPayload>
          }
          update: {
            args: Prisma.Project_imagesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Project_imagesPayload>
          }
          deleteMany: {
            args: Prisma.Project_imagesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Project_imagesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Project_imagesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Project_imagesPayload>
          }
          aggregate: {
            args: Prisma.Project_imagesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProject_images>
          }
          groupBy: {
            args: Prisma.Project_imagesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Project_imagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.Project_imagesCountArgs<ExtArgs>,
            result: $Utils.Optional<Project_imagesCountAggregateOutputType> | number
          }
        }
      }
      Project_skills: {
        payload: Prisma.$Project_skillsPayload<ExtArgs>
        fields: Prisma.Project_skillsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Project_skillsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Project_skillsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Project_skillsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Project_skillsPayload>
          }
          findFirst: {
            args: Prisma.Project_skillsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Project_skillsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Project_skillsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Project_skillsPayload>
          }
          findMany: {
            args: Prisma.Project_skillsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Project_skillsPayload>[]
          }
          create: {
            args: Prisma.Project_skillsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Project_skillsPayload>
          }
          createMany: {
            args: Prisma.Project_skillsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Project_skillsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Project_skillsPayload>
          }
          update: {
            args: Prisma.Project_skillsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Project_skillsPayload>
          }
          deleteMany: {
            args: Prisma.Project_skillsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Project_skillsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Project_skillsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Project_skillsPayload>
          }
          aggregate: {
            args: Prisma.Project_skillsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProject_skills>
          }
          groupBy: {
            args: Prisma.Project_skillsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Project_skillsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Project_skillsCountArgs<ExtArgs>,
            result: $Utils.Optional<Project_skillsCountAggregateOutputType> | number
          }
        }
      }
      Projects: {
        payload: Prisma.$ProjectsPayload<ExtArgs>
        fields: Prisma.ProjectsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          findFirst: {
            args: Prisma.ProjectsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          findMany: {
            args: Prisma.ProjectsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>[]
          }
          create: {
            args: Prisma.ProjectsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          createMany: {
            args: Prisma.ProjectsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProjectsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          update: {
            args: Prisma.ProjectsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          deleteMany: {
            args: Prisma.ProjectsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProjectsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          aggregate: {
            args: Prisma.ProjectsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProjects>
          }
          groupBy: {
            args: Prisma.ProjectsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProjectsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectsCountArgs<ExtArgs>,
            result: $Utils.Optional<ProjectsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'update'
    | 'updateMany'
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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type SkillsCountOutputType
   */

  export type SkillsCountOutputType = {
    project_skills: number
  }

  export type SkillsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project_skills?: boolean | SkillsCountOutputTypeCountProject_skillsArgs
  }

  // Custom InputTypes

  /**
   * SkillsCountOutputType without action
   */
  export type SkillsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillsCountOutputType
     */
    select?: SkillsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * SkillsCountOutputType without action
   */
  export type SkillsCountOutputTypeCountProject_skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Project_skillsWhereInput
  }



  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    projects: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | CategoriesCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectsWhereInput
  }



  /**
   * Count Type ProjectsCountOutputType
   */

  export type ProjectsCountOutputType = {
    project_images: number
    project_skills: number
  }

  export type ProjectsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project_images?: boolean | ProjectsCountOutputTypeCountProject_imagesArgs
    project_skills?: boolean | ProjectsCountOutputTypeCountProject_skillsArgs
  }

  // Custom InputTypes

  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectsCountOutputType
     */
    select?: ProjectsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeCountProject_imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Project_imagesWhereInput
  }


  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeCountProject_skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Project_skillsWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Services
   */

  export type AggregateServices = {
    _count: ServicesCountAggregateOutputType | null
    _avg: ServicesAvgAggregateOutputType | null
    _sum: ServicesSumAggregateOutputType | null
    _min: ServicesMinAggregateOutputType | null
    _max: ServicesMaxAggregateOutputType | null
  }

  export type ServicesAvgAggregateOutputType = {
    id: number | null
    active: number | null
  }

  export type ServicesSumAggregateOutputType = {
    id: number | null
    active: number | null
  }

  export type ServicesMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    image: string | null
    active: number | null
  }

  export type ServicesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    image: string | null
    active: number | null
  }

  export type ServicesCountAggregateOutputType = {
    id: number
    name: number
    description: number
    image: number
    active: number
    _all: number
  }


  export type ServicesAvgAggregateInputType = {
    id?: true
    active?: true
  }

  export type ServicesSumAggregateInputType = {
    id?: true
    active?: true
  }

  export type ServicesMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    active?: true
  }

  export type ServicesMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    active?: true
  }

  export type ServicesCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    active?: true
    _all?: true
  }

  export type ServicesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to aggregate.
     */
    where?: ServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServicesOrderByWithRelationInput | ServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServicesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServicesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServicesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicesMaxAggregateInputType
  }

  export type GetServicesAggregateType<T extends ServicesAggregateArgs> = {
        [P in keyof T & keyof AggregateServices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServices[P]>
      : GetScalarType<T[P], AggregateServices[P]>
  }




  export type ServicesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicesWhereInput
    orderBy?: ServicesOrderByWithAggregationInput | ServicesOrderByWithAggregationInput[]
    by: ServicesScalarFieldEnum[] | ServicesScalarFieldEnum
    having?: ServicesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicesCountAggregateInputType | true
    _avg?: ServicesAvgAggregateInputType
    _sum?: ServicesSumAggregateInputType
    _min?: ServicesMinAggregateInputType
    _max?: ServicesMaxAggregateInputType
  }

  export type ServicesGroupByOutputType = {
    id: number
    name: string
    description: string
    image: string
    active: number
    _count: ServicesCountAggregateOutputType | null
    _avg: ServicesAvgAggregateOutputType | null
    _sum: ServicesSumAggregateOutputType | null
    _min: ServicesMinAggregateOutputType | null
    _max: ServicesMaxAggregateOutputType | null
  }

  type GetServicesGroupByPayload<T extends ServicesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicesGroupByOutputType[P]>
            : GetScalarType<T[P], ServicesGroupByOutputType[P]>
        }
      >
    >


  export type ServicesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    active?: boolean
  }, ExtArgs["result"]["services"]>

  export type ServicesSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    active?: boolean
  }


  export type $ServicesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Services"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      image: string
      active: number
    }, ExtArgs["result"]["services"]>
    composites: {}
  }


  type ServicesGetPayload<S extends boolean | null | undefined | ServicesDefaultArgs> = $Result.GetResult<Prisma.$ServicesPayload, S>

  type ServicesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ServicesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ServicesCountAggregateInputType | true
    }

  export interface ServicesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Services'], meta: { name: 'Services' } }
    /**
     * Find zero or one Services that matches the filter.
     * @param {ServicesFindUniqueArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ServicesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ServicesFindUniqueArgs<ExtArgs>>
    ): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Services that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ServicesFindUniqueOrThrowArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ServicesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ServicesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesFindFirstArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ServicesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ServicesFindFirstArgs<ExtArgs>>
    ): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Services that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesFindFirstOrThrowArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ServicesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ServicesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.services.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.services.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const servicesWithIdOnly = await prisma.services.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ServicesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ServicesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Services.
     * @param {ServicesCreateArgs} args - Arguments to create a Services.
     * @example
     * // Create one Services
     * const Services = await prisma.services.create({
     *   data: {
     *     // ... data to create a Services
     *   }
     * })
     * 
    **/
    create<T extends ServicesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ServicesCreateArgs<ExtArgs>>
    ): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Services.
     *     @param {ServicesCreateManyArgs} args - Arguments to create many Services.
     *     @example
     *     // Create many Services
     *     const services = await prisma.services.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ServicesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ServicesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Services.
     * @param {ServicesDeleteArgs} args - Arguments to delete one Services.
     * @example
     * // Delete one Services
     * const Services = await prisma.services.delete({
     *   where: {
     *     // ... filter to delete one Services
     *   }
     * })
     * 
    **/
    delete<T extends ServicesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ServicesDeleteArgs<ExtArgs>>
    ): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Services.
     * @param {ServicesUpdateArgs} args - Arguments to update one Services.
     * @example
     * // Update one Services
     * const services = await prisma.services.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ServicesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ServicesUpdateArgs<ExtArgs>>
    ): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Services.
     * @param {ServicesDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.services.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ServicesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ServicesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const services = await prisma.services.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ServicesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ServicesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Services.
     * @param {ServicesUpsertArgs} args - Arguments to update or create a Services.
     * @example
     * // Update or create a Services
     * const services = await prisma.services.upsert({
     *   create: {
     *     // ... data to create a Services
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Services we want to update
     *   }
     * })
    **/
    upsert<T extends ServicesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ServicesUpsertArgs<ExtArgs>>
    ): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.services.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServicesCountArgs>(
      args?: Subset<T, ServicesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServicesAggregateArgs>(args: Subset<T, ServicesAggregateArgs>): Prisma.PrismaPromise<GetServicesAggregateType<T>>

    /**
     * Group by Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesGroupByArgs} args - Group by arguments.
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
      T extends ServicesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServicesGroupByArgs['orderBy'] }
        : { orderBy?: ServicesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Services model
   */
  readonly fields: ServicesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Services.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServicesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Services model
   */ 
  interface ServicesFieldRefs {
    readonly id: FieldRef<"Services", 'Int'>
    readonly name: FieldRef<"Services", 'String'>
    readonly description: FieldRef<"Services", 'String'>
    readonly image: FieldRef<"Services", 'String'>
    readonly active: FieldRef<"Services", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Services findUnique
   */
  export type ServicesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where: ServicesWhereUniqueInput
  }


  /**
   * Services findUniqueOrThrow
   */
  export type ServicesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where: ServicesWhereUniqueInput
  }


  /**
   * Services findFirst
   */
  export type ServicesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServicesOrderByWithRelationInput | ServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServicesScalarFieldEnum | ServicesScalarFieldEnum[]
  }


  /**
   * Services findFirstOrThrow
   */
  export type ServicesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServicesOrderByWithRelationInput | ServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServicesScalarFieldEnum | ServicesScalarFieldEnum[]
  }


  /**
   * Services findMany
   */
  export type ServicesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServicesOrderByWithRelationInput | ServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServicesScalarFieldEnum | ServicesScalarFieldEnum[]
  }


  /**
   * Services create
   */
  export type ServicesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * The data needed to create a Services.
     */
    data: XOR<ServicesCreateInput, ServicesUncheckedCreateInput>
  }


  /**
   * Services createMany
   */
  export type ServicesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServicesCreateManyInput | ServicesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Services update
   */
  export type ServicesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * The data needed to update a Services.
     */
    data: XOR<ServicesUpdateInput, ServicesUncheckedUpdateInput>
    /**
     * Choose, which Services to update.
     */
    where: ServicesWhereUniqueInput
  }


  /**
   * Services updateMany
   */
  export type ServicesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServicesUpdateManyMutationInput, ServicesUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServicesWhereInput
  }


  /**
   * Services upsert
   */
  export type ServicesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * The filter to search for the Services to update in case it exists.
     */
    where: ServicesWhereUniqueInput
    /**
     * In case the Services found by the `where` argument doesn't exist, create a new Services with this data.
     */
    create: XOR<ServicesCreateInput, ServicesUncheckedCreateInput>
    /**
     * In case the Services was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServicesUpdateInput, ServicesUncheckedUpdateInput>
  }


  /**
   * Services delete
   */
  export type ServicesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Filter which Services to delete.
     */
    where: ServicesWhereUniqueInput
  }


  /**
   * Services deleteMany
   */
  export type ServicesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServicesWhereInput
  }


  /**
   * Services without action
   */
  export type ServicesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
  }



  /**
   * Model Tools
   */

  export type AggregateTools = {
    _count: ToolsCountAggregateOutputType | null
    _avg: ToolsAvgAggregateOutputType | null
    _sum: ToolsSumAggregateOutputType | null
    _min: ToolsMinAggregateOutputType | null
    _max: ToolsMaxAggregateOutputType | null
  }

  export type ToolsAvgAggregateOutputType = {
    id: number | null
    active: number | null
  }

  export type ToolsSumAggregateOutputType = {
    id: number | null
    active: number | null
  }

  export type ToolsMinAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    active: number | null
  }

  export type ToolsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    active: number | null
  }

  export type ToolsCountAggregateOutputType = {
    id: number
    name: number
    image: number
    active: number
    _all: number
  }


  export type ToolsAvgAggregateInputType = {
    id?: true
    active?: true
  }

  export type ToolsSumAggregateInputType = {
    id?: true
    active?: true
  }

  export type ToolsMinAggregateInputType = {
    id?: true
    name?: true
    image?: true
    active?: true
  }

  export type ToolsMaxAggregateInputType = {
    id?: true
    name?: true
    image?: true
    active?: true
  }

  export type ToolsCountAggregateInputType = {
    id?: true
    name?: true
    image?: true
    active?: true
    _all?: true
  }

  export type ToolsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tools to aggregate.
     */
    where?: ToolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tools to fetch.
     */
    orderBy?: ToolsOrderByWithRelationInput | ToolsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ToolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tools
    **/
    _count?: true | ToolsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ToolsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ToolsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ToolsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ToolsMaxAggregateInputType
  }

  export type GetToolsAggregateType<T extends ToolsAggregateArgs> = {
        [P in keyof T & keyof AggregateTools]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTools[P]>
      : GetScalarType<T[P], AggregateTools[P]>
  }




  export type ToolsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ToolsWhereInput
    orderBy?: ToolsOrderByWithAggregationInput | ToolsOrderByWithAggregationInput[]
    by: ToolsScalarFieldEnum[] | ToolsScalarFieldEnum
    having?: ToolsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ToolsCountAggregateInputType | true
    _avg?: ToolsAvgAggregateInputType
    _sum?: ToolsSumAggregateInputType
    _min?: ToolsMinAggregateInputType
    _max?: ToolsMaxAggregateInputType
  }

  export type ToolsGroupByOutputType = {
    id: number
    name: string
    image: string
    active: number
    _count: ToolsCountAggregateOutputType | null
    _avg: ToolsAvgAggregateOutputType | null
    _sum: ToolsSumAggregateOutputType | null
    _min: ToolsMinAggregateOutputType | null
    _max: ToolsMaxAggregateOutputType | null
  }

  type GetToolsGroupByPayload<T extends ToolsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ToolsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ToolsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ToolsGroupByOutputType[P]>
            : GetScalarType<T[P], ToolsGroupByOutputType[P]>
        }
      >
    >


  export type ToolsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    active?: boolean
  }, ExtArgs["result"]["tools"]>

  export type ToolsSelectScalar = {
    id?: boolean
    name?: boolean
    image?: boolean
    active?: boolean
  }


  export type $ToolsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tools"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      image: string
      active: number
    }, ExtArgs["result"]["tools"]>
    composites: {}
  }


  type ToolsGetPayload<S extends boolean | null | undefined | ToolsDefaultArgs> = $Result.GetResult<Prisma.$ToolsPayload, S>

  type ToolsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ToolsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ToolsCountAggregateInputType | true
    }

  export interface ToolsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tools'], meta: { name: 'Tools' } }
    /**
     * Find zero or one Tools that matches the filter.
     * @param {ToolsFindUniqueArgs} args - Arguments to find a Tools
     * @example
     * // Get one Tools
     * const tools = await prisma.tools.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ToolsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ToolsFindUniqueArgs<ExtArgs>>
    ): Prisma__ToolsClient<$Result.GetResult<Prisma.$ToolsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Tools that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ToolsFindUniqueOrThrowArgs} args - Arguments to find a Tools
     * @example
     * // Get one Tools
     * const tools = await prisma.tools.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ToolsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ToolsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ToolsClient<$Result.GetResult<Prisma.$ToolsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Tools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolsFindFirstArgs} args - Arguments to find a Tools
     * @example
     * // Get one Tools
     * const tools = await prisma.tools.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ToolsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ToolsFindFirstArgs<ExtArgs>>
    ): Prisma__ToolsClient<$Result.GetResult<Prisma.$ToolsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Tools that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolsFindFirstOrThrowArgs} args - Arguments to find a Tools
     * @example
     * // Get one Tools
     * const tools = await prisma.tools.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ToolsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ToolsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ToolsClient<$Result.GetResult<Prisma.$ToolsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tools
     * const tools = await prisma.tools.findMany()
     * 
     * // Get first 10 Tools
     * const tools = await prisma.tools.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const toolsWithIdOnly = await prisma.tools.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ToolsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ToolsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Tools.
     * @param {ToolsCreateArgs} args - Arguments to create a Tools.
     * @example
     * // Create one Tools
     * const Tools = await prisma.tools.create({
     *   data: {
     *     // ... data to create a Tools
     *   }
     * })
     * 
    **/
    create<T extends ToolsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ToolsCreateArgs<ExtArgs>>
    ): Prisma__ToolsClient<$Result.GetResult<Prisma.$ToolsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tools.
     *     @param {ToolsCreateManyArgs} args - Arguments to create many Tools.
     *     @example
     *     // Create many Tools
     *     const tools = await prisma.tools.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ToolsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ToolsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tools.
     * @param {ToolsDeleteArgs} args - Arguments to delete one Tools.
     * @example
     * // Delete one Tools
     * const Tools = await prisma.tools.delete({
     *   where: {
     *     // ... filter to delete one Tools
     *   }
     * })
     * 
    **/
    delete<T extends ToolsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ToolsDeleteArgs<ExtArgs>>
    ): Prisma__ToolsClient<$Result.GetResult<Prisma.$ToolsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Tools.
     * @param {ToolsUpdateArgs} args - Arguments to update one Tools.
     * @example
     * // Update one Tools
     * const tools = await prisma.tools.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ToolsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ToolsUpdateArgs<ExtArgs>>
    ): Prisma__ToolsClient<$Result.GetResult<Prisma.$ToolsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tools.
     * @param {ToolsDeleteManyArgs} args - Arguments to filter Tools to delete.
     * @example
     * // Delete a few Tools
     * const { count } = await prisma.tools.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ToolsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ToolsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tools
     * const tools = await prisma.tools.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ToolsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ToolsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tools.
     * @param {ToolsUpsertArgs} args - Arguments to update or create a Tools.
     * @example
     * // Update or create a Tools
     * const tools = await prisma.tools.upsert({
     *   create: {
     *     // ... data to create a Tools
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tools we want to update
     *   }
     * })
    **/
    upsert<T extends ToolsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ToolsUpsertArgs<ExtArgs>>
    ): Prisma__ToolsClient<$Result.GetResult<Prisma.$ToolsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolsCountArgs} args - Arguments to filter Tools to count.
     * @example
     * // Count the number of Tools
     * const count = await prisma.tools.count({
     *   where: {
     *     // ... the filter for the Tools we want to count
     *   }
     * })
    **/
    count<T extends ToolsCountArgs>(
      args?: Subset<T, ToolsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ToolsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ToolsAggregateArgs>(args: Subset<T, ToolsAggregateArgs>): Prisma.PrismaPromise<GetToolsAggregateType<T>>

    /**
     * Group by Tools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolsGroupByArgs} args - Group by arguments.
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
      T extends ToolsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ToolsGroupByArgs['orderBy'] }
        : { orderBy?: ToolsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ToolsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetToolsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tools model
   */
  readonly fields: ToolsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tools.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ToolsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Tools model
   */ 
  interface ToolsFieldRefs {
    readonly id: FieldRef<"Tools", 'Int'>
    readonly name: FieldRef<"Tools", 'String'>
    readonly image: FieldRef<"Tools", 'String'>
    readonly active: FieldRef<"Tools", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Tools findUnique
   */
  export type ToolsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tools
     */
    select?: ToolsSelect<ExtArgs> | null
    /**
     * Filter, which Tools to fetch.
     */
    where: ToolsWhereUniqueInput
  }


  /**
   * Tools findUniqueOrThrow
   */
  export type ToolsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tools
     */
    select?: ToolsSelect<ExtArgs> | null
    /**
     * Filter, which Tools to fetch.
     */
    where: ToolsWhereUniqueInput
  }


  /**
   * Tools findFirst
   */
  export type ToolsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tools
     */
    select?: ToolsSelect<ExtArgs> | null
    /**
     * Filter, which Tools to fetch.
     */
    where?: ToolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tools to fetch.
     */
    orderBy?: ToolsOrderByWithRelationInput | ToolsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tools.
     */
    cursor?: ToolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tools.
     */
    distinct?: ToolsScalarFieldEnum | ToolsScalarFieldEnum[]
  }


  /**
   * Tools findFirstOrThrow
   */
  export type ToolsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tools
     */
    select?: ToolsSelect<ExtArgs> | null
    /**
     * Filter, which Tools to fetch.
     */
    where?: ToolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tools to fetch.
     */
    orderBy?: ToolsOrderByWithRelationInput | ToolsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tools.
     */
    cursor?: ToolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tools.
     */
    distinct?: ToolsScalarFieldEnum | ToolsScalarFieldEnum[]
  }


  /**
   * Tools findMany
   */
  export type ToolsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tools
     */
    select?: ToolsSelect<ExtArgs> | null
    /**
     * Filter, which Tools to fetch.
     */
    where?: ToolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tools to fetch.
     */
    orderBy?: ToolsOrderByWithRelationInput | ToolsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tools.
     */
    cursor?: ToolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tools.
     */
    skip?: number
    distinct?: ToolsScalarFieldEnum | ToolsScalarFieldEnum[]
  }


  /**
   * Tools create
   */
  export type ToolsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tools
     */
    select?: ToolsSelect<ExtArgs> | null
    /**
     * The data needed to create a Tools.
     */
    data: XOR<ToolsCreateInput, ToolsUncheckedCreateInput>
  }


  /**
   * Tools createMany
   */
  export type ToolsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tools.
     */
    data: ToolsCreateManyInput | ToolsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Tools update
   */
  export type ToolsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tools
     */
    select?: ToolsSelect<ExtArgs> | null
    /**
     * The data needed to update a Tools.
     */
    data: XOR<ToolsUpdateInput, ToolsUncheckedUpdateInput>
    /**
     * Choose, which Tools to update.
     */
    where: ToolsWhereUniqueInput
  }


  /**
   * Tools updateMany
   */
  export type ToolsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tools.
     */
    data: XOR<ToolsUpdateManyMutationInput, ToolsUncheckedUpdateManyInput>
    /**
     * Filter which Tools to update
     */
    where?: ToolsWhereInput
  }


  /**
   * Tools upsert
   */
  export type ToolsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tools
     */
    select?: ToolsSelect<ExtArgs> | null
    /**
     * The filter to search for the Tools to update in case it exists.
     */
    where: ToolsWhereUniqueInput
    /**
     * In case the Tools found by the `where` argument doesn't exist, create a new Tools with this data.
     */
    create: XOR<ToolsCreateInput, ToolsUncheckedCreateInput>
    /**
     * In case the Tools was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ToolsUpdateInput, ToolsUncheckedUpdateInput>
  }


  /**
   * Tools delete
   */
  export type ToolsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tools
     */
    select?: ToolsSelect<ExtArgs> | null
    /**
     * Filter which Tools to delete.
     */
    where: ToolsWhereUniqueInput
  }


  /**
   * Tools deleteMany
   */
  export type ToolsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tools to delete
     */
    where?: ToolsWhereInput
  }


  /**
   * Tools without action
   */
  export type ToolsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tools
     */
    select?: ToolsSelect<ExtArgs> | null
  }



  /**
   * Model Socials
   */

  export type AggregateSocials = {
    _count: SocialsCountAggregateOutputType | null
    _avg: SocialsAvgAggregateOutputType | null
    _sum: SocialsSumAggregateOutputType | null
    _min: SocialsMinAggregateOutputType | null
    _max: SocialsMaxAggregateOutputType | null
  }

  export type SocialsAvgAggregateOutputType = {
    id: number | null
    active: number | null
  }

  export type SocialsSumAggregateOutputType = {
    id: number | null
    active: number | null
  }

  export type SocialsMinAggregateOutputType = {
    id: number | null
    name: string | null
    url: string | null
    image: string | null
    active: number | null
  }

  export type SocialsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    url: string | null
    image: string | null
    active: number | null
  }

  export type SocialsCountAggregateOutputType = {
    id: number
    name: number
    url: number
    image: number
    active: number
    _all: number
  }


  export type SocialsAvgAggregateInputType = {
    id?: true
    active?: true
  }

  export type SocialsSumAggregateInputType = {
    id?: true
    active?: true
  }

  export type SocialsMinAggregateInputType = {
    id?: true
    name?: true
    url?: true
    image?: true
    active?: true
  }

  export type SocialsMaxAggregateInputType = {
    id?: true
    name?: true
    url?: true
    image?: true
    active?: true
  }

  export type SocialsCountAggregateInputType = {
    id?: true
    name?: true
    url?: true
    image?: true
    active?: true
    _all?: true
  }

  export type SocialsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Socials to aggregate.
     */
    where?: SocialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Socials to fetch.
     */
    orderBy?: SocialsOrderByWithRelationInput | SocialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SocialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Socials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Socials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Socials
    **/
    _count?: true | SocialsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SocialsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SocialsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocialsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocialsMaxAggregateInputType
  }

  export type GetSocialsAggregateType<T extends SocialsAggregateArgs> = {
        [P in keyof T & keyof AggregateSocials]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocials[P]>
      : GetScalarType<T[P], AggregateSocials[P]>
  }




  export type SocialsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialsWhereInput
    orderBy?: SocialsOrderByWithAggregationInput | SocialsOrderByWithAggregationInput[]
    by: SocialsScalarFieldEnum[] | SocialsScalarFieldEnum
    having?: SocialsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SocialsCountAggregateInputType | true
    _avg?: SocialsAvgAggregateInputType
    _sum?: SocialsSumAggregateInputType
    _min?: SocialsMinAggregateInputType
    _max?: SocialsMaxAggregateInputType
  }

  export type SocialsGroupByOutputType = {
    id: number
    name: string
    url: string
    image: string
    active: number
    _count: SocialsCountAggregateOutputType | null
    _avg: SocialsAvgAggregateOutputType | null
    _sum: SocialsSumAggregateOutputType | null
    _min: SocialsMinAggregateOutputType | null
    _max: SocialsMaxAggregateOutputType | null
  }

  type GetSocialsGroupByPayload<T extends SocialsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SocialsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SocialsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SocialsGroupByOutputType[P]>
            : GetScalarType<T[P], SocialsGroupByOutputType[P]>
        }
      >
    >


  export type SocialsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    image?: boolean
    active?: boolean
  }, ExtArgs["result"]["socials"]>

  export type SocialsSelectScalar = {
    id?: boolean
    name?: boolean
    url?: boolean
    image?: boolean
    active?: boolean
  }


  export type $SocialsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Socials"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      url: string
      image: string
      active: number
    }, ExtArgs["result"]["socials"]>
    composites: {}
  }


  type SocialsGetPayload<S extends boolean | null | undefined | SocialsDefaultArgs> = $Result.GetResult<Prisma.$SocialsPayload, S>

  type SocialsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SocialsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SocialsCountAggregateInputType | true
    }

  export interface SocialsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Socials'], meta: { name: 'Socials' } }
    /**
     * Find zero or one Socials that matches the filter.
     * @param {SocialsFindUniqueArgs} args - Arguments to find a Socials
     * @example
     * // Get one Socials
     * const socials = await prisma.socials.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SocialsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SocialsFindUniqueArgs<ExtArgs>>
    ): Prisma__SocialsClient<$Result.GetResult<Prisma.$SocialsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Socials that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SocialsFindUniqueOrThrowArgs} args - Arguments to find a Socials
     * @example
     * // Get one Socials
     * const socials = await prisma.socials.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SocialsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SocialsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SocialsClient<$Result.GetResult<Prisma.$SocialsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Socials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialsFindFirstArgs} args - Arguments to find a Socials
     * @example
     * // Get one Socials
     * const socials = await prisma.socials.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SocialsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SocialsFindFirstArgs<ExtArgs>>
    ): Prisma__SocialsClient<$Result.GetResult<Prisma.$SocialsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Socials that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialsFindFirstOrThrowArgs} args - Arguments to find a Socials
     * @example
     * // Get one Socials
     * const socials = await prisma.socials.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SocialsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SocialsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SocialsClient<$Result.GetResult<Prisma.$SocialsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Socials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Socials
     * const socials = await prisma.socials.findMany()
     * 
     * // Get first 10 Socials
     * const socials = await prisma.socials.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const socialsWithIdOnly = await prisma.socials.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SocialsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SocialsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Socials.
     * @param {SocialsCreateArgs} args - Arguments to create a Socials.
     * @example
     * // Create one Socials
     * const Socials = await prisma.socials.create({
     *   data: {
     *     // ... data to create a Socials
     *   }
     * })
     * 
    **/
    create<T extends SocialsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SocialsCreateArgs<ExtArgs>>
    ): Prisma__SocialsClient<$Result.GetResult<Prisma.$SocialsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Socials.
     *     @param {SocialsCreateManyArgs} args - Arguments to create many Socials.
     *     @example
     *     // Create many Socials
     *     const socials = await prisma.socials.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SocialsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SocialsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Socials.
     * @param {SocialsDeleteArgs} args - Arguments to delete one Socials.
     * @example
     * // Delete one Socials
     * const Socials = await prisma.socials.delete({
     *   where: {
     *     // ... filter to delete one Socials
     *   }
     * })
     * 
    **/
    delete<T extends SocialsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SocialsDeleteArgs<ExtArgs>>
    ): Prisma__SocialsClient<$Result.GetResult<Prisma.$SocialsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Socials.
     * @param {SocialsUpdateArgs} args - Arguments to update one Socials.
     * @example
     * // Update one Socials
     * const socials = await prisma.socials.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SocialsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SocialsUpdateArgs<ExtArgs>>
    ): Prisma__SocialsClient<$Result.GetResult<Prisma.$SocialsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Socials.
     * @param {SocialsDeleteManyArgs} args - Arguments to filter Socials to delete.
     * @example
     * // Delete a few Socials
     * const { count } = await prisma.socials.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SocialsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SocialsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Socials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Socials
     * const socials = await prisma.socials.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SocialsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SocialsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Socials.
     * @param {SocialsUpsertArgs} args - Arguments to update or create a Socials.
     * @example
     * // Update or create a Socials
     * const socials = await prisma.socials.upsert({
     *   create: {
     *     // ... data to create a Socials
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Socials we want to update
     *   }
     * })
    **/
    upsert<T extends SocialsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SocialsUpsertArgs<ExtArgs>>
    ): Prisma__SocialsClient<$Result.GetResult<Prisma.$SocialsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Socials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialsCountArgs} args - Arguments to filter Socials to count.
     * @example
     * // Count the number of Socials
     * const count = await prisma.socials.count({
     *   where: {
     *     // ... the filter for the Socials we want to count
     *   }
     * })
    **/
    count<T extends SocialsCountArgs>(
      args?: Subset<T, SocialsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocialsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Socials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SocialsAggregateArgs>(args: Subset<T, SocialsAggregateArgs>): Prisma.PrismaPromise<GetSocialsAggregateType<T>>

    /**
     * Group by Socials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialsGroupByArgs} args - Group by arguments.
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
      T extends SocialsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SocialsGroupByArgs['orderBy'] }
        : { orderBy?: SocialsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SocialsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocialsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Socials model
   */
  readonly fields: SocialsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Socials.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SocialsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Socials model
   */ 
  interface SocialsFieldRefs {
    readonly id: FieldRef<"Socials", 'Int'>
    readonly name: FieldRef<"Socials", 'String'>
    readonly url: FieldRef<"Socials", 'String'>
    readonly image: FieldRef<"Socials", 'String'>
    readonly active: FieldRef<"Socials", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Socials findUnique
   */
  export type SocialsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socials
     */
    select?: SocialsSelect<ExtArgs> | null
    /**
     * Filter, which Socials to fetch.
     */
    where: SocialsWhereUniqueInput
  }


  /**
   * Socials findUniqueOrThrow
   */
  export type SocialsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socials
     */
    select?: SocialsSelect<ExtArgs> | null
    /**
     * Filter, which Socials to fetch.
     */
    where: SocialsWhereUniqueInput
  }


  /**
   * Socials findFirst
   */
  export type SocialsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socials
     */
    select?: SocialsSelect<ExtArgs> | null
    /**
     * Filter, which Socials to fetch.
     */
    where?: SocialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Socials to fetch.
     */
    orderBy?: SocialsOrderByWithRelationInput | SocialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Socials.
     */
    cursor?: SocialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Socials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Socials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Socials.
     */
    distinct?: SocialsScalarFieldEnum | SocialsScalarFieldEnum[]
  }


  /**
   * Socials findFirstOrThrow
   */
  export type SocialsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socials
     */
    select?: SocialsSelect<ExtArgs> | null
    /**
     * Filter, which Socials to fetch.
     */
    where?: SocialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Socials to fetch.
     */
    orderBy?: SocialsOrderByWithRelationInput | SocialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Socials.
     */
    cursor?: SocialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Socials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Socials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Socials.
     */
    distinct?: SocialsScalarFieldEnum | SocialsScalarFieldEnum[]
  }


  /**
   * Socials findMany
   */
  export type SocialsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socials
     */
    select?: SocialsSelect<ExtArgs> | null
    /**
     * Filter, which Socials to fetch.
     */
    where?: SocialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Socials to fetch.
     */
    orderBy?: SocialsOrderByWithRelationInput | SocialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Socials.
     */
    cursor?: SocialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Socials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Socials.
     */
    skip?: number
    distinct?: SocialsScalarFieldEnum | SocialsScalarFieldEnum[]
  }


  /**
   * Socials create
   */
  export type SocialsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socials
     */
    select?: SocialsSelect<ExtArgs> | null
    /**
     * The data needed to create a Socials.
     */
    data: XOR<SocialsCreateInput, SocialsUncheckedCreateInput>
  }


  /**
   * Socials createMany
   */
  export type SocialsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Socials.
     */
    data: SocialsCreateManyInput | SocialsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Socials update
   */
  export type SocialsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socials
     */
    select?: SocialsSelect<ExtArgs> | null
    /**
     * The data needed to update a Socials.
     */
    data: XOR<SocialsUpdateInput, SocialsUncheckedUpdateInput>
    /**
     * Choose, which Socials to update.
     */
    where: SocialsWhereUniqueInput
  }


  /**
   * Socials updateMany
   */
  export type SocialsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Socials.
     */
    data: XOR<SocialsUpdateManyMutationInput, SocialsUncheckedUpdateManyInput>
    /**
     * Filter which Socials to update
     */
    where?: SocialsWhereInput
  }


  /**
   * Socials upsert
   */
  export type SocialsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socials
     */
    select?: SocialsSelect<ExtArgs> | null
    /**
     * The filter to search for the Socials to update in case it exists.
     */
    where: SocialsWhereUniqueInput
    /**
     * In case the Socials found by the `where` argument doesn't exist, create a new Socials with this data.
     */
    create: XOR<SocialsCreateInput, SocialsUncheckedCreateInput>
    /**
     * In case the Socials was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SocialsUpdateInput, SocialsUncheckedUpdateInput>
  }


  /**
   * Socials delete
   */
  export type SocialsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socials
     */
    select?: SocialsSelect<ExtArgs> | null
    /**
     * Filter which Socials to delete.
     */
    where: SocialsWhereUniqueInput
  }


  /**
   * Socials deleteMany
   */
  export type SocialsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Socials to delete
     */
    where?: SocialsWhereInput
  }


  /**
   * Socials without action
   */
  export type SocialsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Socials
     */
    select?: SocialsSelect<ExtArgs> | null
  }



  /**
   * Model Skills
   */

  export type AggregateSkills = {
    _count: SkillsCountAggregateOutputType | null
    _avg: SkillsAvgAggregateOutputType | null
    _sum: SkillsSumAggregateOutputType | null
    _min: SkillsMinAggregateOutputType | null
    _max: SkillsMaxAggregateOutputType | null
  }

  export type SkillsAvgAggregateOutputType = {
    id: number | null
    active: number | null
  }

  export type SkillsSumAggregateOutputType = {
    id: number | null
    active: number | null
  }

  export type SkillsMinAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    active: number | null
  }

  export type SkillsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    active: number | null
  }

  export type SkillsCountAggregateOutputType = {
    id: number
    name: number
    image: number
    active: number
    _all: number
  }


  export type SkillsAvgAggregateInputType = {
    id?: true
    active?: true
  }

  export type SkillsSumAggregateInputType = {
    id?: true
    active?: true
  }

  export type SkillsMinAggregateInputType = {
    id?: true
    name?: true
    image?: true
    active?: true
  }

  export type SkillsMaxAggregateInputType = {
    id?: true
    name?: true
    image?: true
    active?: true
  }

  export type SkillsCountAggregateInputType = {
    id?: true
    name?: true
    image?: true
    active?: true
    _all?: true
  }

  export type SkillsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to aggregate.
     */
    where?: SkillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillsOrderByWithRelationInput | SkillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skills
    **/
    _count?: true | SkillsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkillsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkillsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillsMaxAggregateInputType
  }

  export type GetSkillsAggregateType<T extends SkillsAggregateArgs> = {
        [P in keyof T & keyof AggregateSkills]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkills[P]>
      : GetScalarType<T[P], AggregateSkills[P]>
  }




  export type SkillsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillsWhereInput
    orderBy?: SkillsOrderByWithAggregationInput | SkillsOrderByWithAggregationInput[]
    by: SkillsScalarFieldEnum[] | SkillsScalarFieldEnum
    having?: SkillsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillsCountAggregateInputType | true
    _avg?: SkillsAvgAggregateInputType
    _sum?: SkillsSumAggregateInputType
    _min?: SkillsMinAggregateInputType
    _max?: SkillsMaxAggregateInputType
  }

  export type SkillsGroupByOutputType = {
    id: number
    name: string
    image: string
    active: number
    _count: SkillsCountAggregateOutputType | null
    _avg: SkillsAvgAggregateOutputType | null
    _sum: SkillsSumAggregateOutputType | null
    _min: SkillsMinAggregateOutputType | null
    _max: SkillsMaxAggregateOutputType | null
  }

  type GetSkillsGroupByPayload<T extends SkillsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillsGroupByOutputType[P]>
            : GetScalarType<T[P], SkillsGroupByOutputType[P]>
        }
      >
    >


  export type SkillsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    active?: boolean
    project_skills?: boolean | Skills$project_skillsArgs<ExtArgs>
    _count?: boolean | SkillsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skills"]>

  export type SkillsSelectScalar = {
    id?: boolean
    name?: boolean
    image?: boolean
    active?: boolean
  }

  export type SkillsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project_skills?: boolean | Skills$project_skillsArgs<ExtArgs>
    _count?: boolean | SkillsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $SkillsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Skills"
    objects: {
      project_skills: Prisma.$Project_skillsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      image: string
      active: number
    }, ExtArgs["result"]["skills"]>
    composites: {}
  }


  type SkillsGetPayload<S extends boolean | null | undefined | SkillsDefaultArgs> = $Result.GetResult<Prisma.$SkillsPayload, S>

  type SkillsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SkillsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SkillsCountAggregateInputType | true
    }

  export interface SkillsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Skills'], meta: { name: 'Skills' } }
    /**
     * Find zero or one Skills that matches the filter.
     * @param {SkillsFindUniqueArgs} args - Arguments to find a Skills
     * @example
     * // Get one Skills
     * const skills = await prisma.skills.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SkillsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SkillsFindUniqueArgs<ExtArgs>>
    ): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Skills that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SkillsFindUniqueOrThrowArgs} args - Arguments to find a Skills
     * @example
     * // Get one Skills
     * const skills = await prisma.skills.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SkillsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SkillsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsFindFirstArgs} args - Arguments to find a Skills
     * @example
     * // Get one Skills
     * const skills = await prisma.skills.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SkillsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SkillsFindFirstArgs<ExtArgs>>
    ): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Skills that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsFindFirstOrThrowArgs} args - Arguments to find a Skills
     * @example
     * // Get one Skills
     * const skills = await prisma.skills.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SkillsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SkillsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skills.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skills.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillsWithIdOnly = await prisma.skills.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SkillsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SkillsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Skills.
     * @param {SkillsCreateArgs} args - Arguments to create a Skills.
     * @example
     * // Create one Skills
     * const Skills = await prisma.skills.create({
     *   data: {
     *     // ... data to create a Skills
     *   }
     * })
     * 
    **/
    create<T extends SkillsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SkillsCreateArgs<ExtArgs>>
    ): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Skills.
     *     @param {SkillsCreateManyArgs} args - Arguments to create many Skills.
     *     @example
     *     // Create many Skills
     *     const skills = await prisma.skills.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SkillsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SkillsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Skills.
     * @param {SkillsDeleteArgs} args - Arguments to delete one Skills.
     * @example
     * // Delete one Skills
     * const Skills = await prisma.skills.delete({
     *   where: {
     *     // ... filter to delete one Skills
     *   }
     * })
     * 
    **/
    delete<T extends SkillsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SkillsDeleteArgs<ExtArgs>>
    ): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Skills.
     * @param {SkillsUpdateArgs} args - Arguments to update one Skills.
     * @example
     * // Update one Skills
     * const skills = await prisma.skills.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SkillsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SkillsUpdateArgs<ExtArgs>>
    ): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Skills.
     * @param {SkillsDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skills.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SkillsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SkillsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skills = await prisma.skills.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SkillsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SkillsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Skills.
     * @param {SkillsUpsertArgs} args - Arguments to update or create a Skills.
     * @example
     * // Update or create a Skills
     * const skills = await prisma.skills.upsert({
     *   create: {
     *     // ... data to create a Skills
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skills we want to update
     *   }
     * })
    **/
    upsert<T extends SkillsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SkillsUpsertArgs<ExtArgs>>
    ): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skills.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends SkillsCountArgs>(
      args?: Subset<T, SkillsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SkillsAggregateArgs>(args: Subset<T, SkillsAggregateArgs>): Prisma.PrismaPromise<GetSkillsAggregateType<T>>

    /**
     * Group by Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsGroupByArgs} args - Group by arguments.
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
      T extends SkillsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillsGroupByArgs['orderBy'] }
        : { orderBy?: SkillsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SkillsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Skills model
   */
  readonly fields: SkillsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skills.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    project_skills<T extends Skills$project_skillsArgs<ExtArgs> = {}>(args?: Subset<T, Skills$project_skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Project_skillsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Skills model
   */ 
  interface SkillsFieldRefs {
    readonly id: FieldRef<"Skills", 'Int'>
    readonly name: FieldRef<"Skills", 'String'>
    readonly image: FieldRef<"Skills", 'String'>
    readonly active: FieldRef<"Skills", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Skills findUnique
   */
  export type SkillsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where: SkillsWhereUniqueInput
  }


  /**
   * Skills findUniqueOrThrow
   */
  export type SkillsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where: SkillsWhereUniqueInput
  }


  /**
   * Skills findFirst
   */
  export type SkillsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillsOrderByWithRelationInput | SkillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillsScalarFieldEnum | SkillsScalarFieldEnum[]
  }


  /**
   * Skills findFirstOrThrow
   */
  export type SkillsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillsOrderByWithRelationInput | SkillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillsScalarFieldEnum | SkillsScalarFieldEnum[]
  }


  /**
   * Skills findMany
   */
  export type SkillsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillsOrderByWithRelationInput | SkillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skills.
     */
    cursor?: SkillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    distinct?: SkillsScalarFieldEnum | SkillsScalarFieldEnum[]
  }


  /**
   * Skills create
   */
  export type SkillsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * The data needed to create a Skills.
     */
    data: XOR<SkillsCreateInput, SkillsUncheckedCreateInput>
  }


  /**
   * Skills createMany
   */
  export type SkillsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Skills.
     */
    data: SkillsCreateManyInput | SkillsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Skills update
   */
  export type SkillsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * The data needed to update a Skills.
     */
    data: XOR<SkillsUpdateInput, SkillsUncheckedUpdateInput>
    /**
     * Choose, which Skills to update.
     */
    where: SkillsWhereUniqueInput
  }


  /**
   * Skills updateMany
   */
  export type SkillsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillsUpdateManyMutationInput, SkillsUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillsWhereInput
  }


  /**
   * Skills upsert
   */
  export type SkillsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * The filter to search for the Skills to update in case it exists.
     */
    where: SkillsWhereUniqueInput
    /**
     * In case the Skills found by the `where` argument doesn't exist, create a new Skills with this data.
     */
    create: XOR<SkillsCreateInput, SkillsUncheckedCreateInput>
    /**
     * In case the Skills was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillsUpdateInput, SkillsUncheckedUpdateInput>
  }


  /**
   * Skills delete
   */
  export type SkillsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * Filter which Skills to delete.
     */
    where: SkillsWhereUniqueInput
  }


  /**
   * Skills deleteMany
   */
  export type SkillsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to delete
     */
    where?: SkillsWhereInput
  }


  /**
   * Skills.project_skills
   */
  export type Skills$project_skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project_skills
     */
    select?: Project_skillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Project_skillsInclude<ExtArgs> | null
    where?: Project_skillsWhereInput
    orderBy?: Project_skillsOrderByWithRelationInput | Project_skillsOrderByWithRelationInput[]
    cursor?: Project_skillsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Project_skillsScalarFieldEnum | Project_skillsScalarFieldEnum[]
  }


  /**
   * Skills without action
   */
  export type SkillsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SkillsInclude<ExtArgs> | null
  }



  /**
   * Model Categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    id: number | null
    active: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    id: number | null
    active: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    active: number | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    active: number | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    name: number
    image: number
    active: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    id?: true
    active?: true
  }

  export type CategoriesSumAggregateInputType = {
    id?: true
    active?: true
  }

  export type CategoriesMinAggregateInputType = {
    id?: true
    name?: true
    image?: true
    active?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    name?: true
    image?: true
    active?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    name?: true
    image?: true
    active?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to aggregate.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type CategoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriesWhereInput
    orderBy?: CategoriesOrderByWithAggregationInput | CategoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: CategoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: number
    name: string
    image: string
    active: number
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends CategoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type CategoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    active?: boolean
    projects?: boolean | Categories$projectsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectScalar = {
    id?: boolean
    name?: boolean
    image?: boolean
    active?: boolean
  }

  export type CategoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | Categories$projectsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CategoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categories"
    objects: {
      projects: Prisma.$ProjectsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      image: string
      active: number
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }


  type CategoriesGetPayload<S extends boolean | null | undefined | CategoriesDefaultArgs> = $Result.GetResult<Prisma.$CategoriesPayload, S>

  type CategoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoriesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface CategoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categories'], meta: { name: 'Categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {CategoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoriesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CategoriesFindUniqueArgs<ExtArgs>>
    ): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Categories that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoriesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoriesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoriesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoriesFindFirstArgs<ExtArgs>>
    ): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoriesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoriesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoriesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoriesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Categories.
     * @param {CategoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
    **/
    create<T extends CategoriesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoriesCreateArgs<ExtArgs>>
    ): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Categories.
     *     @param {CategoriesCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const categories = await prisma.categories.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoriesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoriesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categories.
     * @param {CategoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
    **/
    delete<T extends CategoriesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CategoriesDeleteArgs<ExtArgs>>
    ): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Categories.
     * @param {CategoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoriesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoriesUpdateArgs<ExtArgs>>
    ): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoriesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoriesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoriesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CategoriesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categories.
     * @param {CategoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
    **/
    upsert<T extends CategoriesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CategoriesUpsertArgs<ExtArgs>>
    ): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoriesCountArgs>(
      args?: Subset<T, CategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesGroupByArgs} args - Group by arguments.
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
      T extends CategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriesGroupByArgs['orderBy'] }
        : { orderBy?: CategoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categories model
   */
  readonly fields: CategoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    projects<T extends Categories$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Categories$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Categories model
   */ 
  interface CategoriesFieldRefs {
    readonly id: FieldRef<"Categories", 'Int'>
    readonly name: FieldRef<"Categories", 'String'>
    readonly image: FieldRef<"Categories", 'String'>
    readonly active: FieldRef<"Categories", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Categories findUnique
   */
  export type CategoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }


  /**
   * Categories findUniqueOrThrow
   */
  export type CategoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }


  /**
   * Categories findFirst
   */
  export type CategoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }


  /**
   * Categories findFirstOrThrow
   */
  export type CategoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }


  /**
   * Categories findMany
   */
  export type CategoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }


  /**
   * Categories create
   */
  export type CategoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a Categories.
     */
    data: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
  }


  /**
   * Categories createMany
   */
  export type CategoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Categories update
   */
  export type CategoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a Categories.
     */
    data: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
    /**
     * Choose, which Categories to update.
     */
    where: CategoriesWhereUniqueInput
  }


  /**
   * Categories updateMany
   */
  export type CategoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput
  }


  /**
   * Categories upsert
   */
  export type CategoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the Categories to update in case it exists.
     */
    where: CategoriesWhereUniqueInput
    /**
     * In case the Categories found by the `where` argument doesn't exist, create a new Categories with this data.
     */
    create: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
    /**
     * In case the Categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
  }


  /**
   * Categories delete
   */
  export type CategoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter which Categories to delete.
     */
    where: CategoriesWhereUniqueInput
  }


  /**
   * Categories deleteMany
   */
  export type CategoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoriesWhereInput
  }


  /**
   * Categories.projects
   */
  export type Categories$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectsInclude<ExtArgs> | null
    where?: ProjectsWhereInput
    orderBy?: ProjectsOrderByWithRelationInput | ProjectsOrderByWithRelationInput[]
    cursor?: ProjectsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }


  /**
   * Categories without action
   */
  export type CategoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesInclude<ExtArgs> | null
  }



  /**
   * Model Project_images
   */

  export type AggregateProject_images = {
    _count: Project_imagesCountAggregateOutputType | null
    _avg: Project_imagesAvgAggregateOutputType | null
    _sum: Project_imagesSumAggregateOutputType | null
    _min: Project_imagesMinAggregateOutputType | null
    _max: Project_imagesMaxAggregateOutputType | null
  }

  export type Project_imagesAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
    order: number | null
    active: number | null
  }

  export type Project_imagesSumAggregateOutputType = {
    id: number | null
    projectId: number | null
    order: number | null
    active: number | null
  }

  export type Project_imagesMinAggregateOutputType = {
    id: number | null
    projectId: number | null
    image: string | null
    order: number | null
    active: number | null
  }

  export type Project_imagesMaxAggregateOutputType = {
    id: number | null
    projectId: number | null
    image: string | null
    order: number | null
    active: number | null
  }

  export type Project_imagesCountAggregateOutputType = {
    id: number
    projectId: number
    image: number
    order: number
    active: number
    _all: number
  }


  export type Project_imagesAvgAggregateInputType = {
    id?: true
    projectId?: true
    order?: true
    active?: true
  }

  export type Project_imagesSumAggregateInputType = {
    id?: true
    projectId?: true
    order?: true
    active?: true
  }

  export type Project_imagesMinAggregateInputType = {
    id?: true
    projectId?: true
    image?: true
    order?: true
    active?: true
  }

  export type Project_imagesMaxAggregateInputType = {
    id?: true
    projectId?: true
    image?: true
    order?: true
    active?: true
  }

  export type Project_imagesCountAggregateInputType = {
    id?: true
    projectId?: true
    image?: true
    order?: true
    active?: true
    _all?: true
  }

  export type Project_imagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project_images to aggregate.
     */
    where?: Project_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Project_images to fetch.
     */
    orderBy?: Project_imagesOrderByWithRelationInput | Project_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Project_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Project_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Project_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Project_images
    **/
    _count?: true | Project_imagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Project_imagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Project_imagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Project_imagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Project_imagesMaxAggregateInputType
  }

  export type GetProject_imagesAggregateType<T extends Project_imagesAggregateArgs> = {
        [P in keyof T & keyof AggregateProject_images]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject_images[P]>
      : GetScalarType<T[P], AggregateProject_images[P]>
  }




  export type Project_imagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Project_imagesWhereInput
    orderBy?: Project_imagesOrderByWithAggregationInput | Project_imagesOrderByWithAggregationInput[]
    by: Project_imagesScalarFieldEnum[] | Project_imagesScalarFieldEnum
    having?: Project_imagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Project_imagesCountAggregateInputType | true
    _avg?: Project_imagesAvgAggregateInputType
    _sum?: Project_imagesSumAggregateInputType
    _min?: Project_imagesMinAggregateInputType
    _max?: Project_imagesMaxAggregateInputType
  }

  export type Project_imagesGroupByOutputType = {
    id: number
    projectId: number
    image: string
    order: number
    active: number
    _count: Project_imagesCountAggregateOutputType | null
    _avg: Project_imagesAvgAggregateOutputType | null
    _sum: Project_imagesSumAggregateOutputType | null
    _min: Project_imagesMinAggregateOutputType | null
    _max: Project_imagesMaxAggregateOutputType | null
  }

  type GetProject_imagesGroupByPayload<T extends Project_imagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Project_imagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Project_imagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Project_imagesGroupByOutputType[P]>
            : GetScalarType<T[P], Project_imagesGroupByOutputType[P]>
        }
      >
    >


  export type Project_imagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    image?: boolean
    order?: boolean
    active?: boolean
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project_images"]>

  export type Project_imagesSelectScalar = {
    id?: boolean
    projectId?: boolean
    image?: boolean
    order?: boolean
    active?: boolean
  }

  export type Project_imagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
  }


  export type $Project_imagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project_images"
    objects: {
      project: Prisma.$ProjectsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      projectId: number
      image: string
      order: number
      active: number
    }, ExtArgs["result"]["project_images"]>
    composites: {}
  }


  type Project_imagesGetPayload<S extends boolean | null | undefined | Project_imagesDefaultArgs> = $Result.GetResult<Prisma.$Project_imagesPayload, S>

  type Project_imagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Project_imagesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Project_imagesCountAggregateInputType | true
    }

  export interface Project_imagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project_images'], meta: { name: 'Project_images' } }
    /**
     * Find zero or one Project_images that matches the filter.
     * @param {Project_imagesFindUniqueArgs} args - Arguments to find a Project_images
     * @example
     * // Get one Project_images
     * const project_images = await prisma.project_images.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Project_imagesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Project_imagesFindUniqueArgs<ExtArgs>>
    ): Prisma__Project_imagesClient<$Result.GetResult<Prisma.$Project_imagesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Project_images that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Project_imagesFindUniqueOrThrowArgs} args - Arguments to find a Project_images
     * @example
     * // Get one Project_images
     * const project_images = await prisma.project_images.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Project_imagesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Project_imagesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Project_imagesClient<$Result.GetResult<Prisma.$Project_imagesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Project_images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Project_imagesFindFirstArgs} args - Arguments to find a Project_images
     * @example
     * // Get one Project_images
     * const project_images = await prisma.project_images.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Project_imagesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Project_imagesFindFirstArgs<ExtArgs>>
    ): Prisma__Project_imagesClient<$Result.GetResult<Prisma.$Project_imagesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Project_images that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Project_imagesFindFirstOrThrowArgs} args - Arguments to find a Project_images
     * @example
     * // Get one Project_images
     * const project_images = await prisma.project_images.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Project_imagesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Project_imagesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Project_imagesClient<$Result.GetResult<Prisma.$Project_imagesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Project_images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Project_imagesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Project_images
     * const project_images = await prisma.project_images.findMany()
     * 
     * // Get first 10 Project_images
     * const project_images = await prisma.project_images.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const project_imagesWithIdOnly = await prisma.project_images.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Project_imagesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Project_imagesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Project_imagesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Project_images.
     * @param {Project_imagesCreateArgs} args - Arguments to create a Project_images.
     * @example
     * // Create one Project_images
     * const Project_images = await prisma.project_images.create({
     *   data: {
     *     // ... data to create a Project_images
     *   }
     * })
     * 
    **/
    create<T extends Project_imagesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Project_imagesCreateArgs<ExtArgs>>
    ): Prisma__Project_imagesClient<$Result.GetResult<Prisma.$Project_imagesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Project_images.
     *     @param {Project_imagesCreateManyArgs} args - Arguments to create many Project_images.
     *     @example
     *     // Create many Project_images
     *     const project_images = await prisma.project_images.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Project_imagesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Project_imagesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Project_images.
     * @param {Project_imagesDeleteArgs} args - Arguments to delete one Project_images.
     * @example
     * // Delete one Project_images
     * const Project_images = await prisma.project_images.delete({
     *   where: {
     *     // ... filter to delete one Project_images
     *   }
     * })
     * 
    **/
    delete<T extends Project_imagesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Project_imagesDeleteArgs<ExtArgs>>
    ): Prisma__Project_imagesClient<$Result.GetResult<Prisma.$Project_imagesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Project_images.
     * @param {Project_imagesUpdateArgs} args - Arguments to update one Project_images.
     * @example
     * // Update one Project_images
     * const project_images = await prisma.project_images.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Project_imagesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Project_imagesUpdateArgs<ExtArgs>>
    ): Prisma__Project_imagesClient<$Result.GetResult<Prisma.$Project_imagesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Project_images.
     * @param {Project_imagesDeleteManyArgs} args - Arguments to filter Project_images to delete.
     * @example
     * // Delete a few Project_images
     * const { count } = await prisma.project_images.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Project_imagesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Project_imagesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Project_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Project_imagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Project_images
     * const project_images = await prisma.project_images.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Project_imagesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Project_imagesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project_images.
     * @param {Project_imagesUpsertArgs} args - Arguments to update or create a Project_images.
     * @example
     * // Update or create a Project_images
     * const project_images = await prisma.project_images.upsert({
     *   create: {
     *     // ... data to create a Project_images
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project_images we want to update
     *   }
     * })
    **/
    upsert<T extends Project_imagesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Project_imagesUpsertArgs<ExtArgs>>
    ): Prisma__Project_imagesClient<$Result.GetResult<Prisma.$Project_imagesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Project_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Project_imagesCountArgs} args - Arguments to filter Project_images to count.
     * @example
     * // Count the number of Project_images
     * const count = await prisma.project_images.count({
     *   where: {
     *     // ... the filter for the Project_images we want to count
     *   }
     * })
    **/
    count<T extends Project_imagesCountArgs>(
      args?: Subset<T, Project_imagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Project_imagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Project_imagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Project_imagesAggregateArgs>(args: Subset<T, Project_imagesAggregateArgs>): Prisma.PrismaPromise<GetProject_imagesAggregateType<T>>

    /**
     * Group by Project_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Project_imagesGroupByArgs} args - Group by arguments.
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
      T extends Project_imagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Project_imagesGroupByArgs['orderBy'] }
        : { orderBy?: Project_imagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Project_imagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProject_imagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project_images model
   */
  readonly fields: Project_imagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project_images.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Project_imagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    project<T extends ProjectsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectsDefaultArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Project_images model
   */ 
  interface Project_imagesFieldRefs {
    readonly id: FieldRef<"Project_images", 'Int'>
    readonly projectId: FieldRef<"Project_images", 'Int'>
    readonly image: FieldRef<"Project_images", 'String'>
    readonly order: FieldRef<"Project_images", 'Int'>
    readonly active: FieldRef<"Project_images", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Project_images findUnique
   */
  export type Project_imagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project_images
     */
    select?: Project_imagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Project_imagesInclude<ExtArgs> | null
    /**
     * Filter, which Project_images to fetch.
     */
    where: Project_imagesWhereUniqueInput
  }


  /**
   * Project_images findUniqueOrThrow
   */
  export type Project_imagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project_images
     */
    select?: Project_imagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Project_imagesInclude<ExtArgs> | null
    /**
     * Filter, which Project_images to fetch.
     */
    where: Project_imagesWhereUniqueInput
  }


  /**
   * Project_images findFirst
   */
  export type Project_imagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project_images
     */
    select?: Project_imagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Project_imagesInclude<ExtArgs> | null
    /**
     * Filter, which Project_images to fetch.
     */
    where?: Project_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Project_images to fetch.
     */
    orderBy?: Project_imagesOrderByWithRelationInput | Project_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Project_images.
     */
    cursor?: Project_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Project_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Project_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Project_images.
     */
    distinct?: Project_imagesScalarFieldEnum | Project_imagesScalarFieldEnum[]
  }


  /**
   * Project_images findFirstOrThrow
   */
  export type Project_imagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project_images
     */
    select?: Project_imagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Project_imagesInclude<ExtArgs> | null
    /**
     * Filter, which Project_images to fetch.
     */
    where?: Project_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Project_images to fetch.
     */
    orderBy?: Project_imagesOrderByWithRelationInput | Project_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Project_images.
     */
    cursor?: Project_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Project_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Project_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Project_images.
     */
    distinct?: Project_imagesScalarFieldEnum | Project_imagesScalarFieldEnum[]
  }


  /**
   * Project_images findMany
   */
  export type Project_imagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project_images
     */
    select?: Project_imagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Project_imagesInclude<ExtArgs> | null
    /**
     * Filter, which Project_images to fetch.
     */
    where?: Project_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Project_images to fetch.
     */
    orderBy?: Project_imagesOrderByWithRelationInput | Project_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Project_images.
     */
    cursor?: Project_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Project_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Project_images.
     */
    skip?: number
    distinct?: Project_imagesScalarFieldEnum | Project_imagesScalarFieldEnum[]
  }


  /**
   * Project_images create
   */
  export type Project_imagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project_images
     */
    select?: Project_imagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Project_imagesInclude<ExtArgs> | null
    /**
     * The data needed to create a Project_images.
     */
    data: XOR<Project_imagesCreateInput, Project_imagesUncheckedCreateInput>
  }


  /**
   * Project_images createMany
   */
  export type Project_imagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Project_images.
     */
    data: Project_imagesCreateManyInput | Project_imagesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Project_images update
   */
  export type Project_imagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project_images
     */
    select?: Project_imagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Project_imagesInclude<ExtArgs> | null
    /**
     * The data needed to update a Project_images.
     */
    data: XOR<Project_imagesUpdateInput, Project_imagesUncheckedUpdateInput>
    /**
     * Choose, which Project_images to update.
     */
    where: Project_imagesWhereUniqueInput
  }


  /**
   * Project_images updateMany
   */
  export type Project_imagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Project_images.
     */
    data: XOR<Project_imagesUpdateManyMutationInput, Project_imagesUncheckedUpdateManyInput>
    /**
     * Filter which Project_images to update
     */
    where?: Project_imagesWhereInput
  }


  /**
   * Project_images upsert
   */
  export type Project_imagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project_images
     */
    select?: Project_imagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Project_imagesInclude<ExtArgs> | null
    /**
     * The filter to search for the Project_images to update in case it exists.
     */
    where: Project_imagesWhereUniqueInput
    /**
     * In case the Project_images found by the `where` argument doesn't exist, create a new Project_images with this data.
     */
    create: XOR<Project_imagesCreateInput, Project_imagesUncheckedCreateInput>
    /**
     * In case the Project_images was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Project_imagesUpdateInput, Project_imagesUncheckedUpdateInput>
  }


  /**
   * Project_images delete
   */
  export type Project_imagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project_images
     */
    select?: Project_imagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Project_imagesInclude<ExtArgs> | null
    /**
     * Filter which Project_images to delete.
     */
    where: Project_imagesWhereUniqueInput
  }


  /**
   * Project_images deleteMany
   */
  export type Project_imagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project_images to delete
     */
    where?: Project_imagesWhereInput
  }


  /**
   * Project_images without action
   */
  export type Project_imagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project_images
     */
    select?: Project_imagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Project_imagesInclude<ExtArgs> | null
  }



  /**
   * Model Project_skills
   */

  export type AggregateProject_skills = {
    _count: Project_skillsCountAggregateOutputType | null
    _avg: Project_skillsAvgAggregateOutputType | null
    _sum: Project_skillsSumAggregateOutputType | null
    _min: Project_skillsMinAggregateOutputType | null
    _max: Project_skillsMaxAggregateOutputType | null
  }

  export type Project_skillsAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
    skillId: number | null
  }

  export type Project_skillsSumAggregateOutputType = {
    id: number | null
    projectId: number | null
    skillId: number | null
  }

  export type Project_skillsMinAggregateOutputType = {
    id: number | null
    projectId: number | null
    skillId: number | null
  }

  export type Project_skillsMaxAggregateOutputType = {
    id: number | null
    projectId: number | null
    skillId: number | null
  }

  export type Project_skillsCountAggregateOutputType = {
    id: number
    projectId: number
    skillId: number
    _all: number
  }


  export type Project_skillsAvgAggregateInputType = {
    id?: true
    projectId?: true
    skillId?: true
  }

  export type Project_skillsSumAggregateInputType = {
    id?: true
    projectId?: true
    skillId?: true
  }

  export type Project_skillsMinAggregateInputType = {
    id?: true
    projectId?: true
    skillId?: true
  }

  export type Project_skillsMaxAggregateInputType = {
    id?: true
    projectId?: true
    skillId?: true
  }

  export type Project_skillsCountAggregateInputType = {
    id?: true
    projectId?: true
    skillId?: true
    _all?: true
  }

  export type Project_skillsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project_skills to aggregate.
     */
    where?: Project_skillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Project_skills to fetch.
     */
    orderBy?: Project_skillsOrderByWithRelationInput | Project_skillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Project_skillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Project_skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Project_skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Project_skills
    **/
    _count?: true | Project_skillsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Project_skillsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Project_skillsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Project_skillsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Project_skillsMaxAggregateInputType
  }

  export type GetProject_skillsAggregateType<T extends Project_skillsAggregateArgs> = {
        [P in keyof T & keyof AggregateProject_skills]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject_skills[P]>
      : GetScalarType<T[P], AggregateProject_skills[P]>
  }




  export type Project_skillsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Project_skillsWhereInput
    orderBy?: Project_skillsOrderByWithAggregationInput | Project_skillsOrderByWithAggregationInput[]
    by: Project_skillsScalarFieldEnum[] | Project_skillsScalarFieldEnum
    having?: Project_skillsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Project_skillsCountAggregateInputType | true
    _avg?: Project_skillsAvgAggregateInputType
    _sum?: Project_skillsSumAggregateInputType
    _min?: Project_skillsMinAggregateInputType
    _max?: Project_skillsMaxAggregateInputType
  }

  export type Project_skillsGroupByOutputType = {
    id: number
    projectId: number
    skillId: number
    _count: Project_skillsCountAggregateOutputType | null
    _avg: Project_skillsAvgAggregateOutputType | null
    _sum: Project_skillsSumAggregateOutputType | null
    _min: Project_skillsMinAggregateOutputType | null
    _max: Project_skillsMaxAggregateOutputType | null
  }

  type GetProject_skillsGroupByPayload<T extends Project_skillsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Project_skillsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Project_skillsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Project_skillsGroupByOutputType[P]>
            : GetScalarType<T[P], Project_skillsGroupByOutputType[P]>
        }
      >
    >


  export type Project_skillsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    skillId?: boolean
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
    skill?: boolean | SkillsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project_skills"]>

  export type Project_skillsSelectScalar = {
    id?: boolean
    projectId?: boolean
    skillId?: boolean
  }

  export type Project_skillsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
    skill?: boolean | SkillsDefaultArgs<ExtArgs>
  }


  export type $Project_skillsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project_skills"
    objects: {
      project: Prisma.$ProjectsPayload<ExtArgs>
      skill: Prisma.$SkillsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      projectId: number
      skillId: number
    }, ExtArgs["result"]["project_skills"]>
    composites: {}
  }


  type Project_skillsGetPayload<S extends boolean | null | undefined | Project_skillsDefaultArgs> = $Result.GetResult<Prisma.$Project_skillsPayload, S>

  type Project_skillsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Project_skillsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Project_skillsCountAggregateInputType | true
    }

  export interface Project_skillsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project_skills'], meta: { name: 'Project_skills' } }
    /**
     * Find zero or one Project_skills that matches the filter.
     * @param {Project_skillsFindUniqueArgs} args - Arguments to find a Project_skills
     * @example
     * // Get one Project_skills
     * const project_skills = await prisma.project_skills.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Project_skillsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Project_skillsFindUniqueArgs<ExtArgs>>
    ): Prisma__Project_skillsClient<$Result.GetResult<Prisma.$Project_skillsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Project_skills that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Project_skillsFindUniqueOrThrowArgs} args - Arguments to find a Project_skills
     * @example
     * // Get one Project_skills
     * const project_skills = await prisma.project_skills.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Project_skillsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Project_skillsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Project_skillsClient<$Result.GetResult<Prisma.$Project_skillsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Project_skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Project_skillsFindFirstArgs} args - Arguments to find a Project_skills
     * @example
     * // Get one Project_skills
     * const project_skills = await prisma.project_skills.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Project_skillsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Project_skillsFindFirstArgs<ExtArgs>>
    ): Prisma__Project_skillsClient<$Result.GetResult<Prisma.$Project_skillsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Project_skills that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Project_skillsFindFirstOrThrowArgs} args - Arguments to find a Project_skills
     * @example
     * // Get one Project_skills
     * const project_skills = await prisma.project_skills.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Project_skillsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Project_skillsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Project_skillsClient<$Result.GetResult<Prisma.$Project_skillsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Project_skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Project_skillsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Project_skills
     * const project_skills = await prisma.project_skills.findMany()
     * 
     * // Get first 10 Project_skills
     * const project_skills = await prisma.project_skills.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const project_skillsWithIdOnly = await prisma.project_skills.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Project_skillsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Project_skillsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Project_skillsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Project_skills.
     * @param {Project_skillsCreateArgs} args - Arguments to create a Project_skills.
     * @example
     * // Create one Project_skills
     * const Project_skills = await prisma.project_skills.create({
     *   data: {
     *     // ... data to create a Project_skills
     *   }
     * })
     * 
    **/
    create<T extends Project_skillsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Project_skillsCreateArgs<ExtArgs>>
    ): Prisma__Project_skillsClient<$Result.GetResult<Prisma.$Project_skillsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Project_skills.
     *     @param {Project_skillsCreateManyArgs} args - Arguments to create many Project_skills.
     *     @example
     *     // Create many Project_skills
     *     const project_skills = await prisma.project_skills.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Project_skillsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Project_skillsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Project_skills.
     * @param {Project_skillsDeleteArgs} args - Arguments to delete one Project_skills.
     * @example
     * // Delete one Project_skills
     * const Project_skills = await prisma.project_skills.delete({
     *   where: {
     *     // ... filter to delete one Project_skills
     *   }
     * })
     * 
    **/
    delete<T extends Project_skillsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Project_skillsDeleteArgs<ExtArgs>>
    ): Prisma__Project_skillsClient<$Result.GetResult<Prisma.$Project_skillsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Project_skills.
     * @param {Project_skillsUpdateArgs} args - Arguments to update one Project_skills.
     * @example
     * // Update one Project_skills
     * const project_skills = await prisma.project_skills.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Project_skillsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Project_skillsUpdateArgs<ExtArgs>>
    ): Prisma__Project_skillsClient<$Result.GetResult<Prisma.$Project_skillsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Project_skills.
     * @param {Project_skillsDeleteManyArgs} args - Arguments to filter Project_skills to delete.
     * @example
     * // Delete a few Project_skills
     * const { count } = await prisma.project_skills.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Project_skillsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Project_skillsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Project_skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Project_skillsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Project_skills
     * const project_skills = await prisma.project_skills.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Project_skillsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Project_skillsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project_skills.
     * @param {Project_skillsUpsertArgs} args - Arguments to update or create a Project_skills.
     * @example
     * // Update or create a Project_skills
     * const project_skills = await prisma.project_skills.upsert({
     *   create: {
     *     // ... data to create a Project_skills
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project_skills we want to update
     *   }
     * })
    **/
    upsert<T extends Project_skillsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Project_skillsUpsertArgs<ExtArgs>>
    ): Prisma__Project_skillsClient<$Result.GetResult<Prisma.$Project_skillsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Project_skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Project_skillsCountArgs} args - Arguments to filter Project_skills to count.
     * @example
     * // Count the number of Project_skills
     * const count = await prisma.project_skills.count({
     *   where: {
     *     // ... the filter for the Project_skills we want to count
     *   }
     * })
    **/
    count<T extends Project_skillsCountArgs>(
      args?: Subset<T, Project_skillsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Project_skillsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project_skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Project_skillsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Project_skillsAggregateArgs>(args: Subset<T, Project_skillsAggregateArgs>): Prisma.PrismaPromise<GetProject_skillsAggregateType<T>>

    /**
     * Group by Project_skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Project_skillsGroupByArgs} args - Group by arguments.
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
      T extends Project_skillsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Project_skillsGroupByArgs['orderBy'] }
        : { orderBy?: Project_skillsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Project_skillsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProject_skillsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project_skills model
   */
  readonly fields: Project_skillsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project_skills.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Project_skillsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    project<T extends ProjectsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectsDefaultArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    skill<T extends SkillsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SkillsDefaultArgs<ExtArgs>>): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Project_skills model
   */ 
  interface Project_skillsFieldRefs {
    readonly id: FieldRef<"Project_skills", 'Int'>
    readonly projectId: FieldRef<"Project_skills", 'Int'>
    readonly skillId: FieldRef<"Project_skills", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Project_skills findUnique
   */
  export type Project_skillsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project_skills
     */
    select?: Project_skillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Project_skillsInclude<ExtArgs> | null
    /**
     * Filter, which Project_skills to fetch.
     */
    where: Project_skillsWhereUniqueInput
  }


  /**
   * Project_skills findUniqueOrThrow
   */
  export type Project_skillsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project_skills
     */
    select?: Project_skillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Project_skillsInclude<ExtArgs> | null
    /**
     * Filter, which Project_skills to fetch.
     */
    where: Project_skillsWhereUniqueInput
  }


  /**
   * Project_skills findFirst
   */
  export type Project_skillsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project_skills
     */
    select?: Project_skillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Project_skillsInclude<ExtArgs> | null
    /**
     * Filter, which Project_skills to fetch.
     */
    where?: Project_skillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Project_skills to fetch.
     */
    orderBy?: Project_skillsOrderByWithRelationInput | Project_skillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Project_skills.
     */
    cursor?: Project_skillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Project_skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Project_skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Project_skills.
     */
    distinct?: Project_skillsScalarFieldEnum | Project_skillsScalarFieldEnum[]
  }


  /**
   * Project_skills findFirstOrThrow
   */
  export type Project_skillsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project_skills
     */
    select?: Project_skillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Project_skillsInclude<ExtArgs> | null
    /**
     * Filter, which Project_skills to fetch.
     */
    where?: Project_skillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Project_skills to fetch.
     */
    orderBy?: Project_skillsOrderByWithRelationInput | Project_skillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Project_skills.
     */
    cursor?: Project_skillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Project_skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Project_skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Project_skills.
     */
    distinct?: Project_skillsScalarFieldEnum | Project_skillsScalarFieldEnum[]
  }


  /**
   * Project_skills findMany
   */
  export type Project_skillsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project_skills
     */
    select?: Project_skillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Project_skillsInclude<ExtArgs> | null
    /**
     * Filter, which Project_skills to fetch.
     */
    where?: Project_skillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Project_skills to fetch.
     */
    orderBy?: Project_skillsOrderByWithRelationInput | Project_skillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Project_skills.
     */
    cursor?: Project_skillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Project_skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Project_skills.
     */
    skip?: number
    distinct?: Project_skillsScalarFieldEnum | Project_skillsScalarFieldEnum[]
  }


  /**
   * Project_skills create
   */
  export type Project_skillsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project_skills
     */
    select?: Project_skillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Project_skillsInclude<ExtArgs> | null
    /**
     * The data needed to create a Project_skills.
     */
    data: XOR<Project_skillsCreateInput, Project_skillsUncheckedCreateInput>
  }


  /**
   * Project_skills createMany
   */
  export type Project_skillsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Project_skills.
     */
    data: Project_skillsCreateManyInput | Project_skillsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Project_skills update
   */
  export type Project_skillsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project_skills
     */
    select?: Project_skillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Project_skillsInclude<ExtArgs> | null
    /**
     * The data needed to update a Project_skills.
     */
    data: XOR<Project_skillsUpdateInput, Project_skillsUncheckedUpdateInput>
    /**
     * Choose, which Project_skills to update.
     */
    where: Project_skillsWhereUniqueInput
  }


  /**
   * Project_skills updateMany
   */
  export type Project_skillsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Project_skills.
     */
    data: XOR<Project_skillsUpdateManyMutationInput, Project_skillsUncheckedUpdateManyInput>
    /**
     * Filter which Project_skills to update
     */
    where?: Project_skillsWhereInput
  }


  /**
   * Project_skills upsert
   */
  export type Project_skillsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project_skills
     */
    select?: Project_skillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Project_skillsInclude<ExtArgs> | null
    /**
     * The filter to search for the Project_skills to update in case it exists.
     */
    where: Project_skillsWhereUniqueInput
    /**
     * In case the Project_skills found by the `where` argument doesn't exist, create a new Project_skills with this data.
     */
    create: XOR<Project_skillsCreateInput, Project_skillsUncheckedCreateInput>
    /**
     * In case the Project_skills was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Project_skillsUpdateInput, Project_skillsUncheckedUpdateInput>
  }


  /**
   * Project_skills delete
   */
  export type Project_skillsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project_skills
     */
    select?: Project_skillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Project_skillsInclude<ExtArgs> | null
    /**
     * Filter which Project_skills to delete.
     */
    where: Project_skillsWhereUniqueInput
  }


  /**
   * Project_skills deleteMany
   */
  export type Project_skillsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project_skills to delete
     */
    where?: Project_skillsWhereInput
  }


  /**
   * Project_skills without action
   */
  export type Project_skillsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project_skills
     */
    select?: Project_skillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Project_skillsInclude<ExtArgs> | null
  }



  /**
   * Model Projects
   */

  export type AggregateProjects = {
    _count: ProjectsCountAggregateOutputType | null
    _avg: ProjectsAvgAggregateOutputType | null
    _sum: ProjectsSumAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  export type ProjectsAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
    active: number | null
  }

  export type ProjectsSumAggregateOutputType = {
    id: number | null
    categoryId: number | null
    active: number | null
  }

  export type ProjectsMinAggregateOutputType = {
    id: number | null
    categoryId: number | null
    slug: string | null
    title: string | null
    description: string | null
    url: string | null
    github: string | null
    year: string | null
    active: number | null
  }

  export type ProjectsMaxAggregateOutputType = {
    id: number | null
    categoryId: number | null
    slug: string | null
    title: string | null
    description: string | null
    url: string | null
    github: string | null
    year: string | null
    active: number | null
  }

  export type ProjectsCountAggregateOutputType = {
    id: number
    categoryId: number
    slug: number
    title: number
    description: number
    url: number
    github: number
    year: number
    active: number
    _all: number
  }


  export type ProjectsAvgAggregateInputType = {
    id?: true
    categoryId?: true
    active?: true
  }

  export type ProjectsSumAggregateInputType = {
    id?: true
    categoryId?: true
    active?: true
  }

  export type ProjectsMinAggregateInputType = {
    id?: true
    categoryId?: true
    slug?: true
    title?: true
    description?: true
    url?: true
    github?: true
    year?: true
    active?: true
  }

  export type ProjectsMaxAggregateInputType = {
    id?: true
    categoryId?: true
    slug?: true
    title?: true
    description?: true
    url?: true
    github?: true
    year?: true
    active?: true
  }

  export type ProjectsCountAggregateInputType = {
    id?: true
    categoryId?: true
    slug?: true
    title?: true
    description?: true
    url?: true
    github?: true
    year?: true
    active?: true
    _all?: true
  }

  export type ProjectsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to aggregate.
     */
    where?: ProjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectsOrderByWithRelationInput | ProjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectsMaxAggregateInputType
  }

  export type GetProjectsAggregateType<T extends ProjectsAggregateArgs> = {
        [P in keyof T & keyof AggregateProjects]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjects[P]>
      : GetScalarType<T[P], AggregateProjects[P]>
  }




  export type ProjectsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectsWhereInput
    orderBy?: ProjectsOrderByWithAggregationInput | ProjectsOrderByWithAggregationInput[]
    by: ProjectsScalarFieldEnum[] | ProjectsScalarFieldEnum
    having?: ProjectsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectsCountAggregateInputType | true
    _avg?: ProjectsAvgAggregateInputType
    _sum?: ProjectsSumAggregateInputType
    _min?: ProjectsMinAggregateInputType
    _max?: ProjectsMaxAggregateInputType
  }

  export type ProjectsGroupByOutputType = {
    id: number
    categoryId: number
    slug: string
    title: string
    description: string
    url: string
    github: string
    year: string
    active: number
    _count: ProjectsCountAggregateOutputType | null
    _avg: ProjectsAvgAggregateOutputType | null
    _sum: ProjectsSumAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  type GetProjectsGroupByPayload<T extends ProjectsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
        }
      >
    >


  export type ProjectsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    slug?: boolean
    title?: boolean
    description?: boolean
    url?: boolean
    github?: boolean
    year?: boolean
    active?: boolean
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
    project_images?: boolean | Projects$project_imagesArgs<ExtArgs>
    project_skills?: boolean | Projects$project_skillsArgs<ExtArgs>
    _count?: boolean | ProjectsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projects"]>

  export type ProjectsSelectScalar = {
    id?: boolean
    categoryId?: boolean
    slug?: boolean
    title?: boolean
    description?: boolean
    url?: boolean
    github?: boolean
    year?: boolean
    active?: boolean
  }

  export type ProjectsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
    project_images?: boolean | Projects$project_imagesArgs<ExtArgs>
    project_skills?: boolean | Projects$project_skillsArgs<ExtArgs>
    _count?: boolean | ProjectsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ProjectsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Projects"
    objects: {
      category: Prisma.$CategoriesPayload<ExtArgs>
      project_images: Prisma.$Project_imagesPayload<ExtArgs>[]
      project_skills: Prisma.$Project_skillsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      categoryId: number
      slug: string
      title: string
      description: string
      url: string
      github: string
      year: string
      active: number
    }, ExtArgs["result"]["projects"]>
    composites: {}
  }


  type ProjectsGetPayload<S extends boolean | null | undefined | ProjectsDefaultArgs> = $Result.GetResult<Prisma.$ProjectsPayload, S>

  type ProjectsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProjectsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProjectsCountAggregateInputType | true
    }

  export interface ProjectsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Projects'], meta: { name: 'Projects' } }
    /**
     * Find zero or one Projects that matches the filter.
     * @param {ProjectsFindUniqueArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProjectsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectsFindUniqueArgs<ExtArgs>>
    ): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Projects that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProjectsFindUniqueOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProjectsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsFindFirstArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProjectsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectsFindFirstArgs<ExtArgs>>
    ): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Projects that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsFindFirstOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProjectsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.projects.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.projects.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectsWithIdOnly = await prisma.projects.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProjectsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Projects.
     * @param {ProjectsCreateArgs} args - Arguments to create a Projects.
     * @example
     * // Create one Projects
     * const Projects = await prisma.projects.create({
     *   data: {
     *     // ... data to create a Projects
     *   }
     * })
     * 
    **/
    create<T extends ProjectsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectsCreateArgs<ExtArgs>>
    ): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Projects.
     *     @param {ProjectsCreateManyArgs} args - Arguments to create many Projects.
     *     @example
     *     // Create many Projects
     *     const projects = await prisma.projects.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProjectsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Projects.
     * @param {ProjectsDeleteArgs} args - Arguments to delete one Projects.
     * @example
     * // Delete one Projects
     * const Projects = await prisma.projects.delete({
     *   where: {
     *     // ... filter to delete one Projects
     *   }
     * })
     * 
    **/
    delete<T extends ProjectsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectsDeleteArgs<ExtArgs>>
    ): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Projects.
     * @param {ProjectsUpdateArgs} args - Arguments to update one Projects.
     * @example
     * // Update one Projects
     * const projects = await prisma.projects.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProjectsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectsUpdateArgs<ExtArgs>>
    ): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Projects.
     * @param {ProjectsDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.projects.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProjectsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const projects = await prisma.projects.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProjectsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Projects.
     * @param {ProjectsUpsertArgs} args - Arguments to update or create a Projects.
     * @example
     * // Update or create a Projects
     * const projects = await prisma.projects.upsert({
     *   create: {
     *     // ... data to create a Projects
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Projects we want to update
     *   }
     * })
    **/
    upsert<T extends ProjectsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectsUpsertArgs<ExtArgs>>
    ): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.projects.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectsCountArgs>(
      args?: Subset<T, ProjectsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectsAggregateArgs>(args: Subset<T, ProjectsAggregateArgs>): Prisma.PrismaPromise<GetProjectsAggregateType<T>>

    /**
     * Group by Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsGroupByArgs} args - Group by arguments.
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
      T extends ProjectsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectsGroupByArgs['orderBy'] }
        : { orderBy?: ProjectsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Projects model
   */
  readonly fields: ProjectsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Projects.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    category<T extends CategoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriesDefaultArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    project_images<T extends Projects$project_imagesArgs<ExtArgs> = {}>(args?: Subset<T, Projects$project_imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Project_imagesPayload<ExtArgs>, T, 'findMany'> | Null>;

    project_skills<T extends Projects$project_skillsArgs<ExtArgs> = {}>(args?: Subset<T, Projects$project_skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Project_skillsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Projects model
   */ 
  interface ProjectsFieldRefs {
    readonly id: FieldRef<"Projects", 'Int'>
    readonly categoryId: FieldRef<"Projects", 'Int'>
    readonly slug: FieldRef<"Projects", 'String'>
    readonly title: FieldRef<"Projects", 'String'>
    readonly description: FieldRef<"Projects", 'String'>
    readonly url: FieldRef<"Projects", 'String'>
    readonly github: FieldRef<"Projects", 'String'>
    readonly year: FieldRef<"Projects", 'String'>
    readonly active: FieldRef<"Projects", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Projects findUnique
   */
  export type ProjectsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where: ProjectsWhereUniqueInput
  }


  /**
   * Projects findUniqueOrThrow
   */
  export type ProjectsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where: ProjectsWhereUniqueInput
  }


  /**
   * Projects findFirst
   */
  export type ProjectsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectsOrderByWithRelationInput | ProjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }


  /**
   * Projects findFirstOrThrow
   */
  export type ProjectsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectsOrderByWithRelationInput | ProjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }


  /**
   * Projects findMany
   */
  export type ProjectsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectsOrderByWithRelationInput | ProjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }


  /**
   * Projects create
   */
  export type ProjectsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * The data needed to create a Projects.
     */
    data: XOR<ProjectsCreateInput, ProjectsUncheckedCreateInput>
  }


  /**
   * Projects createMany
   */
  export type ProjectsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectsCreateManyInput | ProjectsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Projects update
   */
  export type ProjectsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * The data needed to update a Projects.
     */
    data: XOR<ProjectsUpdateInput, ProjectsUncheckedUpdateInput>
    /**
     * Choose, which Projects to update.
     */
    where: ProjectsWhereUniqueInput
  }


  /**
   * Projects updateMany
   */
  export type ProjectsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectsUpdateManyMutationInput, ProjectsUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectsWhereInput
  }


  /**
   * Projects upsert
   */
  export type ProjectsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * The filter to search for the Projects to update in case it exists.
     */
    where: ProjectsWhereUniqueInput
    /**
     * In case the Projects found by the `where` argument doesn't exist, create a new Projects with this data.
     */
    create: XOR<ProjectsCreateInput, ProjectsUncheckedCreateInput>
    /**
     * In case the Projects was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectsUpdateInput, ProjectsUncheckedUpdateInput>
  }


  /**
   * Projects delete
   */
  export type ProjectsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter which Projects to delete.
     */
    where: ProjectsWhereUniqueInput
  }


  /**
   * Projects deleteMany
   */
  export type ProjectsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectsWhereInput
  }


  /**
   * Projects.project_images
   */
  export type Projects$project_imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project_images
     */
    select?: Project_imagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Project_imagesInclude<ExtArgs> | null
    where?: Project_imagesWhereInput
    orderBy?: Project_imagesOrderByWithRelationInput | Project_imagesOrderByWithRelationInput[]
    cursor?: Project_imagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Project_imagesScalarFieldEnum | Project_imagesScalarFieldEnum[]
  }


  /**
   * Projects.project_skills
   */
  export type Projects$project_skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project_skills
     */
    select?: Project_skillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Project_skillsInclude<ExtArgs> | null
    where?: Project_skillsWhereInput
    orderBy?: Project_skillsOrderByWithRelationInput | Project_skillsOrderByWithRelationInput[]
    cursor?: Project_skillsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Project_skillsScalarFieldEnum | Project_skillsScalarFieldEnum[]
  }


  /**
   * Projects without action
   */
  export type ProjectsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectsInclude<ExtArgs> | null
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


  export const ServicesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    image: 'image',
    active: 'active'
  };

  export type ServicesScalarFieldEnum = (typeof ServicesScalarFieldEnum)[keyof typeof ServicesScalarFieldEnum]


  export const ToolsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image: 'image',
    active: 'active'
  };

  export type ToolsScalarFieldEnum = (typeof ToolsScalarFieldEnum)[keyof typeof ToolsScalarFieldEnum]


  export const SocialsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    url: 'url',
    image: 'image',
    active: 'active'
  };

  export type SocialsScalarFieldEnum = (typeof SocialsScalarFieldEnum)[keyof typeof SocialsScalarFieldEnum]


  export const SkillsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image: 'image',
    active: 'active'
  };

  export type SkillsScalarFieldEnum = (typeof SkillsScalarFieldEnum)[keyof typeof SkillsScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image: 'image',
    active: 'active'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const Project_imagesScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    image: 'image',
    order: 'order',
    active: 'active'
  };

  export type Project_imagesScalarFieldEnum = (typeof Project_imagesScalarFieldEnum)[keyof typeof Project_imagesScalarFieldEnum]


  export const Project_skillsScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    skillId: 'skillId'
  };

  export type Project_skillsScalarFieldEnum = (typeof Project_skillsScalarFieldEnum)[keyof typeof Project_skillsScalarFieldEnum]


  export const ProjectsScalarFieldEnum: {
    id: 'id',
    categoryId: 'categoryId',
    slug: 'slug',
    title: 'title',
    description: 'description',
    url: 'url',
    github: 'github',
    year: 'year',
    active: 'active'
  };

  export type ProjectsScalarFieldEnum = (typeof ProjectsScalarFieldEnum)[keyof typeof ProjectsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ServicesWhereInput = {
    AND?: ServicesWhereInput | ServicesWhereInput[]
    OR?: ServicesWhereInput[]
    NOT?: ServicesWhereInput | ServicesWhereInput[]
    id?: IntFilter<"Services"> | number
    name?: StringFilter<"Services"> | string
    description?: StringFilter<"Services"> | string
    image?: StringFilter<"Services"> | string
    active?: IntFilter<"Services"> | number
  }

  export type ServicesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    active?: SortOrder
  }

  export type ServicesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ServicesWhereInput | ServicesWhereInput[]
    OR?: ServicesWhereInput[]
    NOT?: ServicesWhereInput | ServicesWhereInput[]
    name?: StringFilter<"Services"> | string
    description?: StringFilter<"Services"> | string
    image?: StringFilter<"Services"> | string
    active?: IntFilter<"Services"> | number
  }, "id">

  export type ServicesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    active?: SortOrder
    _count?: ServicesCountOrderByAggregateInput
    _avg?: ServicesAvgOrderByAggregateInput
    _max?: ServicesMaxOrderByAggregateInput
    _min?: ServicesMinOrderByAggregateInput
    _sum?: ServicesSumOrderByAggregateInput
  }

  export type ServicesScalarWhereWithAggregatesInput = {
    AND?: ServicesScalarWhereWithAggregatesInput | ServicesScalarWhereWithAggregatesInput[]
    OR?: ServicesScalarWhereWithAggregatesInput[]
    NOT?: ServicesScalarWhereWithAggregatesInput | ServicesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Services"> | number
    name?: StringWithAggregatesFilter<"Services"> | string
    description?: StringWithAggregatesFilter<"Services"> | string
    image?: StringWithAggregatesFilter<"Services"> | string
    active?: IntWithAggregatesFilter<"Services"> | number
  }

  export type ToolsWhereInput = {
    AND?: ToolsWhereInput | ToolsWhereInput[]
    OR?: ToolsWhereInput[]
    NOT?: ToolsWhereInput | ToolsWhereInput[]
    id?: IntFilter<"Tools"> | number
    name?: StringFilter<"Tools"> | string
    image?: StringFilter<"Tools"> | string
    active?: IntFilter<"Tools"> | number
  }

  export type ToolsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    active?: SortOrder
  }

  export type ToolsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ToolsWhereInput | ToolsWhereInput[]
    OR?: ToolsWhereInput[]
    NOT?: ToolsWhereInput | ToolsWhereInput[]
    name?: StringFilter<"Tools"> | string
    image?: StringFilter<"Tools"> | string
    active?: IntFilter<"Tools"> | number
  }, "id">

  export type ToolsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    active?: SortOrder
    _count?: ToolsCountOrderByAggregateInput
    _avg?: ToolsAvgOrderByAggregateInput
    _max?: ToolsMaxOrderByAggregateInput
    _min?: ToolsMinOrderByAggregateInput
    _sum?: ToolsSumOrderByAggregateInput
  }

  export type ToolsScalarWhereWithAggregatesInput = {
    AND?: ToolsScalarWhereWithAggregatesInput | ToolsScalarWhereWithAggregatesInput[]
    OR?: ToolsScalarWhereWithAggregatesInput[]
    NOT?: ToolsScalarWhereWithAggregatesInput | ToolsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tools"> | number
    name?: StringWithAggregatesFilter<"Tools"> | string
    image?: StringWithAggregatesFilter<"Tools"> | string
    active?: IntWithAggregatesFilter<"Tools"> | number
  }

  export type SocialsWhereInput = {
    AND?: SocialsWhereInput | SocialsWhereInput[]
    OR?: SocialsWhereInput[]
    NOT?: SocialsWhereInput | SocialsWhereInput[]
    id?: IntFilter<"Socials"> | number
    name?: StringFilter<"Socials"> | string
    url?: StringFilter<"Socials"> | string
    image?: StringFilter<"Socials"> | string
    active?: IntFilter<"Socials"> | number
  }

  export type SocialsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    image?: SortOrder
    active?: SortOrder
  }

  export type SocialsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SocialsWhereInput | SocialsWhereInput[]
    OR?: SocialsWhereInput[]
    NOT?: SocialsWhereInput | SocialsWhereInput[]
    name?: StringFilter<"Socials"> | string
    url?: StringFilter<"Socials"> | string
    image?: StringFilter<"Socials"> | string
    active?: IntFilter<"Socials"> | number
  }, "id">

  export type SocialsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    image?: SortOrder
    active?: SortOrder
    _count?: SocialsCountOrderByAggregateInput
    _avg?: SocialsAvgOrderByAggregateInput
    _max?: SocialsMaxOrderByAggregateInput
    _min?: SocialsMinOrderByAggregateInput
    _sum?: SocialsSumOrderByAggregateInput
  }

  export type SocialsScalarWhereWithAggregatesInput = {
    AND?: SocialsScalarWhereWithAggregatesInput | SocialsScalarWhereWithAggregatesInput[]
    OR?: SocialsScalarWhereWithAggregatesInput[]
    NOT?: SocialsScalarWhereWithAggregatesInput | SocialsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Socials"> | number
    name?: StringWithAggregatesFilter<"Socials"> | string
    url?: StringWithAggregatesFilter<"Socials"> | string
    image?: StringWithAggregatesFilter<"Socials"> | string
    active?: IntWithAggregatesFilter<"Socials"> | number
  }

  export type SkillsWhereInput = {
    AND?: SkillsWhereInput | SkillsWhereInput[]
    OR?: SkillsWhereInput[]
    NOT?: SkillsWhereInput | SkillsWhereInput[]
    id?: IntFilter<"Skills"> | number
    name?: StringFilter<"Skills"> | string
    image?: StringFilter<"Skills"> | string
    active?: IntFilter<"Skills"> | number
    project_skills?: Project_skillsListRelationFilter
  }

  export type SkillsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    active?: SortOrder
    project_skills?: Project_skillsOrderByRelationAggregateInput
  }

  export type SkillsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SkillsWhereInput | SkillsWhereInput[]
    OR?: SkillsWhereInput[]
    NOT?: SkillsWhereInput | SkillsWhereInput[]
    name?: StringFilter<"Skills"> | string
    image?: StringFilter<"Skills"> | string
    active?: IntFilter<"Skills"> | number
    project_skills?: Project_skillsListRelationFilter
  }, "id">

  export type SkillsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    active?: SortOrder
    _count?: SkillsCountOrderByAggregateInput
    _avg?: SkillsAvgOrderByAggregateInput
    _max?: SkillsMaxOrderByAggregateInput
    _min?: SkillsMinOrderByAggregateInput
    _sum?: SkillsSumOrderByAggregateInput
  }

  export type SkillsScalarWhereWithAggregatesInput = {
    AND?: SkillsScalarWhereWithAggregatesInput | SkillsScalarWhereWithAggregatesInput[]
    OR?: SkillsScalarWhereWithAggregatesInput[]
    NOT?: SkillsScalarWhereWithAggregatesInput | SkillsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Skills"> | number
    name?: StringWithAggregatesFilter<"Skills"> | string
    image?: StringWithAggregatesFilter<"Skills"> | string
    active?: IntWithAggregatesFilter<"Skills"> | number
  }

  export type CategoriesWhereInput = {
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    id?: IntFilter<"Categories"> | number
    name?: StringFilter<"Categories"> | string
    image?: StringFilter<"Categories"> | string
    active?: IntFilter<"Categories"> | number
    projects?: ProjectsListRelationFilter
  }

  export type CategoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    active?: SortOrder
    projects?: ProjectsOrderByRelationAggregateInput
  }

  export type CategoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    name?: StringFilter<"Categories"> | string
    image?: StringFilter<"Categories"> | string
    active?: IntFilter<"Categories"> | number
    projects?: ProjectsListRelationFilter
  }, "id">

  export type CategoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    active?: SortOrder
    _count?: CategoriesCountOrderByAggregateInput
    _avg?: CategoriesAvgOrderByAggregateInput
    _max?: CategoriesMaxOrderByAggregateInput
    _min?: CategoriesMinOrderByAggregateInput
    _sum?: CategoriesSumOrderByAggregateInput
  }

  export type CategoriesScalarWhereWithAggregatesInput = {
    AND?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    OR?: CategoriesScalarWhereWithAggregatesInput[]
    NOT?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categories"> | number
    name?: StringWithAggregatesFilter<"Categories"> | string
    image?: StringWithAggregatesFilter<"Categories"> | string
    active?: IntWithAggregatesFilter<"Categories"> | number
  }

  export type Project_imagesWhereInput = {
    AND?: Project_imagesWhereInput | Project_imagesWhereInput[]
    OR?: Project_imagesWhereInput[]
    NOT?: Project_imagesWhereInput | Project_imagesWhereInput[]
    id?: IntFilter<"Project_images"> | number
    projectId?: IntFilter<"Project_images"> | number
    image?: StringFilter<"Project_images"> | string
    order?: IntFilter<"Project_images"> | number
    active?: IntFilter<"Project_images"> | number
    project?: XOR<ProjectsRelationFilter, ProjectsWhereInput>
  }

  export type Project_imagesOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    image?: SortOrder
    order?: SortOrder
    active?: SortOrder
    project?: ProjectsOrderByWithRelationInput
  }

  export type Project_imagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Project_imagesWhereInput | Project_imagesWhereInput[]
    OR?: Project_imagesWhereInput[]
    NOT?: Project_imagesWhereInput | Project_imagesWhereInput[]
    projectId?: IntFilter<"Project_images"> | number
    image?: StringFilter<"Project_images"> | string
    order?: IntFilter<"Project_images"> | number
    active?: IntFilter<"Project_images"> | number
    project?: XOR<ProjectsRelationFilter, ProjectsWhereInput>
  }, "id">

  export type Project_imagesOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    image?: SortOrder
    order?: SortOrder
    active?: SortOrder
    _count?: Project_imagesCountOrderByAggregateInput
    _avg?: Project_imagesAvgOrderByAggregateInput
    _max?: Project_imagesMaxOrderByAggregateInput
    _min?: Project_imagesMinOrderByAggregateInput
    _sum?: Project_imagesSumOrderByAggregateInput
  }

  export type Project_imagesScalarWhereWithAggregatesInput = {
    AND?: Project_imagesScalarWhereWithAggregatesInput | Project_imagesScalarWhereWithAggregatesInput[]
    OR?: Project_imagesScalarWhereWithAggregatesInput[]
    NOT?: Project_imagesScalarWhereWithAggregatesInput | Project_imagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Project_images"> | number
    projectId?: IntWithAggregatesFilter<"Project_images"> | number
    image?: StringWithAggregatesFilter<"Project_images"> | string
    order?: IntWithAggregatesFilter<"Project_images"> | number
    active?: IntWithAggregatesFilter<"Project_images"> | number
  }

  export type Project_skillsWhereInput = {
    AND?: Project_skillsWhereInput | Project_skillsWhereInput[]
    OR?: Project_skillsWhereInput[]
    NOT?: Project_skillsWhereInput | Project_skillsWhereInput[]
    id?: IntFilter<"Project_skills"> | number
    projectId?: IntFilter<"Project_skills"> | number
    skillId?: IntFilter<"Project_skills"> | number
    project?: XOR<ProjectsRelationFilter, ProjectsWhereInput>
    skill?: XOR<SkillsRelationFilter, SkillsWhereInput>
  }

  export type Project_skillsOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    skillId?: SortOrder
    project?: ProjectsOrderByWithRelationInput
    skill?: SkillsOrderByWithRelationInput
  }

  export type Project_skillsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Project_skillsWhereInput | Project_skillsWhereInput[]
    OR?: Project_skillsWhereInput[]
    NOT?: Project_skillsWhereInput | Project_skillsWhereInput[]
    projectId?: IntFilter<"Project_skills"> | number
    skillId?: IntFilter<"Project_skills"> | number
    project?: XOR<ProjectsRelationFilter, ProjectsWhereInput>
    skill?: XOR<SkillsRelationFilter, SkillsWhereInput>
  }, "id">

  export type Project_skillsOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    skillId?: SortOrder
    _count?: Project_skillsCountOrderByAggregateInput
    _avg?: Project_skillsAvgOrderByAggregateInput
    _max?: Project_skillsMaxOrderByAggregateInput
    _min?: Project_skillsMinOrderByAggregateInput
    _sum?: Project_skillsSumOrderByAggregateInput
  }

  export type Project_skillsScalarWhereWithAggregatesInput = {
    AND?: Project_skillsScalarWhereWithAggregatesInput | Project_skillsScalarWhereWithAggregatesInput[]
    OR?: Project_skillsScalarWhereWithAggregatesInput[]
    NOT?: Project_skillsScalarWhereWithAggregatesInput | Project_skillsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Project_skills"> | number
    projectId?: IntWithAggregatesFilter<"Project_skills"> | number
    skillId?: IntWithAggregatesFilter<"Project_skills"> | number
  }

  export type ProjectsWhereInput = {
    AND?: ProjectsWhereInput | ProjectsWhereInput[]
    OR?: ProjectsWhereInput[]
    NOT?: ProjectsWhereInput | ProjectsWhereInput[]
    id?: IntFilter<"Projects"> | number
    categoryId?: IntFilter<"Projects"> | number
    slug?: StringFilter<"Projects"> | string
    title?: StringFilter<"Projects"> | string
    description?: StringFilter<"Projects"> | string
    url?: StringFilter<"Projects"> | string
    github?: StringFilter<"Projects"> | string
    year?: StringFilter<"Projects"> | string
    active?: IntFilter<"Projects"> | number
    category?: XOR<CategoriesRelationFilter, CategoriesWhereInput>
    project_images?: Project_imagesListRelationFilter
    project_skills?: Project_skillsListRelationFilter
  }

  export type ProjectsOrderByWithRelationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    url?: SortOrder
    github?: SortOrder
    year?: SortOrder
    active?: SortOrder
    category?: CategoriesOrderByWithRelationInput
    project_images?: Project_imagesOrderByRelationAggregateInput
    project_skills?: Project_skillsOrderByRelationAggregateInput
  }

  export type ProjectsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjectsWhereInput | ProjectsWhereInput[]
    OR?: ProjectsWhereInput[]
    NOT?: ProjectsWhereInput | ProjectsWhereInput[]
    categoryId?: IntFilter<"Projects"> | number
    slug?: StringFilter<"Projects"> | string
    title?: StringFilter<"Projects"> | string
    description?: StringFilter<"Projects"> | string
    url?: StringFilter<"Projects"> | string
    github?: StringFilter<"Projects"> | string
    year?: StringFilter<"Projects"> | string
    active?: IntFilter<"Projects"> | number
    category?: XOR<CategoriesRelationFilter, CategoriesWhereInput>
    project_images?: Project_imagesListRelationFilter
    project_skills?: Project_skillsListRelationFilter
  }, "id">

  export type ProjectsOrderByWithAggregationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    url?: SortOrder
    github?: SortOrder
    year?: SortOrder
    active?: SortOrder
    _count?: ProjectsCountOrderByAggregateInput
    _avg?: ProjectsAvgOrderByAggregateInput
    _max?: ProjectsMaxOrderByAggregateInput
    _min?: ProjectsMinOrderByAggregateInput
    _sum?: ProjectsSumOrderByAggregateInput
  }

  export type ProjectsScalarWhereWithAggregatesInput = {
    AND?: ProjectsScalarWhereWithAggregatesInput | ProjectsScalarWhereWithAggregatesInput[]
    OR?: ProjectsScalarWhereWithAggregatesInput[]
    NOT?: ProjectsScalarWhereWithAggregatesInput | ProjectsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Projects"> | number
    categoryId?: IntWithAggregatesFilter<"Projects"> | number
    slug?: StringWithAggregatesFilter<"Projects"> | string
    title?: StringWithAggregatesFilter<"Projects"> | string
    description?: StringWithAggregatesFilter<"Projects"> | string
    url?: StringWithAggregatesFilter<"Projects"> | string
    github?: StringWithAggregatesFilter<"Projects"> | string
    year?: StringWithAggregatesFilter<"Projects"> | string
    active?: IntWithAggregatesFilter<"Projects"> | number
  }

  export type ServicesCreateInput = {
    name: string
    description: string
    image: string
    active?: number
  }

  export type ServicesUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    image: string
    active?: number
  }

  export type ServicesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
  }

  export type ServicesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
  }

  export type ServicesCreateManyInput = {
    id?: number
    name: string
    description: string
    image: string
    active?: number
  }

  export type ServicesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
  }

  export type ServicesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
  }

  export type ToolsCreateInput = {
    name: string
    image: string
    active?: number
  }

  export type ToolsUncheckedCreateInput = {
    id?: number
    name: string
    image: string
    active?: number
  }

  export type ToolsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
  }

  export type ToolsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
  }

  export type ToolsCreateManyInput = {
    id?: number
    name: string
    image: string
    active?: number
  }

  export type ToolsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
  }

  export type ToolsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
  }

  export type SocialsCreateInput = {
    name: string
    url: string
    image: string
    active?: number
  }

  export type SocialsUncheckedCreateInput = {
    id?: number
    name: string
    url: string
    image: string
    active?: number
  }

  export type SocialsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
  }

  export type SocialsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
  }

  export type SocialsCreateManyInput = {
    id?: number
    name: string
    url: string
    image: string
    active?: number
  }

  export type SocialsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
  }

  export type SocialsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
  }

  export type SkillsCreateInput = {
    name: string
    image: string
    active?: number
    project_skills?: Project_skillsCreateNestedManyWithoutSkillInput
  }

  export type SkillsUncheckedCreateInput = {
    id?: number
    name: string
    image: string
    active?: number
    project_skills?: Project_skillsUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
    project_skills?: Project_skillsUpdateManyWithoutSkillNestedInput
  }

  export type SkillsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
    project_skills?: Project_skillsUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type SkillsCreateManyInput = {
    id?: number
    name: string
    image: string
    active?: number
  }

  export type SkillsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
  }

  export type SkillsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
  }

  export type CategoriesCreateInput = {
    name: string
    image: string
    active?: number
    projects?: ProjectsCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesUncheckedCreateInput = {
    id?: number
    name: string
    image: string
    active?: number
    projects?: ProjectsUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
    projects?: ProjectsUpdateManyWithoutCategoryNestedInput
  }

  export type CategoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
    projects?: ProjectsUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoriesCreateManyInput = {
    id?: number
    name: string
    image: string
    active?: number
  }

  export type CategoriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
  }

  export type CategoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
  }

  export type Project_imagesCreateInput = {
    image: string
    order: number
    active?: number
    project: ProjectsCreateNestedOneWithoutProject_imagesInput
  }

  export type Project_imagesUncheckedCreateInput = {
    id?: number
    projectId: number
    image: string
    order: number
    active?: number
  }

  export type Project_imagesUpdateInput = {
    image?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    active?: IntFieldUpdateOperationsInput | number
    project?: ProjectsUpdateOneRequiredWithoutProject_imagesNestedInput
  }

  export type Project_imagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    active?: IntFieldUpdateOperationsInput | number
  }

  export type Project_imagesCreateManyInput = {
    id?: number
    projectId: number
    image: string
    order: number
    active?: number
  }

  export type Project_imagesUpdateManyMutationInput = {
    image?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    active?: IntFieldUpdateOperationsInput | number
  }

  export type Project_imagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    active?: IntFieldUpdateOperationsInput | number
  }

  export type Project_skillsCreateInput = {
    project: ProjectsCreateNestedOneWithoutProject_skillsInput
    skill: SkillsCreateNestedOneWithoutProject_skillsInput
  }

  export type Project_skillsUncheckedCreateInput = {
    id?: number
    projectId: number
    skillId: number
  }

  export type Project_skillsUpdateInput = {
    project?: ProjectsUpdateOneRequiredWithoutProject_skillsNestedInput
    skill?: SkillsUpdateOneRequiredWithoutProject_skillsNestedInput
  }

  export type Project_skillsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    skillId?: IntFieldUpdateOperationsInput | number
  }

  export type Project_skillsCreateManyInput = {
    id?: number
    projectId: number
    skillId: number
  }

  export type Project_skillsUpdateManyMutationInput = {

  }

  export type Project_skillsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    skillId?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectsCreateInput = {
    slug: string
    title: string
    description: string
    url: string
    github: string
    year: string
    active?: number
    category: CategoriesCreateNestedOneWithoutProjectsInput
    project_images?: Project_imagesCreateNestedManyWithoutProjectInput
    project_skills?: Project_skillsCreateNestedManyWithoutProjectInput
  }

  export type ProjectsUncheckedCreateInput = {
    id?: number
    categoryId: number
    slug: string
    title: string
    description: string
    url: string
    github: string
    year: string
    active?: number
    project_images?: Project_imagesUncheckedCreateNestedManyWithoutProjectInput
    project_skills?: Project_skillsUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectsUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    github?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
    category?: CategoriesUpdateOneRequiredWithoutProjectsNestedInput
    project_images?: Project_imagesUpdateManyWithoutProjectNestedInput
    project_skills?: Project_skillsUpdateManyWithoutProjectNestedInput
  }

  export type ProjectsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    github?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
    project_images?: Project_imagesUncheckedUpdateManyWithoutProjectNestedInput
    project_skills?: Project_skillsUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectsCreateManyInput = {
    id?: number
    categoryId: number
    slug: string
    title: string
    description: string
    url: string
    github: string
    year: string
    active?: number
  }

  export type ProjectsUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    github?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    github?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ServicesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    active?: SortOrder
  }

  export type ServicesAvgOrderByAggregateInput = {
    id?: SortOrder
    active?: SortOrder
  }

  export type ServicesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    active?: SortOrder
  }

  export type ServicesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    active?: SortOrder
  }

  export type ServicesSumOrderByAggregateInput = {
    id?: SortOrder
    active?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type ToolsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    active?: SortOrder
  }

  export type ToolsAvgOrderByAggregateInput = {
    id?: SortOrder
    active?: SortOrder
  }

  export type ToolsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    active?: SortOrder
  }

  export type ToolsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    active?: SortOrder
  }

  export type ToolsSumOrderByAggregateInput = {
    id?: SortOrder
    active?: SortOrder
  }

  export type SocialsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    image?: SortOrder
    active?: SortOrder
  }

  export type SocialsAvgOrderByAggregateInput = {
    id?: SortOrder
    active?: SortOrder
  }

  export type SocialsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    image?: SortOrder
    active?: SortOrder
  }

  export type SocialsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    image?: SortOrder
    active?: SortOrder
  }

  export type SocialsSumOrderByAggregateInput = {
    id?: SortOrder
    active?: SortOrder
  }

  export type Project_skillsListRelationFilter = {
    every?: Project_skillsWhereInput
    some?: Project_skillsWhereInput
    none?: Project_skillsWhereInput
  }

  export type Project_skillsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SkillsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    active?: SortOrder
  }

  export type SkillsAvgOrderByAggregateInput = {
    id?: SortOrder
    active?: SortOrder
  }

  export type SkillsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    active?: SortOrder
  }

  export type SkillsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    active?: SortOrder
  }

  export type SkillsSumOrderByAggregateInput = {
    id?: SortOrder
    active?: SortOrder
  }

  export type ProjectsListRelationFilter = {
    every?: ProjectsWhereInput
    some?: ProjectsWhereInput
    none?: ProjectsWhereInput
  }

  export type ProjectsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    active?: SortOrder
  }

  export type CategoriesAvgOrderByAggregateInput = {
    id?: SortOrder
    active?: SortOrder
  }

  export type CategoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    active?: SortOrder
  }

  export type CategoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    active?: SortOrder
  }

  export type CategoriesSumOrderByAggregateInput = {
    id?: SortOrder
    active?: SortOrder
  }

  export type ProjectsRelationFilter = {
    is?: ProjectsWhereInput
    isNot?: ProjectsWhereInput
  }

  export type Project_imagesCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    image?: SortOrder
    order?: SortOrder
    active?: SortOrder
  }

  export type Project_imagesAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    order?: SortOrder
    active?: SortOrder
  }

  export type Project_imagesMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    image?: SortOrder
    order?: SortOrder
    active?: SortOrder
  }

  export type Project_imagesMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    image?: SortOrder
    order?: SortOrder
    active?: SortOrder
  }

  export type Project_imagesSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    order?: SortOrder
    active?: SortOrder
  }

  export type SkillsRelationFilter = {
    is?: SkillsWhereInput
    isNot?: SkillsWhereInput
  }

  export type Project_skillsCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    skillId?: SortOrder
  }

  export type Project_skillsAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    skillId?: SortOrder
  }

  export type Project_skillsMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    skillId?: SortOrder
  }

  export type Project_skillsMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    skillId?: SortOrder
  }

  export type Project_skillsSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    skillId?: SortOrder
  }

  export type CategoriesRelationFilter = {
    is?: CategoriesWhereInput
    isNot?: CategoriesWhereInput
  }

  export type Project_imagesListRelationFilter = {
    every?: Project_imagesWhereInput
    some?: Project_imagesWhereInput
    none?: Project_imagesWhereInput
  }

  export type Project_imagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectsCountOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    url?: SortOrder
    github?: SortOrder
    year?: SortOrder
    active?: SortOrder
  }

  export type ProjectsAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    active?: SortOrder
  }

  export type ProjectsMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    url?: SortOrder
    github?: SortOrder
    year?: SortOrder
    active?: SortOrder
  }

  export type ProjectsMinOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    url?: SortOrder
    github?: SortOrder
    year?: SortOrder
    active?: SortOrder
  }

  export type ProjectsSumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    active?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Project_skillsCreateNestedManyWithoutSkillInput = {
    create?: XOR<Project_skillsCreateWithoutSkillInput, Project_skillsUncheckedCreateWithoutSkillInput> | Project_skillsCreateWithoutSkillInput[] | Project_skillsUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: Project_skillsCreateOrConnectWithoutSkillInput | Project_skillsCreateOrConnectWithoutSkillInput[]
    createMany?: Project_skillsCreateManySkillInputEnvelope
    connect?: Project_skillsWhereUniqueInput | Project_skillsWhereUniqueInput[]
  }

  export type Project_skillsUncheckedCreateNestedManyWithoutSkillInput = {
    create?: XOR<Project_skillsCreateWithoutSkillInput, Project_skillsUncheckedCreateWithoutSkillInput> | Project_skillsCreateWithoutSkillInput[] | Project_skillsUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: Project_skillsCreateOrConnectWithoutSkillInput | Project_skillsCreateOrConnectWithoutSkillInput[]
    createMany?: Project_skillsCreateManySkillInputEnvelope
    connect?: Project_skillsWhereUniqueInput | Project_skillsWhereUniqueInput[]
  }

  export type Project_skillsUpdateManyWithoutSkillNestedInput = {
    create?: XOR<Project_skillsCreateWithoutSkillInput, Project_skillsUncheckedCreateWithoutSkillInput> | Project_skillsCreateWithoutSkillInput[] | Project_skillsUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: Project_skillsCreateOrConnectWithoutSkillInput | Project_skillsCreateOrConnectWithoutSkillInput[]
    upsert?: Project_skillsUpsertWithWhereUniqueWithoutSkillInput | Project_skillsUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: Project_skillsCreateManySkillInputEnvelope
    set?: Project_skillsWhereUniqueInput | Project_skillsWhereUniqueInput[]
    disconnect?: Project_skillsWhereUniqueInput | Project_skillsWhereUniqueInput[]
    delete?: Project_skillsWhereUniqueInput | Project_skillsWhereUniqueInput[]
    connect?: Project_skillsWhereUniqueInput | Project_skillsWhereUniqueInput[]
    update?: Project_skillsUpdateWithWhereUniqueWithoutSkillInput | Project_skillsUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: Project_skillsUpdateManyWithWhereWithoutSkillInput | Project_skillsUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: Project_skillsScalarWhereInput | Project_skillsScalarWhereInput[]
  }

  export type Project_skillsUncheckedUpdateManyWithoutSkillNestedInput = {
    create?: XOR<Project_skillsCreateWithoutSkillInput, Project_skillsUncheckedCreateWithoutSkillInput> | Project_skillsCreateWithoutSkillInput[] | Project_skillsUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: Project_skillsCreateOrConnectWithoutSkillInput | Project_skillsCreateOrConnectWithoutSkillInput[]
    upsert?: Project_skillsUpsertWithWhereUniqueWithoutSkillInput | Project_skillsUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: Project_skillsCreateManySkillInputEnvelope
    set?: Project_skillsWhereUniqueInput | Project_skillsWhereUniqueInput[]
    disconnect?: Project_skillsWhereUniqueInput | Project_skillsWhereUniqueInput[]
    delete?: Project_skillsWhereUniqueInput | Project_skillsWhereUniqueInput[]
    connect?: Project_skillsWhereUniqueInput | Project_skillsWhereUniqueInput[]
    update?: Project_skillsUpdateWithWhereUniqueWithoutSkillInput | Project_skillsUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: Project_skillsUpdateManyWithWhereWithoutSkillInput | Project_skillsUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: Project_skillsScalarWhereInput | Project_skillsScalarWhereInput[]
  }

  export type ProjectsCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProjectsCreateWithoutCategoryInput, ProjectsUncheckedCreateWithoutCategoryInput> | ProjectsCreateWithoutCategoryInput[] | ProjectsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProjectsCreateOrConnectWithoutCategoryInput | ProjectsCreateOrConnectWithoutCategoryInput[]
    createMany?: ProjectsCreateManyCategoryInputEnvelope
    connect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
  }

  export type ProjectsUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProjectsCreateWithoutCategoryInput, ProjectsUncheckedCreateWithoutCategoryInput> | ProjectsCreateWithoutCategoryInput[] | ProjectsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProjectsCreateOrConnectWithoutCategoryInput | ProjectsCreateOrConnectWithoutCategoryInput[]
    createMany?: ProjectsCreateManyCategoryInputEnvelope
    connect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
  }

  export type ProjectsUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProjectsCreateWithoutCategoryInput, ProjectsUncheckedCreateWithoutCategoryInput> | ProjectsCreateWithoutCategoryInput[] | ProjectsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProjectsCreateOrConnectWithoutCategoryInput | ProjectsCreateOrConnectWithoutCategoryInput[]
    upsert?: ProjectsUpsertWithWhereUniqueWithoutCategoryInput | ProjectsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProjectsCreateManyCategoryInputEnvelope
    set?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    disconnect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    delete?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    connect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    update?: ProjectsUpdateWithWhereUniqueWithoutCategoryInput | ProjectsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProjectsUpdateManyWithWhereWithoutCategoryInput | ProjectsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProjectsScalarWhereInput | ProjectsScalarWhereInput[]
  }

  export type ProjectsUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProjectsCreateWithoutCategoryInput, ProjectsUncheckedCreateWithoutCategoryInput> | ProjectsCreateWithoutCategoryInput[] | ProjectsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProjectsCreateOrConnectWithoutCategoryInput | ProjectsCreateOrConnectWithoutCategoryInput[]
    upsert?: ProjectsUpsertWithWhereUniqueWithoutCategoryInput | ProjectsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProjectsCreateManyCategoryInputEnvelope
    set?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    disconnect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    delete?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    connect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    update?: ProjectsUpdateWithWhereUniqueWithoutCategoryInput | ProjectsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProjectsUpdateManyWithWhereWithoutCategoryInput | ProjectsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProjectsScalarWhereInput | ProjectsScalarWhereInput[]
  }

  export type ProjectsCreateNestedOneWithoutProject_imagesInput = {
    create?: XOR<ProjectsCreateWithoutProject_imagesInput, ProjectsUncheckedCreateWithoutProject_imagesInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutProject_imagesInput
    connect?: ProjectsWhereUniqueInput
  }

  export type ProjectsUpdateOneRequiredWithoutProject_imagesNestedInput = {
    create?: XOR<ProjectsCreateWithoutProject_imagesInput, ProjectsUncheckedCreateWithoutProject_imagesInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutProject_imagesInput
    upsert?: ProjectsUpsertWithoutProject_imagesInput
    connect?: ProjectsWhereUniqueInput
    update?: XOR<XOR<ProjectsUpdateToOneWithWhereWithoutProject_imagesInput, ProjectsUpdateWithoutProject_imagesInput>, ProjectsUncheckedUpdateWithoutProject_imagesInput>
  }

  export type ProjectsCreateNestedOneWithoutProject_skillsInput = {
    create?: XOR<ProjectsCreateWithoutProject_skillsInput, ProjectsUncheckedCreateWithoutProject_skillsInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutProject_skillsInput
    connect?: ProjectsWhereUniqueInput
  }

  export type SkillsCreateNestedOneWithoutProject_skillsInput = {
    create?: XOR<SkillsCreateWithoutProject_skillsInput, SkillsUncheckedCreateWithoutProject_skillsInput>
    connectOrCreate?: SkillsCreateOrConnectWithoutProject_skillsInput
    connect?: SkillsWhereUniqueInput
  }

  export type ProjectsUpdateOneRequiredWithoutProject_skillsNestedInput = {
    create?: XOR<ProjectsCreateWithoutProject_skillsInput, ProjectsUncheckedCreateWithoutProject_skillsInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutProject_skillsInput
    upsert?: ProjectsUpsertWithoutProject_skillsInput
    connect?: ProjectsWhereUniqueInput
    update?: XOR<XOR<ProjectsUpdateToOneWithWhereWithoutProject_skillsInput, ProjectsUpdateWithoutProject_skillsInput>, ProjectsUncheckedUpdateWithoutProject_skillsInput>
  }

  export type SkillsUpdateOneRequiredWithoutProject_skillsNestedInput = {
    create?: XOR<SkillsCreateWithoutProject_skillsInput, SkillsUncheckedCreateWithoutProject_skillsInput>
    connectOrCreate?: SkillsCreateOrConnectWithoutProject_skillsInput
    upsert?: SkillsUpsertWithoutProject_skillsInput
    connect?: SkillsWhereUniqueInput
    update?: XOR<XOR<SkillsUpdateToOneWithWhereWithoutProject_skillsInput, SkillsUpdateWithoutProject_skillsInput>, SkillsUncheckedUpdateWithoutProject_skillsInput>
  }

  export type CategoriesCreateNestedOneWithoutProjectsInput = {
    create?: XOR<CategoriesCreateWithoutProjectsInput, CategoriesUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutProjectsInput
    connect?: CategoriesWhereUniqueInput
  }

  export type Project_imagesCreateNestedManyWithoutProjectInput = {
    create?: XOR<Project_imagesCreateWithoutProjectInput, Project_imagesUncheckedCreateWithoutProjectInput> | Project_imagesCreateWithoutProjectInput[] | Project_imagesUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: Project_imagesCreateOrConnectWithoutProjectInput | Project_imagesCreateOrConnectWithoutProjectInput[]
    createMany?: Project_imagesCreateManyProjectInputEnvelope
    connect?: Project_imagesWhereUniqueInput | Project_imagesWhereUniqueInput[]
  }

  export type Project_skillsCreateNestedManyWithoutProjectInput = {
    create?: XOR<Project_skillsCreateWithoutProjectInput, Project_skillsUncheckedCreateWithoutProjectInput> | Project_skillsCreateWithoutProjectInput[] | Project_skillsUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: Project_skillsCreateOrConnectWithoutProjectInput | Project_skillsCreateOrConnectWithoutProjectInput[]
    createMany?: Project_skillsCreateManyProjectInputEnvelope
    connect?: Project_skillsWhereUniqueInput | Project_skillsWhereUniqueInput[]
  }

  export type Project_imagesUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<Project_imagesCreateWithoutProjectInput, Project_imagesUncheckedCreateWithoutProjectInput> | Project_imagesCreateWithoutProjectInput[] | Project_imagesUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: Project_imagesCreateOrConnectWithoutProjectInput | Project_imagesCreateOrConnectWithoutProjectInput[]
    createMany?: Project_imagesCreateManyProjectInputEnvelope
    connect?: Project_imagesWhereUniqueInput | Project_imagesWhereUniqueInput[]
  }

  export type Project_skillsUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<Project_skillsCreateWithoutProjectInput, Project_skillsUncheckedCreateWithoutProjectInput> | Project_skillsCreateWithoutProjectInput[] | Project_skillsUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: Project_skillsCreateOrConnectWithoutProjectInput | Project_skillsCreateOrConnectWithoutProjectInput[]
    createMany?: Project_skillsCreateManyProjectInputEnvelope
    connect?: Project_skillsWhereUniqueInput | Project_skillsWhereUniqueInput[]
  }

  export type CategoriesUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<CategoriesCreateWithoutProjectsInput, CategoriesUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutProjectsInput
    upsert?: CategoriesUpsertWithoutProjectsInput
    connect?: CategoriesWhereUniqueInput
    update?: XOR<XOR<CategoriesUpdateToOneWithWhereWithoutProjectsInput, CategoriesUpdateWithoutProjectsInput>, CategoriesUncheckedUpdateWithoutProjectsInput>
  }

  export type Project_imagesUpdateManyWithoutProjectNestedInput = {
    create?: XOR<Project_imagesCreateWithoutProjectInput, Project_imagesUncheckedCreateWithoutProjectInput> | Project_imagesCreateWithoutProjectInput[] | Project_imagesUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: Project_imagesCreateOrConnectWithoutProjectInput | Project_imagesCreateOrConnectWithoutProjectInput[]
    upsert?: Project_imagesUpsertWithWhereUniqueWithoutProjectInput | Project_imagesUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: Project_imagesCreateManyProjectInputEnvelope
    set?: Project_imagesWhereUniqueInput | Project_imagesWhereUniqueInput[]
    disconnect?: Project_imagesWhereUniqueInput | Project_imagesWhereUniqueInput[]
    delete?: Project_imagesWhereUniqueInput | Project_imagesWhereUniqueInput[]
    connect?: Project_imagesWhereUniqueInput | Project_imagesWhereUniqueInput[]
    update?: Project_imagesUpdateWithWhereUniqueWithoutProjectInput | Project_imagesUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: Project_imagesUpdateManyWithWhereWithoutProjectInput | Project_imagesUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: Project_imagesScalarWhereInput | Project_imagesScalarWhereInput[]
  }

  export type Project_skillsUpdateManyWithoutProjectNestedInput = {
    create?: XOR<Project_skillsCreateWithoutProjectInput, Project_skillsUncheckedCreateWithoutProjectInput> | Project_skillsCreateWithoutProjectInput[] | Project_skillsUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: Project_skillsCreateOrConnectWithoutProjectInput | Project_skillsCreateOrConnectWithoutProjectInput[]
    upsert?: Project_skillsUpsertWithWhereUniqueWithoutProjectInput | Project_skillsUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: Project_skillsCreateManyProjectInputEnvelope
    set?: Project_skillsWhereUniqueInput | Project_skillsWhereUniqueInput[]
    disconnect?: Project_skillsWhereUniqueInput | Project_skillsWhereUniqueInput[]
    delete?: Project_skillsWhereUniqueInput | Project_skillsWhereUniqueInput[]
    connect?: Project_skillsWhereUniqueInput | Project_skillsWhereUniqueInput[]
    update?: Project_skillsUpdateWithWhereUniqueWithoutProjectInput | Project_skillsUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: Project_skillsUpdateManyWithWhereWithoutProjectInput | Project_skillsUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: Project_skillsScalarWhereInput | Project_skillsScalarWhereInput[]
  }

  export type Project_imagesUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<Project_imagesCreateWithoutProjectInput, Project_imagesUncheckedCreateWithoutProjectInput> | Project_imagesCreateWithoutProjectInput[] | Project_imagesUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: Project_imagesCreateOrConnectWithoutProjectInput | Project_imagesCreateOrConnectWithoutProjectInput[]
    upsert?: Project_imagesUpsertWithWhereUniqueWithoutProjectInput | Project_imagesUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: Project_imagesCreateManyProjectInputEnvelope
    set?: Project_imagesWhereUniqueInput | Project_imagesWhereUniqueInput[]
    disconnect?: Project_imagesWhereUniqueInput | Project_imagesWhereUniqueInput[]
    delete?: Project_imagesWhereUniqueInput | Project_imagesWhereUniqueInput[]
    connect?: Project_imagesWhereUniqueInput | Project_imagesWhereUniqueInput[]
    update?: Project_imagesUpdateWithWhereUniqueWithoutProjectInput | Project_imagesUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: Project_imagesUpdateManyWithWhereWithoutProjectInput | Project_imagesUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: Project_imagesScalarWhereInput | Project_imagesScalarWhereInput[]
  }

  export type Project_skillsUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<Project_skillsCreateWithoutProjectInput, Project_skillsUncheckedCreateWithoutProjectInput> | Project_skillsCreateWithoutProjectInput[] | Project_skillsUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: Project_skillsCreateOrConnectWithoutProjectInput | Project_skillsCreateOrConnectWithoutProjectInput[]
    upsert?: Project_skillsUpsertWithWhereUniqueWithoutProjectInput | Project_skillsUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: Project_skillsCreateManyProjectInputEnvelope
    set?: Project_skillsWhereUniqueInput | Project_skillsWhereUniqueInput[]
    disconnect?: Project_skillsWhereUniqueInput | Project_skillsWhereUniqueInput[]
    delete?: Project_skillsWhereUniqueInput | Project_skillsWhereUniqueInput[]
    connect?: Project_skillsWhereUniqueInput | Project_skillsWhereUniqueInput[]
    update?: Project_skillsUpdateWithWhereUniqueWithoutProjectInput | Project_skillsUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: Project_skillsUpdateManyWithWhereWithoutProjectInput | Project_skillsUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: Project_skillsScalarWhereInput | Project_skillsScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type Project_skillsCreateWithoutSkillInput = {
    project: ProjectsCreateNestedOneWithoutProject_skillsInput
  }

  export type Project_skillsUncheckedCreateWithoutSkillInput = {
    id?: number
    projectId: number
  }

  export type Project_skillsCreateOrConnectWithoutSkillInput = {
    where: Project_skillsWhereUniqueInput
    create: XOR<Project_skillsCreateWithoutSkillInput, Project_skillsUncheckedCreateWithoutSkillInput>
  }

  export type Project_skillsCreateManySkillInputEnvelope = {
    data: Project_skillsCreateManySkillInput | Project_skillsCreateManySkillInput[]
    skipDuplicates?: boolean
  }

  export type Project_skillsUpsertWithWhereUniqueWithoutSkillInput = {
    where: Project_skillsWhereUniqueInput
    update: XOR<Project_skillsUpdateWithoutSkillInput, Project_skillsUncheckedUpdateWithoutSkillInput>
    create: XOR<Project_skillsCreateWithoutSkillInput, Project_skillsUncheckedCreateWithoutSkillInput>
  }

  export type Project_skillsUpdateWithWhereUniqueWithoutSkillInput = {
    where: Project_skillsWhereUniqueInput
    data: XOR<Project_skillsUpdateWithoutSkillInput, Project_skillsUncheckedUpdateWithoutSkillInput>
  }

  export type Project_skillsUpdateManyWithWhereWithoutSkillInput = {
    where: Project_skillsScalarWhereInput
    data: XOR<Project_skillsUpdateManyMutationInput, Project_skillsUncheckedUpdateManyWithoutSkillInput>
  }

  export type Project_skillsScalarWhereInput = {
    AND?: Project_skillsScalarWhereInput | Project_skillsScalarWhereInput[]
    OR?: Project_skillsScalarWhereInput[]
    NOT?: Project_skillsScalarWhereInput | Project_skillsScalarWhereInput[]
    id?: IntFilter<"Project_skills"> | number
    projectId?: IntFilter<"Project_skills"> | number
    skillId?: IntFilter<"Project_skills"> | number
  }

  export type ProjectsCreateWithoutCategoryInput = {
    slug: string
    title: string
    description: string
    url: string
    github: string
    year: string
    active?: number
    project_images?: Project_imagesCreateNestedManyWithoutProjectInput
    project_skills?: Project_skillsCreateNestedManyWithoutProjectInput
  }

  export type ProjectsUncheckedCreateWithoutCategoryInput = {
    id?: number
    slug: string
    title: string
    description: string
    url: string
    github: string
    year: string
    active?: number
    project_images?: Project_imagesUncheckedCreateNestedManyWithoutProjectInput
    project_skills?: Project_skillsUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectsCreateOrConnectWithoutCategoryInput = {
    where: ProjectsWhereUniqueInput
    create: XOR<ProjectsCreateWithoutCategoryInput, ProjectsUncheckedCreateWithoutCategoryInput>
  }

  export type ProjectsCreateManyCategoryInputEnvelope = {
    data: ProjectsCreateManyCategoryInput | ProjectsCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProjectsUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProjectsWhereUniqueInput
    update: XOR<ProjectsUpdateWithoutCategoryInput, ProjectsUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProjectsCreateWithoutCategoryInput, ProjectsUncheckedCreateWithoutCategoryInput>
  }

  export type ProjectsUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProjectsWhereUniqueInput
    data: XOR<ProjectsUpdateWithoutCategoryInput, ProjectsUncheckedUpdateWithoutCategoryInput>
  }

  export type ProjectsUpdateManyWithWhereWithoutCategoryInput = {
    where: ProjectsScalarWhereInput
    data: XOR<ProjectsUpdateManyMutationInput, ProjectsUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProjectsScalarWhereInput = {
    AND?: ProjectsScalarWhereInput | ProjectsScalarWhereInput[]
    OR?: ProjectsScalarWhereInput[]
    NOT?: ProjectsScalarWhereInput | ProjectsScalarWhereInput[]
    id?: IntFilter<"Projects"> | number
    categoryId?: IntFilter<"Projects"> | number
    slug?: StringFilter<"Projects"> | string
    title?: StringFilter<"Projects"> | string
    description?: StringFilter<"Projects"> | string
    url?: StringFilter<"Projects"> | string
    github?: StringFilter<"Projects"> | string
    year?: StringFilter<"Projects"> | string
    active?: IntFilter<"Projects"> | number
  }

  export type ProjectsCreateWithoutProject_imagesInput = {
    slug: string
    title: string
    description: string
    url: string
    github: string
    year: string
    active?: number
    category: CategoriesCreateNestedOneWithoutProjectsInput
    project_skills?: Project_skillsCreateNestedManyWithoutProjectInput
  }

  export type ProjectsUncheckedCreateWithoutProject_imagesInput = {
    id?: number
    categoryId: number
    slug: string
    title: string
    description: string
    url: string
    github: string
    year: string
    active?: number
    project_skills?: Project_skillsUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectsCreateOrConnectWithoutProject_imagesInput = {
    where: ProjectsWhereUniqueInput
    create: XOR<ProjectsCreateWithoutProject_imagesInput, ProjectsUncheckedCreateWithoutProject_imagesInput>
  }

  export type ProjectsUpsertWithoutProject_imagesInput = {
    update: XOR<ProjectsUpdateWithoutProject_imagesInput, ProjectsUncheckedUpdateWithoutProject_imagesInput>
    create: XOR<ProjectsCreateWithoutProject_imagesInput, ProjectsUncheckedCreateWithoutProject_imagesInput>
    where?: ProjectsWhereInput
  }

  export type ProjectsUpdateToOneWithWhereWithoutProject_imagesInput = {
    where?: ProjectsWhereInput
    data: XOR<ProjectsUpdateWithoutProject_imagesInput, ProjectsUncheckedUpdateWithoutProject_imagesInput>
  }

  export type ProjectsUpdateWithoutProject_imagesInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    github?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
    category?: CategoriesUpdateOneRequiredWithoutProjectsNestedInput
    project_skills?: Project_skillsUpdateManyWithoutProjectNestedInput
  }

  export type ProjectsUncheckedUpdateWithoutProject_imagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    github?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
    project_skills?: Project_skillsUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectsCreateWithoutProject_skillsInput = {
    slug: string
    title: string
    description: string
    url: string
    github: string
    year: string
    active?: number
    category: CategoriesCreateNestedOneWithoutProjectsInput
    project_images?: Project_imagesCreateNestedManyWithoutProjectInput
  }

  export type ProjectsUncheckedCreateWithoutProject_skillsInput = {
    id?: number
    categoryId: number
    slug: string
    title: string
    description: string
    url: string
    github: string
    year: string
    active?: number
    project_images?: Project_imagesUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectsCreateOrConnectWithoutProject_skillsInput = {
    where: ProjectsWhereUniqueInput
    create: XOR<ProjectsCreateWithoutProject_skillsInput, ProjectsUncheckedCreateWithoutProject_skillsInput>
  }

  export type SkillsCreateWithoutProject_skillsInput = {
    name: string
    image: string
    active?: number
  }

  export type SkillsUncheckedCreateWithoutProject_skillsInput = {
    id?: number
    name: string
    image: string
    active?: number
  }

  export type SkillsCreateOrConnectWithoutProject_skillsInput = {
    where: SkillsWhereUniqueInput
    create: XOR<SkillsCreateWithoutProject_skillsInput, SkillsUncheckedCreateWithoutProject_skillsInput>
  }

  export type ProjectsUpsertWithoutProject_skillsInput = {
    update: XOR<ProjectsUpdateWithoutProject_skillsInput, ProjectsUncheckedUpdateWithoutProject_skillsInput>
    create: XOR<ProjectsCreateWithoutProject_skillsInput, ProjectsUncheckedCreateWithoutProject_skillsInput>
    where?: ProjectsWhereInput
  }

  export type ProjectsUpdateToOneWithWhereWithoutProject_skillsInput = {
    where?: ProjectsWhereInput
    data: XOR<ProjectsUpdateWithoutProject_skillsInput, ProjectsUncheckedUpdateWithoutProject_skillsInput>
  }

  export type ProjectsUpdateWithoutProject_skillsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    github?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
    category?: CategoriesUpdateOneRequiredWithoutProjectsNestedInput
    project_images?: Project_imagesUpdateManyWithoutProjectNestedInput
  }

  export type ProjectsUncheckedUpdateWithoutProject_skillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    github?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
    project_images?: Project_imagesUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type SkillsUpsertWithoutProject_skillsInput = {
    update: XOR<SkillsUpdateWithoutProject_skillsInput, SkillsUncheckedUpdateWithoutProject_skillsInput>
    create: XOR<SkillsCreateWithoutProject_skillsInput, SkillsUncheckedCreateWithoutProject_skillsInput>
    where?: SkillsWhereInput
  }

  export type SkillsUpdateToOneWithWhereWithoutProject_skillsInput = {
    where?: SkillsWhereInput
    data: XOR<SkillsUpdateWithoutProject_skillsInput, SkillsUncheckedUpdateWithoutProject_skillsInput>
  }

  export type SkillsUpdateWithoutProject_skillsInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
  }

  export type SkillsUncheckedUpdateWithoutProject_skillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
  }

  export type CategoriesCreateWithoutProjectsInput = {
    name: string
    image: string
    active?: number
  }

  export type CategoriesUncheckedCreateWithoutProjectsInput = {
    id?: number
    name: string
    image: string
    active?: number
  }

  export type CategoriesCreateOrConnectWithoutProjectsInput = {
    where: CategoriesWhereUniqueInput
    create: XOR<CategoriesCreateWithoutProjectsInput, CategoriesUncheckedCreateWithoutProjectsInput>
  }

  export type Project_imagesCreateWithoutProjectInput = {
    image: string
    order: number
    active?: number
  }

  export type Project_imagesUncheckedCreateWithoutProjectInput = {
    id?: number
    image: string
    order: number
    active?: number
  }

  export type Project_imagesCreateOrConnectWithoutProjectInput = {
    where: Project_imagesWhereUniqueInput
    create: XOR<Project_imagesCreateWithoutProjectInput, Project_imagesUncheckedCreateWithoutProjectInput>
  }

  export type Project_imagesCreateManyProjectInputEnvelope = {
    data: Project_imagesCreateManyProjectInput | Project_imagesCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type Project_skillsCreateWithoutProjectInput = {
    skill: SkillsCreateNestedOneWithoutProject_skillsInput
  }

  export type Project_skillsUncheckedCreateWithoutProjectInput = {
    id?: number
    skillId: number
  }

  export type Project_skillsCreateOrConnectWithoutProjectInput = {
    where: Project_skillsWhereUniqueInput
    create: XOR<Project_skillsCreateWithoutProjectInput, Project_skillsUncheckedCreateWithoutProjectInput>
  }

  export type Project_skillsCreateManyProjectInputEnvelope = {
    data: Project_skillsCreateManyProjectInput | Project_skillsCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type CategoriesUpsertWithoutProjectsInput = {
    update: XOR<CategoriesUpdateWithoutProjectsInput, CategoriesUncheckedUpdateWithoutProjectsInput>
    create: XOR<CategoriesCreateWithoutProjectsInput, CategoriesUncheckedCreateWithoutProjectsInput>
    where?: CategoriesWhereInput
  }

  export type CategoriesUpdateToOneWithWhereWithoutProjectsInput = {
    where?: CategoriesWhereInput
    data: XOR<CategoriesUpdateWithoutProjectsInput, CategoriesUncheckedUpdateWithoutProjectsInput>
  }

  export type CategoriesUpdateWithoutProjectsInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
  }

  export type CategoriesUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
  }

  export type Project_imagesUpsertWithWhereUniqueWithoutProjectInput = {
    where: Project_imagesWhereUniqueInput
    update: XOR<Project_imagesUpdateWithoutProjectInput, Project_imagesUncheckedUpdateWithoutProjectInput>
    create: XOR<Project_imagesCreateWithoutProjectInput, Project_imagesUncheckedCreateWithoutProjectInput>
  }

  export type Project_imagesUpdateWithWhereUniqueWithoutProjectInput = {
    where: Project_imagesWhereUniqueInput
    data: XOR<Project_imagesUpdateWithoutProjectInput, Project_imagesUncheckedUpdateWithoutProjectInput>
  }

  export type Project_imagesUpdateManyWithWhereWithoutProjectInput = {
    where: Project_imagesScalarWhereInput
    data: XOR<Project_imagesUpdateManyMutationInput, Project_imagesUncheckedUpdateManyWithoutProjectInput>
  }

  export type Project_imagesScalarWhereInput = {
    AND?: Project_imagesScalarWhereInput | Project_imagesScalarWhereInput[]
    OR?: Project_imagesScalarWhereInput[]
    NOT?: Project_imagesScalarWhereInput | Project_imagesScalarWhereInput[]
    id?: IntFilter<"Project_images"> | number
    projectId?: IntFilter<"Project_images"> | number
    image?: StringFilter<"Project_images"> | string
    order?: IntFilter<"Project_images"> | number
    active?: IntFilter<"Project_images"> | number
  }

  export type Project_skillsUpsertWithWhereUniqueWithoutProjectInput = {
    where: Project_skillsWhereUniqueInput
    update: XOR<Project_skillsUpdateWithoutProjectInput, Project_skillsUncheckedUpdateWithoutProjectInput>
    create: XOR<Project_skillsCreateWithoutProjectInput, Project_skillsUncheckedCreateWithoutProjectInput>
  }

  export type Project_skillsUpdateWithWhereUniqueWithoutProjectInput = {
    where: Project_skillsWhereUniqueInput
    data: XOR<Project_skillsUpdateWithoutProjectInput, Project_skillsUncheckedUpdateWithoutProjectInput>
  }

  export type Project_skillsUpdateManyWithWhereWithoutProjectInput = {
    where: Project_skillsScalarWhereInput
    data: XOR<Project_skillsUpdateManyMutationInput, Project_skillsUncheckedUpdateManyWithoutProjectInput>
  }

  export type Project_skillsCreateManySkillInput = {
    id?: number
    projectId: number
  }

  export type Project_skillsUpdateWithoutSkillInput = {
    project?: ProjectsUpdateOneRequiredWithoutProject_skillsNestedInput
  }

  export type Project_skillsUncheckedUpdateWithoutSkillInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type Project_skillsUncheckedUpdateManyWithoutSkillInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectsCreateManyCategoryInput = {
    id?: number
    slug: string
    title: string
    description: string
    url: string
    github: string
    year: string
    active?: number
  }

  export type ProjectsUpdateWithoutCategoryInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    github?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
    project_images?: Project_imagesUpdateManyWithoutProjectNestedInput
    project_skills?: Project_skillsUpdateManyWithoutProjectNestedInput
  }

  export type ProjectsUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    github?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
    project_images?: Project_imagesUncheckedUpdateManyWithoutProjectNestedInput
    project_skills?: Project_skillsUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectsUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    github?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    active?: IntFieldUpdateOperationsInput | number
  }

  export type Project_imagesCreateManyProjectInput = {
    id?: number
    image: string
    order: number
    active?: number
  }

  export type Project_skillsCreateManyProjectInput = {
    id?: number
    skillId: number
  }

  export type Project_imagesUpdateWithoutProjectInput = {
    image?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    active?: IntFieldUpdateOperationsInput | number
  }

  export type Project_imagesUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    active?: IntFieldUpdateOperationsInput | number
  }

  export type Project_imagesUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    active?: IntFieldUpdateOperationsInput | number
  }

  export type Project_skillsUpdateWithoutProjectInput = {
    skill?: SkillsUpdateOneRequiredWithoutProject_skillsNestedInput
  }

  export type Project_skillsUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    skillId?: IntFieldUpdateOperationsInput | number
  }

  export type Project_skillsUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    skillId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use SkillsCountOutputTypeDefaultArgs instead
     */
    export type SkillsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SkillsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoriesCountOutputTypeDefaultArgs instead
     */
    export type CategoriesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoriesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectsCountOutputTypeDefaultArgs instead
     */
    export type ProjectsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ServicesDefaultArgs instead
     */
    export type ServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ServicesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ToolsDefaultArgs instead
     */
    export type ToolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ToolsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SocialsDefaultArgs instead
     */
    export type SocialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SocialsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SkillsDefaultArgs instead
     */
    export type SkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SkillsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoriesDefaultArgs instead
     */
    export type CategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoriesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Project_imagesDefaultArgs instead
     */
    export type Project_imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Project_imagesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Project_skillsDefaultArgs instead
     */
    export type Project_skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Project_skillsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectsDefaultArgs instead
     */
    export type ProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectsDefaultArgs<ExtArgs>

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