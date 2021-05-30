import React from 'react';
import cn from 'classnames';

import './title.scss';

type PropsType = {
    text: string;
    align?: string;
    color?: string;
}

const Title: React.FC<PropsType> = ({ text, align, color }) => {
    return (
        <div
            className={cn("title", {
                'title--left': align === "left",
                'title--white': color === "white"
            })
            }>
            {text}
        </div>
    )
};

export default React.memo(Title);