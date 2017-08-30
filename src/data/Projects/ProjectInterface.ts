export interface ProjectInterface {
    title: Array<{
        name: string,
        url: string
    }>,
    description: string,
    date: {
        day: string,
        month: string,
        year: string
    }
}
