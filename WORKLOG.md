# cool-v2.html 作業メモ

## 概要
STP dance academy クール系LP。ターゲット：仕事帰りの女性。
コンセプト：「仕事帰りに、好きな私になる。」（ヒーロー右寄せ・2行）

## 主な実装状況

| セクション | 状態 | 備考 |
|---|---|---|
| HERO | 完了 | 動画背景・右寄せコピー・フローティングCTA連動 |
| PROBLEM | 完了 | 右側に鏡女性画像（hero-girl.png）をmask配置 |
| AFFINITY | 完了 | 左右に2枚の画像、中央に黒カード（backdrop-blur） |
| SOLUTION | 完了 | 「もう、諦めなくていい。」/ カード背景ウォーターマーク3種 |
| COURSES〜FOOTER | 完了 | データ投入済み |

## 画像ファイル対応表

| ファイル名 | 使用箇所 |
|---|---|
| hero-girl.png | PROBLEMセクション右背景 |
| affinity-left.png | AFINITYセクション左（座り・鏡前） |
| affinity-right.png | AFINITYセクション右（ダンス女性） |
| studio-02.JPG | SOLUTIONの仮画像（要差し替え） |

## 未対応（クライアント待ち）

- 予約URL → CTA の `href="#"` を差し替え
- ロゴファイル → NAV・フッターに配置
- スタジオ実写写真 → SOLUTION仮画像と差し替え
- GitHubへのpush（クライアント確認後）

## デザイントークン（主要）
```
--bg: #080808 / --red: #b91c4a / --surface: #161616
--muted: rgba(255,255,255,0.45)
```
