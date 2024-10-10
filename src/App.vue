<template>
  <!-- windmill icon -->
  <img class="w-10 fixed right-12 top-12 transition-transform duration-1000 hover:cursor-pointer" :src="windmillIcon"
    ref="refreshBgRef" @click="handleSwitchBg" />

  <!-- main content -->
  <div class="container flex items-center h-12 mt-32 bg-white rounded relative opacity-85 w-3/4 lg:w-1/3">

    <!-- search enginer icon -->
    <div class="w-12 h-12 flex items-center justify-center" @click="toggleEnginerVisible">
      <img class="h-1/2 box-border hover:cursor-pointer" :src="enginer.icon" />
    </div>

    <!-- search input -->
    <input class="h-full grow focus:outline-none" type="text" autocomplete="off" autofocus="autofocus" v-model="keyword"
      @keydown.enter="search" />

    <!-- search icon -->
    <div class="w-12 h-12 flex items-center justify-center">
      <img class="h-1/2 box-border hover:cursor-pointer" :src="searchIcon" @click="search" />
    </div>

    <!-- search enginers menu -->
    <div class="w-full absolute top-14 rounded bg-white p-4 flex flex-wrap" v-show="enginerVisible">
      <div class="h-12 inline-flex items-center justify-center box-border w-1/2 lg:w-1/3 2xl:px-6 hover:cursor-pointer"
        v-for="item of searchEnginers" @click="changeSearchEnginer(item)">
        <img class="w-6 mr-5" :src="item.icon" /><span class="text-gray-500 flex-1">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { searchEnginers, useSearchEnginer } from "./useSearchEnginer.js";
import { useBg } from "./useBg.js";
import searchIcon from "@/assets/icons/search.svg";
import windmillIcon from "@/assets/icons/windmill.svg";

const {
  enginer,
  enginerVisible,
  keyword,
  search,
  toggleEnginerVisible,
  changeSearchEnginer,
} = useSearchEnginer();
const { refreshBgImage } = useBg();

const refreshBgRef = ref(null);
let index = 1;
function handleSwitchBg() {
  if (refreshBgRef.value) {
    const deg = index * 360;
    refreshBgRef.value.style.transform = `rotate(${deg}deg)`;
    index += 1;
  }
  refreshBgImage();
}
</script>
