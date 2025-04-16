import express from "npm:express";
import fetch from "npm:node-fetch";
// const fs = require("fs");
import { join } from "node:path";
import process from "node:process";

const app = express();
const PORT = 3000 || process.env.PORT;

// 设置静态文件目录
// const __dirname = new URL('.', import.meta.url).pathname;
const __dirname = Deno.cwd();
// console.log(join(__dirname, "public"));
app.use(express.static(join(__dirname, "public")));

// 解析 URL 编码的请求体
app.use(express.urlencoded({ extended: true }));

// 加载支持的语言
async function loadLanguages() {
  try {
    const response = await fetch("https://libretranslate.com/languages");
    const languages = await response.json();
    return languages;
  } catch (error) {
    console.error("加载语言失败:", error);
    throw error;
  }
}

// 翻译文本
async function translate(text, source, target) {
  try {
    // const response = await fetch("https://freeapi.fanyimao.cn/translate", {
    //   method: 'POST',
    //   headers: {
    //         "Authorization": "Bearer tr-98584e33-f387-42cc-a467-f02513bd400d",
    //         "Content-Type": "application/json"
    //     // 'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    //   // body: new URLSearchParams({
    //   //   q: text,
    //   //   source: source === 'auto' ? '' : source,
    //   //   target: target,
    //   // }),
    //   body:JSON.stringify({
    //     "text":text,
    //     "source_lang":source === 'auto'?'':source,
    //     "target_lang":target
    //   }),
      
    // });
    // const data = await response.json();
    // return data.translatedText;

    const back=await fetch("https://freeapi.fanyimao.cn/translate", {
      method: "POST",
      headers: {
        "Authorization": "Bearer tr-98584e33-f387-42cc-a467-f02513bd400d",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text: text,
        source_lang: source === 'auto'?"":source,
        target_lang: target
      })
    })
    .then(response => response.json())
    // console.log(back)
    
    return back;
  } catch (error) {
    console.error("翻译失败:", error);
    throw error;
  }
}

// 检测语言
async function detectLanguage(text) {
  try {
    const response = await fetch("https://libretranslate.com/detect", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        q: text,
      }),
    });

    const data = await response.json();
    return data[0].language;
  } catch (error) {
    console.error("语言检测失败:", error);
    throw error;
  }
}

app.get("/", (req, res) => {
    console.log(__dirname);
    res.sendFile(join(__dirname, "public", "index.html"));
});

// 获取语言列表
app.get("/languages", async (req, res) => {
  try {
    const languages = await loadLanguages();
    res.json(languages);
  } catch (error) {
    res.status(500).json({ error: "无法加载语言列表" });
  }
});

// 翻译请求
app.post("/translate", async (req, res) => {
  const { text, source, target } = req.body;
  try {
    const translatedText = await translate(text, source, target);
    res.json({ translatedText });
  } catch (error) {
    res.status(500).json({ error: "翻译出错" });
  }
});

// 检测语言请求
app.post("/detect", async (req, res) => {
  const { text } = req.body;
  try {
    const detectedLang = await detectLanguage(text);
    res.json({ detectedLang });
  } catch (error) {
    res.status(500).json({ error: "检测失败" });
  }
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`服务器正在运行在 http://localhost:${PORT}`);
});