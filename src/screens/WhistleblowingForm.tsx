import React from 'react';

const WhistleblowingForm: React.FC = () => (
  <div className="w-full max-w-lg mx-auto bg-white rounded-lg shadow p-8 mt-8">
    <h2 className="text-2xl font-semibold mb-4">Whistleblowing / Report Form</h2>
    <form className="flex flex-col gap-4">
      <input type="text" placeholder="Subject" required className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-200" />
      <textarea placeholder="Description" required className="px-3 py-2 border rounded min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-200" />
      <input type="file" className="block" />
      <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white font-medium hover:bg-blue-700 transition">Submit Report</button>
    </form>
  </div>
);

export default WhistleblowingForm;
