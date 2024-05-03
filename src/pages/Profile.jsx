import React, { useState, useContext } from "react";
import ProfileSidebar from "../components/ProfileSidebar";
import { SearchBar } from "../components/SearchBar";
import { Pagination } from "../components/Pagination";
import ProfileTable from "../components/ProfileTable";
import EditProfile from "../components/EditProfile";
import { AddList, EditList } from "../components/List";
import Lock from "../assets/lock.png";
import { AuthContext } from "../AuthContext";

const infoFromProfile = {
  username: "maria123",
  name: "Maria",
  lastName: "",
  img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
  email: "wYyvC@example.com",
  password: "123456",
  isPrivate: false,
};

let selectedList = 0;

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
  },
];

const myProductLists = [
  {
    idList: 1,
    title: "Aprobado",
    products: [
      {
        id: 1,
        title: "Aprobado",
        price: "10.00",
        description: "Product 1 description",
        stock: 10,
        category: "Electronica",
        rating: 5,
        img: "https://casacamejo.com.mx/wp-content/uploads/2023/02/Hisense-14-04.jpg",
        url: "#",
      },
      {
        id: 2,
        title: "Product 2",
        price: "20.00",
        description: "Product 2 description",
        stock: 20,
        category: "Ropa",
        rating: 4,
        img: "https://casacamejo.com.mx/wp-content/uploads/2023/02/Hisense-14-04.jpg",
        url: "#",
      },
    ],
  },
  {
    idList: 2,
    title: "Pendiente",
    products: [
      {
        id: 1,
        title: "Pendiente",
        price: "10.00",
        description: "Product 1 description",
        stock: 10,
        category: "Muebles y decoracion",
        rating: 5,
        img: "https://casacamejo.com.mx/wp-content/uploads/2023/02/Hisense-14-04.jpg",
        url: "#",
      },
    ],
  },
];

const updateUserData = () => {
  const { userData } = useContext(AuthContext);

  // Copia el objeto userData para evitar modificar el original directamente
  const updatedUserData = { ...userData };
  // Asigna los valores del objeto infoFromProfile a los campos correspondientes del objeto userData
  infoFromProfile.username = updatedUserData.nombreUsuario;
  infoFromProfile.name = updatedUserData.nombre;
  infoFromProfile.lastName = updatedUserData.apellidoP;
  infoFromProfile.email = updatedUserData.email;
  infoFromProfile.password = updatedUserData.contrasenia;
  infoFromProfile.img = updatedUserData.fotoPerfil;
};

export function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditingList, setIsEditingList] = useState(false);

  updateUserData();

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleClose = () => {
    setIsEditing(false); // Cambia el estado para cerrar el formulario
  };

  const handleAddClick = () => {
    setIsAdding(true);
  };

  const handleCloseAdd = () => {
    setIsAdding(false); // Cambia el estado para cerrar el formulario
  };

  const handleEditListClick = () => {
    setIsEditingList(true);
  };

  const handleCloseEditList = () => {
    setIsEditingList(false); // Cambia el estado para cerrar el formulario
  };

  return (
    <>
      <div className="w-full flex flex-col items-center space-y-2">
        <ProfileInfo profile={infoFromProfile} onEditClick={handleEditClick} />
        {!infoFromProfile.isPrivate ? (
          <Content
            onAddListClick={handleAddClick}
            onEditListClick={handleEditListClick}
          />
        ) : (
          <PrivateProfile />
        )}
      </div>
      {isEditing && (
        <EditProfile onClose={handleClose} profile={infoFromProfile} />
      )}{" "}
      {isAdding && <AddList onClose={handleCloseAdd} />}
      {isEditingList && (
        <EditList
          onClose={handleCloseEditList}
          productList={myWishlists} // Pasar la lista de productos según la condición
          idListSelected={selectedList}
        />
      )}
    </>
  );
}

const ProfileInfo = ({ profile, onEditClick }) => {
  const [imageLoaded, setImageLoaded] = useState(true);
  return (
    <header className="flex flex-row gap-4 items-start justify-center w-full max-w-7xl p-4 sm:p-6 sm:mt-2">
      {/* Profile image */}
      <section className="flex flex-col px-0 py-4 sm:p-4 justify-center items-center space-y-2">
        <div className="w-36 h-36 sm:w-40 sm:h-40 relative rounded-lg overflow-hidden placeholder-container">
          {imageLoaded ? (
            <img
              src={profile.img}
              alt="Imagen de reviews"
              className="w-full h-full object-cover placeholder-image"
              onError={(e) => {
                e.target.style.display = "none";
                setImageLoaded(false);
              }}
            />
          ) : null}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-200 rounded-lg flex items-center justify-center  placeholder-content">
              No disponible
            </div>
          )}
        </div>
        <h2 className="text-gray-500 text-lg font-bold">@{profile.username}</h2>
      </section>
      {/* Profile info */}
      <div className="flex flex-col p-4 flex-grow justify-center space-y-1">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          Perfil de usuario
        </h2>
        <label className=" text-base text-gray-800 dark:text-gray-200">
          {profile.name} {profile.lastName}
        </label>
        <label className=" text-base text-gray-800 dark:text-gray-200">
          {profile.email}{" "}
        </label>
        {/*Button*/}
        <div className="flex">
          <button
            type="button"
            onClick={onEditClick}
            className="py-3 px-12 mt-2 inline-flex items-center gap-x-2 text-base font-semibold rounded-lg border border-transparent bg-amber-500 text-white hover:bg-amber-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            Editar
          </button>
        </div>
      </div>
    </header>
  );
};

