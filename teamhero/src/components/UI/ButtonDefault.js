import Button from 'react-bootstrap/Button'

const ButtonDefault = props => {
    return (
        <Button variant={props.variant} onClick={props.onClick}>
            {props.content}
            {console.log('entre')}
        </Button>
    )
}

export default ButtonDefault;