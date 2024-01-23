// Your OpenAI API key
const apiKey = 'YOUR_API_KEY_HERE';

// API endpoint for GPT-3 (adjust for the model you are using)
const apiUrl = 'https://api.openai.com/v1/completions';

const conversation = [
  {role: 'system', content: 'You are a helpful assistant.'},
  {
    role: 'user',
    content:
      'Translate the following English text to French: "Hello, how are you?"',
  },
];

const headers = new Headers({
  Authorization: `Bearer ${apiKey}`,
  'Content-Type': 'application/json',
});

const requestData = {
  messages: conversation,
  max_tokens: 50,
};

async function makeApiRequest() {
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const reply = data.choices[0].message.content;
    console.log(`AI Response: ${reply}`);
  } catch (error) {
    console.error('API Request Error:', error);
  }
}

makeApiRequest();
