import { useStorage } from '@vueuse/core'
export const useScreenSizeStore = defineStore('ScreenSize', {
    state: () => ({
        screenFullSizeX: useStorage('screenFullSizeX', 0),
        screenFullSizeY: useStorage('screenFullSizeY', 0),
        screenSizeX: useStorage('screenSizeX', 0),
        screenSizeY: useStorage('screenSizeY', 0),
    }),

    getters: {
        getScreenFullSizeX: (state) => state.screenFullSizeX,
        getScreenFullSizeY: (state) => state.screenFullSizeY,
        getScreenSizeX: (state) => state.screenSizeX,
        getScreenSizeY: (state) => state.screenSizeY,
    },

    actions: {
        setScreenFullSizeX(value: number){
            this.screenFullSizeX = value
        },
        setScreenFullSizeY(value: number){
            this.screenFullSizeY = value
        },
        setScreenSizeX(value: number){
            this.screenSizeX = value
        },
        setScreenSizeY(value: number){
            this.screenSizeY = value
        },
    },
})