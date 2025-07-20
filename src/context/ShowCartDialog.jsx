import { Children, createContext, useState } from "react";


const ShowCartDialogContext = createContext();

const ShowCartDialogContextProvider = ({children}) =>{
    const [isDialogCartShow, setIsDialogCartShow] = useState(false);
    return(
        <ShowCartDialogContext.Provider value={{isDialogCartShow, setIsDialogCartShow}}>
            {children}
        </ShowCartDialogContext.Provider>
    )
}

export const ShowCartDialog = ShowCartDialogContext;
export default ShowCartDialogContextProvider;