import React from "react";
import styles from './Drawer.module.scss'
import Backdrop from "../../UI/Backdrop/Backdrop";
import {NavLink} from "react-router-dom";

const links = [
    {to: '/', label: 'All tests', exact: true},
    {to: '/auth', label: 'Authorize', exact: false},
    {to: '/quiz-creator', label: 'Create test', exact: false},
]

class Drawer extends React.Component {

    clickHandler = () => {
        this.props.onClose()
    }

    renderLinks() {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        activeClassName={styles.active}
                        onClick={this.clickHandler}
                    >
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }

    render() {
        const cls = [styles.Drawer]
        if (!this.props.isOpen) {
            cls.push(styles.close)
        }
        return (
            <div>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
                {this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null}
            </div>

        )
    }
}

export default Drawer;
