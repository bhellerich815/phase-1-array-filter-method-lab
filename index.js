// Code your solution here

function findMatching(drivers, string) {
    let result = drivers.filter(driver => {
       return driver.toLowerCase() === string.toLowerCase()

    })
    return result
}

function fuzzyMatch(drivers, string) {
    const result = drivers.filter(driver => driver === string.split(`"Sammy", "Sally", "Sarah"`))
    return result
}

function fuzzyMatch(drivers, string) {
    let result = drivers.filter(driver => {
    // debugger
    return driver.indexOf(string) === 0
    })
    return result
}
