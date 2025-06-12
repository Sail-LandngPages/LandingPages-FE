

const FaqsCard = ({text, Icon})=>{
    return (
        <div className='flex items-center justify-between w-[346px] lg:w-[736px] p-5 rounded-[12px] bg-[#fffff] shadow-lg mt-5 mb-5 font-bold text-[#133c8a]'>
            {
                text && <p>{text}</p>
            }

            {Icon && <div className='text-[#fbb404]'>{<Icon/>}</div>}
        </div>
    )
}

export default FaqsCard