// Helper function for shuffling an array of strings
export const shuffle = (arr: string[]) => {
    let currentIndex = arr.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [arr[currentIndex], arr[randomIndex]] = [
            arr[randomIndex], arr[currentIndex]];
    }
    return arr
}