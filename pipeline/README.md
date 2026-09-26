# 6エージェント自動ビルドパイプライン

| エージェント | モデル | 担当 |
|---|---|---|
| A1-director | gpt-5.2 | 横画面スマホの体験設計・導線・HUD |
| A2-graphics | gpt-5.3-codex | 描画（トーンマップ・影・大気・水・AA） |
| A3-world | gpt-5.3-codex | 田園の作り込み（植生・小物・ランドマーク） |
| A4-mobile | gpt-5.2-codex | タッチ入力・全画面・セーフエリア |
| A5-performance | gpt-5.2-codex | 60fps維持（品質を落とさない最適化） |
| A6-qa | gpt-5.2 | バグ検出・テスト追加・危険な変更の却下 |

## 流れ
1. `preflight` — 6体すべてのLLM疎通を並列確認（`free_plan_block` などを検出）
2. 6体が **並列** に提案（JSONパッチ）を生成
3. 統合担当が1体ずつパッチを適用 → ゲート（build / logic / mobile-smoke）
4. 合格したら **即コミット**（環境リセット対策）、不合格なら自動で差し戻し
5. `.artifacts/pipeline/run-*.json` にレポート

## コマンド
```bash
npm run agents:preflight            # LLM疎通確認
npm run agents:run -- --goal "..."   # 6体並列稼働（ブラウザゲート込み）
npm run agents:gates                 # LLMなしで決定的ゲートのみ
npm run test:mobile                  # 横画面スマホ スモークテスト
```
APIキーは `OPENAI_API_KEY` / `OPENAI_BASE_URL` または `~/.genspark_llm.yaml` から読み込み、ファイルやログには書き出しません。
