document.addEventListener('DOMContentLoaded', function() {
    console.log('欢迎来到 WingCloud 网站！');
    
    const translations = {
        'zh': {
            title: '欢迎来到 WingCloud',
            culture: '公司文化',
            cultureText: '在 WingCloud，我们如同星辰般闪耀，追求创新与团队的和谐，推动科技的浪潮，编织人文与科技的美丽交响。',
            cultureCreative: '创意无限，为人们带来更多有趣。',
            services: '主营业务',
            servicesText: '我们提供生活类软件开发服务。',
            contact: '联系方式',
            contactInfo: '如需更多信息，请联系：<a href="mailto:zanxinz@outlook.com">zanxinz@outlook.com</a>',
            copyright: '© 2025 WingCloud. 保留所有权利。'
        },
        'en': {
            title: 'Welcome to WingCloud',
            culture: 'Company Culture',
            cultureText: 'At WingCloud, we shine like stars, pursuing innovation and team harmony, driving the waves of technology, weaving a beautiful symphony of culture and technology.',
            cultureCreative: 'Unlimited creativity brings more fun to people.',
            services: 'Main Services',
            servicesText: 'We provide software development services for daily life.',
            contact: 'Contact',
            contactInfo: 'For more information, please contact: <a href="mailto:zanxinz@outlook.com">zanxinz@outlook.com</a>',
            copyright: '© 2025 WingCloud. All rights reserved.'
        },
        'ar': {
            title: 'مرحبًا بكم في WingCloud',
            culture: 'ثقافة الشركة',
            cultureText: 'في WingCloud، نتألق مثل النجوم، نسعى للابتكار والتناغم بين الفريق، ندفع موجات التكنولوجيا، وننسج سيمفونية جميلة بين الثقافة والتكنولوجيا.',
            cultureCreative: 'إبداع غير محدود يجلب المزيد من المرح للناس.',
            services: 'الخدمات الرئيسية',
            servicesText: 'نحن نقدم خدمات تطوير البرمجيات للحياة اليومية.',
            contact: 'اتصل',
            contactInfo: 'للمزيد من المعلومات، يرجى الاتصال: <a href="mailto:zanxinz@outlook.com">zanxinz@outlook.com</a>',
            copyright: '© 2025 WingCloud. جميع الحقوق محفوظة.'
        },
        'fr': {
            title: 'Bienvenue à WingCloud',
            culture: 'Culture d\'entreprise',
            cultureText: 'Chez WingCloud, nous brillons comme des étoiles, poursuivant l\'innovation et l\'harmonie d\'équipe, propulsant les vagues de la technologie, tissant une belle symphonie entre la culture et la technologie.',
            cultureCreative: 'Créativité illimitée apportant plus de plaisir aux gens.',
            services: 'Services principaux',
            servicesText: 'Nous fournissons des services de développement de logiciels pour la vie quotidienne.',
            contact: 'Contact',
            contactInfo: 'Pour plus d\'informations, veuillez contacter : <a href="mailto:zanxinz@outlook.com">zanxinz@outlook.com</a>',
            copyright: '© 2025 WingCloud. Tous droits réservés.'
        },
        'de': {
            title: 'Willkommen bei WingCloud',
            culture: 'Unternehmenskultur',
            cultureText: 'Bei WingCloud strahlen wir wie Sterne, streben nach Innovation und Teamharmonie, treiben die Wellen der Technologie voran und weben eine schöne Symphonie aus Kultur und Technologie.',
            cultureCreative: 'Unbegrenzte Kreativität bringt den Menschen mehr Spaß.',
            services: 'Hauptdienstleistungen',
            servicesText: 'Wir bieten Softwareentwicklungsdienste für das tägliche Leben an.',
            contact: 'Kontakt',
            contactInfo: 'Für weitere Informationen kontaktieren Sie bitte: <a href="mailto:zanxinz@outlook.com">zanxinz@outlook.com</a>',
            copyright: '© 2025 WingCloud. Alle Rechte vorbehalten.'
        },
        'ja': {
            title: 'ウィングクラウドへようこそ',
            culture: '企業文化',
            cultureText: 'ウィングクラウドでは、星のように輝き、革新とチームの調和を追求し、技術の波を推進し、文化と技術の美しい交響曲を織り成します。',
            cultureCreative: '無限の創造性が人々にもっと楽しさをもたらします。',
            services: '主なサービス',
            servicesText: '私たちは日常生活のためのソフトウェア開発サービスを提供しています。',
            contact: '連絡先',
            contactInfo: '詳細については、次のアドレスにお問い合わせください：<a href="mailto:zanxinz@outlook.com">zanxinz@outlook.com</a>',
            copyright: '© 2025 WingCloud. すべての権利を保留します。'
        },
        'zh-tw': {
            title: '歡迎來到 WingCloud',
            culture: '公司文化',
            cultureText: '在 WingCloud，我們如同星辰般閃耀，追求創新與團隊的和諧，推動科技的浪潮，編織人文與科技的美麗交響。',
            cultureCreative: '創意無限，為人們帶來更多有趣。',
            services: '主要業務',
            servicesText: '我們提供生活類軟體開發服務。',
            contact: '聯絡方式',
            contactInfo: '如需更多資訊，請聯絡：<a href="mailto:zanxinz@outlook.com">zanxinz@outlook.com</a>',
            copyright: '© 2025 WingCloud. 保留所有權利。'
        },
        'zh-hk': {
            title: '歡迎來到 WingCloud',
            culture: '公司文化',
            cultureText: '在 WingCloud，我們如同星辰般閃耀，追求創新與團隊的和諧，推動科技的浪潮，編織人文與科技的美麗交響。',
            cultureCreative: '創意無限，為人們帶來更多有趣。',
            services: '主要業務',
            servicesText: '我們提供生活類軟體開發服務。',
            contact: '聯絡方式',
            contactInfo: '如需更多資訊，請聯絡：<a href="mailto:zanxinz@outlook.com">zanxinz@outlook.com</a>',
            copyright: '© 2025 WingCloud. 保留所有權利。'
        },
        'ms': {
            title: 'Selamat datang ke WingCloud',
            culture: 'Budaya Syarikat',
            cultureText: 'Di WingCloud, kami bersinar seperti bintang, mengejar inovasi dan keharmonian pasukan, mendorong gelombang teknologi, dan menenun simfoni indah antara budaya dan teknologi.',
            cultureCreative: 'Kreativiti tanpa had membawa lebih banyak keseronokan kepada orang ramai.',
            services: 'Perkhidmatan Utama',
            servicesText: 'Kami menyediakan perkhidmatan pembangunan perisian untuk kehidupan seharian.',
            contact: 'Hubungi',
            contactInfo: 'Untuk maklumat lanjut, sila hubungi: <a href="mailto:zanxinz@outlook.com">zanxinz@outlook.com</a>',
            copyright: '© 2025 WingCloud. Semua hak terpelihara.'
        },
        'it': {
            title: 'Benvenuti in WingCloud',
            culture: 'Cultura Aziendale',
            cultureText: 'In WingCloud, brilliamo come stelle, perseguendo innovazione e armonia di squadra, guidando le onde della tecnologia, tessendo una bella sinfonia tra cultura e tecnologia.',
            cultureCreative: 'Creatività illimitata porta più divertimento alle persone.',
            services: 'Servizi Principali',
            servicesText: 'Offriamo servizi di sviluppo software per la vita quotidiana.',
            contact: 'Contatto',
            contactInfo: 'Per ulteriori informazioni, contattare: <a href="mailto:zanxinz@outlook.com">zanxinz@outlook.com</a>',
            copyright: '© 2025 WingCloud. Tutti i diritti riservati.'
        }
    };

    function changeLanguage(lang) {
        document.getElementById('site-title').innerText = translations[lang].title;
        document.querySelector('h2#culture').innerText = translations[lang].culture;
        document.querySelector('#culture-text').innerText = translations[lang].cultureText;
        document.querySelector('#culture-creative').innerText = translations[lang].cultureCreative;
        document.querySelector('h2#services').innerText = translations[lang].services;
        document.querySelector('#services p').innerText = translations[lang].servicesText;
        document.querySelector('h2#contact').innerText = translations[lang].contact;
        document.querySelector('#contact p').innerHTML = translations[lang].contactInfo;
        document.querySelector('#copyright').innerText = translations[lang].copyright;
    }

    const langSelect = document.getElementById('lang-select');
    if (langSelect) {
        langSelect.innerHTML += `
            <option value="ja">日本語</option>
            <option value="zh-tw">繁體中文（台灣）</option>
            <option value="zh-hk">繁體中文（香港）</option>
            <option value="ms">Bahasa Melayu</option>
            <option value="it">Italiano</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
        `;
        langSelect.addEventListener('change', function() {
            const newLang = this.value; // 获取选择的语言
            document.documentElement.lang = newLang; // 更新语言属性
            changeLanguage(newLang); // 调用语言切换函数
        });
    } else {
        console.error('语言选择器未找到！');
    }
});
