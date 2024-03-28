export const useScreenSizeStore = defineStore("ScreenSize", {
  state: () => ({
    screen: {
      width: useLocalStorage("screenWidth", 0),
      height: useLocalStorage("screenHeight", 0),
      utilWidth: useLocalStorage("screenUtilWidth", 0),
      utilHeight: useLocalStorage("screenUtilHeight", 0),
    },
  }),



});
