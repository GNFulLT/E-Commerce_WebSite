import * as React from 'react'

interface API_Interface{
    url:string
}

const APIContext = React.createContext<API_Interface >({url:"http://localhost:8000/graphql"});

export const useAPI = () => React.useContext(APIContext);
