module.exports = {
    seed: [...Array(10000).fill({ id: Math.random() })],
    tests: [
        {
            name: 'for of',
            fn: (data) => {
                const copy = []
                for (const value of data) {
                    copy.push(value.id)
                }
                return copy
            }
        },
        {
            name: 'map',
            fn: (data) => {
                return data.map(e => e.id)
            }
        }
    ]
}