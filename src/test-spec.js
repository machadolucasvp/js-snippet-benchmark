module.exports = {
    seed: [...Array(100000).fill({ id: Math.random() })],
    tests: [
        {
            name: 'classical for',
            fn: (data) => {
                const copy = []
                for (let i = 0; i < data.length - 1; i++) {
                    copy.push(data[i].id)
                }
                return copy
            }
        },
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
        },
        {
            name: 'reduce',
            fn: (data) => {
                return data.reduce((acc, e) => {
                    acc.push(e.id)
                    return acc
                }, [])
            }
        },
    ]
}