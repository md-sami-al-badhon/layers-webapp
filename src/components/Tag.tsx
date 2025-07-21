import React, { HTMLAttributes } from "react";

const Tag = ({
    className,
    children,
    ...otherProps
}: HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            className={`inline-flex border border-lime-400 text-lime-400 gap-2 px-3 py-1 rounded-full uppercase items-center ${className} `}
            {...otherProps}
        >
            <span>&#10038;</span>
            <span className="text-sm">{children} </span>
        </div>
    );
};

export default Tag;
