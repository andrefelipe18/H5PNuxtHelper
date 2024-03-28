import { useStorage } from "@vueuse/core";
export default function () {
  let width = useStorage("screenWidth", null);
  let utilWidth = useStorage("screenUtilWidth", null);
  let height = useStorage("screenHeight", null);
  let utilHeight = useStorage("screenUtilHeight", null);

  return { width, height, utilHeight, utilWidth };
}
