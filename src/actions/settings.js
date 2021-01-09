export const setSettings = (store, settings) => {

    store.setState({settings: settings});
    console.log(settings)
};