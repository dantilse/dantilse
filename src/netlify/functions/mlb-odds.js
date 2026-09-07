exports.handler = async function () {
  try {
    const url =
      "https://api.theoddsapi.com/odds/" +
      "?sport_key=baseball_mlb" +
      "&markets=h2h" +
      "&regions=us" +
      "&bookmakers=draftkings,betmgm,fanduel" +
      "&oddsFormat=american";

    const response = await fetch(url, {
      headers: {
        "x-api-key": process.env.THE_ODDS_API_KEY
      }
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify(data)
      };
    }

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store"
      },
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message
      })
    };
  }
};
