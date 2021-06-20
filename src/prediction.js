// Define our labelmap
/*
const labelMap = {
    0: { value: "A", color: "red" },
    1: { value: "B", color: "red" },
    2: { value: "C", color: "red" },
    3: { value: "D", color: "red" },
    4: { value: "E", color: "red" },
    5: { value: "F", color: "red" },
    6: { value: "G", color: "red" },
    7: { value: "H", color: "red" },
    8: { value: "I", color: "red" },
    9: { value: "J", color: "red" },
    10: { value: "K", color: "red" },
    11: { value: "L", color: "red" },
    12: { value: "M", color: "red" },
    13: { value: "N", color: "red" },
    14: { value: "O", color: "red" },
    15: { value: "P", color: "red" },
    16: { value: "Q", color: "red" },
    17: { value: "R", color: "red" },
    18: { value: "S", color: "red" },
    19: { value: "T", color: "red" },
    20: { value: "U", color: "red" },
    21: { value: "V", color: "red" },
    22: { value: "W", color: "red" },
    23: { value: "X", color: "red" },
    24: { value: "Y", color: "red" },
    25: { value: "Z", color: "red" }

}
*/

const labelMap = {
    1:{name:'Hello', color:'red'},
    2:{name:'Thank You', color:'yellow'},
    3:{name:'I Love You', color:'lime'},
    4:{name:'Yes', color:'blue'},
    5:{name:'No', color:'purple'},
}



// Define a drawing function
export const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx) => {
    for (let i = 0; i <= boxes.length; i++) {
        if (boxes[i] && classes[i] && scores[i] > threshold) {
            // Extract variables
            const [y, x, height, width] = boxes[i]
            const text = classes[i]

            // Set styling
            ctx.strokeStyle = labelMap[text]['color']
            ctx.lineWidth = 10
            ctx.fillStyle = 'white'
            ctx.font = '30px Arial'

            // DRAW!!
            ctx.beginPath()
            ctx.fillText(labelMap[text]['name'] + ' - ' + Math.round(scores[i] * 100) / 100, x * imgWidth, y * imgHeight - 10)
            ctx.rect(x * imgWidth, y * imgHeight, width * imgWidth / 2, height * imgHeight / 1.5);
            ctx.stroke()
        }
    }
}