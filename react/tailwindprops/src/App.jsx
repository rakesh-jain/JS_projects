import './App.css';
import ProfileCards from './ProfileCard';

function Card({ image, title, description, author, date }) {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex m-6 rounded-4xl shadow-lg">
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{ backgroundImage: `url(${image})` }}
        title={title}
      ></div>
      <div className="border border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <p className="text-sm text-gray-600 flex items-center">
            <svg
              className="fill-current text-gray-500 w-3 h-3 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg>
            Members only
          </p>
          <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src={author.image}
            alt={`Avatar of ${author.name}`}
          />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">{author.name}</p>
            <p className="text-gray-600">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const cards = [
    {
      image: 'https://picsum.photos/id/1/500/200',
      title: 'Can coffee make you a better developer?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
      author: {
        name: 'Jonathan Reinink',
        image: 'https://picsum.photos/id/40/4106/2806',
      },
      date: 'Aug 18',
    },
    // Add more card objects here if needed

   { image: 'https://picsum.photos/id/3/700/400',
      title: 'Can coffee make you a better developer?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
      author: {
        name: 'Jonathan Reinink',
        image: 'https://picsum.photos/id/40/4106/206',
      },
    }
  ];
  
//  const CardCount = () => {
//   return Array.from({ length: 3 }).map((_, i) =>
//     cards.map((card, index) => (
//       <Card key={`${i}-${index}`} {...card} />
//     ))
//   );
//  };

  return (
    <>
      <div className="p-10">
        <h1 className="bg-purple-200 text-amber-900 text-center font-serif p-6 rounded-3xl shadow-lg">
          TailwindCSS
        </h1>
      </div>
      <div className="flex flex-wrap justify-center">
      { cards.map((card, index) => (
      <Card key={index} {...card} />
    ))}
      </div>
      <ProfileCards />
    </>
  );
}

export default App;
