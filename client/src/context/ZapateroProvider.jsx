// /* eslint-disable react/prop-types */
// import { createContext, useState } from "react";

// export const ZapateroContext = createContext();





// const ZapateroProvider = ({text}) => {
// 	const [usuario, setUsuario] = useState(null)
// 	return (
// 		<ZapateroContext.Provider value={{usuario, setUsuario}}>
// 	{text}
// 		</ZapateroContext.Provider>
// 	)
// };

// export default ZapateroProvider;

import { createContext } from "react"

const Context = createContext(null)

export default Context