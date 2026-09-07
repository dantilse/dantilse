exports.handler = async function () {
  try {
    const response = await fetch("https://api.theoddsapi.com/me/", {
      headers: {
        "x-api-key": process.env.THE_ODDS_API_KEY
      }
    });

    const text = await response.text();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        theOddsApiStatus: response.status,
        theOddsApiResponse: (() => {
          try {
            return JSON.parse(text);
          } catch {
            return text;
          }
        })()
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        error: error.message
      })
    };
  }
};
