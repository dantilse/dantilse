exports.handler = async function () {
  try {
    const url =
      "https://api.theoddsapi.com/odds/" +
      "?sport_key=baseball_mlb" +
      "&markets=h2h" +
      "&regions=us" +
      "&oddsFormat=american";

    const response = await fetch(url, {
      headers: {
        "x-api-key": process.env.THE_ODDS_API_KEY
      }
    });

    const data = await response.json();

    return {
      statusCode: response.status,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store"
      },
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        success: false,
        error: error.message
      })
    };
  }
};
