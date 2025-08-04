export interface MockCompanion {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
  bookmarked: boolean;
}

export const mockCompanions: MockCompanion[] = [
  {
    id: "1",
    name: "Neura the Brainy Explorer",
    topic: "Neural Network of the Brain",
    subject: "science",
    duration: 45,
    color: "#E5D0FF",
    bookmarked: true,
  },
  {
    id: "2",
    name: "Countsy the Number Wizard",
    topic: "Derivatives & Integrals",
    subject: "maths",
    duration: 30,
    color: "#FFDA6E",
    bookmarked: false,
  },
  {
    id: "3",
    name: "Verba the Vocabulary Builder",
    topic: "English Literature",
    subject: "language",
    duration: 30,
    color: "#BDE7FF",
    bookmarked: true,
  },
  {
    id: "4",
    name: "Codey the Logic Hacker",
    topic: "Intro to If-Else Statements",
    subject: "coding",
    duration: 45,
    color: "#FFC8E4",
    bookmarked: false,
  },
  {
    id: "5",
    name: "Memo, the Memory Keeper",
    topic: "World Wars: Causes & Consequences",
    subject: "history",
    duration: 15,
    color: "#FFECC8",
    bookmarked: false,
  },
  {
    id: "6",
    name: "The Market Maestro",
    topic: "The Basics of Supply & Demand",
    subject: "economics",
    duration: 10,
    color: "#C8FFDF",
    bookmarked: true,
  },
  {
    id: "7",
    name: "Algo the Algorithm Architect",
    topic: "Sorting Algorithms Explained",
    subject: "coding",
    duration: 60,
    color: "#FFC8E4",
    bookmarked: false,
  },
  {
    id: "8",
    name: "Calc the Calculus Master",
    topic: "Limits and Continuity",
    subject: "maths",
    duration: 40,
    color: "#FFDA6E",
    bookmarked: true,
  },
  {
    id: "9",
    name: "Chem the Chemical Explorer",
    topic: "Organic Chemistry Basics",
    subject: "science",
    duration: 35,
    color: "#E5D0FF",
    bookmarked: false,
  },
  {
    id: "10",
    name: "Lingua the Language Expert",
    topic: "Spanish Grammar Fundamentals",
    subject: "language",
    duration: 25,
    color: "#BDE7FF",
    bookmarked: false,
  },
  {
    id: "11",
    name: "Historia the Time Traveler",
    topic: "Ancient Civilizations",
    subject: "history",
    duration: 20,
    color: "#FFECC8",
    bookmarked: true,
  },
  {
    id: "12",
    name: "Econo the Financial Guru",
    topic: "Microeconomics Principles",
    subject: "economics",
    duration: 50,
    color: "#C8FFDF",
    bookmarked: false,
  },
  {
    id: "13",
    name: "Data the Database Designer",
    topic: "SQL Fundamentals",
    subject: "coding",
    duration: 55,
    color: "#FFC8E4",
    bookmarked: true,
  },
  {
    id: "14",
    name: "Geo the Geometry Genius",
    topic: "Trigonometry Basics",
    subject: "maths",
    duration: 30,
    color: "#FFDA6E",
    bookmarked: false,
  },
  {
    id: "15",
    name: "Bio the Life Scientist",
    topic: "Cell Biology and Genetics",
    subject: "science",
    duration: 40,
    color: "#E5D0FF",
    bookmarked: false,
  },
  {
    id: "16",
    name: "Gramma the Grammar Guardian",
    topic: "Advanced English Grammar",
    subject: "language",
    duration: 35,
    color: "#BDE7FF",
    bookmarked: true,
  },
  {
    id: "17",
    name: "Chrono the Chronology Keeper",
    topic: "Medieval Europe",
    subject: "history",
    duration: 25,
    color: "#FFECC8",
    bookmarked: false,
  },
  {
    id: "18",
    name: "Market the Trading Expert",
    topic: "Stock Market Fundamentals",
    subject: "economics",
    duration: 45,
    color: "#C8FFDF",
    bookmarked: true,
  },
];

// Helper function to get companions by subject
export const getCompanionsBySubject = (subject: string): MockCompanion[] => {
  return mockCompanions.filter((companion) => companion.subject === subject);
};

// Helper function to get bookmarked companions
export const getBookmarkedCompanions = (): MockCompanion[] => {
  return mockCompanions.filter((companion) => companion.bookmarked);
};

// Helper function to get companion by ID
export const getCompanionById = (id: string): MockCompanion | undefined => {
  return mockCompanions.find((companion) => companion.id === id);
};
