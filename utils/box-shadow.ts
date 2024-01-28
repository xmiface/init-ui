export function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export const getNewBoxShadow = () => {
    const colors = ["#8cff85", "#ffe488", "#ff8080", "#80c7ff", "#e488ff", "#ff616b", "#8e5cff", "#000000"];
    const [color1, color2] = shuffleArray(colors).slice(0, 2);
    return `0 20px 25px -5px ${color1}, 0 8px 10px -6px ${color2}`;
};