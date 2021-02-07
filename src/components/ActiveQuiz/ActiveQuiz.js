import React, {Component} from "react";
import styles from './ActiveQuiz.module.scss'

const ActiveQuiz = props => {
    return (
        <div className={styles.ActiveQuiz}>
            <p className={styles.Question}>
            <span>
                <strong>1.</strong>&nbsp;
                How are u?
            </span>
                <small>1 of 2</small>
            </p>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </div>
    )


}

export default ActiveQuiz;
