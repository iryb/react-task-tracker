import PropTypes from 'prop-types'

const Button = ({color, text, onClickFunction}) => {
    return(
        <button
            onClick={onClickFunction}
            style={{backgroundColor: color}} className="btn">{text}</button>
    )
}
export default Button

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClickFunction: PropTypes.func
}