module.exports = {
  title: "Ivan的博客",
  description: "坏习惯可以改正，好习惯可以慢慢养成！",
  head: [["head", { rel: "icon", href: "/favicon.ic" }]],
  themeConfig: {
    logo: "/favicon.ico",
    nav: [
      { text: "首页", link: "/" },
      { text: "GitHub", link: "" }
    ]
  },
  configureWebpack: {
    // resolve: {
    //   "@": "path"
    // }
  }
};
