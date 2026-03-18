// 翻译词库
const translations = {
    en: {
        // 导航
        navAbout: "About",
        navProjects: "Projects",
        navContact: "Contact",
        // Hero
        heroTitle: "Welcome to my portfolio!",
        heroSub1: "IT Support / Junior Cloud Engineer",
        heroSub2: "Building real-world systems with AWS & Linux",
        // About
        aboutHeading: "About",
        aboutTextList: ['I am a hands-on IT and Cloud-focused candidate with experience in building and maintaining real-world technical solutions.',
            'My experience spans across cloud deployment (AWS EC2, Cloudflare), system troubleshooting, and frontend development.I have built and deployed web applications, desktop tools, and multi-platform applications, covering the full process from development to deployment and iteration.',
            'I am familiar with Linux environments, networking concepts (DNS, TCP/IP), and practical problem-solving.I have also used AI-assisted development tools to accelerate prototyping and continuously improve applications based on user feedback.'
        ],
        // Skills (标题)
        skillsHeading: "Skills",
        skillsList: ['AWS', 'Linux', 'Nginx', 'DNS', 'Cloudflare', 'HTML5', 'CSS3', ' JavaScript (ES6)', 'Vue2/3', 'Uniapp', ' Android ', 'Node.js', 'Python basics', 'MySQL', 'Java basics', 'Git', 'WeChat Mini Program', ' WeChat Cloud Development', 'ArkTS (HarmonyOS)',],
        // Projects (原有)
        projectsHeading: "Projects",
        project1Title: "AWS Cloud Website",
        project1Desc: "Deployed a website on AWS EC2 using Linux. Configured Nginx and domain routing. Integrated Cloudflare for CDN and HTTPS.",
        project1Arch: "<strong>Architecture:</strong> User → Cloudflare → AWS → Nginx",
        project2Title: "Frontend Project",
        project2Desc: "Built responsive frontend using HTML/CSS/JS and deployed with GitHub.",
        // Contact
        contactHeading: "Contact",
        contactText: "Email:",
        // 核心技术
        coreTechHeading: "Core Technologies",
        coreTechList: " Large Model API integration",
        // 开发工具
        devToolsHeading: "Development Tools",
        devToolsList: "VS Code, Android Studio, DevEco Studio, WeChat Developer Tools, Git/GitHub, Gitee, npm, Cursor (AI-assisted), Cloudflare",
        // 个人特质
        personalTraitsHeading: "Personal Traits",
        personalTraitsList: "<ul><li>Strong self-learning ability, quickly turning ideas into usable tools/pages</li><li>Skilled in AI-assisted development, while maintaining hand-coding foundation from pre-AI era</li><li>University Baseball Team Manager: coordinated 30+ members' operations, equipment management, optimized processes to reduce waste</li></ul>",
        // 新项目3
        project3Title: "Webpage Auto-Refresh Tool (vibecoding + iteration)",
        project3Desc: "<strong>2025.12 - present</strong><br>AI-assisted development · Testing and iteration lead<br>Used AI (DeepSeek) to generate Python + PyQt5 prototype, implementing multi-tab management, timed refresh, cookie persistence, random delays, etc. Responsible for functional testing, collecting user feedback (posted on Xiaohongshu, browse:like ≈4:1), drove 3 version updates based on feedback, wrote installation guides and FAQ. Improved UI countdown display, configuration saving, etc. during iterations, enhancing user experience.",
        // 新项目4
        project4Title: "VibeCoding Practice Repository (Vanilla HTML/JS/CSS)",
        project4Desc: "<strong>2024.01 - 2026.02</strong><br>Independent development · Deployed to personal domain<br>• Tetris: collision detection, score/level, hold mechanism, local high score, keyboard + virtual key support<br>• Quiz system: mixed single/multiple choice, real-time scoring, result summary, configurable questions<br>• Study timer: 90-minute focus method, random notification sounds (3-5min intervals), customizable background music/reward break probability, countdown visualization<br>All pages managed via GitHub, deployed to personal domain using GitHub Pages + Cloudflare.",
        // 新项目5
        project5Title: "Multi-platform UI/App Development Collection",
        project5Desc: "<strong>2023 - 2025</strong><br>Classroom training + self practice<br>• To-do list on three platforms: Android (Java), HarmonyOS (ArkTS), vanilla HTML+CSS+JS (CRUD, local storage)<br>• WeChat UI clone (Android): replicated 'Discover' tab and chat list using native Android components<br>• Jingdong UI clone (HarmonyOS): homepage with carousel and grid navigation using ArkTS<br>• Integrated large model API (DeepSeek) in HarmonyOS app for intelligent Q&A<br>• WeChat Mini Program with cloud development (database & cloud functions)<br>• Uniapp basics: implemented simple map display page, familiar with cross-platform adaptation"
    },
    zh: {
        // 导航
        navAbout: "关于",
        navProjects: "项目",
        navContact: "联系",
        // Hero
        heroTitle: "欢迎来到我的作品集！",
        heroSub1: "前端工程师",
        heroSub2: "具备项目开发、部署上线及持续迭代的实践经验",
        // About
        aboutHeading: "关于我",
        aboutTextList: ['熟练使用原生 HTML / CSS / JavaScript 进行页面开发，能够独立完成交互逻辑、状态管理及页面结构设计。在多个项目中实现了游戏逻辑（如碰撞检测、计分系统）、数据交互及本地存储等功能。',
            '具备良好的工程意识，熟悉 GitHub 项目管理流程，并能够将项目部署至线上（GitHub Pages + Cloudflare）。同时具备基础后端与系统能力（Linux、Nginx、AWS），能够完成从开发到部署的完整闭环。',
            '日常开发中会结合 AI 工具进行原型开发，并通过用户反馈持续优化产品体验，具备一定的产品迭代意识。'
        ],
        // Skills
        skillsHeading: "技能",
        skillsList: ['HTML5', 'CSS3', ' JavaScript (ES6)', 'Vue2/3', 'Uniapp', '微信小程序', '微信云开发', 'ArkTS (鸿蒙)', 'AWS', 'Linux', 'MySql', 'Python基础', 'Java基础', '大模型API接入', 'Git', 'Nginx', 'DNS',],
        // Projects (原有)
        projectsHeading: "项目",
        project1Title: "AWS云网站",
        project1Desc: "使用Linux在AWS EC2上部署网站，配置Nginx和域名路由，集成Cloudflare实现CDN和HTTPS。",
        project1Arch: "<strong>架构:</strong> 用户 → Cloudflare → AWS → Nginx",
        project2Title: "前端项目",
        project2Desc: "使用HTML/CSS/JS构建响应式前端，并通过GitHub部署。",
        // Contact
        contactHeading: "联系方式",
        contactText: "邮箱:",
        // ===== 新增部分 =====
        // 核心技术
        coreTechHeading: "核心技术",
        coreTechList: "HTML5/CSS3, JavaScript (ES6), Vue2/3, Uniapp, 微信小程序, 微信云开发, ArkTS (鸿蒙), Android (Java), Node.js, Python基础, MySql, Java基础, Git, Linux基础, 大模型API接入",
        // 开发工具
        devToolsHeading: "开发工具",
        devToolsList: "VS Code, Android Studio, DevEco Studio, 微信开发者工具, Git/GitHub, Gitee, npm, Cursor (AI辅助), Cloudflare",
        // 个人特质
        personalTraitsHeading: "个人特质",
        personalTraitsList: "<ul><li>学习自驱力强，能快速将想法落地为可用的工具/页面</li><li>熟练运用AI辅助开发，同时具备无AI时代的手写基础</li><li>校棒球队经理：统筹30+人运营、物资管理，优化流程降低损耗</li></ul>",
        // 新项目3
        project3Title: "网页刷新工具（AI辅助开发）",
        project3Desc: "使用AI（DeepSeek）生成Python + PyQt5原型，并负责测试与迭代<br>实现多标签管理、定时刷新、Cookie保持、随机延迟等功能<br>通过社交平台收集用户反馈，推动3个版本迭代<br>优化倒计时显示与配置保存，提升用户体验",
        // 新项目4
        project4Title: "VibeCoding 练习仓库 (原生HTML/JS/CSS)",
        project4Desc: "开发多个交互式网页应用（俄罗斯方块、题库系统、学习计时器）<br>实现碰撞检测、分数系统、本地存储等核心逻辑<br>构建可配置题库系统，支持实时计分与结果统计<br>使用 GitHub Pages + Cloudflare 部署至个人域名",
        // 新项目5
        project5Title: "多平台UI/应用开发集",
        project5Desc: "在Android（Java）、鸿蒙（ArkTS）及Web实现待办应用<br>复现微信与京东UI，掌握布局与组件设计<br>在鸿蒙应用中接入大模型API，实现智能问答<br>开发微信小程序，使用云开发数据库与云函数"
    },
    ja: {
        // 导航
        navAbout: "について",
        navProjects: "プロジェクト",
        navContact: "連絡先",
        // Hero
        heroTitle: "ようこそ！",
        heroSub1: "ITサポート / ジュニアクラウドエンジニア",
        heroSub2: "AWSとLinuxで実システムを構築",
        // About
        aboutHeading: "私について",
        aboutTextList: ['AWSデプロイ、Linuxサーバー管理、ネットワークトラブルシューティングの実務経験。クラウドインフラを使ったプロジェクトを構築。', '1'],
        // Skills
        skillsHeading: "スキル",
        // Projects (原有)
        projectsHeading: "プロジェクト",
        project1Title: "AWSクラウドサイト",
        project1Desc: "Linux上のAWS EC2にウェブサイトをデプロイ。Nginxとドメインルーティングを構成。CloudflareでCDNとHTTPSを統合。",
        project1Arch: "<strong>構成:</strong> ユーザー → Cloudflare → AWS → Nginx",
        project2Title: "フロントエンドプロジェクト",
        project2Desc: "HTML/CSS/JSでレスポンシブなフロントエンドを構築し、GitHubでデプロイ。",
        // Contact
        contactHeading: "連絡先",
        contactText: "メール: ",
        // ===== 新增部分 =====
        // 核心技术
        coreTechHeading: "コア技術",
        coreTechList: "HTML5/CSS3, JavaScript (ES6), Vue2/3, Uniapp, 微信小程序, 微信云开发, ArkTS (HarmonyOS), Android (Java), Node.js, Python基礎, MySQL, Java基礎, Git, Linux基礎, 大規模言語モデルAPI連携",
        // 開発ツール
        devToolsHeading: "開発ツール",
        devToolsList: "VS Code, Android Studio, DevEco Studio, 微信開発者ツール, Git/GitHub, Gitee, npm, Cursor (AI支援), Cloudflare",
        // 個人特性
        personalTraitsHeading: "個人の特性",
        personalTraitsList: "<ul><li>学習意欲が高く、アイデアをすぐに実用的なツール/ページに落とし込める</li><li>AI支援開発に習熟しつつ、AI以前の手書きコーディング基礎も保持</li><li>大学野球部マネージャー：30人以上の運営・備品管理を統括、プロセス最適化でロス削減</li></ul>",
        // 新プロジェクト3
        project3Title: "Webページ自動更新ツール (vibecoding + 反復開発)",
        project3Desc: "<strong>2025.12 - 現在</strong><br>AI支援開発 · テストおよび反復開発リーダー<br>AI（DeepSeek）を使用してPython + PyQt5プロトタイプを生成し、マルチタブ管理、定期更新、Cookie保持、ランダム遅延などの機能を実装。機能テスト、ユーザーフィードバックの収集（小紅書で投稿、閲覧:いいね≈4:1）を担当し、フィードバックに基づいて3回のバージョンアップデートを推進、インストールガイドとFAQを作成。反復開発でUIのカウントダウン表示や設定保存などの詳細を最適化し、ユーザー体験を向上。",
        // 新プロジェクト4
        project4Title: "VibeCoding練習リポジトリ (バニラHTML/JS/CSS)",
        project4Desc: "<strong>2024.01 - 2026.02</strong><br>個人開発 · 個人ドメインにデプロイ<br>• テトリス：衝突判定、スコア/レベル、ホールド機構、ローカルハイスコア、キーボード+仮想キー対応<br>• 問題集練習システム：単一/複数選択混合、リアルタイム採点、結果サマリー、問題設定可能<br>• 学習タイマー：90分集中法、ランダム通知音（3-5分間隔）、BGM/ご褒美休憩確率カスタマイズ可能、カウントダウン可視化<br>全ページをGitHubでソース管理し、GitHub Pages + Cloudflareで個人ドメインにデプロイ。",
        // 新プロジェクト5
        project5Title: "マルチプラットフォームUI/アプリ開発集",
        project5Desc: "<strong>2023 - 2025</strong><br>授業実習＋自主練習<br>• 3プラットフォームでのToDoリスト：Android (Java)、HarmonyOS (ArkTS)、バニラHTML+CSS+JSで実装（CRUD、ローカルストレージ）<br>• Android微信UI再現：ネイティブAndroidコンポーネントでWeChat「発見」タブとチャットリストを再現<br>• HarmonyOS京東UI再現：ArkTSで京東商城ホームページ（カルーセル、グリッドナビ）を再現<br>• HarmonyOSで大規模言語モデル連携：DeepSeek APIを統合しインテリジェントQ&Aを実装<br>• 微信ミニプログラム＋クラウド開発：簡単なミニプログラムを開発、クラウド開発データベースとクラウド関数を使用<br>• Uniapp基礎：Uniappのレイアウト設計を理解し、簡単な地図表示ページを実装"
    }
};

