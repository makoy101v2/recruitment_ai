export interface Applicant {
  id: number;
  name: string;
  education: string;
  experience: string;
  skills: string;
  appliedJobId: number;
}
export const applicants: Applicant[];
