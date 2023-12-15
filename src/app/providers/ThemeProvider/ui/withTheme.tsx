import React from 'react';
import ThemeProvider from './ThemeProvider';

export const withTheme = (Component: React.ComponentType) => {
    return () => {

        return (
            <ThemeProvider>
                <Component />
            </ThemeProvider>
        );
    };
};
