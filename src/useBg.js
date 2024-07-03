import image1 from "@/assets/bg/0.jpg";
import image2 from "@/assets/bg/1.jpg";
import image3 from "@/assets/bg/2.jpg";
import image4 from "@/assets/bg/3.jpg";
import image5 from "@/assets/bg/4.jpg";

export function useBg() {
  const images = [image1, image2, image3, image4, image5];

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
