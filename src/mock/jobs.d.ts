export interface Job {
  id: number;
  title: string;
  department?: string;
  summary?: string;
  requirements?: string[];
  qualifications?: string[];
}
export const jobs: Job[];
