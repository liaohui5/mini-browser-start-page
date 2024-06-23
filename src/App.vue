<template lang="pug">
img.refresh-bg.w-10.fixed.right-12.top-12(@click="refreshBackground" src="https://infinityicon.infinitynewtab.com/assets/windmill.svg")
.container.flex.items-center.h-12.mt-32.bg-white.rounded.relative.opacity-85(class="w-3/4 lg:w-1/3")
  .enginer-icon.w-12.h-12(@click="toggleEnginerVisible")
    img.p-3.box-border(:src="enginer.icon_url"  class="hover:cursor-pointer")
  input.h-full.grow(type="text" autocomplete="off" autofocus="autofocus" class="focus:outline-none" v-model="keyword" @keydown.enter="search")
  .confirm-icon.w-12.h-12
    img.p-3.box-border(src="https://www.jianfast.com/static/home/images/searchbtn.svg" class="hover:cursor-pointer" @click="search")
  .search-menu.w-full.absolute.top-14.rounded.bg-white.p-4.flex.flex-wrap(v-show="enginerVisible")
    .h-12.inline-flex.items-center.justify-center.box-border(v-for="item of searchEnginers" @click="changeSearchEnginer(item)" class="w-1/2 lg:w-1/3 2xl:px-6 hover:cursor-pointer")
      img.w-6.mr-5(:src="item.icon_url")
      span.text-gray-500.flex-1 {{ item.title }}
</template>

<script setup>
import { searchEnginers, useSearchEnginer } from "./useSearchEnginer.js";
import { useBg } from "./useBg.js";

const {
  enginer,
  enginerVisible,
  keyword,
  search,
  toggleEnginerVisible,
  changeSearchEnginer,
} = useSearchEnginer();
const { refreshBackground } = useBg();
</script>