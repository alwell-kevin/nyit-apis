const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "",
});

const openai = new OpenAIApi(configuration);

// create a function that calls openai create completion and print the response

var openAIInterface = async function (prompt) {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
    });
    return response.data.choices[0].text;
}

openAIInterface("Do you love to code and why???!").then((response) => {
    console.log(response);
});