// 获取所有带 data-i18n 的元素
const i18nElements = document.querySelectorAll('[data-i18n]');
const langSelect = document.getElementById('langSelect');
// 项目链接配置
const projectLinks = {
    project1Title: 'projects/aws-website.html',
    project2Title: 'projects/frontend.html',
    project3Title: 'projects/refresh-tool.html',
    project4Title: 'projects/shelf.html',
    project5Title: 'projects/multi-platform.html'
};

const htmlKeys = ['project1Arch', 'personalTraitsList', 'project3Desc', 'project4Desc', 'project5Desc'];


function renderSkills(lang) {
    const container = document.getElementById('skills-container');
    if (!container) return;

    const pack = translations[lang];
    const skills = pack.skillsList || [];  // 如果某个语言没定义，回退到空数组

    container.innerHTML = '';
    skills.forEach(skill => {
        const span = document.createElement('span');
        span.textContent = skill;
        container.appendChild(span);
    });
}

function renderAbout(lang) {
    const container = document.getElementById('aboutText-container');
    if (!container) {
        console.error('aboutText-container not found!');

        return;
    }
    const pack = translations[lang];
    if (!pack) {
        console.error('Translation pack not found for lang:', lang);
        return;
    }
    const aboutTextList = pack.aboutTextList || [];
    container.innerHTML = '';
    aboutTextList.forEach(text => {
        const p = document.createElement('p');
        p.textContent = text;
        container.appendChild(p);
    });
}

