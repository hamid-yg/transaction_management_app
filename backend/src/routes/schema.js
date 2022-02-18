const getTrSchema = {
  response: {
      200: {
          type: "array",
          items: {
              type: "object",
              properties: {
                  id: {type: "number"},
                  amound: {type: "number"},
                  description: {type: "string"}
              },
          },
      },
  },
};

module.exports = { getTrSchema };