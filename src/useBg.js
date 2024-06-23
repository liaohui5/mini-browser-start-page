export function useBg() {
  const imageModules = import.meta.glob("@/assets/bg/*.jpg", { eager: true });
  console.log(imageModules);
  function refreshBackground() {
    const images = Object.keys(imageModules);
    const index = Math.floor(Math.random() * images.length)
    const image = images[index];
    document.getElementById("app").style.backgroundImage = `url(${image})`;
  }
  return {
    refreshBackground,
  }
}