const useWishlistState = () => {
  const [isWishlist, setIsWishlist] = useState(true);

  const handleTabClick = (wishlist) => {
    setIsWishlist(wishlist);
  };

  return {
    isWishlist,
    handleTabClick,
  };
};

export const useListSelection = () => {
  const [idListSelected, setIdListSelected] = useState(1);

  const handleOptionSelect = (idList) => {
    setIdListSelected(idList);
    selectedList = idList;
  };

  return {
    idListSelected,
    handleOptionSelect,
  };
};

const Content = ({ onAddListClick, onEditListClick }) => {
  const { isWishlist, handleTabClick } = useWishlistState();
  const { idListSelected, handleOptionSelect } = useListSelection();
  const [hasLists, setHasLists] = useState(true);

  // Definir las listas de productos
  const productList = isWishlist ? myWishlists : myProductLists;

  return (
    <div className="w-full px-0 md:px-12">
      <Tabs isWishlist={isWishlist} handleTabClick={handleTabClick} />
      <div className="flex flex-col  mb-8 md:flex-row border">
        <ProfileSidebar
          isWishlist={isWishlist}
          listsInfo={productList}
          onOptionSelect={handleOptionSelect}
          setHasLists={setHasLists}
        />
        <div className="flex flex-col md:h-screen md:flex-grow">
          <FilterBar
            onAddListClick={onAddListClick}
            onEditListClick={onEditListClick}
            isWishlist={isWishlist}
            hasLists={hasLists}
          />
          <div className="h-auto">
            <ProfileTable
              isWishlist={isWishlist}
              productLists={productList}
              idListSelected={idListSelected}
            />
            <Pagination totalPages={10} />
          </div>
        </div>
      </div>
    </div>
  );
};

const PrivateProfile = () => {
  return (
    <div className="w-full px-0 md:px-12">
      <div className="h-96 space-y-2 flex flex-col justify-center items-center mb-8 border">
        <img src={Lock} className="w-12" />
        <span className="text-xl font-semibold text-gray-500">
          Este perfil es privado
        </span>
      </div>
    </div>
  );
};

const Tabs = ({ isWishlist, handleTabClick }) => {
  return (
    <ul className="flex md:ml-64 flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
      <li className="me-2">
        <button
          className={`inline-block p-4 text-base ${
            isWishlist ? "text-amber-600" : "text-gray-500"
          } ${
            isWishlist ? "bg-gray-100" : "bg-white"
          } rounded-t-lg active dark:bg-gray-800 dark:text-amber-500`}
          onClick={() => handleTabClick(true)}
        >
          Listas
        </button>
      </li>
      <li className="me-2">
        <button
          className={`inline-block p-4 text-base ${
            isWishlist ? "text-grey-500" : "text-amber-600"
          } ${
            isWishlist ? "bg-white" : "bg-gray-100"
          } rounded-t-lg hover:text-amber-600 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-300`}
          onClick={() => handleTabClick(false)}
        >
          Productos
        </button>
      </li>
    </ul>
  );
};

const FilterBar = ({
  onAddListClick,
  onEditListClick,
  isWishlist,
  hasLists,
}) => {
  return (
    <div className="py-4 pr-8 flex gap-2 items-center justify-end bg-white">
      <SearchBar section="none" />

      {isWishlist ? (
        <>
          <button
            type="button"
            onClick={onAddListClick}
            className="py-2 px-6 inline-flex items-center gap-x-2 text-sm  rounded-lg border-2 bg-slate-50 border-amber-500 text-gray-500 hover:bg-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 "
          >
            Crear lista
          </button>
          {hasLists && (
            <button
              type="button"
              onClick={onEditListClick}
              className="py-2 px-6 inline-flex items-center gap-x-2 text-sm  rounded-lg border-2 bg-slate-50 border-amber-500 text-gray-500 hover:bg-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 "
            >
              Editar lista
            </button>
          )}
        </>
      ) : null}
    </div>
  );
};
