import { ref } from "vue";
export default function () {
  return {
    openModal: () => {
      document.getElementById("moreDetail").showModal();
    },
  };
}

