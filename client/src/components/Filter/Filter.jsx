
import '../../css/Filter/Filter.css'

const Filter = ({size,handleFilterBySize,handleFilterByOrder,sort}) => {
    return (
        <div className="filter-wrapper">
            <h2 className="filter-title">Filter</h2>
            <div className="num-of-products">Number of Products 4</div>
            <div className="filter-by-size">
                <span>Filter</span>
                <select value={size} onChange={handleFilterBySize} className="filter-select">
                    <option value="All">All</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
            </div>
            <div className="filter-by-size">
                <span>Order</span>
                <select value={sort} onChange={handleFilterByOrder} className="filter-select">
                    <option value="lastest">Lastest</option>
                    <option value="lower">Lower</option>
                    <option value="highest">Highest</option>
                </select>
            </div>
        </div>
    )
}

export default Filter