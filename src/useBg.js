import image0 from "@/assets/bg/0.jpg"
import image1 from "@/assets/bg/1.jpg"
import image2 from "@/assets/bg/2.jpg"
import image3 from "@/assets/bg/3.jpg"
import image4 from "@/assets/bg/4.jpg"
import image5 from "@/assets/bg/5.jpg"
import image6 from "@/assets/bg/6.jpg"
import image7 from "@/assets/bg/7.jpg"
import image8 from "@/assets/bg/8.jpg"
import image9 from "@/assets/bg/9.jpg"
import image10 from "@/assets/bg/10.jpg"
import image11 from "@/assets/bg/11.jpg"
import image12 from "@/assets/bg/12.jpg"
import image13 from "@/assets/bg/13.jpg"
import image14 from "@/assets/bg/14.jpg"
import image15 from "@/assets/bg/15.jpg"
import image16 from "@/assets/bg/16.jpg"
import image17 from "@/assets/bg/17.jpg"
import image18 from "@/assets/bg/18.jpg"
import image19 from "@/assets/bg/19.jpg"

export function useBg() {
  const images = [
    image0,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
  ];

  const defaultBgKey = "__default_bg_image__";
  const storage = window.localStorage;
  function getDefaultBg() {
    return storage.getItem(defaultBgKey);
  }

  function setBgImage(url) {
    storage.setItem(defaultBgKey, url);
    document.getElementById("app").style.backgroundImage = `url(${url})`;
  }

  function refreshBgImage() {
    const index = Math.floor(Math.random() * images.length);
    setBgImage(images[index]);
  }

  function initBgImage() {
    const defaultBgImage = getDefaultBg();
    if (defaultBgImage) {
      setBgImage(defaultBgImage);
    } else {
      refreshBgImage();
    }
  }

  // for initialization
  initBgImage();

  return {
    refreshBgImage,
  };
}
