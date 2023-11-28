import React from 'react';

function Logo(props: {height: number, width: number}) {

    const {height, width} = props;
    const dimensions = `h-[${height}px] w-[${width}px]`;

    return (
        <div className=
                 {`${dimensions} bg-gradient-to-br from-fuchsia-500 to-indigo-500 rounded-full flex items-center justify-center pr-[3px]`}>
            <img src="/logo_arrow.svg" alt="Deluxe Delivery Logo" className="" />
        </div>
    );
}
export default Logo;