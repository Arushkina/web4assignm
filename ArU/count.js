new Scene({
    ".overflow .text span": i => ({
        0: {
            transform: {
                translateY: "100%",
            }
        },
        1: {
            transform: {
                translateY: "0%",
            }
        },
        options: {
            delay: i * 0.2,
        }
    }),
}, {
    easing: "ease-in-out",
    selector: true,
    direction: "alternate",
    iterationCount: "infinite",
}).play();


buttons.forEach(button => {
    button.addEventListener("click", () => {
        audio.play();
    });
});