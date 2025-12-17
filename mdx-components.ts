import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs';
 
// Get the default MDX components
const themeComponents = getThemeComponents();
 
export function useMDXComponents() {
  return themeComponents;
}
