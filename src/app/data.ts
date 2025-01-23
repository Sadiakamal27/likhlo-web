export type Book = {
  title: string;
  author: string[];
  cover: string;
  chapters: {
    chapterTitle: string;
    topics?: {
      topicTitle: string | undefined;
      subtopics?: {
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
    chapters: [
      {
        chapterTitle: "Cricket players",
        topics: [
          {
            topicTitle: "Cricket is a shit sport",
            subtopics: [
              {
                subtopicTitle: "Heres why:",
              },
            ],
          },
          {
            topicTitle: "Why cricket is good?",
          },
          {
            topicTitle: "Do what comes to your mind",
            subtopics: [
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
            subtopics: [
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
    title: "Outlier",
    author: ["Ammar Qurshi"],
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1653065920i/59892260.jpg",
    chapters: [
      {
        chapterTitle: "Cricket players",
        topics: [
          {
            topicTitle: "Cricket is a shit sport",
            subtopics: [
              {
                subtopicTitle: "Heres why:",
              },
            ],
          },
          {
            topicTitle: "Why cricket is good?",
          },
          {
            topicTitle: "Do what comes to your mind",
            subtopics: [
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
            subtopics: [
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
    title: "Outlier",
    author: ["Ammar Qurshi"],
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1653065920i/59892260.jpg",
    chapters: [
      {
        chapterTitle: "Cricket players",
        topics: [
          {
            topicTitle: "Cricket is a shit sport",
            subtopics: [
              {
                subtopicTitle: "Heres why:",
              },
            ],
          },
          {
            topicTitle: "Why cricket is good?",
          },
          {
            topicTitle: "Do what comes to your mind",
            subtopics: [
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
            subtopics: [
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
    title: "Outlier",
    author: ["Ammar Qurshi"],
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1653065920i/59892260.jpg",
    chapters: [
      {
        chapterTitle: "Cricket players",
        topics: [
          {
            topicTitle: "Cricket is a shit sport",
            subtopics: [
              {
                subtopicTitle: "Heres why:",
              },
            ],
          },
          {
            topicTitle: "Why cricket is good?",
          },
          {
            topicTitle: "Do what comes to your mind",
            subtopics: [
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
            subtopics: [
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
    chapters: [
      {
        chapterTitle: "Cricket players",
        topics: [
          {
            topicTitle: "Do what comes to your mind",
            subtopics: [
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
            subtopics: [
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
    chapters: [
      {
        chapterTitle: "How to think",
        topics: [
          {
            topicTitle: "Do what comes to your mind",
            subtopics: [
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
    chapters: [
      {
        chapterTitle: "How to think",
        topics: [
          {
            topicTitle: "Do what comes to your mind",
            subtopics: [
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
