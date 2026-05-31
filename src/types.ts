export interface Chapter {
  id: string;
  roman: string;
  title: string;
  count: number;
  featuredDrinks: string[];
  description: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  badge?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface DrinkRecipe {
  name: string;
  category: string;
  history: string;
  ingredients: string[];
  instructions: string[];
  glassware: string;
  curiosity: string;
}
