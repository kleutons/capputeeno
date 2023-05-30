
import { FilterContext } from '@/contexts/filterContext';
import { useContext } from 'react';

export function useFilter(){
    return useContext(FilterContext);
}