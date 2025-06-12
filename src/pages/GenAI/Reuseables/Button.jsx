const Button = ({ icon, text, href, className = '' }) => {
    return ( 
        <a href={href} className={`rounded-md py-2 px-6 h-[40px] flex justify-evenly items-center  ${className}`}>
            <p>{icon}</p>
            <p>{text}</p>
        </a>

    );
}
 
export default Button;