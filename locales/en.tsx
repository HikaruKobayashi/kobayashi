export default {
  nav: ['Top', 'Profile', 'Biography', 'Favorite', 'Private Works', 'Contact'],
  btn: {
    text: 'View sorce code',
    link: 'https://github.com/HikaruKobayashi/kobayashi',
  },
  top: {
    data: 'Top',
    subTitle: 'Welcome to my portfolio site.',
  },
  profile: {
    title: 'Profile',
    content:
      'I am a frontend engineer working in Tokyo. I work at DIP Corporation as a frontend engineer, and I am doing personal development. I am developing native apps outside of work.',
  },
  favorite: {
    title: 'Favorite',
    items: [
      {
        icon: '🏊🏽',
        content: 'I have loved swimming since I was a kid.',
      },
      {
        icon: '🎥',
        content: 'I spend my holidays watching movies.',
      },
      {
        icon: '🎸',
        content: 'I like listening to the music and playing guitar.',
      },
    ],
  },
  bio: {
    title: 'Biography',
    table: ['Company', 'Period', 'Occupation', 'Skill'],
    company: [
      {
        name: 'DIP Corporation',
        period: '2021~current',
        occupation: 'Frontend Engineer',
        skill: 'HTML5, CSS3, DartSass,JavaScript, jQuery, Vue.js, Docker, gulp',
      },
    ],
  },
  works: {
    title: 'Private Works',
    cafeSampo: {
      name: 'cafe sampo',
      text: 'cafe sampo is cafe search app.',
    },
    kobanote: {
      name: 'kobanote',
      text: 'kobanote is my tech blog.',
    },
  },
  contact: {
    title: 'Contact',
    name: 'Name',
    email: 'Email',
    content: 'Content',
    nameError: 'Name is required.',
    nameCaraError: '20 characters or less',
    emailNeedError: 'Email is required.',
    emailInvalidError: 'Not a valid email address',
    contentError: 'Content is required.',
    contentCaraError: '300 characters or less',
    button: 'Submit',
    success: 'Thank you for your contact.',
    failed: 'Sorry, failed to send.',
  },
};
