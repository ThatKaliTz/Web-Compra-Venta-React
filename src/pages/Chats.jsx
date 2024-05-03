import { useRef, useEffect, useState } from "react";
import ReturnArrow from "../assets/return-arrow.svg";
import SellDetails from "../components/SellDetails";
import NoResults from "../components/NoResults";

const chatList = [
  {
    name: "Leslie Alexander",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    lastMessage: "Can be verified on any platform using docker",
  },
  {
    name: "Chat 2",
    img: "https://i.ytimg.com/vi/2cFnfD4iZzM/maxresdefault.jpg",
    lastMessage:
      "Your error message says permission denied, npm global installs must be given root privileges.",
  },
  {
    name: "Chat 3",
    img: "https://i.ytimg.com/vi/2cFnfD4iZzM/maxresdefault.jpg",
    lastMessage:
      "Your error message says permission denied, npm global installs must be given root privileges.",
  },
  {
    name: "Chat 4",
    img: "https://i.ytimg.com/vi/2cFnfD4iZzM/maxresdefault.jpg",
    lastMessage:
      "Your error message says permission denied, npm global installs must be given root privileges.",
  },
  {
    name: "Chat 5",
    img: "https://i.ytimg.com/vi/2cFnfD4iZzM/maxresdefault.jpg",
    lastMessage:
      "Your error message says permission denied, npm global installs must be given root privileges.",
  },
  {
    name: "Chat 6",
    img: "https://i.ytimg.com/vi/2cFnfD4iZzM/maxresdefault.jpg",
    lastMessage:
      "Your error message says permission denied, npm global installs must be given root privileges.",
  },
  {
    name: "Chat 7",
    img: "https://i.ytimg.com/vi/2cFnfD4iZzM/maxresdefault.jpg",
    lastMessage:
      "Your error message says permission denied, npm global installs must be given root privileges.",
  },
  {
    name: "Chat 8",
    img: "https://i.ytimg.com/vi/2cFnfD4iZzM/maxresdefault.jpg",
    lastMessage:
      "Your error message says permission denied, npm global installs must be given root privileges.",
  },
  {
    name: "Chat 9",
    img: "https://i.ytimg.com/vi/2cFnfD4iZzM/maxresdefault.jpg",
    lastMessage:
      "Your error message says permission denied, npm global installs must be given root privileges.",
  },
  {
    name: "Chat 10",
    img: "https://i.ytimg.com/vi/2cFnfD4iZzM/maxresdefault.jpg",
    lastMessage:
      "Your error message says permission denied, npm global installs must be given root privileges.",
  },
];
const messages = [
  { text: "Can be verified on any platform using docker", isSender: true },
  {
    text: "Your error message says permission denied, npm global installs must be given root privileges.",
    isSender: false,
  },
  {
    text: "Your error message says permission denied, npm global installs must be given root privileges.",
    isSender: false,
  },
  { text: "Can be verified on any platform using docker", isSender: true },
  {
    text: "Your error message says permission denied, npm global installs must be given root privileges.",
    isSender: true,
  },
  { text: "Can be verified on any platform using docker", isSender: true },
  {
    text: "Your error message says permission denied, npm global installs must be given root privileges.",
    isSender: false,
  },
  {
    text: "Your error message says permission denied, npm global installs must be given root privileges.",
    isSender: false,
  },
  { text: "Can be verified on any platform using docker", isSender: true },
  {
    text: "Your error message says permission denied, npm global installs must be given root privileges.",
    isSender: true,
  },
  { text: "lololol", isSender: false },
  { text: "Can be verified on any platform using docker", isSender: true },
  {
    text: "Your error message says permission denied, npm global installs must be given root privileges.",
    isSender: false,
  },
  {
    text: "Your error message says permission denied, npm global installs must be given root privileges.",
    isSender: false,
  },
  { text: "Can be verified on any platform using docker", isSender: true },
  {
    text: "Your error message says permission denied, npm global installs must be given root privileges.",
    isSender: true,
  },
  { text: "lololol", isSender: false },
  { text: "ultimo msj", isSender: true },
];

const products = [
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
];

