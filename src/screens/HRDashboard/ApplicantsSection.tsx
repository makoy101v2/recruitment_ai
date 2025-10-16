import React from "react";
import { CheckCircle, XCircle } from "lucide-react";

interface ApplicantsSectionProps {
  applicants: any[];
  aiScores: any[];
}

const ApplicantsSection: React.FC<ApplicantsSectionProps> = ({
  applicants,
  aiScores,
}) => (
  <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm transition-all duration-200 hover:shadow-md">
    <h3 className="text-lg font-semibold text-gray-800 mb-4">
      Applicants (Anonymized)
    </h3>
    <div className="overflow-x-auto w-full">
      <table className="min-w-[700px] w-full text-sm border border-gray-200 rounded-lg">
        <thead className="bg-gray-100 text-gray-700 uppercase tracking-wide text-xs">
          <tr>
            <th className="px-4 py-2 text-left border-b">Profile</th>
            <th className="px-4 py-2 text-left border-b">AI Score</th>
            <th className="px-4 py-2 text-center border-b">Shortlist</th>
            <th className="px-4 py-2 text-center border-b">Reject</th>
          </tr>
        </thead>
        <tbody>
          {applicants.map((app: any, idx: number) => {
            const scoreObj = aiScores.find(
              (s: any) =>
                s.applicantId === app.id && s.jobId === app.appliedJobId
            );
            return (
              <tr
                key={app.id}
                className="even:bg-gray-50 hover:bg-blue-50 transition-colors"
              >
                <td className="px-4 py-2 border-b">Applicant {idx + 1}</td>
                <td className="px-4 py-2 border-b">
                  {scoreObj ? `${scoreObj.score}%` : "N/A"}
                  <br />
                  <span className="text-xs text-gray-500">
                    {scoreObj?.explanation}
                  </span>
                </td>
                <td className="px-4 py-2 border-b text-center">
                  <button
                    className="p-2 rounded border border-gray-300 bg-[#e7f6e7] text-[#1e4d1e] hover:bg-[#d8f0d8] active:shadow-inner transition"
                    title="Shortlist Applicant"
                  >
                    <CheckCircle className="w-4 h-4" />
                  </button>
                </td>
                <td className="px-4 py-2 border-b text-center">
                  <button
                    className="p-2 rounded border border-gray-300 bg-[#fce8e8] text-[#8b1b1b] hover:bg-[#f8dcdc] active:shadow-inner transition"
                    title="Reject Applicant"
                  >
                    <XCircle className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </section>
);

export default ApplicantsSection;
