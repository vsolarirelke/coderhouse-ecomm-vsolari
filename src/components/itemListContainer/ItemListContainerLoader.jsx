import ContentLoader from "react-content-loader"

const ItemListContainerLoader = (props) => {
    return(
        <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 item-list pt-55">
                {[1,2,3].map((item, index) => (
                    <div className="col" key={`cart_loader_${index}`}>
                        <div className="card shadow-sm" style={{width: '18rem', padding: '20px 20px 20px 30px'}}> 
                            <ContentLoader 
                                speed={2}
                                width={300}
                                height={320}
                                viewBox="0 0 300 320"
                                backgroundColor="#ededed"
                                foregroundColor="#fafafa"
                                {...props}
                            >
                                <circle cx="42" cy="302" r="10" /> 
                                <rect x="71" y="284" rx="2" ry="2" width="81" height="34" /> 
                                <rect x="10" y="199" rx="2" ry="2" width="195" height="14" /> 
                                <rect x="9" y="-15" rx="2" ry="2" width="205" height="198" /> 
                                <rect x="10" y="228" rx="2" ry="2" width="195" height="14" /> 
                                <rect x="11" y="257" rx="2" ry="2" width="195" height="14" />
                            </ContentLoader>
                        </div>
                    </div>
                ))}    
            </div>   

        </div>  
    )
}

export default ItemListContainerLoader
