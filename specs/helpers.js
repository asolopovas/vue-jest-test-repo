global.jestActionsMethods = actions => {
    const out = {}

    for (const [key, value] of Object.entries(actions)) {
        out[key] = jest.fn((...args) => value(...args))
    }

    return out
}
