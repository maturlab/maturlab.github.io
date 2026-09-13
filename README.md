# MICE LAB web sitesi

**Matur Integrated Conservation and Evolution Laboratory** — Dokuz Eylül Üniversitesi, Biyoloji Bölümü.

Site [Astro](https://astro.build) ile yapılmıştır ve GitHub Pages'te ücretsiz yayınlanır. Bütün içerik düz metin dosyalarındadır, **kod bilmeden** güncellenebilir.

---

## İçerik nasıl güncellenir?

| Ne yapmak istiyorsunuz? | Hangi dosya? |
|---|---|
| Kişi eklemek/düzenlemek | `src/content/people/ad-soyad.md` |
| Kişi fotoğrafı | `src/content/people/fotograflar/` |
| Özgeçmiş PDF'i | `public/cv/` |
| Proje eklemek/düzenlemek | `src/content/projects/proje-adi.md` |
| Proje görseli | `src/content/projects/gorseller/` |
| Yayın eklemek | `src/data/publications.yaml` |
| Haber eklemek | `src/data/news.yaml` |
| Adres, e-posta, harita | `src/lib/site.ts` |
| Menü ve sabit yazılar (TR/EN) | `src/i18n.ts` |

### Yeni kişi eklemek

1. `src/content/people/omer-faruk-arslan.md` dosyasını kopyalayın, adını kişinin adıyla değiştirin (ör. `ayse-yilmaz.md`). Dosya adı sayfa adresi olur: `/ekip/ayse-yilmaz`.
2. İçindeki bilgileri doldurun. İhtiyacınız olmayan satırları silebilirsiniz.
3. Fotoğrafı (kare, en az 600×600 px) `fotograflar/ayse-yilmaz.jpg` olarak koyun ve dosyada `photo: ./fotograflar/ayse-yilmaz.jpg` satırını açın.
4. PDF özgeçmişi `public/cv/ayse-yilmaz.pdf` olarak koyun ve `cv: ayse-yilmaz.pdf` yazın.
5. Kişinin yayınları yayın listesinde otomatik görünsün diye `citationNames: ["Yılmaz A"]` alanını doldurun.

`role` alanı kişinin hangi grupta görüneceğini belirler: `pi`, `postdoc`, `phd` (doktora), `msc` (yüksek lisans), `grad` (lisansüstü, derece belirtilmemiş), `bsc` (lisans), `alumni` (mezun).
Bir öğrenci mezun olduğunda `role: alumni` ve `graduated: "2027 · Yüksek Lisans"` yazmanız yeterli.

### Yeni proje eklemek

`src/content/projects/` içindeki bir proje dosyasını (ör. `kohezin-kondensin-seleksiyon.md`) kopyalayıp doldurun. `summary` (özet) yazılan projelerin kendi sayfası olur; yazılmayanlar "Tamamlanan projeler" listesinde tek satır görünür. COST gibi ağlar için `kind: network` yazın.
`members` listesine kişi dosyalarının adlarını yazın (ör. `[ferhat-matur, ayse-yilmaz]`). Proje o kişilerin özgeçmiş sayfasında da otomatik görünür.
Ana sayfada gösterilecek projeler için `featured: true` yazın.

### İki dil

Metinler iki şekilde yazılabilir:

```yaml
title: Sadece Türkçe başlık
# veya
title:
  tr: Türkçe başlık
  en: English title
```

İngilizcesi yazılmazsa İngilizce sayfada Türkçesi gösterilir.

### GitHub üzerinden düzenleme (bilgisayara bir şey kurmadan)

1. GitHub'da depoyu açın, düzenlemek istediğiniz dosyaya gidin.
2. Sağ üstteki kalem (✏️) simgesine tıklayın, değişikliği yapın.
3. Aşağıdaki **Commit changes** düğmesine basın.
4. 1–2 dakika içinde site kendiliğinden güncellenir (ilerlemeyi **Actions** sekmesinden izleyebilirsiniz).

Fotoğraf veya PDF eklemek için klasörü açıp **Add file → Upload files** kullanın.

---

## Bilgisayarda çalıştırmak (geliştirici için)

Node.js 22 veya üstü gerekir.

```bash
npm install     # ilk seferde bir kez
npm run dev     # http://localhost:4321 adresinde canlı önizleme
npm run build   # yayına hazır siteyi dist/ klasörüne üretir
```

## Klasör yapısı

```
src/
  content/people/     Kişiler (her kişi bir .md dosyası)
  content/projects/   Projeler (her proje bir .md dosyası)
  data/               Yayınlar ve haberler (YAML)
  views/              Sayfa tasarımları
  components/         Kart, avatar gibi parçalar
  pages/              Adresler (TR kök dizinde, EN /en altında)
  styles/global.css   Renkler ve yazı tipleri
public/               Olduğu gibi yayınlanan dosyalar (favicon, CV'ler)
.github/workflows/    Otomatik yayınlama ayarı
```

## Yayınlama

`main` dalına yapılan her değişiklik GitHub Actions ile otomatik olarak derlenip GitHub Pages'te yayınlanır.
Özel alan adı (ör. `micelab.deu.edu.tr`) bağlanırsa: GitHub'da **Settings → Pages → Custom domain** alanına adresi yazın ve üniversite Bilgi İşlem'den bu adres için GitHub Pages'e yönlendiren bir `CNAME` kaydı isteyin.
