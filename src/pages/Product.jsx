import { useState } from "react";
import Gallery from "../components/Gallery";
import Breadcrumb from "../components/Breadcrumb";
import { ReviewComment, Reviews } from "../components/Rating";
import QuantityButton from "../components/QuantityButton";
import RelatedProducts from "../components/RelatedProducts";
import { Pagination } from "../components/Pagination";
import { SelectList } from "../components/List";
import { InfoMessage } from "../components/Message";

const myWishlists = [
  {
    idList: 1,
    title: "My list 1",
    description: "My list 1 description",
    img: "https://casacamejo.com.mx/wp-content/uploads/2023/02/Hisense-14-04.jpg",
    isPrivate: true,
    products: [
      {
        id: 1,
        title: "Product 1",
        price: "10.00",
        description: "Product 1 description",
        img: "https://casacamejo.com.mx/wp-content/uploads/2023/02/Hisense-14-04.jpg",
        url: "#",
      },
      {
        id: 2,
        title: "Product 2",
        price: "20.00",
        description: "Product 2 description",
        img: "https://casacamejo.com.mx/wp-content/uploads/2023/02/Hisense-14-04.jpg",
        url: "#",
      },
    ],
  },
  {
    idList: 2,
    title: "My list 2",
    description: "My list 2 description",
    img: "https://casacamejo.com.mx/wp-content/uploads/2023/02/Hisense-14-04.jpg",
    isPrivate: true,
    products: [
      {
        id: 1,
        title: "Product 1",
        price: "660.00",
        description: "Product 1 description",
        img: "https://casacamejo.com.mx/wp-content/uploads/2023/02/Hisense-14-04.jpg",
        url: "#",
      },
      {
        id: 2,
        title: "Product 2",
        price: "20.00",
        description: "Product 2 description",
        img: "https://casacamejo.com.mx/wp-content/uploads/2023/02/Hisense-14-04.jpg",
        url: "#",
      },
    ],
  },
  {
    idList: 3,
    title: "My list 3",
    description: "My list 3 description",
    img: "https://casacamejo.com.mx/wp-content/uploads/2023/02/Hisense-14-04.jpg",
    isPrivate: false,
    products: [
      {
        id: 1,
        title: "Product 1",
        price: "300.00",
        description: "Product 1 description",
        img: "https://casacamejo.com.mx/wp-content/uploads/2023/02/Hisense-14-04.jpg",
        url: "#",
      },
      {
        id: 2,
        title: "Product 2",
        price: "20.00",
        description: "Product 2 description",
        img: "https://casacamejo.com.mx/wp-content/uploads/2023/02/Hisense-14-04.jpg",
        url: "#",
      },
    ],
  },
];

// Product Info
const productInfo = {
  tags: ["Men", "Clothing", "Basic Tee 6-Pack"],
  title: "Basic Tee 6-Pack",
  description:
    "The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: &quot;Black&quot;. Need to add an extra pop of color to your outfit? Our white tee has you covered.",
  price: 350,
  totalReviews: 117,
  stock: 10,
  images: [
    "https://readymadeui.com/images/laptop2.webp",
    "https://readymadeui.com/images/laptop3.webp",
    "https://readymadeui.com/images/laptop4.webp",
    "https://readymadeui.com/images/laptop5.webp",
    "https://readymadeui.com/images/laptop2.webp",
    "https://readymadeui.com/images/laptop3.webp",
    "https://readymadeui.com/images/laptop4.webp",
    "https://readymadeui.com/images/laptop5.webp",
    "https://docs.material-tailwind.com/demo.mp4",
  ],
};

// Seller Info
const sellerInfo = {
  name: "Leslie Alexander",
  email: "leslie.alexander@example.com",
  img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

// Related Products
const relatedProducts = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80",
    label: "New",
    name: "Robot Toy",
    price: "$14.99",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80",
    label: "New",
    name: "Robot Toy",
    price: "$14.99",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80",
    label: "New",
    name: "Robot Toy",
    price: "$14.99",
  },
];

export function Product() {
  return (
    <div>
      <div className="mx-auto mt-6 flex max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <Breadcrumb tags={productInfo.tags} />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <ProductDisplay product={productInfo} />
      </div>
      <ProductDescription />
    </div>
  );
}

// Botones
const AddToCart = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="addToCartButton w-3/4 py-3 px-6 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-amber-500 text-white hover:bg-amber-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
    >
      Agregar al carrito
      <svg
        className="flex-shrink-0 size-4"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m5 11 4-7" />
        <path d="m19 11-4-7" />
        <path d="M2 11h20" />
        <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4" />
        <path d="m9 11 1 9" />
        <path d="M4.5 15.5h15" />
        <path d="m15 11-1 9" />
      </svg>
    </button>
  );
};

