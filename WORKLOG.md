# STP dance academy LP — 作業ログ

## ファイル構成

| ファイル | 役割 |
|---|---|
| `index.html` | メインLP（cool-v2ベース、唯一の公開ページ） |
| `cool-v2.html` | index.htmlの元ファイル（参照用に保持） |
| `cute.html` / `beginner.html` | 旧バリエーション（ローカル保持のみ、非公開） |
| `images/` | 使用画像一覧（下記参照） |

## 使用画像

| ファイル名 | 使用箇所 | 備考 |
|---|---|---|
| `hero-video.mp4` | HEROセクション背景動画 | |
| `hero-girl.png` | PROBLEMセクション右背景 | |
| `affinity-left.png` | AFINITYセクション左 | |
| `affinity-right.png` | AFINITYセクション右 | |
| `studio-01.jpeg` | GALLERYセクション | |
| `studio-02.JPG` | GALLERY・SOLUTION仮画像 | |
| `studio-floor.png` | GALLERYセクション | |
| `studio-stp.jpeg` | GALLERYセクション | |
| `price-bg.jpg` | PRICEセクション背景 | スタジオ写真 |
| `howto-smartlock.png` | HOW TOセクション右ビジュアル | スマートロック＋手 |
| `narrow-shoes.png` | FOR YOUセクション左ビジュアル | シューズ紐結びシーン |
| `affinity-bg.png` | 未使用（保持のみ） | |

---

## セクション別 実装状況

### NAV
- 固定ナビ、スクロール時blur背景
- リンク：強み／コース／料金／アクセス
- 右端：無料体験CTAボタン

### HERO
- 動画背景（blur＋overlay）
- 右寄せコピー「仕事帰りに、好きな私になる。」
- フローティングCTA（ヒーローCTA非表示時に出現）

### TICKER
- 赤背景の横スクロールテキスト帯

### PROBLEM
- 右背景にhero-girl.png（mask）
- 3カード：時間がない／恥ずかしい・怖い／続けられなかったら
- カード番号opacity: 0.55（視認性調整済み）

### AFFINITY
- 左右に画像、中央に黒カード（backdrop-blur）
- コピー「昨日の不安が、今日の自信に変わる。」

### SOLUTION
- 見出し「もう、諦めなくていい。」
- 3カード＋ウォーターマークSVG（時計・楕円・チケット）

### COURSES
- 4コース：K-POP／HIPHOP／KIDS／EXERCISE

### PRICE ★調整済み
- 背景画像：`price-bg.jpg`（スタジオ写真）
- オーバーレイ：上部は黒、中央コンテンツ部は放射グラデで薄く
- **モバイル対応：** 背景opacity調整、カードを半透明frosted glass化
- ticket-introをモバイルで縦積みに修正
- 見出し部（PRICE/料金/月謝なし）の上余白・各マージンを30%縮小
- price-wrap max-width: 960px

### FOR YOU (NARROW) ★調整済み
- グリッド：左に`narrow-shoes.png`（520px）、右に6項目リスト
- リスト：2列×3行（480px以上で2列、未満は1列）
- カード上下padding: モバイル19px、デスクトップ26px
- カード横padding: モバイル22px、デスクトップ28px
- カード間gap: 16px（モバイル）/ 18px（デスクトップ）
- **モバイル対応：** 画像非表示→セクション背景に薄く敷く（opacity 0.18）、カードをfrosted glass化、テキスト色を白92%に強化

### HOW TO START ★調整済み
- グリッド：左にステップ（1fr）、右に`howto-smartlock.png`（560px）
- 4ステップ：予約→入室キーが届く→スタジオへ入室→あとは踊るだけ
- 写真の左端はグラデフェード（ステップと自然につながる）
- ステップアイコン（SVG）は削除済み（説明資料っぽく見えるため）

### GALLERY
- 4枚グリッド：studio-02 / studio-floor / studio-stp / studio-01

### FAQ
- 6項目アコーディオン

### ACCESS
- スタジオ情報＋マッププレースホルダー
- Instagram: @stpdanceacademy

### CTA BAND
- 「今すぐ一歩踏み出す。」
- 無料体験予約ボタン（href="#" → 要差し替え）

### FOOTER
- ロゴ／タグライン／ナビ／住所／コピーライト

---

## デザイントークン

```
--bg:      #080808
--mid:     #111111
--surface: #181818
--red:     #b91c4a
--red-d:   #8b1538
--red-glow: rgba(185,28,74,0.25)
--text:    #f0f0f0
--muted:   rgba(255,255,255,0.48)
--border:  rgba(255,255,255,0.08)
```

---

## 未対応（クライアント待ち）

- 予約URL → CTA の `href="#"` を差し替え
- ロゴファイル → NAV・フッターに配置
- Googleマップ埋め込み → ACCESSセクション
- SOLUTION右の仮画像（studio-02.JPG）→ 実写に差し替え

---

## GitHubPages URL

`https://rapis1107-alt.github.io/stp-lp-samples/`

## リポジトリ

`/Users/lapis/Desktop/AI作業フォルダ/stp-lp-samples/`
