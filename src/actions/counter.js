export const addToCounter = (store) => {
    const newCounterValue = store.state.counter.myCounter.count1
    store.setState({counter: newCounterValue})
}

export const removeToCounter = (store) => {
    const newCounterValue = --store.state.counter
    store.setState({counter: newCounterValue})
}