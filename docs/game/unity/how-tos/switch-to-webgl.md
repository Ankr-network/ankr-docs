---
title: Switch to WebGL
id: switch-to-webgl
---

# Switch to the WebGL platform

To build a WebGL project you need to switch platforms:

1. Open **File > Build Settings…**
2. Select **WebGL** and click **Switch Platform**.
   <img src={require('/img/select-webgl.png').default} alt="Protocol landing" width="600" />
3. Click **Player Settings…**
4. Go to **Player > WebGL tab > Resolution and Presentation**.
   <img src={require('/img/choose-ankr-for-webgl.png').default} alt="Protocol landing" width="600" />
5. Chose a template, based on your Unity version.

## Add SDK support to custom template

If you want to build your WebGL project using a custom template to be compatible with the SDK features, you need to add the `ankr-web3.js` JavaScript library to it:

1. Load latest release of our WebGL library (lib.zip).
2. Unpack it.
3. Copy ankr-web3.js to directory with JavaScript sources.
4. Import the script to your template page somewhere before the closing `body` tag:
```
<body>
...    
    <script src="your-js-dir/ankr-web3.js"></script>
    
</ body>
```