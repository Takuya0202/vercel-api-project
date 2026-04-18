# vercel-api-project

Vercel REST API を操作するための TypeScript スクリプト集です。  
ランタイムに [Bun](https://bun.sh) を使用しています。

## セットアップ

```bash
bun install
cp .example.env .env
# .env に VERCEL_TOKEN と TEAM_ID を設定する
```

### 環境変数

| 変数名 | 説明 |
|--------|------|
| `VERCEL_TOKEN` | Vercel の [Personal Access Token](https://vercel.com/account/tokens) |
| `TEAM_ID` | 操作対象のチームID（パーソナルアカウントの場合は不要） |

## 使い方

```bash
make pause   # プロジェクトを pause する
```

実行するとプロジェクトIDの入力を求められます。

## スクリプト一覧

| ファイル | 説明 |
|----------|------|
| `src/pause.ts` | 指定したプロジェクトを pause する |