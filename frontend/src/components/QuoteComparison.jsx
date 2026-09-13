import React from 'react';

const QuoteComparison = ({ quotes }) => {
  if (!quotes || quotes.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-600">No quotes available for comparison.</p>
      </div>
    );
  }

  // Example quote structure: { id: '1', provider: 'Provider A', price: '$100', features: ['Feature 1', 'Feature 2'], link: '#' }
  // We identify all unique features across all quotes to ensure a consistent comparison grid.
  const allFeatures = Array.from(new Set(quotes.flatMap(quote => quote.features || [])));

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Compare Quotes</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quotes.map((quote) => (
          <div key={quote.id} className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{quote.provider}</h3>
              <p className="text-4xl font-extrabold text-primary-600 mb-4">{quote.price}</p>
              <ul className="space-y-2 mb-6">
                {allFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    {quotes.some(q => q.id === quote.id && q.features && q.features.includes(feature)) ? (
                      // Checkmark icon for included feature
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      // Cross icon for missing feature
                      <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={quote.link}
              className="mt-auto block w-full text-center bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-md transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Select {quote.provider}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuoteComparison;