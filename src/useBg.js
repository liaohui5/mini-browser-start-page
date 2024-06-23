export function useBg() {
  const imageModules = import.meta.glob("@/assets/bg/*.jpg", { eager: true });
  function refreshBackground() {
    const images = Object.values(imageModules).map(it => it.default);
    console.log(images);
    const index = Math.floor(Math.random() * images.length)
    const image = images[index];
    document.getElementById("app").style.backgroundImage = `url(${image})`;
  }
  return {
    refreshBackground,
  }
}
