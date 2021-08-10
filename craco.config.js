const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#0055ff",
              "@font-family": "Quicksand, sans-serif",
              "@border-color-base": "#f1f1f1",
              "@border-width-base": "2px",
              "@border-radius-base": "4px",
              "@text-color": "#000",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
