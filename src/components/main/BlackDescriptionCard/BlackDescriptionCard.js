import css from './blackDescriptionCard.module.scss'

function BlackDescriptionCard(props) {
    return (
       <div className={css.card}>
           <i className={`${props.icon}`} />
            <h5>
                {props.h}
            </h5>
           <p>
               {props.p}
           </p>
       </div>
    );
}

export default BlackDescriptionCard;
