import { Container } from "../../../types/index.type";
import {genMinNumOfGroups} from "../index"
test('Minimum number of rooms', () => {
    const meetings : Container<[number,number]> = [[5,10],[6,8],[1,5],[2,3],[1,10]];
    let roomsNeeded = genMinNumOfGroups(meetings,(b) => b + 1, (a,b) => a - b);
    expect(roomsNeeded).toBe(3);
})