const { width, utilWidth, height, utilHeight } = useScreenSize();

export default function(elementSizeX){
    return computed(() => {
        let diferenca = Number(width.value) - Number(utilWidth.value);
        let result = (utilWidth.value && elementSizeX.value) ? (Number(utilWidth.value) - Number(elementSizeX.value)) / 2 + diferenca : 0;
        return Math.floor(result);
    });
}