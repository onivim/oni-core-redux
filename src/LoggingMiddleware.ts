/*
 * LoggingMiddleware
 *
 * Logging strategy for Redux, specific to Oni
 */

import { Store, Middleware, Action, Dispatch, AnyAction } from "redux"

import * as Log from "oni-core-logging"

export const createLoggingMiddleware = (storeName: string): any => (store: Store<any>) => (
    next: Dispatch,
) => (action: Action) => {
    Log.verbose("[REDUX - " + storeName + "][ACTION] " + action.type)

    const result = next(action)

    return result
}
