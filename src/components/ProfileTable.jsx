import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NoResults from "./NoResults";

const ProfileTable = ({ isWishlist, productLists, idListSelected }) => {
  // Filtramos las listas para obtener solo la lista seleccionada
  const selectedList = productLists.find(
    (list) => list.idList === idListSelected
  );

  return (
    <div className="flex  overflow-y-auto">
      {selectedList &&
      selectedList.products &&
      selectedList.products.length > 0 ? (
        <table className="rounded-l border md:border-l-0 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3">
                Precio
              </th>

              {!isWishlist && (
                <>
                  <th scope="col" className="px-6 py-3">
                    Stock
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Categoría
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Valoración
                  </th>
                </>
              )}

              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {selectedList.products.map((product) => (
              <ProductRow
                key={product.id}
                product={product}
                isWishlist={isWishlist}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <div className="w-full h-max-screen">
          <NoResults msg={"No se encontraron resultados"} />
        </div>
      )}
    </div>
  );
};

const ProductRow = ({ product, isWishlist }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th scope="row" className="px-6 py-4">
        <div className="flex mr-24 md:mr-0 items-start">
          <img
            className="object-cover h-16 w-16 mr-4 rounded-lg"
            src={product.img}
            alt="Product image"
          />
          <div className="ps-3">
            <div className=" font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {product.title}
            </div>
            <div className="font-normal text-gray-500">
              {product.description}
            </div>
          </div>
        </div>
      </th>

      <th scope="col" className="px-6 py-3">
        ${product.price}
      </th>

      {!isWishlist && (
        <>
          <th scope="col" className="px-6 py-3">
            {product.stock}
          </th>
          <th scope="col" className="px-6 py-3">
            {product.category}
          </th>
          <th scope="col" className="px-6 py-3">
            {product.rating}
          </th>
        </>
      )}

      <td className="px-6 py-4">
        <ActionButtons isWishlist={isWishlist} product={product} />
      </td>
    </tr>
  );
};

const ActionButtons = ({ isWishlist, product }) => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    console.log("info", product);
    navigate("/editProduct", { state: { product } });
  };

  return (
    <div className="flex flex-row justify-center items-center space-x-4">
      <span className="inline-flex overflow-hidden rounded-md border bg-white shadow-sm">
        {!isWishlist && (
          <button
            onClick={handleEditClick}
            className="inline-block border-e p-3 text-gray-700 hover:bg-amber-500 focus:relative"
            title="Edit Product"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </button>
        )}

        <button
          className="inline-block p-3 text-gray-700 hover:bg-red-500 focus:relative"
          title="Delete Product"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
      </span>
    </div>
  );
};

export default ProfileTable;
