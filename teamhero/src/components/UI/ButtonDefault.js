import Button from 'react-bootstrap/Button'

const ButtonDefault = props => {
    return (
        <Button className='mx-4' variant={props.variant} onClick={props.onClick}>
            {props.content}
        </Button>
    )
}

export default ButtonDefault;