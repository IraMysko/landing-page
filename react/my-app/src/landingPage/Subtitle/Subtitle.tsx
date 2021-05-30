import React from 'react';
import cn from 'classnames';

import './subtitle.scss';

type PropsType = {
    text: string;
    align?: string;
    color?: string | null;
}

const Subtitle: React.FC<PropsType> = ({ text, align, color }) => {
    return (
        <div
            className={cn("subtitle", {
                'subtitle--left': align === "left",
                'subtitle--white': color === "white",
            })}>
            {text}
        </div>
    )
};

export default React.memo(Subtitle);