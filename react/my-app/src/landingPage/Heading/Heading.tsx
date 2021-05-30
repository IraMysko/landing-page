import React from 'react';
import cn from 'classnames';

import './heading.scss';

type PropsType = {
    text: string;
    color?: string | null;
}

const Heading: React.FC<PropsType> = ({ text, color }) => {
    return (
        <div
            className={cn("heading", {
                'heading--white': color === "white",
            })}>
            {text}
        </div>
    )
};

export default React.memo(Heading);