/* next.config.js */
const webpack = require("webpack");
require("dotenv").config();
module.exports = {
  webpack: config => {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env));
    return config;
  },
  env: {
    FIREBASE_API_KEY: "AIzaSyB1w1R1YpWx1oD_3FjZBwXQgs-S37oS0yA",
    FIREBASE_AUTH_DOMAIN: "thaivintagewhitchurch.firebaseapp.com",
    FIREBASE_DATABASE_URL: "https://thaivintagewhitchurch.firebaseio.com",
    FIREBASE_PROJECT_ID: "thaivintagewhitchurch",
    FIREBASE_STORAGE_BUCKET: "thaivintagewhitchurch.appspot.com",
    FIREBASE_MESSAGE_SENDER_ID: "539053704455"
  }
};
