import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

const useProduct = () => {
  //   const [product, setProduct] = useState([]);
  //   const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch('http://localhost:5000/products')
  //     .then(res => res.json())
  //     .then(data => {
  //       setProduct(data);
  //       setLoading(false);
  //   });
  // }, []);
  // return [product, loading]
  // const { user, loading } = useContext(AuthContext);
    const { refetch, data: product = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/products`, {withCredentials: true})
            console.log(res.data)
            return res.data;
        },
          });
    

    return [product, refetch]
};

export default useProduct;