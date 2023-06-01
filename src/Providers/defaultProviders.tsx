'use client'

import { FilterCotextProvider } from "@/contexts/filterContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface DefaultProvaiderProps{
    children: ReactNode
}

const theme = {
    desktopBreakpoint: '968px',
    tabletBreakpoint: '768px'
}

export function DefaltProvaiders({ children }:DefaultProvaiderProps){
    const client = new QueryClient();

    return (
        <QueryClientProvider client={client}>
            <FilterCotextProvider>
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </FilterCotextProvider>
        </QueryClientProvider>
    )
}