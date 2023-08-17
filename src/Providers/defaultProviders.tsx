'use client'

import { CartProvider } from "@/contexts/cartContext";
import { FilterCotextProvider } from "@/contexts/filterContext";
import StyledComponentsRegistry from "@/styled-components/registry";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface DefaultProvaiderProps{
    children: ReactNode
}

const theme = {
    desktopBreakpoint: '968px',
    tabletBreakpoint: '768px',
    mobileBreakpoint: '470px'
}

export function DefaltProvaiders({ children }:DefaultProvaiderProps){
    const client = new QueryClient();

    return (
        <QueryClientProvider client={client}>
            <FilterCotextProvider>
                <CartProvider>
                    <ThemeProvider theme={theme}>
                        <StyledComponentsRegistry>
                            {children}
                        </StyledComponentsRegistry>
                    </ThemeProvider>
                </CartProvider>
            </FilterCotextProvider>
        </QueryClientProvider>
    )
}