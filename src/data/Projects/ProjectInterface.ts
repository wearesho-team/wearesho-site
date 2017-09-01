export interface ProjectInterface {
    title: Array<{
        name: string,
        url: string
    }>,
    description: string [],
    date: {
        year: number,
        month: number,
        day: number
    }
}
