/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export default function () {
    return [
        {
            id: 1,
            name: "bakery",
            thumbnail: "http://i.imgur.com/7yUvePI.jpg"
        },
        {
            id: 2,
            name: "barbershop",
            thumbnail: "http://i.imgur.com/52xRlm8.png"
        },
        {
            id: 3,
            name: "Book Shop",
            thumbnail: "http://i.imgur.com/4EMtxHB.png"
        }
    ]
}
