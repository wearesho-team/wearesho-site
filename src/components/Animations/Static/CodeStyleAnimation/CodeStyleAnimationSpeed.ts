export interface CodeStyleAnimationSpeedInterface {
    max: number;
    min: number;
}

export const CodeStyleAnimationSpeed = {
    fast: {
        max: 25,
        min: 5
    },
    medium: {
        max: 40,
        min: 10
    },
    slow: {
        max: 100,
        min: 50
    }
};
