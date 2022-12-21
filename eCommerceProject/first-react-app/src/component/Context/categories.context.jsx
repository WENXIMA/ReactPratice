import {createContext,useState,useEffect} from 'react';
import SHOP_DATA from '../../shop-data';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils.js';
export const CategoriesContext = createContext({
    categoriesMap:{},
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setcategoriesMap] = useState({});
    const value = {categoriesMap};
    // useEffect(() => { //write the data into firebase firestore
    //     addCollectionAndDocuments('categories',SHOP_DATA)
    // },[]);
    useEffect(()=>{ //async function
        const getCategoriesMap = async () => { //call the same callback, after they initialized
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
            setcategoriesMap(categoryMap);
        }
        getCategoriesMap();
    },[])
    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>

}