export function Chats() {
  const [isScreenLarge, setIsScreenLarge] = useState(false);
  const [isChatListVisible, setIsChatListVisible] = useState(true);
  const [isChatListEmpty, setIsChatListEmpty] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsScreenLarge(window.innerWidth >= 768);
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleReturnToChatList = () => {
    setIsChatListVisible(true); // Al hacer clic en el botón de regreso, mostrar la lista de chats
  };

  return (
    <>
      {/* Hacer cálculos de cuantas convos hay*/}
      <div className="w-full h-full">
        {isChatListEmpty ? (
          <NoResults msg="No hay chats disponibles" />
        ) : (
          <div className="hidden md:flex h-[90vh] md:px-2">
            <ChatList chatList={chatList} />
            <ChatBox messages={messages} />
          </div>
        )}

        {/* Bloque de código dentro del else */}
        {!isScreenLarge && !isChatListEmpty && (
          <div className="flex h-[90vh] md:px-2">
            {isChatListVisible ? (
              <ChatList
                chatList={chatList}
                isScreenLarge={isScreenLarge}
                setIsChatListVisible={setIsChatListVisible}
              />
            ) : (
              <ChatBox
                messages={messages}
                handleReturnToChatList={handleReturnToChatList}
              />
            )}
          </div>
        )}
      </div>
    </>
  );
}