// Secciones de la pagina
export const ProductDisplay = ({ product }) => {
  const { tags, title, price, totalReviews, stock, images } = product; // Destructure product object

  // Carrito
  const [isModalCartOpen, setIsModalCartOpen] = useState(false);
  const [titleMessage, setTitleMessage] = useState("");
  const [message, setMessage] = useState("");

  const openCartModal = () => {
    setIsModalCartOpen(true);
    setTitleMessage("Producto agregado al carrito");
    setMessage("Se ha agregado correctamente al carrito.");
  };

  const handleCartAccept = () => {
    // Accion
    setIsModalCartOpen(false); // Cierra el modal después de realizar la acción deseada
  };

  // Lista
  const [isModalListOpen, setIsModalListOpen] = useState(false);
  const openListModal = () => {
    console.log("openListModal");
    setIsModalListOpen(true);
  };

  const closeListModal = () => {
    setIsModalListOpen(false);
  };

  const handleListAccept = () => {
    console.log("Aceptar");
    // Accion
    closeListModal(); // Cierra el modal después de realizar la acción deseada
  };

  return (
    <>
      <div className="flex flex-col md:flex-row items-center">
        <Gallery images={images} openListModal={openListModal} />
        <div className="md:w-5/12 px-2 h-96">
          <div className="h-full bg-white">
            <div className="mx-auto max-w-full px-4 pb-8 pt-5 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-12 lg:pt-8">
              <div className="lg:col-span-3 lg:pr-8">
                <div className="space-y-4 items-start mb-6">
                  {/* Title */}
                  <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    {title}
                  </h1>
                  {/* Price */}
                  <p className="text-3xl tracking-tight text-gray-900">
                    ${price}
                  </p>
                  {/* Reviews */}
                  <Reviews rating={4} count={totalReviews} />
                  <hr className="border-t border-gray-300 my-4" />
                  {/* Quantity */}
                  <QuantityButton maxLimit={stock} />
                  {/* Stock */}
                  <p className="text-sm font-medium text-gray-600">
                    {stock} unidades disponibles.
                  </p>
                  {/* Add to cart */}
                  <AddToCart onClick={openCartModal} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add to list modal*/}
      {isModalListOpen && (
        <SelectList
          onClose={closeListModal}
          onAccept={handleListAccept}
          lists={myWishlists}
        />
      )}

      {/* Add to cart modal*/}
      <InfoMessage
        isOpen={isModalCartOpen}
        title={titleMessage}
        message={message}
        onAccept={handleCartAccept}
      />
    </>
  );
};

const ProductDescription = () => {
  // Carrito
  const [isModalCartOpen, setIsModalCartOpen] = useState(false);
  const [titleMessage, setTitleMessage] = useState("");
  const [message, setMessage] = useState("");

  const openCartModal = () => {
    setIsModalCartOpen(true);
    setTitleMessage("Producto agregado al carrito");
    setMessage("Se ha agregado correctamente al carrito.");
  };

  const handleCartAccept = () => {
    // Accion
    setIsModalCartOpen(false); // Cierra el modal después de realizar la acción deseada
  };

  return (
    <>
      <div className="mx-auto max-w-2xl px-6 pb-2 pt-10 sm:max-w-xl sm:px-4 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-4 lg:px-4 lg:pb-24 lg:pt-16">
        {/*Header*/}
        <div className="lg:col-span-2 lg:pr-6">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Descripción del producto
          </h1>
        </div>

        {/*Description*/}
        <div className="py-10 lg:col-span-2 lg:col-start-1  lg:pb-16 lg:pr-6 lg:pt-6">
          <h3 className="sr-only">Description</h3>
          <div className="space-y-4 mb-14">
            <p className="text-base text-gray-900">{productInfo.description}</p>
            <SellerInfo seller={sellerInfo} />
          </div>
          {ReviewSection()}
        </div>
        {/*Related products*/}
        <RelatedProducts products={relatedProducts} openModal={openCartModal} />
      </div>

      {/* Add to cart modal*/}
      <InfoMessage
        isOpen={isModalCartOpen}
        title={titleMessage}
        message={message}
        onAccept={handleCartAccept}
      />
    </>
  );
};

const ReviewSection = () => {
  return (
    <>
      <h2
        id="sReview"
        className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
      >
        Reseñas
      </h2>
      <div className="space-y-4 mt-6">
        <ReviewComment
          title="Excelente aplicación"
          rating={4}
          name="John Watson"
          image="https://pagedone.io/asset/uploads/1704349572.png"
          date="Nov 01, 2023"
          comment="One of the standout features of Pagedone is its intuitive and user-friendly interface. Navigating through the system feels natural, and the layout makes it easy to locate and utilize various design elements. This is particularly beneficial for designers looking to streamline their workflow."
        />
        <ReviewComment
          title="Excelente producto"
          rating={4}
          name="John Watson"
          image="https://pagedone.io/asset/uploads/1704349572.png"
          date="Nov 01, 2023"
          comment="One of the standout features of Pagedone is its intuitive and user-friendly interface. Navigating through the system feels natural, and the layout makes it easy to locate and utilize various design elements. This is particularly beneficial for designers looking to streamline their workflow."
        />
        <Pagination totalPages={5} />
      </div>
    </>
  );
};

export const SellerInfo = ({ seller }) => {
  const { name, email, img } = seller; // Destructure product object

  return (
    <li className="px-6 flex flex-col items-center justify-center sm:items-start sm:flex-row sm:justify-between md:gap-x-6 py-5">
      <div className="flex min-w-0 gap-x-4">
        <img
          className="h-12 w-12 flex-none rounded-full bg-gray-50"
          src={img}
          alt=""
        />
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            {name}
          </p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
            {email}
          </p>
        </div>
      </div>
      <div className="shrink-0 flex sm:flex-col sm:items-end">
        <p className="text-sm leading-6 text-gray-900">Vendedor</p>
      </div>
    </li>
  );
};
