window.requestAnimationFrame = (callback) => {
    return Number(setTimeout(callback, 0));
}
