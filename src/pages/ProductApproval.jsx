import React, { useState, useRef, useEffect } from "react";
import Title from "../components/Title";
import Gallery from "../components/Gallery";
import Breadcrumb from "../components/Breadcrumb";
import { SellerInfo } from "./Product";
import ConfirmMessage from "../components/Message";

// Seller Info
const sellerInfo = {
  name: "Leslie Alexander",
  email: "leslie.alexander@example.com",
  img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

// Product Info
const productInfo = {
  tags: ["Men", "Clothing", "Basic Tee 6-Pack"],
  title: "Basic Tee 6-Pack 2.0",
  description:
    "The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: &quot;Black&quot;. Need to add an extra pop of color to your outfit? Our white tee has you covered.",
  price: 350,
  maxLimit: 10,
  images: [
    "https://readymadeui.com/images/laptop2.webp",
    "https://readymadeui.com/images/laptop3.webp",
    "https://readymadeui.com/images/laptop4.webp",
    "https://readymadeui.com/images/laptop5.webp",
  ],
};
export function ProductApproval() {
  return (
    <>
      <Title
        title="Revisar publicaciones"
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        }
      />
      <Content />
    </>
  );
}

const Content = () => {
  return (
    <div className="grid sm:px-12 lg:px-20 xl:px-32 mb-8 ">
      <div className="mt-5">
        <SellerInfo seller={sellerInfo} />
      </div>
      <div className="-mt-2">
        <ProductPreview product={productInfo} />
      </div>
      <ApprovalSection />
    </div>
  );
};

const ProductPreview = ({ product }) => {
  const tags = product.tags;
  return (
    <div className="relative flex">
      <button className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center sm:-left-8 ml-2 z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 transform rotate-180"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 3a.75.75 0 0 0-1.06 1.061L12.94 9.5H4.75a.75.75 0 0 0 0 1.5h8.19L8.94 15.94A.75.75 0 0 0 10 17.31l6.364-6.364a.75.75 0 0 0 0-1.06L10 3z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <div className="mt-8 space-y-3 rounded-lg border-2 bg-white px-6 py-12 m-6 sm:px-6 ml-8">
        <section className="mx-auto flex-col space-y-4 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <Breadcrumb tags={tags} />
          <ProductDisplay product={product} />
        </section>
      </div>
      <button className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center sm:-right-8 z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 transform rotate-180"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 3a.75.75 0 0 1 1.06 1.061L7.06 9.5h8.19a.75.75 0 0 1 0 1.5H7.06l3.94 5.44a.75.75 0 1 1-1.22.884L5.185 10.88a.75.75 0 0 1 0-1.06L9.78 3.06A.75.75 0 0 1 10 3z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

const ProductDisplay = ({ product }) => {
  const { title, price, maxLimit, description, images } = product; // Destructure product object

  return (
    <>
      <div className="flex flex-col md:flex-row items-center">
        <Gallery images={images} />
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
                  {/* Stock */}
                  <p className="text-sm font-medium text-gray-600">
                    {maxLimit} unidades disponibles.
                    <hr className="border-t border-gray-300 my-4" />
                    {/* Description */}
                    <p className="text-sm text-gray-900">{description}</p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ApprovalSection = () => {
  const [commentVisible, setCommentVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPositive, setIsPositive] = useState(true); // Suponiendo que el valor por defecto es positivo

  const commentSectionRef = useRef(null); // Referencia para la sección de comentarios

  const toggleCommentSection = () => {
    setCommentVisible(!commentVisible);
  };

  const handleAccept = () => {
    setCommentVisible(false);
    setIsModalOpen(true);
    setIsPositive(true);
  };

  const handleReject = () => {
    setCommentVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSendComments = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
    setIsPositive(false);
  };

  const handleAcceptModal = () => {
    setIsModalOpen(false);
    setCommentVisible(false); // Limpiar commentVisible solo cuando el usuario acepta el modal
  };

  useEffect(() => {
    // Desplazar hacia abajo cuando los comentarios se vuelvan visibles
    if (commentVisible && commentSectionRef.current) {
      commentSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [commentVisible]);

  return (
    <>
      <div className="flex space-x-3 justify-end px-6 mt-2">
        <button
          id="rejectButton"
          type="button"
          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          onClick={handleReject}
        >
          Rechazar publicación
        </button>
        <button
          type="button"
          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-amber-500 text-white hover:bg-amber-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          onClick={handleAccept}
        >
          Aceptar publicación
        </button>
      </div>

      {commentVisible && (
        <form onSubmit={handleSendComments}>
          <div ref={commentSectionRef} className="justify-center mt-4 px-12">
            <label
              htmlFor="textarea-label"
              className="block text-base font-medium mb-3"
            >
              Escribir comentarios acerca del motivo del rechazo:
            </label>
            <textarea
              name="reject-comments"
              className="py-3 pb-6 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none "
              rows="3"
              placeholder="Escribe aquí..."
              required
            ></textarea>
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="py-3 px-8 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-amber-500 text-white hover:bg-amber-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                Enviar
              </button>
            </div>
          </div>
        </form>
      )}

      <ConfirmMessage
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAccept={handleAcceptModal}
        title={isPositive ? "Aceptar publicación" : "Rechazar publicación"}
        message={
          isPositive
            ? "¿Estás seguro de que deseas aceptar esta publicación?"
            : "¿Estás seguro de que deseas rechazar esta publicación?"
        }
        isPositive={isPositive}
      />
    </>
  );
};
