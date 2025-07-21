import React, { HTMLAttributes } from "react";

const Avatar = ({
    className,
    children,
    ...otherProps
}: HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            className={`${className} size-20 border-4  rounded-full overflow-hidden p-1 bg-neutral-900`}
            {...otherProps}
        >
            {children}{" "}
        </div>
    );
};

export default Avatar;
