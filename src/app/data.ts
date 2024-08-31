type Book = {
  title: string;
  author: string[];
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

const books: Book[] = [
  {
    title: "Outlier",
    author: ["Ammar Qurshi"],
    content: [
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
