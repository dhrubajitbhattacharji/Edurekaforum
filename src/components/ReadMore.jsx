import { useState } from "react";

const ReadMore = ({ children }) => {
    let text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => { setIsReadMore(!isReadMore) };

    return (
        <div>
            {isReadMore ? text.slice(0, 200) : text}
            {text.length > 200 &&
                <span className='text-sm text-blue-600 font-bold' onClick={toggleReadMore}>
                    {isReadMore ? ' ...read more' : ' ...show less'}
                </span>
            }
        </div>
    );
};
export default ReadMore;