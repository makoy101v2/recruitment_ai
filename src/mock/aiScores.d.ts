export interface AIScore {
  applicantId: number;
  jobId: number;
  score: number;
  explanation: string;
}
export const aiScores: AIScore[];
