# 46亿分之一 · 1 in 4.6 Billion

版本 14.1.0-rc.2，本地候选。解压后打开 `index.html`。把解压出的文件放在同一目录。需要把存档留在固定地址时，可使用本地 HTTP 服务。

Unzip the archive and open `index.html`. Keep the extracted files together. The game is available in Simplified Chinese and English. The English localization combines authored prose, local machine translation, and editorial review.

- Tailwind CSS 3.4.17 is used to compile the local stylesheet. Its MIT notice is included in this package.
- The English draft used OPUS-MT Chinese–English from Helsinki-NLP (CC BY 4.0). The game includes edited text. Model files are a separate development dependency and are omitted here.
- Creature, scene, and poster visuals are drawn by the game. Music and sound effects are synthesized locally. Text and emoji use the device’s fonts.
- The game stores progress in this browser. The top-left title returns to the lobby. From there, the current save can be resumed or exported.

[Helsinki-NLP model card](https://huggingface.co/Helsinki-NLP/opus-mt-zh-en) · [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