const ChatList = ({ chatList, isScreenLarge, setIsChatListVisible }) => {
  const [selectedChatIndex, setSelectedChatIndex] = useState(0);

  const handleChatSelect = (index) => {
    setSelectedChatIndex(index);
    if (!isScreenLarge) {
      setIsChatListVisible(false); // Ocultar la lista de chats en pantallas pequeñas al seleccionar un chat
    }
  };

  return (
    <div className="flex justify-center md:w-[25%] h-grow overflow-y-auto border-r border-gray-200">
      <div className="flex flex-col w-[95%] justify-start p-5 space-y-2">
        <h1 className="text-2xl font-bold">Mis chats</h1>
        <ul className="">
          {chatList.map((chat, index) => (
            <li
              key={index}
              onClick={() => handleChatSelect(index)}
              className={`flex items-center justify-start gap-x-6 px-5 py-5 rounded-xl border-b border-gray-200 ${
                selectedChatIndex === index ? "bg-amber-100" : ""
              }`}
            >
              <div className="flex min-w-0 gap-x-4">
                <img
                  className="h-12 w-12 flex-none rounded-full object-cover bg-gray-50"
                  src={chat.img}
                  alt=""
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {chat.name}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {chat.lastMessage}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ChatBox = ({ messages, handleReturnToChatList }) => {
  const chatContainerRef = useRef(null);

  useEffect(() => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [messages]);

  return (
    <div className="flex-1 p-2 sm:p-6 flex flex-col overflow-y-auto">
      <button onClick={handleReturnToChatList} className="relative md:hidden ">
        <img
          src={ReturnArrow}
          className="w-8 h-8 absolute top-7 left-1"
          alt="Return arrow"
        />
      </button>
      <div className="flex flex-col items-center justify-center py-2 border-b-2 border-gray-200">
        <img
          className="w-10 h-10 rounded-full object-cover"
          src="https://i.ytimg.com/vi/2cFnfD4iZzM/maxresdefault.jpg"
          alt=""
        />
        <div className="font-medium text-center dark:text-white">
          <div>Jese Leos</div>
        </div>
      </div>

      <div className="min-h-[62.8vh] overflow-y-auto" ref={chatContainerRef}>
        <div className="flex flex-col space-y-4 p-3">
          {messages.slice().map((msg, index) => (
            <ChatBubble
              key={index}
              message={msg.text}
              isSender={msg.isSender}
              messages={messages}
              index={index}
            />
          ))}
        </div>
      </div>
      <ChatInput />
    </div>
  );
};

const ChatInput = () => {
  const textareaRef = useRef(null);

  const handleTextareaInput = () => {
    const textarea = textareaRef.current;
    textarea.style.height = ""; // Resetting height to recalculate
    textarea.style.height = `${Math.min(
      textarea.scrollHeight,
      5 * parseFloat(window.getComputedStyle(textarea).lineHeight)
    )}px`; // Setting max height to 3 rows
  };

  // Modal de vender producto
  const [isModalProductOpen, setIsModalProductOpen] = useState(false);
  const openProductModal = () => {
    console.log("openProductModal");
    setIsModalProductOpen(true);
  };

  const closeProductModal = () => {
    setIsModalProductOpen(false);
  };

  const handleProductAccept = (event) => {
    // Acción
    closeProductModal(); // Cierra el modal después de realizar la acción deseada
  };

  return (
    <>
      <div className="border-t-2 border-gray-200 px-4 py-2 pt-6 mb-2 sm:mb-0">
        <div className="relative flex overflow-y-auto">
          <textarea
            ref={textareaRef}
            placeholder="Write your message!"
            className="w-full pr-28 text-sm focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-500 pl-4 bg-gray-100 rounded-md py-3 resize-none"
            rows="1" // Set initial rows to 1
            onInput={handleTextareaInput} // Call the function to adjust the height dynamically
          ></textarea>

          <div className="absolute right-0 items-center inset-y-0 flex">
            {/*Select product button*/}
            <button
              onClick={openProductModal}
              className="inline-flex items-center justify-center rounded-lg px-2 py-3 transition duration-500 ease-in-out text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6"
              >
                <path
                  d="M7.2998 5H22L20 12H8.37675M21 16H9L7 3H4M4 8H2M5 11H2M6 14H2M10 20C10 20.5523 9.55228 21 9 21C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19C9.55228 19 10 19.4477 10 20ZM21 20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20C19 19.4477 19.4477 19 20 19C20.5523 19 21 19.4477 21 20Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
            {/* Send button */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg px-2 py-3 transition duration-500 ease-in-out text-amber-500 hover:text-amber-700 focus:outline-none"
            >
              <span className="font-bold hidden sm:flex">Send</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-6 w-6 ml-2 transform rotate-90"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Modal de vender producto */}
      {isModalProductOpen && (
        <SellDetails
          products={products}
          onClose={closeProductModal}
          onAccept={handleProductAccept}
        />
      )}
    </>
  );
};

const ChatButtons = () => {
  return (
    <>
      <span className="absolute inset-y-0 flex items-center">
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 text-gray-600"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
            ></path>
          </svg>
        </button>
      </span>
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6 text-gray-600"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
          ></path>
        </svg>
      </button>
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6 text-gray-600"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
          ></path>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
          ></path>
        </svg>
      </button>
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6 text-gray-600"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </button>
    </>
  );
};

const ChatBubble = ({ message, isSender, messages, index }) => {
  // Verificar si el mensaje actual es el último del remitente o del destinatario
  const isLastSenderMessage =
    isSender &&
    (!messages[index + 1] || messages[index + 1]?.isSender === false);
  const isLastReceiverMessage =
    !isSender &&
    (!messages[index + 1] || messages[index + 1]?.isSender === true);

  const bubbleClassName =
    `px-4 py-2 rounded-lg inline-block ${
      isSender
        ? "bg-amber-500 text-white rounded-br-none"
        : "bg-gray-300 text-gray-600 rounded-bl-none"
    }` +
    (!isLastSenderMessage && !isLastReceiverMessage ? "rounded-tr-lg" : "");

  const flexClassName = isSender
    ? "flex items-end justify-end"
    : "flex items-end justify-start";

  return (
    <div className="chat-message">
      <div className={flexClassName}>
        {!isSender && isLastReceiverMessage && (
          <img
            src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144"
            alt="My profile"
            className="w-8 h-8 rounded-full order-1"
          />
        )}
        <div
          className={`flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start ${
            !isSender && !isLastReceiverMessage ? "pl-8" : ""
          } ${isSender && !isLastSenderMessage ? "pr-8" : ""}`}
        >
          <div>
            <span className={bubbleClassName}>{message}</span>
          </div>
        </div>
        {isSender && isLastSenderMessage && (
          <img
            src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144"
            alt="My profile"
            className="w-8 h-8 rounded-full order-3"
          />
        )}
      </div>
    </div>
  );
};

export default Chats;
