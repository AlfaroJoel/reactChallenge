import ButtonDefault from '../UI/ButtonDefault';
import './OptionsCard.css';

const OptionsCard = props => {

    const svgDelet = <svg className='option__svg' width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5 0.874822H9.75L9.45625 0.363494C9.39402 0.254177 9.29817 0.162222 9.17947 0.0979744C9.06078 0.0337264 8.92395 -0.000265901 8.78438 -0.000178311H5.2125C5.07324 -0.000646725 4.93665 0.0332188 4.81838 0.0975383C4.7001 0.161858 4.60492 0.25403 4.54375 0.363494L4.25 0.874822H0.5C0.367392 0.874822 0.240215 0.920915 0.146447 1.00296C0.0526784 1.08501 0 1.19629 0 1.31232L0 2.18732C0 2.30335 0.0526784 2.41463 0.146447 2.49668C0.240215 2.57873 0.367392 2.62482 0.5 2.62482H13.5C13.6326 2.62482 13.7598 2.57873 13.8536 2.49668C13.9473 2.41463 14 2.30335 14 2.18732V1.31232C14 1.19629 13.9473 1.08501 13.8536 1.00296C13.7598 0.920915 13.6326 0.874822 13.5 0.874822V0.874822ZM1.6625 12.7694C1.68635 13.1026 1.85443 13.4153 2.13252 13.6439C2.41061 13.8725 2.77781 13.9998 3.15937 13.9998H10.8406C11.2222 13.9998 11.5894 13.8725 11.8675 13.6439C12.1456 13.4153 12.3137 13.1026 12.3375 12.7694L13 3.49982H1L1.6625 12.7694Z" fill="black" />
    </svg>

    const svgMore = <svg className='option__svg' width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.9032 3C12.9032 4.65833 11.6048 6 10 6C8.39516 6 7.09677 4.65833 7.09677 3C7.09677 1.34167 8.39516 0 10 0C11.6048 0 12.9032 1.34167 12.9032 3ZM17.0968 0C15.4919 0 14.1935 1.34167 14.1935 3C14.1935 4.65833 15.4919 6 17.0968 6C18.7016 6 20 4.65833 20 3C20 1.34167 18.7016 0 17.0968 0ZM2.90323 0C1.29839 0 0 1.34167 0 3C0 4.65833 1.29839 6 2.90323 6C4.50806 6 5.80645 4.65833 5.80645 3C5.80645 1.34167 4.50806 0 2.90323 0Z" fill="black" />
</svg>

    const svgAdd = <svg className='option__svg' width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 5.5H8.5V1C8.5 0.447812 8.05219 0 7.5 0H6.5C5.94781 0 5.5 0.447812 5.5 1V5.5H1C0.447812 5.5 0 5.94781 0 6.5V7.5C0 8.05219 0.447812 8.5 1 8.5H5.5V13C5.5 13.5522 5.94781 14 6.5 14H7.5C8.05219 14 8.5 13.5522 8.5 13V8.5H13C13.5522 8.5 14 8.05219 14 7.5V6.5C14 5.94781 13.5522 5.5 13 5.5Z" fill="black"/>
    </svg>
    

    return (
        <div className='options'>
            <ButtonDefault
                variant={props.isCardDelete ? 'outline-danger' : 'outline-primary'}
                content={props.isCardDelete ? svgDelet : svgAdd}
                onClick={props.onClick}
            />
            <ButtonDefault
                variant='outline-warning'
                content={svgMore}
            />
        </div>
    )
}

export default OptionsCard;