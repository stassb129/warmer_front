import ModalShops from "./modalShops";
import useGlobal from "../Store/Store";
import ModalAccount from "./modalAccount";
import ModalPortal from "../components/main/ModalPortal/ModalPortal";
import ModalSession from "./modalSession";
import ModalPreset from "./modalPreset";
import ModalProfile from "./modalProfile";


function ModalsIndex() {
    const [globalState, globalActions] = useGlobal()

    // if (globalState.modalShops.isActive) {
    //     return <ModalShops/>
    // } else if (globalState.modalAccount.isActive) {
    //     return <ModalAccount/>
    // }

    return (

        <ModalPortal>
            {globalState.modalShops.isActive && <ModalShops/>}
            {globalState.modalAccount.isActive && <ModalAccount/>}
            {globalState.modalSession.isActive && <ModalSession/>}
            {globalState.modalPreset.isActive && <ModalPreset/>}
            {globalState.modalProfile.isActive && <ModalProfile/>}
        </ModalPortal>
    )
}

export default ModalsIndex