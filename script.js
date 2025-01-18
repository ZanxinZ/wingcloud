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
            contactInfo: '如需更多信息，请联系：<a href="mailto:zanxinz@outlook.com">zanxinz@outlook.com</a>'
        },
        'en': {
            title: 'Welcome to WingCloud',
            culture: 'Company Culture',
            cultureText: 'At WingCloud, we shine like stars, pursuing innovation and team harmony, driving the waves of technology, weaving a beautiful symphony of culture and technology.',
            cultureCreative: 'Unlimited creativity brings more fun to people.',
            services: 'Main Services',
            servicesText: 'We provide software development services for daily life.',
            contact: 'Contact',
            contactInfo: 'For more information, please contact: <a href="mailto:zanxinz@outlook.com">zanxinz@outlook.com</a>'
        },
        'ar': {
            title: 'مرحبًا بكم في WingCloud',
            culture: 'ثقافة الشركة',
            cultureText: 'في WingCloud، نتألق مثل النجوم، نسعى للابتكار والتناغم بين الفريق، ندفع موجات التكنولوجيا، وننسج سيمفونية جميلة بين الثقافة والتكنولوجيا.',
            cultureCreative: 'إبداع غير محدود يجلب المزيد من المرح للناس.',
            services: 'الخدمات الرئيسية',
            servicesText: 'نحن نقدم خدمات تطوير البرمجيات للحياة اليومية.',
            contact: 'اتصل',
            contactInfo: 'للمزيد من المعلومات، يرجى الاتصال: <a href="mailto:zanxinz@outlook.com">zanxinz@outlook.com</a>'
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
    }

    document.getElementById('lang-select').addEventListener('change', function() {
        const newLang = this.value; // 获取选择的语言
        document.documentElement.lang = newLang; // 更新语言属性
        changeLanguage(newLang); // 调用语言切换函数
    });
});
