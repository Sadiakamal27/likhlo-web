export type Book = {
  title: string;
  author: string[];
  cover: string;
  content: {
    chapterTitle: string;
    topics?: {
      topicTitle: string | undefined;
      subtopic?: {
        subtopicTitle: string | undefined;
      }[];
    }[];
  }[];
};

export const books: Book[] = [
  {
    title: "Outlier",
    author: ["Ammar Qurshi"],
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1653065920i/59892260.jpg",
    content: [
      {
        chapterTitle: "Cricket players",
        topics: [
          {
            topicTitle: "Why cricket is good?",
          },
          {
            topicTitle: "Do what comes to your mind",
            subtopic: [
              {
                subtopicTitle: "Why do this?",
              },
            ],
          },
        ],
      },
      {
        chapterTitle: "Hockey players",
        topics: [
          {
            topicTitle: "Do what comes to your mind",
            subtopic: [
              {
                subtopicTitle: "How to do this thing",
              },
              {
                subtopicTitle: "Why do this?",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Data Analytics",
    author: ["Usama Kamran "],
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1653065920i/59892260.jpg",
    content: [
      {
        chapterTitle: "Cricket players",
        topics: [
          {
            topicTitle: "Do what comes to your mind",
            subtopic: [
              {
                subtopicTitle: "Why do this?",
              },
            ],
          },
        ],
      },
      {
        chapterTitle: "Hockey players",
        topics: [
          {
            topicTitle: "Do what comes to your mind",
            subtopic: [
              {
                subtopicTitle: "Why do this?",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Blink",
    author: ["malcolm gladwell"],
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1653065920i/59892260.jpg",
    content: [
      {
        chapterTitle: "How to think",
        topics: [
          {
            topicTitle: "Do what comes to your mind",
            subtopic: [
              {
                subtopicTitle: "Why do this?",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Blink",
    author: ["malcolm gladwell"],
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1653065920i/59892260.jpg",
    content: [
      {
        chapterTitle: "How to think",
        topics: [
          {
            topicTitle: "Do what comes to your mind",
            subtopic: [
              {
                subtopicTitle: "Why do this?",
              },
            ],
          },
        ],
      },
    ],
  },
];
