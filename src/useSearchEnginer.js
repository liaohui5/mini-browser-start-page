import { ref } from "vue";

export const searchEnginers = [
  {
    "title": "百度",
    "icon_url": "https://www.jianfast.com/static/home/images/searchChoice/baidu.svg",
    "search_url": "https://www.baidu.com/s?wd="
  },
  {
    "title": "Google",
    "icon_url": "https://www.jianfast.com/static/home/images/searchChoice/google.svg",
    "search_url": "https://www.google.com/search?q="
  },
  {
    "title": "必应",
    "icon_url": "https://www.jianfast.com/static/home/images/searchChoice/bing.svg",
    "search_url": "https://cn.bing.com/search?q="
  },
  {
    "title": "搜狗",
    "icon_url": "https://www.jianfast.com/static/home/images/searchChoice/sogou.svg",
    "search_url": "https://www.sogou.com/web?query="
  },
  {
    "title": "京东商城",
    "icon_url": "https://www.jianfast.com/static/home/images/searchChoice/jd.svg",
    "search_url": "https://union-click.jd.com/jdc?type=union&p=JF8BAGoKGloQXAIBUF5fOE8nAl8JKx9KBVhdDxxtUQ5SQmQWBR1TGxlZAUEPVhcnAToLGQwSXQEHUl1cDU1DVD9dHAgTWFVQBApVXEIUV2c4RB9IADYCVV9cDE0VBW8LK2sVXDYyZG5tOEonM184&t=W1dCFBBFC0RUQUpADgpQTFs=&e=&tu=http%3A%2F%2Fsearch.jd.com%2FSearch%3Fkeyword%3D"
  },
  {
    "title": "搜优惠券",
    "icon_url": "https://www.jianfast.com/static/home/images/searchChoice/youhui.svg",
    "search_url": "http://www.somelemon.com/index.php?r=l&kw="
  },
  {
    "title": "网易云音乐",
    "icon_url": "https://www.jianfast.com/static/home/images/searchChoice/wangyimusic.svg",
    "search_url": "https://music.163.com/#/search/m/?s="
  },
  {
    "title": "腾讯视频",
    "icon_url": "https://www.jianfast.com/static/home/images/searchChoice/qqvideo.svg",
    "search_url": "https://v.qq.com/x/search/?q="
  },
  {
    "title": "知乎",
    "icon_url": "https://www.jianfast.com/static/home/images/searchChoice/zhihu.svg",
    "search_url": "https://www.zhihu.com/search?type=content&q="
  },
  {
    "title": "Bilibili",
    "icon_url": "https://www.jianfast.com/static/home/images/searchChoice/bilibili.svg",
    "search_url": "https://search.bilibili.com/all?keyword="
  },
  {
    "title": "微博",
    "icon_url": "https://www.jianfast.com/static/home/images/searchChoice/weibo.svg",
    "search_url": "https://s.weibo.com/weibo?q="
  },
  {
    "title": "中英互译",
    "icon_url": "https://www.jianfast.com/static/home/images/searchChoice/baidufanyi.svg",
    "search_url": "https://fanyi.baidu.com/#auto/en/"
  }
]

export const storage = window.localStorage;
export const storageKey = "__search_eniger_storage_key__";

export const openInSelf = (url) => window.open(url, "_self");
export const openInNewTab = (url) => window.open(url, "_blank");

export function useSearchEnginer() {
  const enginer = ref(getSearchEnginer());
  function getSearchEnginer() {
    const item = storage.getItem(storageKey);
    return item ? JSON.parse(item) : searchEnginers[0];
  }

  function setSearchEnginer(item) {
    enginer.value = item;
    storage.setItem(storageKey, JSON.stringify(item));
  }

  const enginerVisible = ref(false);
  function toggleEnginerVisible(visible) {
    if (typeof visible === "boolean") {
      enginerVisible.value = visible;
    } else {
      enginerVisible.value = !enginerVisible.value;
    }
  }

  function changeSearchEnginer(item) {
    setSearchEnginer(item);
    toggleEnginerVisible();
    console.log(enginer.value);
  }

  const keyword = ref("");
  const search = () => openInSelf(enginer.value.search_url += keyword.value);

  return {
    keyword,
    enginer,
    enginerVisible,
    toggleEnginerVisible,
    changeSearchEnginer,
    search
  }
}
