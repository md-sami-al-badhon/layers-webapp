import { HTMLAttributes } from "react";

const Key = ({
    className,
    children,
    ...otherProps
}: HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            className={`size-14 bg-neutral-300 rounded-2xl text-xl text-neutral-950 font-medium inline-flex items-center justify-center ${className}`}
            {...otherProps}
        >
            {children}{" "}
        </div>
    );
};

export default Key;
