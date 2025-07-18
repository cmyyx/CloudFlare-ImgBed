// _worker.js
// 这是一个极简的 Worker，它的唯一工作就是提供 [site] 中指定的静态文件。
export default {
  async fetch(request, env, ctx) {
    // env.ASSETS 是一个由 Cloudflare 提供的特殊对象，
    // 它能自动处理来自 `bucket` 目录的静态文件请求。
    return env.ASSETS.fetch(request);
  },
};
