const { width, utilWidth, height, utilHeight } = useScreenSize();

export default function(elementSizeY){
    return computed(() => {
        let diferenca = Number(height.value) - Number(utilHeight.value);
        let result = (utilHeight.value && elementSizeY.value) ? (Number(utilHeight.value) - Number(elementSizeY.value)) / 2 + diferenca : 0;
        return Math.floor(result);
    });
}