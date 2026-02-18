# デプロイ・本番環境セットアップガイド

## 1. デプロイを成功させる

### 必須の確認事項
- [ ] `vercel.json` がコミットされている（`--ignore-scripts` で isolated-vm ビルドをスキップ）
- [ ] Vercel の **Build and Deployment** → **Node.js Version** が **24.x**
- [ ] Vercel の **Settings** → **Git** で Production Branch が **main**
- [ ] 最新コードを push: `git push origin main`

---

## 2. 本番でメールを届ける

### 原因
ローカルでは `.env.local` の `RESEND_API_KEY` が使われますが、**Vercel には環境変数を別途設定する必要があります**。

### Vercel で設定する環境変数

**Settings** → **Environment Variables** で以下を追加：

| 変数名 | 値 | 環境 |
|--------|-----|------|
| `RESEND_API_KEY` | Resend の API キー（re_ で始まる） | Production, Preview |
| `RESEND_TO_EMAIL` | 通知先（例: info@starkwell.jp,yukiko@starkwell.jp） | 任意 |
| `CONTACT_FROM_EMAIL` | 送信元（例: Starkwell &lt;info@starkwell.jp&gt;） | ドメイン未検証時のみ |

### Resend の設定確認

1. **ドメイン検証**
   - [Resend Dashboard](https://resend.com/domains) で `starkwell.jp` を追加・検証
   - 未検証の場合は `CONTACT_FROM_EMAIL=Starkwell <onboarding@resend.dev>` を設定（テスト用）

2. **API キー**
   - [Resend API Keys](https://resend.com/api-keys) でキーを発行
   - Vercel の `RESEND_API_KEY` にその値を設定

### 設定後の手順
1. 環境変数を保存
2. **Deployments** タブで **Redeploy** を実行（環境変数反映のため）

---

## 3. トラブルシューティング

### メールが届かない場合
- Vercel の **Functions** ログで `/api/contact` のエラーを確認
- Resend Dashboard の **Logs** で送信状況を確認
- 迷惑メールフォルダを確認

### デプロイが失敗する場合
- ビルドログのエラーメッセージを確認
- `npm install` 失敗時は `vercel.json` の `installCommand` を確認
