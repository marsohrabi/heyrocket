import React, { ComponentType } from "react";
import Header from './Header';

const withPage = (num:number) =>  <T extends object>(
    WrappedComponent: ComponentType<T>
): React.FC<T> => ({ ...props }) => {
    return (
        <div>
            <Header/>
            <div>{num}</div>
            <WrappedComponent {...(props as T)} />
        </div>
    );
};

export default withPage;

