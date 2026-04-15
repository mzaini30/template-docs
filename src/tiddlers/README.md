# tiddlers

Dashboard TiddlyWiki untuk frontend framework (Svelte, React, Vue, Astro, dll).

## Tampilan

![Halaman Beranda](https://i.imgur.com/6WNAsk2.jpg)

Di situ kan ada beberapa tombol di masing-masing postingan. Berikut rinciannya:

1. Tombol love, untuk favorite.
2. Tombol buku, untuk mempublishnya. Kalau sudah terpublish, dia akan jadi berwarna hijau, dan masuk kontennya ke file `published.json`.
3. Tombol pensil, untuk ngedit.
4. Tombol x, untuk nutup cardnya.

Ini tampilan cardnya saat mode ngedit:

![Mode Ngedit](https://i.imgur.com/CMgucCF.jpg)

Untuk bagian field, ada 3 field yang bisa digunakan:

1. ringkasan
2. kategori
3. gambar

## Instalasi

Di sini, aku contohnya pakai `pnpm`. Kalau nggak punya `pnpm`, install dulu dengan `npm i -g pnpm`.

```bash
pnpm i degit tiddlywiki
pnpm degit mzaini30/tiddlers src/tiddlers
```

Kemudian, masih di folder `src`, buatlah file `tiddlywiki.info` yang isinya:

```json
{
  "description": "Basic client-server edition",
  "plugins": [
    "tiddlywiki/tiddlyweb",
    "tiddlywiki/filesystem",
    "tiddlywiki/highlight"
  ],
  "themes": ["tiddlywiki/vanilla", "tiddlywiki/snowwhite"],
  "build": {
    "index": [
      "--render",
      "$:/plugins/tiddlywiki/tiddlyweb/save/offline",
      "index.html",
      "text/plain"
    ],
    "static": [
      "--render",
      "$:/core/templates/static.template.html",
      "static.html",
      "text/plain",
      "--render",
      "$:/core/templates/alltiddlers.template.html",
      "alltiddlers.html",
      "text/plain",
      "--render",
      "[!is[system]]",
      "[encodeuricomponent[]addprefix[static/]addsuffix[.html]]",
      "text/plain",
      "--render",
      "$:/core/templates/static.template.css",
      "static/static.css",
      "text/plain"
    ]
  }
}
```

## Menjalankan

Untuk menjalankan TiddlyWiki, perintahnya adalah `pnpm tiddlywiki src --listen`.

## Cara Integrasi dengan Framework Frontend

Perhatikan pada file `published.json`:

```json
[
  {
    "title": "Kedua",
    "published_date": "20230813061524570",
    "slug": "kedua",
    "text": "<p>Tulisan yang lainnya.</p>",
    "ringkasan": "Kedua ya...",
    "kategori": "hai",
    "gambar": "https://http.cat/502.jpg"
  },
  {
    "title": "Pertama",
    "published_date": "20230813061520864",
    "slug": "pertama",
    "text": "<p>Ini adalah postingan pertama. Bagus nggak?</p><p><strong>tebal</strong> <em>miring</em></p><h2 class=\"\">judul</h2><h3 class=\"\">judul</h3><ol><li>satu</li><li>dua</li><li>tiga</li></ol><ul><li>empat</li><li>lima </li><li>enam <code>kode</code></li></ul><blockquote><div>Hello world...</div></blockquote>",
    "ringkasan": "Ini adalah postingan yang pertama",
    "kategori": "tes",
    "gambar": "https://http.cat/404.jpg"
  }
]
```

Kamu tau kan, apa yang harus dilakukan?

Yuk join [komunitas Telegram Tips Zen](https://t.me/tipszen).
