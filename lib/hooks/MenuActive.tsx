import * as React from 'react'

interface MenuActive
{
    activeElement:number,
    setActiveElement:(newActive:number) => void;
}

const MenuActiveContext = React.createContext<MenuActive>({} as MenuActive);


const MenuActiveProvider : React.FC<any> = ({children}) => 
{
    const [activeElement,setActiveElement] = React.useState(0);
    return(
        <MenuActiveContext.Provider value={{activeElement,setActiveElement}}>
        {children}
        </MenuActiveContext.Provider>
    );
}

export const useMenuActive = () => React.useContext(MenuActiveContext);

export default MenuActiveProvider;