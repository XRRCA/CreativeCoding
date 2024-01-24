const API_KEY = "YOUR_OPENAI_API_KEY";

async function fetchChatGPTCompletion() {
  const messages = [
    { role: "system", content: "You are a helpful assistant." },
    {
      role: "user",
      content:
        "Translate the following English text to French: 'Hello, how are you?'",
    },
  ];

  const data = {
    model: "gpt-3.5-turbo",
    messages: messages,
  };

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    // Handle errors
    console.error("Error in API request", await response.text());
    return;
  }

  const responseData = await response.json();
  console.log("Received response:", responseData);
  return responseData.choices[0].message.content.trim();
}

fetchChatGPTCompletion()
  .then((completion) => console.log("Completion:", completion))
  .catch((error) => console.error("Error:", error));
