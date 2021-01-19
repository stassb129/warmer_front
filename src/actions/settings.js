export const setSettings = (store, settings) => {

    store.setState({settings: settings});
    // console.log(settings)
};

export const setSetting = (store, setting) => {

    store.setState({settings: store.settings.push(setting)});
    // console.log(settings)
};