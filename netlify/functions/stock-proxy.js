// Netlify Function to proxy Yahoo Finance API requests
// This removes dependency on third-party CORS proxies

exports.handler = async (event, context) => {
  // Only allow GET requests
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  // Get symbol and range from query parameters
  const { symbol, range } = event.queryStringParameters || {};

  // Validate inputs
  if (!symbol || !symbol.match(/^[A-Z]{1,5}\.[A-Z]{2}$/)) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid symbol format. Expected: XXX.XX (e.g., PCK.AX)' })
    };
  }

  const validRanges = ['1d', '5d', '1mo', '3mo', '6mo', '1y', '2y', '5y', '10y', 'ytd', 'max'];
  if (!range || !validRanges.includes(range)) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: `Invalid range. Must be one of: ${validRanges.join(', ')}` })
    };
  }

  try {
    const apiUrl = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?interval=1d&range=${range}`;

    const response = await fetch(apiUrl, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0 (compatible; PainChekTracker/1.0)'
      }
    });

    if (!response.ok) {
      throw new Error(`Yahoo Finance API error: ${response.status}`);
    }

    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=60', // Cache for 1 minute
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(data)
    };
  } catch (error) {
    console.error('Stock proxy error:', error);

    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        error: 'Failed to fetch stock data',
        message: error.message
      })
    };
  }
};
