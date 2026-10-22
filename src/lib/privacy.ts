export const privacyContent = {
  en: {
    title: "Your words stay with you.", label: "PRIVACY POLICY", updated: "Last updated: October 22, 2026 · Publisher: 4pp Studio",
    intro: "Atoll does not collect, store on any server, share, or sell any personal data. Translation happens entirely on your device.",
    sections: [
      { title: "What stays on your device", paragraphs: ["The text you type, the documents you translate, scanned pages processed by OCR, and the resulting translations are processed only on your device. They are never uploaded anywhere. Your settings, such as selected languages, are stored locally on your device."] },
      { title: "Network use: Windows", paragraphs: ["The Windows distribution includes the desktop app and the translation model in one package. You do not need to install Ollama or download a separate model. Once the package is downloaded, translation, document processing, and OCR work offline.", "Downloading the Windows package requires a connection to the download host. The host receives standard connection information, such as your IP address, under its own policies. The package download does not contain your translation content or an Atoll account identifier."] },
      { title: "Network use: Android", paragraphs: ["On Android, Atoll's network activity is the one-time download of the translation model file (about 1.1 GB) from its public host, registry.ollama.ai. This request is a plain file download; it contains no account, no identifier we create, and none of your content. The host receives standard connection information, such as your IP address, as any web server does, under its own policies. After the model is downloaded, Atoll works fully offline, including in airplane mode."] },
      { title: "What we do not do", bullets: ["No account or sign-up", "No analytics, crash reporting, or tracking", "No advertising or advertising identifiers", "No sharing of your translation data with third parties"] },
      { title: "Permissions and files", paragraphs: ["On Android, Atoll uses the Internet permission for the one-time model download. Files are selected through the system file picker; Atoll accesses only the files you choose. On Windows, you choose the text and documents to process and where to save the translated files. Processing takes place on your device."] },
      { title: "This website and external links", paragraphs: ["This website uses Vercel Web Analytics to count page views in aggregate. It uses no cookies, does not track you across sites, and does not identify you personally. The website has no advertising or account system. The Atoll app itself contains no analytics. The website host and external download providers may receive standard technical connection information when you visit or download a file, under their own policies. Translation does not take place on this website; it takes place in the Atoll app on your device."] },
      { title: "Children", paragraphs: ["Atoll collects no personal data from anyone, including children."] },
      { title: "Changes", paragraphs: ["If this policy changes, the updated version will be published at this address with a new date."] },
    ],
    contact: "Contact", back: "Back to Atoll",
  },
  tr: {
    title: "Kelimeleriniz sizinle kalsın.", label: "GİZLİLİK POLİTİKASI", updated: "Son güncelleme: 22 Ekim 2026 · Yayıncı: 4pp Studio",
    intro: "Atoll hiçbir kişisel veriyi toplamaz, bir sunucuda saklamaz, paylaşmaz veya satmaz. Çeviri tamamen cihazınızda gerçekleşir.",
    sections: [
      { title: "Cihazınızda kalanlar", paragraphs: ["Yazdığınız metinler, çevirdiğiniz belgeler, OCR ile işlenen taranmış sayfalar ve ortaya çıkan çeviriler yalnızca cihazınızda işlenir ve hiçbir yere yüklenmez. Seçili diller gibi ayarlarınız cihazınızda yerel olarak saklanır."] },
      { title: "Ağ kullanımı: Windows", paragraphs: ["Windows dağıtımı, masaüstü uygulamasını ve çeviri modelini tek bir pakette içerir. Ollama kurmanız veya ayrı bir model indirmeniz gerekmez. Paket indirildikten sonra çeviri, belge işleme ve OCR çevrimdışı çalışır.", "Windows paketini indirmek için indirme sunucusuna bağlantı gerekir. Barındırıcı, IP adresiniz gibi standart bağlantı bilgilerini kendi politikaları kapsamında alır. Paket indirmesi, çeviri içeriğinizi veya bir Atoll hesap tanımlayıcısını içermez."] },
      { title: "Ağ kullanımı: Android", paragraphs: ["Android'de Atoll'un ağ etkinliği, çeviri modeli dosyasının (yaklaşık 1,1 GB) herkese açık barındırıcısı registry.ollama.ai üzerinden bir kez indirilmesidir. Bu istek yalnızca bir dosya indirmesidir; hesap bilgisi, bizim oluşturduğumuz bir tanımlayıcı veya içeriğiniz yer almaz. Barındırıcı, her web sunucusu gibi standart bağlantı bilgilerini (örneğin IP adresi) kendi politikaları kapsamında alır. Model indirildikten sonra Atoll, uçak modu dahil tamamen çevrimdışı çalışır."] },
      { title: "Yapmadıklarımız", bullets: ["Hesap veya kayıt yok", "Analiz, çökme raporlama veya takip yok", "Reklam ve reklam kimliği yok", "Çeviri verilerinizin üçüncü taraflarla paylaşımı yok"] },
      { title: "İzinler ve dosyalar", paragraphs: ["Android'de Atoll, İnternet iznini tek seferlik model indirmesi için kullanır. Dosyalar sistemin dosya seçicisiyle seçilir; Atoll yalnızca sizin seçtiğiniz dosyalara erişir. Windows'ta işlenecek metin ve belgeleri, çevrilen dosyaların kaydedileceği yeri siz seçersiniz. İşleme cihazınızda gerçekleşir."] },
      { title: "Bu web sitesi ve dış bağlantılar", paragraphs: ["Bu web sitesi, sayfa görüntülemelerini toplu olarak saymak için Vercel Web Analytics kullanır. Çerez kullanmaz, sizi siteler arasında takip etmez ve kişisel olarak tanımlamaz. Web sitesinde reklam veya hesap sistemi yoktur. Atoll uygulamasının kendisi hiçbir analiz aracı içermez. Siteyi ziyaret ettiğinizde veya bir dosya indirdiğinizde web sitesi barındırıcısı ve dış indirme sağlayıcıları, kendi politikaları kapsamında standart teknik bağlantı bilgilerini alabilir. Çeviri bu web sitesinde değil, cihazınızdaki Atoll uygulamasında gerçekleşir."] },
      { title: "Çocuklar", paragraphs: ["Atoll, çocuklar dahil hiç kimseden kişisel veri toplamaz."] },
      { title: "Değişiklikler", paragraphs: ["Politika değişirse güncel sürüm yeni bir tarihle bu adreste yayımlanır."] },
    ],
    contact: "İletişim", back: "Atoll'a dön",
  },
} as const;
