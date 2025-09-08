import aviara from "../assets/aviara.png";
import songs from "../assets/songs.png";
import awakened from "../assets/awakened.png";

const books = [
  {
    id: 1,
    title: "AVIARA",
    quote: `"I was told books don’t sell here. I knew it wasn’t true."`,
    author: "Othuke Ominiabohs",
    cover: aviara,
    link: "https://masobebooks.com/ng/book/awakened/",
  },
  {
    id: 2,
    title: "A SONG...",
    quote: `"I was told books don’t sell here. I knew it wasn’t true."`,
    author: "Othuke Ominiabohs",
    cover: songs,
    link: "https://masobebooks.com/ng/book/awakened/",
  },
  {
    id: 3,
    title: "AWAKENED",
    quote: `"I was told books don’t sell here. I knew it wasn’t true."`,
    author: "Othuke Ominiabohs",
    cover: awakened,
    link: "https://masobebooks.com/ng/book/awakened/",
  },
  {
    id: 4,
    title: "AVIARA",
    quote: `"I was told books don’t sell here. I knew it wasn’t true."`,
    author: "Othuke Ominiabohs",
    cover: aviara,
    link: "https://masobebooks.com/ng/book/awakened/",
  },
  {
    id: 5,
    title: "A SONG OF LEGEN...",
    quote: `"I was told books don’t sell here. I knew it wasn’t true."`,
    author: "Othuke Ominiabohs",
    cover: songs,
    link: "https://masobebooks.com/ng/book/awakened/",
  },
  {
    id: 6,
    title: "AWAKENED",
    quote: `"I was told books don’t sell here. I knew it wasn’t true."`,
    author: "Othuke Ominiabohs",
    cover: awakened,
    link: "https://masobebooks.com/ng/book/awakened/",
  },
];

const Books = () => {
  return (
    <section className="py-16 bg-white dark:bg-[#0B0B2E] text-white mt-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-center text-base sm:text-2xl bg-purple-200 px-5 py-1 rounded-full dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition duration-300 font-medium w-fit m-auto my-12">
          Books & Publications
        </h2>

        {/* Books Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 items-center">
          {books.map((book) => (
            <div
              key={book.id}
              className="flex bg-gray-500 dark:bg-[#1A1A3D] rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:shadow-2xl"
            >
              {/* Book Cover */}
              <img
                src={book.cover}
                alt={book.title}
                className="w-[113px]  object-cover"
              />

              {/* Book Details */}
              <div className="p-2 flex flex-col justify-between ">
                <div>
                  <h3 className="text-yellow-400 font-bold text-lg mb-2">
                    {book.title}
                  </h3>
                  <p className="text-sm italic mb-2">{book.quote}</p>
                  <p className="text-xs text-gray-400">—{book.author}</p>
                </div>

                {/* Read More Button */}
                <a href={book.link} target="_blank" rel="noopener noreferrer" className="mt-4 px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white dark:bg-purple-500 dark:hover:bg-purple-400 text-sm rounded-lg transition duration-300 text-center w-24">
                    Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Books;
