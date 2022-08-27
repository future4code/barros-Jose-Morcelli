import { useEffect, useState } from "react";
import axios from 'axios';
const useRequestDataTrips=(url, headers)=>{
    
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(undefined)
  const [erro, setErro] = useState("")

  useEffect(() => {
    setIsLoading(true);
    axios.get(url, headers).then((response) => {
      setIsLoading(false)
      setData(response.data)
    }).catch((error) => {
      setIsLoading(false)
      setErro(error)
    })
  }, [url])

    return [data,isLoading,erro];

}
export default useRequestDataTrips;