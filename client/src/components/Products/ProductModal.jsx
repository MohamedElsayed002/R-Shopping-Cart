
import Modal from 'react-modal';

const ProductModal = ({product,closeModal}) => {
    let isOpen = {}
    return (
        <Modal isOpen={product} onRequestClose={closeModal}>
                <span className="close-icon" onClick={() => closeModal()}> &times; </span>
                    <div className="product-info">
                        <img src={product.image} alt={product.title}/>
                        <p>{product.title}</p>
                        <p>{product.desc}</p>
                    </div>
        </Modal>
        )
}

export default ProductModal