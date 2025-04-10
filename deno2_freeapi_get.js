fetch("https://freeapi.fanyimao.cn/translate", {
    method: "POST",
    headers: {
      "Authorization": "Bearer tr-98584e33-f387-42cc-a467-f02513bd400d",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      text: "Hello world",
      source_lang: "EN",
      target_lang: "ZH"
    })
  })
  .then(response => response.json())
  .then(data => console.log(data));