import { createContext, useEffect, useState } from "react";

export const WishlistContext = createContext()

const WishlistProvider = ({children}) => {
    const [wishlistArr, setWishlistArr] = useState(
        localStorage.getItem("WishlistProducts") 
            ? JSON.parse(localStorage.getItem("WishlistProducts")) 
                : null 
    )

    useEffect(() => {
        localStorage.setItem("WishlistProducts", JSON.stringify(wishlistArr))
    }, [wishlistArr])

    const data = { wishlistArr, setWishlistArr }
    
    return (
        <WishlistContext.Provider value={data}>{children}</WishlistContext.Provider>
    )
}

export default WishlistProvider