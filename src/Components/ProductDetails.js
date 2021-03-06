import { useParams } from "react-router";
import EditData from "./EditData";
import UseFetch from "./UseFetch";

export const ProductDetails = () => {
  const { id } = useParams();
  const { data } = UseFetch("http://localhost:5000/products/" + id);

  return <div>{data && <EditData data={data} />}</div>;
};

export default ProductDetails;
