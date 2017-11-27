let count = 0;
const InfoPanels = {
  'Home':[
    {
      title: 'Music Just for You',
      description: 'Listen to your favorite artists and albums, and make playlists of your favorite songs. Get recommendations based on your tastes to discover new music.',
			img: require('../../static/img/you.svg'),
			id: count++
    },
		{
      title: 'Listen Everywhere',
      description: 'Take your music with you everywhere you go. Listen for free for free on any device - mobile, tablet, and your computer.',
			img: require('../../static/img/everywhere.svg'),
			id: count++
    },
		{
      title: 'Connect with Others',
      description: 'Find the right songs for the right occassions. Let your friends know what you\'re listening to, and connect with others who share the music you love.',
			img: require('../../static/img/connect.svg'),
			id: count++
    },
  ],
};

export default InfoPanels;
