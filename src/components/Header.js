import PropTypes from 'prop-types'
import Button from "./Button";

const Header = ({title}) => {
    const onClickFunction = (e) => {
        console.log(e);
    }
    return(
        <header className="header">
            <h1>{title}</h1>
            <Button color="green" text="Hello" onClick={onClickFunction} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task tracker'
}

Header.propTypes = {
    title: PropTypes.string,
}

//CSS in JS
const headingStyle = {
    color: '#cdcdf7',
    backgroundColor: '#333'
}


export default Header