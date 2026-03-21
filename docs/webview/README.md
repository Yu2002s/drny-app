---
title: WebView更新
sidebar: false
---

这里提供以下下载地址:

- [ApkMirror](https://www.apkmirror.com/apk/google-inc/android-system-webview/) (需要梯子)
- [123网盘下载](https://www.123865.com/s/km2hjv-WOuOA) (32位)
- [Gitee下载](https://gitee.com/jdy2002/android-webview/releases)
- [加入公众号获取](/join/)

下载完成后安装到设备上即可，**设备需要断电重启**

## WebView内核更新列表

> 请下载符合设备要求的内核版本

<script setup>
import { ref, onMounted } from 'vue';

const webviewList = ref([]);
const loading = ref(true);

onMounted(async () => {
  try {
    const response = await fetch('/api/webview/list');
    const res = await response.json();
    if (res.code === 200) {
      webviewList.value = res.data;
    } else {
      console.error('获取列表失败:', res.msg);
    }
  } catch (err) {
    console.error('请求 WebView 列表异常:', err);
  } finally {
    loading.value = false;
  }
});
</script>

<table v-if="!loading && webviewList.length > 0">
  <thead>
    <tr>
      <th style="text-align:left">名称</th>
      <th style="text-align:center">类型</th>
      <th style="text-align:center">支持架构</th>
      <th style="text-align:center">SDK要求</th>
      <th style="text-align:left">说明</th>
      <th style="text-align:center">下载</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in webviewList" :key="item.id">
      <td style="text-align:left">{{ item.name }}</td>
      <td style="text-align:center">
        <span v-if="item.type === 0">WebView</span>
        <span v-else-if="item.type === 1">X5内核</span>
        <span v-else>其它</span>
      </td>
      <td style="text-align:center">{{ item.abi }}</td>
      <td style="text-align:center">API {{ item.minSdk }} - {{ item.targetSdk }}</td>
      <td style="text-align:left">{{ item.info }}</td>
      <td style="text-align:center">
        <a :href="item.url" target="_blank">立即下载</a>
      </td>
    </tr>
  </tbody>
</table>
<div v-else-if="loading" style="margin-top: 20px;">
  数据请求中...
</div>
<div v-else style="margin-top: 20px;">
  暂无更新列表
</div>
