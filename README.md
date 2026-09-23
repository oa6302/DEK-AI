# 🎓 DEK AI – YKS Çalışma Programı

> Yapay zekâ destekli, tamamen otomatik **YKS çalışma programı** oluşturucu ve takip sistemi.
> Tek bir HTML dosyası — sunucu gerekmez, kurulum gerektirmez, tüm veriler tarayıcıda saklanır.

![Sürüm](https://img.shields.io/badge/version-3.0-ff8a1f)
![Lisans](https://img.shields.io/badge/license-MIT-0a1730)
![Durum](https://img.shields.io/badge/status-aktif-16a34a)

---

## ✨ Özellikler

### 📅 Otomatik Program Oluşturma
- **Sınav türü seçimi:** TYT / AYT Sayısal / AYT Eşit Ağırlık / AYT Sözel / YDT
- **Tüm alanlar opsiyonel** — boş bıraksan bile sistem makul bir program üretir
- Eylül–Kasım **TYT ağırlıklı**, Aralık'tan itibaren **TYT + AYT** birlikte planlanır
- Sabit günlük düzen: `10:00–11:00` 1. ders · `11:00–12:00` 2. ders · `12:00–13:00` dünün tekrarı · `15:00` 20 paragraf

### 📚 Kaynak Entegrasyonu
| Kaynak | Link |
|---|---|
| 📘 MEBİ | Konu adıyla dinamik içerik portalı (`mebi.eba.gov.tr`) |
| 📗 ÖGM | `ogmmateryal.eba.gov.tr` ana sayfa |
| 📝 ÖGM Konu Özetleri | `mebi-konu-ozeti-kitaplari` |
| 📋 ÖGM Denemeleri | `mebi-yks-denemeleri` |
| ▶️ YouTube | Ders bazlı oynatma listeleri (Matematik, Paragraf, Felsefe, Tarih, Coğrafya) |

### 🍅 Modern Pomodoro
- **SVG dairesel progress ring** — canlı animasyonlu zamanlayıcı
- 25/5, 50/10 veya **özel süre** seçimi
- Bugünkü Pomodoro sayacı
- Görev ilişkilendirme (bugünkü derslerden seçim)
- Mola moduna otomatik geçiş + bildirim

### 🏆 Rozetler & Ödüller (24 rozet)
| Kategori | Örnek Rozetler |
|---|---|
| Konu | 🎯 İlk Adım, 📚 Kitap Kurdu, 👑 Şampiyon |
| Test | 📝 İlk Test, 💯 Yüz Doğru, 💥 Binyıl |
| Deneme | 🧪 Deneme Başlangıcı, 🏆 Deneme Şampiyonu |
| Seri | 🔥 Alev Aldı, ⚡ Elektrik, 💎 Elmas |
| Pomodoro | 🍅 İlk Pomodoro, 🕐 Saat Bekçisi |
| Paragraf | 📖 Paragrafçı, 📗 Okuma Şampiyonu |
| Tekrar | 🔁 Tekrar Ustası |

Rozet kazandığında **sağ üstten animasyonlu bildirim** gelir.

### 📈 Grafikler Sayfası
- **Son 14 gün** — Doğru/Yanlış/Boş (canvas bar chart)
- **Ders bazlı doğruluk** — Yatay progress barlar
- **Deneme net gelişimi** — Çizgi grafiği
- **Haftalık Pomodoro** — Sütun grafiği

### 🔁 Konu Tekrarı
- **"Anlamadım" butonu** ile 3/7/21 gün sonrasına tekrar ekleyebilme
- Otomatik olarak programa mor şeritli tekrar kartı olarak girer
- Tüm kaynak linkleri + "Konuyu Tekrar Çalış" butonu

### 📁 Veri Yönetimi
- **📥 JSON Yedek İndir** — tüm veriler tek dosyada
- **📤 JSON Yedek Yükle** — dosya seçerek geri yükle (sürükle-bırak destekli)
- **📄 PDF Rapor İndir** — ilerleme, zayıf konular, rozetler
- **📊 CSV/Excel İndir** — test ve deneme sonuçları tablo hâlinde

### ✅ Tamamlandı Butonu
- **Kırmızı** → tamamlanmadı
- **Yeşil + ✓** → tamamlandı

---

## 🚀 Kurulum

### Yöntem 1 — Doğrudan kullanım
`index.html` dosyasını indir, tarayıcıda aç. Hepsi bu.

```bash
# Ya da bir HTTP sunucusu ile:
python3 -m http.server 8080
# → http://localhost:8080