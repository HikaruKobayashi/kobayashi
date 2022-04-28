export default {
  nav: [
    {
      name: 'Top',
      link: 'top',
    },
    {
      name: 'Profile',
      link: 'profile',
    },
    {
      name: 'Biography',
      link: 'bio',
    },
    {
      name: 'Favorite',
      link: 'favorite',
    },
    {
      name: 'Work',
      link: 'work',
    },
    {
      name: 'Contact',
      link: 'contact',
    },
  ],
  top: {
    subTitle: 'This site is a my portfolio site.',
    btnText: 'View sorce code',
  },
  profile: {
    title: 'My Profile',
    text: 'I am a frontend engineer working in Tokyo. I work at DIP Corporation as a frontend engineer, and I am doing personal development. I am developing native apps outside of work.',
  },
  fav: {
    title: 'Favorite',
  },
  favs: [
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
  bio: {
    title: 'Biography',
    table: {
      company: 'Company',
      period: 'Period',
      occupation: 'Occupation',
      skill: 'Skill',
    },
    dip: {
      name: 'DIP Corporation',
      period: '2021~current',
      occupation: 'Frontend Engineer',
    },
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
  },
};
