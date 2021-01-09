export const toggleModalShops = store => {
    const newState = !store.state.modalShops.isActive;
    store.setState({...store.state, modalShops:{isActive: newState}});
};

export const toggleModalAddPreset = store => {
    const newState = !store.state.modalAddPreset.isActive;
    store.setState({...store.state, modalAddPreset:{isActive: newState}});
}

export const toggleModalAddProfile = store => {
    const newState = !store.state.modalAddProfile.isActive;
    store.setState({...store.state, modalAddProfile:{isActive: newState}});
};