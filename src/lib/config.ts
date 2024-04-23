const avatarurl = "/images/avatar3.png" // "/images/avatar.jpg" // 

export const config = {
    title: 'DosanKongCode',
    author: 'Masaki Hayashi',
    occupation: 'iOS App Developer',
    headerTitle: 'DosanKongCode',
    description: 'DosanKongCode, created with Sveltekit and Tailwind.css',
    language: 'en-us',
    theme: 'dark', // system, dark or light
    domain: 'https://dosankong.com',
    siteUrl: 'https://dosankong.com',
    siteRepo: 'https://github.com/mlballack/swift-kong.git',
    siteLogo: avatarurl, //'/icon-512.png',
    image: avatarurl,
    email: 'district134bus@gmail.com',
    github: 'https://github.com/mlballack',
    twitter: 'https://twitter.com/mh_poteto',
    facebook: '',
    youtube: '',
    linkedin: '',
    locale: 'en-US',
    primaryColor: '#06a261',

    // supports buttondown, convertkit, emailoctopus, klaviyo, mailchimp, revue
    // use false or null to disable newsletter
    // check .env.example for settings needed values for each service
    newsletter: 'mailchimp',

    multiuser: false
};

export const user = {
    name: 'Masaki Hayashi',
    // avatar value can be removed for image
    avatar: avatarurl, //'./logo.png',
    // twitter value can be removed for no link to twitter
    twitter: 'https://twitter.com/mh_poteto'
};

export const navLinks = [
    { href: '/', title: 'Home' },
    { href: '/about', title: 'About' },
    { href: '/projects', title: 'Projects' },
    { href: '/blog', title: 'Blog' }
];

export const openGraph = {
    enabled: true,
    width: 1200,
    height: 630
};

export const educations = [
    {
        period: "2013 - 2017",
        degree: "Bachelor",
        university: "The University of Electro-Communications",
        studies: [
            "Machine Engineering",
            "Modeling of the Neuron-Astrocytes communication (Tripartite synapse)",
        ]
    },
    {
        period: "2017 - 2019",
        degree: "Master",
        university: "The University of Electro-Communications",
        studies: [
            "Machine Engineering",
            "Modeling of the Neuron-Astrocytes communication (Tripartite synapse)",
            "Modeling of the neuronal oscillation between Awake and Sleep state"
        ],
    },
];

export const experiences = [
    {
        period: "2019 - 2020",
        product_name: 'WatchOSアプリの新規開発',
        target: "医療現場向け",
        features: [
            "病院内用のSNS",
            "AppleWatchで音声認識",
            "スタンプ投稿",
        ],
        skills: ["Swift", "Objective-C", "MVC", "WebSocket", "SpeechRecognition"],
    },
    {
        period: "2019 - 2020",
        product_name: 'iOSアプリの新規開発',
        target: "家庭教師向け",
        features: [
            "家庭教師と生徒のマッチングサービス",
            "目的に合った教師の選択",
            "チャット機能",
            "授業の予約",
        ],
        skills: ["Swift", "MVC", "Firebase"],
    },
    {
        period: "2020 - 2021",
        product_name: 'iOSアプリのバージョンアップ開発',
        target: "医療現場向け",
        features: [
            "病院内用のSNS",
            "音声認識による声でメモ",
        ],
        skills: ["Objective-C", "MVC", "MVP", "XCTest", "WebSocket", "SpeechRecognition"],
    },
    {
        period: "2020 - 2021",
        product_name: 'iPadOSアプリのバージョンアップ開発',
        target: "医療現場向け",
        features: [
            "音声認識によるデータ記録",
            "記録データの出力",
            "写真にマークアップでメモ"
        ],
        skills: ["Objective-C", "MVC", "SpeechRecognition"],
    },
    {
        period: "2022 - 2023",
        product_name: 'iOSアプリの新規開発',
        target: "医療現場向け",
        features: [
            "音声認識による声でメモ",
            "BluetoothでPCにテキストや画像を転送",
            "写真で記録"
        ],
        skills: ["Swift", "MVP", "VIP", "XCTest", "Alamofire", "SpeechRecognition"],
    },
    {
        period: "2023 - 2024",
        product_name: 'iOSアプリの新規開発',
        target: "一般向け",
        features: [
            "日付リストでTodoの確認",
            "タップですぐにTodoの記録"
        ],
        skills: ["Swift", "SwiftUI", "MV", "XCTest"],
    },
    {
        period: "2023 - 2024",
        product_name: 'iOSアプリの新規開発',
        target: "医療現場向け",
        features: [
            "音声認識による情報検索",
            "音声認識によるリマインダー登録",
        ],
        skills: ["Swift", "SwiftUI", "MV", "XCTest", "Alamofire", "SpeechRecognition"],
    },
];

export const skills = [
    { laung: "Swift", level: 80 },
    { laung: "Objective-C", level: 70 },
    { laung: "Javascript", level: 50 },
    { laung: "Python", level: 50 },
    { laung: "MATLAB", level: 40 },
];

// supported systems: googleAnalytics, plausible, and simpleAnalytics
export const analytics_data = {
    googleAnalyticsId: 'G-H3J02W7984', // e.g. UA-000000-2 or G-XXXXXXX
    plausibleDomain: '', // e.g. pied-piper-blog.netlify.app
    simpleAnalytics: false // true or false
};

// supported providers: giscus, utterances
export const comment = {
    provider: 'giscus',
    giscus: {
        // Visit the link below, and follow the steps in the 'configuration' section
        // https://giscus.app/
        repo: 'akiarostami/sveltekit-tailwind-blog-starter',
        reposId: 'R_kgDOIen4kw',
        category: 'Sample Site Comments',
        categoryId: 'DIC_kwDOIen4k84CS9tX',
        mapping: 'pathname', // supported options: pathname, url, title
        reactionsEnabled: '1', // Emoji reactions: 1 = enable / 0 = disable
        // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
        metadata: '0',
        // theme example: light, dark, dark_dimmed, dark_high_contrast
        // Place the comment box above the comments. options: bottom, top
        inputPosition: 'bottom',
        // Choose the language giscus will be displayed in. options: en, es, zh-CN, zh-TW, ko, ja etc
        lang: 'en',
        dataStrict: '0',
        loading: 'lazy',
        // theme example: light, dark, preferred_color_scheme, light_high_contrast, dark_high_contrast
        // light_protanopia, dark_protanopiam, light_tritanopia, dark_tritanopia, dark_dimmed, transparent_dark
        theme: 'light',
        // theme when dark mode
        darkTheme: 'dark',
        themeURL: ''
    },
    utterances: {
        // Visit the link below, and follow the steps in the 'configuration' section
        // https://utteranc.es/
        repo: 'akiarostami/sveltekit-tailwind-blog-starter',
        issueTerm: 'pathname', // supported options: pathname, url, title
        label: 'Comment 💬', // label (optional): Comment 💬
        // theme example: github-light, github-dark, preferred-color-scheme
        // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light, gruvbox-dark"
        theme: 'github-light',
        // theme when dark mode
        darkTheme: 'github-dark'
    }
};
