import React, {Component} from "react";
import styles from './AnswersItem.module.scss'

const AnswersItem = props => {
    const cls = [styles.AnswersItem]

    if (props.state) {
        cls.push(styles[props.state])
    }

    return (
        <li className={cls.join(' ')}
            onClick={() => props.onAnswerClick(props.answer.id)}
        >
            {props.answer.text}
        </li>
    )
}

export default AnswersItem;
