import { useParams } from "react-router-dom";

export function ProductPage() {
    let params = useParams()

    console.log("Product page with product id: ", params);

    return (
        <div>
            <h1>Individual product page: {params.id}</h1>
        </div>
    )
    
}