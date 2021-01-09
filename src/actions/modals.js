export const toggleModalShops = (store, name) => {
    const newState = !store.state.modalShops.isActive;
    store.setState({modalShops:{
        isActive: newState,
            name: name
    }});
};

export const toggleModalAccount = (store, {name ,login}) => {

    const newState = !store.state.modalAccount.isActive;
    store.setState({modalAccount:{
            isActive: newState,
            name: name,
            login: login
        }});

};

export const toggleModalSession = (store, {name ,login}) => {
    const newState = !store.state.modalSession.isActive;
    store.setState({modalSession:{
            isActive: newState,
            name: name,
            login: login
        }});
    console.log('Session')
};

export const toggleModalPreset = store => {
    const newState = !store.state.modalPreset.isActive;
    store.setState({...store.state, modalPreset:{isActive: newState}});
    console.log('preset')
}

export const toggleModalProfile = store => {
    const newState = !store.state.modalProfile.isActive;
    store.setState({...store.state, modalProfile:{isActive: newState}});
};