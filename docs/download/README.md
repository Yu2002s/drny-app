---
title: 下载中心
icon: download
sidebar: false
---

这里将发布最新版本App更新！

::: tip 最安全的环境
请认准本站点提供的最新官方版本，避免使用第三方未授权分发版本，以保障数据安全与账号安全。
:::

## DongYuTVWeb

一款可以在电视和手机上安装的看电视直播的软件，你可以非常轻松操作，代码**全部开源**，不用担心隐私问题。

<script setup>
import { ref, onMounted } from 'vue';

const releaseInfo = ref(null);

onMounted(async () => {
  try {
    const response = await fetch('/api/update/check');
    const res = await response.json();
    if (res.code === 200) {
      releaseInfo.value = res.data;
    } else {
      console.error('获取下载链接失败:', res.msg);
    }
  } catch (err) {
    console.error('请求下载接口异常:', err);
  }
});
</script>

<table>
  <thead>
    <tr>
      <th style="text-align:left">版本类型</th>
      <th style="text-align:left">适用设备及说明</th>
      <th style="text-align:center">支持架构</th>
      <th style="text-align:center">下载链接</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><strong>WebView版</strong></td>
      <td style="text-align:left">适合 Android 版本较高的手机或设备。体积较小。</td>
      <td style="text-align:center">64位</td>
      <td style="text-align:center">
        <a v-if="releaseInfo" :href="releaseInfo.url" target="_blank">立即下载</a>
        <span v-else>请求中...</span>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><strong>X5内核版</strong></td>
      <td style="text-align:left">专为电视或者部分老旧安卓设备优化，内置腾讯X5内核。</td>
      <td style="text-align:center">64位</td>
      <td style="text-align:center">
        <a v-if="releaseInfo" :href="releaseInfo.urlX5Arm64v8a" target="_blank">立即下载</a>
        <span v-else>请求中...</span>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><strong>X5内核版</strong></td>
      <td style="text-align:left">专为电视或者部分老旧安卓设备优化，内置腾讯X5内核。</td>
      <td style="text-align:center">32位</td>
      <td style="text-align:center">
        <a v-if="releaseInfo" :href="releaseInfo.urlX5Armeabi" target="_blank">立即下载</a>
        <span v-else>请求中...</span>
      </td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="4" style="text-align:center">
        最新版本：{{ releaseInfo?.versionName }}({{ releaseInfo?.versionCode }})，发布时间：{{ releaseInfo?.updateTime }}
      </td>
    </tr>
  </tfoot>
</table>

点此查看：[版本更新记录](/changelog/)

::: warning

国内手机安装本App会提示病毒，**这是因为App签名已被加入黑名单**。软件**开放源代码**，并且开源在开源平台`Gitee、Github`，你可以查看并克隆，
你也能自行进行编译，不用担心病毒和隐私问题，如果你想自己编译，请跳转 [Gitee仓库](https://gitee.com/jdy2002/DongYuTvWeb)

:::

开源仓库地址：

- [Gitee](https://gitee.com/jdy2002/DongYuTvWeb)
- [Github](https://github.com/yu2002s/DongYuTVWeb)

---
