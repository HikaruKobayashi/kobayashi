export default {
  nav: ['トップ', 'プロフィール', '経歴', '趣味', 'ポートフォリオ', 'お問い合わせ'],
  btn: {
    text: 'ソースコードを確認する',
    link: 'https://github.com/HikaruKobayashi/kobayashi',
  },
  top: {
    data: 'トップ',
    subTitle: '小林のポートフォリオサイトへようこそ',
  },
  profile: {
    title: 'プロフィール',
    content:
      '私はディップ株式会社でフロントエンドエンジニアとして現在働いています。業務外では、個人開発に注力しており、ネイティブアプリの開発をしています。',
  },
  favorite: {
    title: '趣味',
    items: [
      {
        icon: '🏊🏽',
        content: '幼少期から水泳がずっと好きです。',
      },
      {
        icon: '🎥',
        content: '休日は映画を観ながら過ごします。',
      },
      {
        icon: '🎸',
        content: '音楽を聴くこともギターを演奏するのも好きです。',
      },
    ],
  },
  bio: {
    title: '経歴',
    table: ['会社名', '期間', '職種', '技術'],
    company: [
      {
        name: 'ディップ株式会社',
        period: '2021年~現在',
        occupation: 'フロントエンドエンジニア',
        skill: 'HTML5, CSS3, DartSass, JavaScript, jQuery, Vue.js, gulp',
      },
    ],
  },
  works: {
    title: 'ポートフォリオ',
    cafeSampo: {
      name: 'カフェさんぽ',
      text: 'カフェ検索アプリ',
    },
    kobanote: {
      name: 'kobanote',
      text: '日々の学びを書くブログ',
    },
  },
  contact: {
    title: 'お問い合わせ',
    name: '名前',
    email: 'メールアドレス',
    content: '内容',
    nameError: '名前は必須項目です。',
    nameCaraError: '20文字以下で入力してください。',
    emailNeedError: 'メールアドレスは必須項目です。',
    emailInvalidError: '有効なメールアドレスではありません。',
    contentError: '内容は必須項目です。',
    contentCaraError: '300文字以下で入力してください。',
    button: '送信',
    success: 'お問い合わせ頂きありがとうございました。',
    failed: '申し訳ございません。送信できませんでした。',
  },
};
