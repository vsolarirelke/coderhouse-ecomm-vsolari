import ContentLoader from "react-content-loader"

const ItemDetailContainerLoader = (props) => {
    return(
        <div className="item-detail-container">
            <div className="container">
                <div className="card">
                    <div className="container-fliud">
                        <div className="wrapper row container-post-v2">
                            <ContentLoader 
                                speed={2}
                                width={1300}
                                height={320}
                                viewBox="0 0 1300 320"
                                backgroundColor="#ededed"
                                foregroundColor="#fafafa"
                                {...props}
                            >
                                <circle cx="695" cy="229" r="10" /> 
                                <rect x="633" y="253" rx="2" ry="2" width="127" height="34" /> 
                                <rect x="505" y="49" rx="2" ry="2" width="326" height="14" /> 
                                <rect x="9" y="-15" rx="2" ry="2" width="382" height="342" /> 
                                <rect x="506" y="76" rx="2" ry="2" width="326" height="14" /> 
                                <rect x="506" y="102" rx="2" ry="2" width="326" height="14" /> 
                                <rect x="506" y="129" rx="2" ry="2" width="326" height="14" /> 
                                <rect x="506" y="155" rx="2" ry="2" width="326" height="14" /> 
                                <rect x="505" y="184" rx="2" ry="2" width="326" height="14" />
                            </ContentLoader>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
    
export default ItemDetailContainerLoader
    