/*
 * LoggingMiddleware
 *
 * Logging strategy for Redux, specific to Oni
 */

import { Store, Middleware, Action, Dispatch, AnyAction } from "redux"

import * as Log from "oni-core-logging"

export const createLoggingMiddleware = <T>(storeName: string): Middleware => (store: Store<T>) => (
    next: Dispatch,
) => (action: Action) => {
    Log.verbose("[REDUX - " + storeName + "][ACTION] " + action.type)

    const result = next(action)

    return result
}