function renderProjects(lang) {
    const container = document.getElementById('projects-container');
    if (!container) return;
    
    const pack = translations[lang];
    if (!pack) return;
    
    container.innerHTML = '';
    const projectIds = ['project1', 'project2', 'project3', 'project4', 'project5'];
    
    projectIds.forEach(id => {
        const titleKey = id + 'Title';
        const descKey = id + 'Desc';
        const archKey = id + 'Arch';
        
        if (!pack[titleKey]) return;
        
        const link = document.createElement('a');
        link.href = projectLinks[titleKey] || '#';
        link.className = 'card-link';
        
        const card = document.createElement('div');
        card.className = 'card';
        
        const h3 = document.createElement('h3');
        h3.textContent = pack[titleKey];
        card.appendChild(h3);
        
        const pDesc = document.createElement('p');
        if (htmlKeys.includes(descKey)) {
            pDesc.innerHTML = pack[descKey];
        } else {
            pDesc.textContent = pack[descKey];
        }
        card.appendChild(pDesc);
        
        if (pack[archKey]) {
            const pArch = document.createElement('p');
            pArch.innerHTML = pack[archKey];
            card.appendChild(pArch);
        }
        
        link.appendChild(card);
        container.appendChild(link);
    });
}

function updateLanguage(lang) {
    const pack = translations[lang];
    if (!pack) return;

    i18nElements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        const text = pack[key];
        if (text !== undefined) {
            if (htmlKeys.includes(key)) {
                el.innerHTML = text;
            } else {
                el.innerText = text;
            }
        }
    });
    renderSkills(lang);
    renderAbout(lang);
    renderProjects(lang);
}



// 监听下拉框变化
langSelect.addEventListener('change', function (e) {
    updateLanguage(e.target.value);
});

// 初始化：根据下拉框默认值显示对应语言
updateLanguage(langSelect.value);