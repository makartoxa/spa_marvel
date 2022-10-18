import img from './Database_Error_BH.gif'

const ErrorMessage = () => {
    return (
        <img style={{display: "block", wight: '220px', height: '220px', objectFit: 'contain', margin: '0 auto'}}
             src={img}
             alt='error'/>
    )
}

export default ErrorMessage;