if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (callback) => {
        return Number(setTimeout(callback, 0));
    }
}
