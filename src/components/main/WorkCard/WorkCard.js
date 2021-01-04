import css from './workCard.module.scss'

function WorkCard(props) {
    return (
        <div className={css.workCard}>
            <div className={css.image}>
                <div className={css.circle}>
                    <i className={`${props.icon}`}/>
                </div>
            </div>

            <h2>{props.h}</h2>

            <p>{props.p}</p>

        </div>
    )
}

export default WorkCard