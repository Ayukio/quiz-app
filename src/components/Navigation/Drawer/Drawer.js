import React from "react";
import styles from './Drawer.module.scss'
import Backdrop from "../../UI/Backdrop/Backdrop";

const links = [
    1, 2, 3
]

class Drawer extends React.Component {
    renderLinks() {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <a>
                        Link {link}
                    </a>

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