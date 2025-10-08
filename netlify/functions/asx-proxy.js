// Netlify Function to proxy ASX announcements
// This removes dependency on third-party CORS proxies

exports.handler = async (event, context) => {
  // Only allow GET requests
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  // Get company code from query parameters
  const { code } = event.queryStringParameters || {};

  // Validate input
  if (!code || !code.match(/^[A-Z]{1,5}$/)) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid company code. Expected: 1-5 uppercase letters (e.g., PCK)' })
    };
  }

  try {
    const asxUrl = `https://www.asx.com.au/asx/v2/statistics/announcements.do?by=asxCode&asxCode=${code}&timeframe=D&period=M3`;

    const response = await fetch(asxUrl, {
      headers: {
        'Accept': 'text/html',
        'User-Agent': 'Mozilla/5.0 (compatible; PainChekTracker/1.0)'
      }
    });

    if (!response.ok) {
      throw new Error(`ASX API error: ${response.status}`);
    }

    const html = await response.text();

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html',
        'Cache-Control': 'public, max-age=300', // Cache for 5 minutes
        'Access-Control-Allow-Origin': '*'
      },
      body: html
    };
  } catch (error) {
    console.error('ASX proxy error:', error);

    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        error: 'Failed to fetch ASX announcements',
        message: error.message
      })
    };
  }
};
