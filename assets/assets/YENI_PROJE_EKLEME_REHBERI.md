# Portfolio Yeni Proje Ekleme Rehberi

Web sitenize yeni bir proje eklemek istediğinizde, tasarım kodlarına dokunmadan sadece aşağıdaki **4 basit adımı** izlemeniz yeterlidir:

## 1. Adım: Görselleri Klasöre Ekleyin
Projenizin ekran görüntülerini `assets/images/yeni_projenizin_adi/` adında yeni bir klasör oluşturup bu klasörün içine kopyalayın.

## 2. Adım: Görselleri `pubspec.yaml`'a Kaydedin
Flutter'ın görselleri görebilmesi için `pubspec.yaml` dosyasını açın ve `assets:` başlığının altına yeni klasörünüzün yolunu ekleyin:

```yaml
flutter:
  assets:
    # ... diğer klasörler ...
    - assets/images/yeni_projenizin_adi/
```

## 3. Adım: Proje Verilerini Girin (`lib/data/projects_data.dart`)
`lib/data/projects_data.dart` dosyasını açın. En alttaki `projects` isimli listeye yeni projenizi bir `Project` nesnesi olarak ekleyin:

```dart
  Project(
    name: "Yeni Proje Adı",
    description: "Kısa bir açıklama...", // İngilizce açıklamayı burada bırakabilirsiniz
    images: [
      "assets/images/yeni_projenizin_adi/1.png",
      "assets/images/yeni_projenizin_adi/2.png",
      // Tüm görsellerin DİREKT DOSYA ADIYLA aynı olması gerektiğine dikkat edin!
    ],
    // Eğer uygulamanın market linkleri varsa:
    playStoreUrl: "https://play.google.com/store/apps/details?id=...", 
    appStoreUrl: "https://apps.apple.com/...",
  ),
```

## 4. Adım: Dil Desteği Çevirilerini Ekleyin (`lib/core/localization_service.dart`)
Web sitenizde Türkçe/İngilizce dil desteği olduğu için, projenizin Türkçe açıklamasını da eklemeniz gerekir. 
`lib/core/localization_service.dart` dosyasını açın ve `projectDescriptions` haritasına projenizin adını ("Yeni Proje Adı") yazarak çevirisini ekleyin:

```dart
  static Map<String, Map<Language, String>> projectDescriptions = {
    // ... diğer projeler ...
    "Yeni Proje Adı": {
      Language.tr: "Bu projenin Türkçe açıklaması...",
      Language.en: "English description of this project...",
    },
  };
```

---
### Son Olarak: Yayına Alma
Tüm bu adımları tamamladıktan sonra, projenizi derlemek ve GitHub'a atmak için terminalde şu komutları çalıştırmanız yeterlidir:

1. Web derlemesini alın:
   `flutter build web --release --base-href /portfolio/`

2. Yeni derlenen dosyaları (`build/web` klasöründekileri) GitHub deponuzun klonlu olduğu klasöre kopyalayın ve GitHub'a yükleyin:
   `git add .`
   `git commit -m "Yeni proje eklendi"`
   `git push origin master`

Hepsi bu kadar! Web siteniz yeni projenizle birlikte otomatik olarak güncellenecektir.
