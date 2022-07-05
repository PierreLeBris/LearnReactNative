import { useRouter } from 'next/router'

function Review() {
    const router = useRouter()
    const { productid, reviewid } = router.query

    return (
        <h1>
            Review {reviewid} for Product {productid}
        </h1>
    )
}

export default Review