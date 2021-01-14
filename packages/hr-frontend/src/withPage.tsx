import React, { ComponentType } from "react";
import Header from './Header';

const withPage = () =>  <T extends object>(
    WrappedComponent: ComponentType<T>
): React.FC<T> => ({ ...props }) => {
    return (
        <div>
            <Header/>
            <WrappedComponent {...(props as T)} />
        </div>
    );
};

export default withPage;

