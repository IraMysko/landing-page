import React from 'react';
import cn from 'classnames';

import './button.scss';

type PropsType = {
    title: string;
    border?: string;
}

const Button: React.FC<PropsType> = ({
    title, border
}) => {
    return (
        <div
            className={cn("general-button", {
                'btn-services': title === "Все услуги",
            },
                { 'bnt-new-style': border === "border" }
            )}
        >
            {title}
        </div>
    )
};

export default React.memo(Button);