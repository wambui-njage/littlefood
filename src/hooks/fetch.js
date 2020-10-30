import { useState, useEffect , useRef} from "react";

export default function useFetch({ api, method, url, data = null, config = null }) {
   const [response, setResponse] = useState(null);
   const [error, setError] = useState("");
   const [isLoading, setIsLoading] = useState(true);
   const cache = useRef({});

   useEffect(() => {
      const fetchData = async () => {

      //    if (cache.current[url]) {
      //       const data = cache.current[url];
      //       setResponse(data);
      //   } else {
         try {
         
            await api[method](url, JSON.parse(config), JSON.parse(data))
               .then((res) => {
                 
                  if(res.error){
                    
                     setError("Something Went Terribly Wrong");
                  }
                  
                  cache.current[url] = res.data
                  setResponse(res.data);
               })
               .finally(() => {
                  setIsLoading(false);
               });
         } catch (err) {
         
            setError("Something Went Terribly Wrong");
         }
      // }
      };

      fetchData();
   }, [api, method, url, data, config]);


   return { response, error, isLoading };
}