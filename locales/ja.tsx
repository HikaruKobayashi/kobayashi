export default {
  nav: [
    {
      name: 'トップ',
      link: 'top',
    },
    {
      name: 'プロフィール',
      link: 'profile',
    },
    {
      name: '経歴',
      link: 'bio',
    },
    {
      name: '趣味',
      link: 'favorite',
    },
    {
      name: 'ポートフォリオ',
      link: 'work',
    },
    {
      name: 'お問い合わせ',
      link: 'contact',
    },
  ],
  top: {
    subTitle: '小林のポートフォリオサイトです',
  },
  btn: {
    text: 'ソースコードを確認する',
    link: 'https://github.com/HikaruKobayashi/kobayashi',
  },
  profile: {
    title: 'プロフィール',
    text: '私はディップ株式会社でフロントエンドエンジニアとして現在働いています。業務外では、個人開発に注力しており、ネイティブアプリの開発をしています。',
  },
  fav: {
    title: '趣味',
  },
  favs: [
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
  bio: {
    title: '経歴',
    table: {
      company: '会社名',
      period: '期間',
      occupation: '職種',
      skill: '技術',
    },
    dip: {
      name: 'ディップ株式会社',
      period: '2021年~現在',
      occupation: 'フロントエンドエンジニア',
    },
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
  },
};
