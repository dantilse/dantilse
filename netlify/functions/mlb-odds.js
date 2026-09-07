exports.handler = async function () {
  const key = process.env.THE_ODDS_API_KEY;

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      environmentVariableExists: !!key,
      keyLength: key ? key.length : 0,
      keyStartsWithWhitespace: key ? /^\s/.test(key) : false,
      keyEndsWithWhitespace: key ? /\s$/.test(key) : false
    })
  };
};
