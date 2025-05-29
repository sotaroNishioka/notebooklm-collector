// アダプターパターン実装の統一エクスポート
// すべてのアダプターとHTTPクライアントを一箇所から提供

// 型定義
export type { HttpClient, MockResponse, RetryConfig } from './types'

// HTTPクライアントアダプター
export { createFetchHttpClient } from './fetchHttpClient'
export { createMockHttpClient, createSuccessResponse, createErrorResponse } from './mockHttpClient'

// APIアダプター
export { createDocbaseAdapter, type DocbaseAdapter, type DocbaseSearchParams } from './docbaseAdapter'
export {
  createSlackAdapter,
  type SlackAdapter,
  type SlackSearchParams,
  type SlackThreadParams,
  type SlackPermalinkParams,
  type SlackUserParams,
  type SlackSearchResponse,
} from './slackAdapter'

// インポート（デフォルトインスタンス作成用）
import { createDocbaseAdapter as createDocbase } from './docbaseAdapter'
import { createSlackAdapter as createSlack } from './slackAdapter'
import { createFetchHttpClient as createHttpClient } from './fetchHttpClient'

// デフォルトインスタンス作成用のヘルパー関数
export function createDefaultDocbaseAdapter() {
  return createDocbase(createHttpClient())
}

export function createDefaultSlackAdapter() {
  return createSlack(createHttpClient())
}