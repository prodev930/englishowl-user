export class Tutorial {
  id?: string;
  title?: string;
  description?: string;
  published?: boolean;
  chapterContent?: string;
  answer1?: string;
  answer2?: string;
  answer3?: string;
  answer4?: string;
  chapter?: string;
  level?: string;
  question?: string;
  quiz?: string;
}

export class Chapter {
  id?: number;
  chaptername?: string;
  lockstatus?:boolean;
}

