import { ref } from "vue";
import baiduIcon from "@/assets/icons/baidu.svg";
import duckDuckGoIcon from "@/assets/icons/duckduckgo.svg";
import googleIcon from "@/assets/icons/google.svg";
import sogouIcon from "@/assets/icons/sogou.svg";
import bingIcon from "@/assets/icons/bing.svg";
import githubIcon from "@/assets/icons/github.svg";
import mdnIcon from "@/assets/icons/mdn.svg";
import npmIcon from "@/assets/icons/npm.svg";
import cargoIcon from "@/assets/icons/cargo.svg";
import dockerhubIcon from "@/assets/icons/docker.svg";
import bilibiliIcon from "@/assets/icons/bilibili.svg";
import youtubeIcon from "@/assets/icons/youtube.svg";
import googleFyIcon from "@/assets/icons/google-translate.svg";
import yahooIcon from "@/assets/icons/yahoo.svg";
import _360Icon from "@/assets/icons/360.svg";

export const searchEnginers = [
  {
    "name": "谷歌",
    "icon": googleIcon,
    "search_url": "https://google.com/search?q="
  },
  {
    "name": "必应",
    "icon": bingIcon,
    "search_url": "https://cn.bing.com/search?q="
  },
  {
    "name": "DuckDuckGo",
    "icon": duckDuckGoIcon,
    "search_url": "https://duckduckgo.com/?q="
  },
  {
    "name": "雅虎",
    "icon": yahooIcon,
    "search_url": "https://search.yahoo.com/search?p="
  },
  {
    "name": "搜狗",
    "icon": sogouIcon,
    "search_url": "https://www.sogou.com/web?query="
  },
  {
    "name": "百度",
    "icon": baiduIcon,
    "search_url": "https://kaifa.baidu.com/searchPage?wd="
  },
  {
    "name": "360搜索",
    "icon": _360Icon,
    "search_url": "https://www.so.com/s?q="
  },
  {
    "name": "GitHub",
    "icon": githubIcon,
    "search_url": "https://github.com/search?type=repositories&q="
  },
  {
    "name": "MDN",
    "icon": mdnIcon,
    "search_url": "https://developer.mozilla.org/zh-CN/search?q="
  },
  {
    "name": "npm",
    "icon": npmIcon,
    "search_url": "https://www.npmjs.com/search?q="
  },
  {
    "name": "cargo",
    "icon": cargoIcon,
    "search_url": "https://crates.io/search?q="
  },
  {
    "name": "DockerHub",
    "icon": dockerhubIcon,
    "search_url": "https://hub.docker.com/search?q="
  },
  {
    "name": "BiliBili",
    "icon": bilibiliIcon,
    "search_url": "https://search.bilibili.com/all?keyword="
  },
  {
    "name": "YouTube",
    "icon": youtubeIcon,
    "search_url": "https://www.youtube.com/results?search_query="
  },
  {
    "name": "谷歌翻译",
    "icon": googleFyIcon,
    "search_url": "https://translate.google.com/?hl=zh-cn&sl=auto&tl=zh-CN&op=translate&text="
  },
];

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
