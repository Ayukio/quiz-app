import React, {Component} from "react";
import styles from './AnswersList.module.scss'
import AnswersItem from './AnswerItem/AnswersItem'

const AnswersList = props => {
    return (
        <ul className={styles.AnswersList}>
            {props.answers.map((answer) => {
                return(
                    <AnswersItem
                        key={answer.id}
                        answer={answer}
                        onAnswerClick={props.onAnswerClick}
                        state={props.state ? props.state[answer.id] : null}
                    />
                )
            })}
        </ul>
    )
}

export default AnswersList;
