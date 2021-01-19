export const setInitProfiles = (store, profiles) => {

    store.setState({profiles: profiles});
    console.log(profiles)
};

export const setProfile = (store, profile) => {

    console.log("Я ставлю", profile)
    store.setState(store.profiles.push(profile));
    // console.log(settings)
};