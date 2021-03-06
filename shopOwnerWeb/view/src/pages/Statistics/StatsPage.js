import { useParams } from "react-router";
import { getAllOrder, getProductByID, getReview} from "../../api/services";
import { useEffect, useState } from "react";
import ProductDetail from "../../component/Statistics/ProductDetail";
import OrderTable from "../../component/Statistics/OrderTable";
import ReviewTable from "../../component/Statistics/ReviewTable";

const StatsPage = props => {

    const params = useParams();

    const [product, setProduct] = useState(null);
    const [orders, setOrders] = useState([]);
    const [reviews, setReviews] = useState([]);
    useEffect( () => {

         getProductByID(params.id).then(result => setProduct(result));
        
        getAllOrder(params.id).then(result => {
        
        // console.log(result);
        setOrders(result)});

        getReview(params.id).then(result => 
        {   
            console.log(result);
            setReviews(result)
        });
        
    }, [params.id]);

    return (
        product ? 
        <div className='row p-0 m-0'>
            <div className='col-12 col-xl-4'>
                <ProductDetail product={product} orders = {orders}/>
            </div>
            <div className='col-12 col-xl-8 py-5'>
                <h3 className='text-uppercase text-primary'>Danh sách các đơn hàng của sản phẩm</h3>
                <OrderTable orders={orders}/>
                <h3 className='text-uppercase text-primary mt-5'>Danh sách các bình luận của sản phẩm</h3>
                <ReviewTable reviews={reviews}/>
            </div>
        </div>
        : <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    )


};


export default StatsPage;