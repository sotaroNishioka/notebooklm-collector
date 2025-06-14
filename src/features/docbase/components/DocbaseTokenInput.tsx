import React, { type FC, forwardRef, useImperativeHandle, useRef } from "react";

type DocbaseTokenInputProps = {
  token: string;
  onTokenChange: (token: string) => void;
  error?: string;
  disabled?: boolean;
};

// focusメソッドを持つRefの型を定義
export type DocbaseTokenInputRef = {
  focus: () => void;
};

/**
 * Docbaseアクセストークン入力コンポーネント
 * @param token 入力値
 * @param onTokenChange 入力値変更ハンドラ
 * @param error エラーメッセージ
 * @param disabled 非活性状態にするかどうか
 */
export const DocbaseTokenInput = forwardRef<
  DocbaseTokenInputRef,
  DocbaseTokenInputProps
>(({ token, onTokenChange, error, disabled }, ref) => {
  const inputRef = useRef<HTMLInputElement>(null); // input要素への参照を作成

  // 親コンポーネントから呼び出せるメソッドを定義
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
  }));

  return (
    <div className="mb-4">
      <label
        htmlFor="docbase-token"
        className="block text-base font-medium text-docbase-text mb-1"
      >
        Docbase APIトークン
      </label>
      <input
        type="password"
        id="docbase-token"
        ref={inputRef} // input要素にrefを渡す
        value={token}
        onChange={(e) => onTokenChange(e.target.value)}
        placeholder="APIトークンを入力"
        disabled={disabled}
        className={`block w-full px-4 py-3 border ${error ? "border-red-500" : "border-gray-400"} rounded-md shadow-sm placeholder-docbase-text-sub focus:outline-none focus:ring-1 ${error ? "focus:ring-red-500 focus:border-red-500" : "focus:ring-docbase-primary focus:border-docbase-primary"} disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors`}
        aria-describedby={error ? "docbase-token-error" : undefined}
      />
      {error && (
        <p id="docbase-token-error" className="mt-1 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
});
