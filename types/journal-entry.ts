export interface JournalEntry {
  id: string;
  userId: string;
  title: string;
  body: string;
  duration: "Long" | "Medium" | "Short";
  tags?: string[];
  type: "Lucid" | "Recurring" | "Normal" | "Nightmare" | "Daydream";
  mood?:
    | "Happy"
    | "Sad"
    | "Angry"
    | "Calm"
    | "Anxious"
    | "Confused"
    | "Neutral";
  createdAt: Date;
  updatedAt: Date;
  attachments?: String[];
}
