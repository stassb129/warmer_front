import css from './userPanelShopElement.module.scss'

function UserPanelShopElement(props) {
    return (
        <div style={{backgroundImage: `url(${props.logo})`}} className={css.shop} onClick={props.clickHandler}>
            <h2>{props.seller}</h2>
            <i className="icon-plus-squared-alt" />
        </div>
    )
}

export default UserPanelShopElement
