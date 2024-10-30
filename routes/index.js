const express = require('express');
const { zerox } = require('zerox');
const path = require('path');
require('dotenv').config(); // 用于加载环境变量

const app = express();
const port = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  try {
    // 注意：这里需要替换为你的文件路径和 OpenAI API Key
    const filePath = path.resolve(__dirname, './example.pdf'); //  示例文件，你需要上传自己的文件
    const openaiAPIKey = process.env.OPENAI_API_KEY; 

    if (!openaiAPIKey) {
      return res.status(400).send('OPENAI_API_KEY is required.');
    }

    const result = await zerox({
      filePath,
      openaiAPIKey,
    });

    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred.');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
