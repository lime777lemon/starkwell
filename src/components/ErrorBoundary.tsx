import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    // エラー発生時の状態を更新
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      // カスタムのフォールバックUIをレンダリング
      return this.props.fallback || (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <div className="p-8 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              エラーが発生しました
            </h2>
            <p className="text-gray-600 mb-4">
              申し訳ありません。予期せぬエラーが発生しました。
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-700 transition-colors"
            >
              ページを再読み込み
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
} 