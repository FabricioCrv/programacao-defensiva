const date_1 = "2024-01-01";
const date_2 = "2024-12-31";

function calculateDifference(date_1, date_2) {
    return new Date(date_2) - new Date(date_1);
}

const result = calculateDifference(date_1, date_2);
console.log(result);
