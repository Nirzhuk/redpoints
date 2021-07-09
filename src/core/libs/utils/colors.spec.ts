import { lightenDarkenColor, getContrastText} from './colors'

describe("Utils Tests - Colors", () => {
    test("lightenDarkenColor", () => {
        const lightenColor = lightenDarkenColor('#ff500', 20);
        expect(lightenColor).toBe('#23ff14')
    })

    test("getContrastText - black text color", () => {
        const contrastText = getContrastText('#23ff14');
        expect(contrastText).toBe('black')
    })
    test("getContrastText - white text color", () => {
        const contrastText = getContrastText('#000');
        expect(contrastText).toBe('white')
    })
})
