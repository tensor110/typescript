// Enums are a feature added to JavaScript by TypeScript which allows for describing a value which could be one of a set of possible named constants
enum SeatChoice {
    AISLE = "aisle",
    MIDDLE = 3,
    WINDOW,       // It will automatically takes value 4
    FOURTH        // It will automatically takes value 5
}

const hcSeat = SeatChoice.AISLE

export {}