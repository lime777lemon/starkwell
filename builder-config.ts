import { Builder } from '@builder.io/react'

export const BUILDER_API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY || ''

// カスタムコンポーネントの登録
Builder.init(BUILDER_API_KEY)

// ビルダーオプションの設定
Builder.settings({
  customInsertMenu: true,
  hideTargeting: true,
  hideMainTabs: true,
  hideDataTab: true,
  hideStyleTab: false,
  hideLayersTab: false,
}) 