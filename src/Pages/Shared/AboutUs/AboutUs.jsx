import React from "react";
import aboutImage from "../../../assets/aboutUs.jpg";
import promisesImage from "../../../assets/promises.avif";

const AboutUs = () => {
  return (
    <>
      <div
        className="bg-fixed bg-no-repeat"
        style={{ backgroundImage: `url(${aboutImage})` }}
      >
        <div className="h-[600px] relative">
          <div className=" absolute bottom-32 left-80">
            <p className="text-5xl font-bold capitalize text-center">
              delivering happiness on the go !
            </p>
            <p className="text-3xl font-semibold capitalize text-center">
              happy shopping
            </p>
          </div>
        </div>
      </div>
      <div className="my-20">
        <p className="text-center text-4xl font-bold">Our Story</p>
        <div className="grid grid-cols-2 w-[900px] mx-auto gap-10 font-semibold text-lg text-gray-500 text-justify mt-10">
          <p className="">
            Launched in 2023, E-Mart E-Commerce Website is a comprehensive
            online shopping platform designed to offer a seamless shopping
            experience for customers while providing robust management tools for
            administrators, product managers, order managers, and delivery
            partners. This web application leverages modern technologies and a
            user-friendly interface to enable users to explore and purchase a
            wide range of products conveniently.
          </p>
          <p>
            E-Mart is focused on providing an excellent customer experience,
            ease-of-purchase, comprehensive customer care and a hassled-free
            shopping experience.
          </p>
        </div>
      </div>
      <div className="my-20">
        <p className="text-center text-4xl font-bold">Our Promises</p>
        <div className="grid grid-cols-2 w-[900px] mx-auto gap-10 font-semibold text-xl text-justify mt-10">
          <div>
            <img src={promisesImage} alt="" />
          </div>
          <div>
            <div>
              <div className="flex items-center gap-5 my-8">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.7 22.75H9.30001C4.36001 22.75 2.26001 20.64 2.26001 15.71V11.22C2.26001 10.81 2.60001 10.47 3.01001 10.47C3.42001 10.47 3.76001 10.81 3.76001 11.22V15.71C3.76001 19.8 5.21001 21.25 9.30001 21.25H14.69C18.78 21.25 20.23 19.8 20.23 15.71V11.22C20.23 10.81 20.57 10.47 20.98 10.47C21.39 10.47 21.73 10.81 21.73 11.22V15.71C21.74 20.64 19.63 22.75 14.7 22.75Z"
                    fill="#292D32"
                  />
                  <path
                    d="M12 12.75C10.9 12.75 9.9 12.32 9.19 11.53C8.48 10.74 8.15 9.71 8.26 8.61L8.93 1.93C8.97 1.55 9.29 1.25 9.68 1.25H14.35C14.74 1.25 15.06 1.54 15.1 1.93L15.77 8.61C15.88 9.71 15.55 10.74 14.84 11.53C14.1 12.32 13.1 12.75 12 12.75ZM10.35 2.75L9.75 8.76C9.68 9.43 9.88 10.06 10.3 10.52C11.15 11.46 12.85 11.46 13.7 10.52C14.12 10.05 14.32 9.42 14.25 8.76L13.65 2.75H10.35Z"
                    fill="#292D32"
                  />
                  <path
                    d="M18.31 12.75C16.28 12.75 14.47 11.11 14.26 9.09L13.56 2.08C13.54 1.87 13.61 1.66 13.75 1.5C13.89 1.34 14.09 1.25 14.31 1.25H17.36C20.3 1.25 21.67 2.48 22.08 5.5L22.36 8.28C22.48 9.46 22.12 10.58 21.35 11.43C20.58 12.28 19.5 12.75 18.31 12.75ZM15.14 2.75L15.76 8.94C15.89 10.19 17.05 11.25 18.31 11.25C19.07 11.25 19.75 10.96 20.24 10.43C20.72 9.9 20.94 9.19 20.87 8.43L20.59 5.68C20.28 3.42 19.55 2.75 17.36 2.75H15.14Z"
                    fill="#292D32"
                  />
                  <path
                    d="M5.64002 12.75C4.45002 12.75 3.37002 12.28 2.60002 11.43C1.83002 10.58 1.47002 9.46 1.59002 8.28L1.86002 5.53C2.28002 2.48 3.65002 1.25 6.59002 1.25H9.64002C9.85002 1.25 10.05 1.34 10.2 1.5C10.35 1.66 10.41 1.87 10.39 2.08L9.69002 9.09C9.48002 11.11 7.67002 12.75 5.64002 12.75ZM6.59002 2.75C4.40002 2.75 3.67002 3.41 3.35002 5.7L3.08002 8.43C3.00002 9.19 3.23002 9.9 3.71002 10.43C4.19002 10.96 4.87002 11.25 5.64002 11.25C6.90002 11.25 8.07002 10.19 8.19002 8.94L8.81002 2.75H6.59002Z"
                    fill="#292D32"
                  />
                  <path
                    d="M14.5 22.75H9.5C9.09 22.75 8.75 22.41 8.75 22V19.5C8.75 17.4 9.9 16.25 12 16.25C14.1 16.25 15.25 17.4 15.25 19.5V22C15.25 22.41 14.91 22.75 14.5 22.75ZM10.25 21.25H13.75V19.5C13.75 18.24 13.26 17.75 12 17.75C10.74 17.75 10.25 18.24 10.25 19.5V21.25Z"
                    fill="#292D32"
                  />
                </svg>

                <div>
                  <p>Biggest Variety</p>
                  <p className="text-sm">
                    We offer millions of products at a great value for our
                    customers
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5 my-8">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.3 7.91998V13.07C19.3 16.15 17.54 17.47 14.9 17.47H6.10995C5.65995 17.47 5.22996 17.43 4.82996 17.34C4.57996 17.3 4.33996 17.23 4.11996 17.15C2.61996 16.59 1.70996 15.29 1.70996 13.07V7.91998C1.70996 4.83998 3.46995 3.52002 6.10995 3.52002H14.9C17.14 3.52002 18.75 4.47001 19.18 6.64001C19.25 7.04001 19.3 7.44998 19.3 7.91998Z"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    opacity="0.4"
                    d="M22.3001 10.92V16.07C22.3001 19.15 20.5401 20.47 17.9001 20.47H9.11008C8.37008 20.47 7.70009 20.37 7.12009 20.15C5.93009 19.71 5.12008 18.8 4.83008 17.34C5.23008 17.43 5.66008 17.47 6.11008 17.47H14.9001C17.5401 17.47 19.3001 16.15 19.3001 13.07V7.91998C19.3001 7.44998 19.2601 7.03001 19.1801 6.64001C21.0801 7.04001 22.3001 8.37998 22.3001 10.92Z"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.4999 13.14C11.9579 13.14 13.1399 11.958 13.1399 10.5C13.1399 9.04197 11.9579 7.85999 10.4999 7.85999C9.04185 7.85999 7.85986 9.04197 7.85986 10.5C7.85986 11.958 9.04185 13.14 10.4999 13.14Z"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    opacity="0.4"
                    d="M4.78003 8.30005V12.7001"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    opacity="0.4"
                    d="M16.22 8.30005V12.7001"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div>
                  <p>Best Prices</p>
                  <p className="text-sm">
                    We provide great value by offering competitive prices on all
                    our products
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5 my-8">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.0008 14.75H12.0008C11.5908 14.75 11.2508 14.41 11.2508 14C11.2508 13.59 11.5908 13.25 12.0008 13.25H13.0008C13.6908 13.25 14.2508 12.69 14.2508 12V2.75H6.00075C4.82075 2.75 3.74073 3.38998 3.16073 4.41998C2.96073 4.77998 2.50077 4.91002 2.14077 4.71002C1.78077 4.51002 1.65073 4.05 1.85073 3.69C2.69073 2.19 4.28075 1.25 6.00075 1.25H15.0008C15.4108 1.25 15.7508 1.59 15.7508 2V12C15.7508 13.52 14.5208 14.75 13.0008 14.75Z"
                    fill="#292D32"
                  />
                  <path
                    d="M19.001 20.75H18.001C17.591 20.75 17.251 20.41 17.251 20C17.251 19.31 16.691 18.75 16.001 18.75C15.311 18.75 14.751 19.31 14.751 20C14.751 20.41 14.411 20.75 14.001 20.75H10.001C9.59098 20.75 9.25098 20.41 9.25098 20C9.25098 19.31 8.69098 18.75 8.00098 18.75C7.31098 18.75 6.75098 19.31 6.75098 20C6.75098 20.41 6.41098 20.75 6.00098 20.75H5.00098C2.93098 20.75 1.25098 19.07 1.25098 17C1.25098 16.59 1.59098 16.25 2.00098 16.25C2.41098 16.25 2.75098 16.59 2.75098 17C2.75098 18.24 3.76098 19.25 5.00098 19.25H5.35095C5.68095 18.1 6.74098 17.25 8.00098 17.25C9.26098 17.25 10.321 18.1 10.651 19.25H13.361C13.691 18.1 14.751 17.25 16.011 17.25C17.271 17.25 18.3309 18.1 18.6609 19.25H19.001C20.241 19.25 21.251 18.24 21.251 17V14.75H19.001C18.041 14.75 17.251 13.96 17.251 13V10C17.251 9.04 18.031 8.25 19.001 8.25L17.931 6.38C17.711 5.99 17.291 5.75 16.841 5.75H15.751V12C15.751 13.52 14.521 14.75 13.001 14.75H12.001C11.591 14.75 11.251 14.41 11.251 14C11.251 13.59 11.591 13.25 12.001 13.25H13.001C13.691 13.25 14.251 12.69 14.251 12V5C14.251 4.59 14.591 4.25 15.001 4.25H16.841C17.831 4.25 18.741 4.78001 19.231 5.64001L20.941 8.63C21.071 8.86 21.071 9.15 20.941 9.38C20.811 9.61 20.561 9.75 20.291 9.75H19.001C18.861 9.75 18.751 9.86 18.751 10V13C18.751 13.14 18.861 13.25 19.001 13.25H22.001C22.411 13.25 22.751 13.59 22.751 14V17C22.751 19.07 21.071 20.75 19.001 20.75Z"
                    fill="#292D32"
                  />
                  <path
                    d="M8.00098 22.75C6.48098 22.75 5.25098 21.52 5.25098 20C5.25098 18.48 6.48098 17.25 8.00098 17.25C9.52098 17.25 10.751 18.48 10.751 20C10.751 21.52 9.52098 22.75 8.00098 22.75ZM8.00098 18.75C7.31098 18.75 6.75098 19.31 6.75098 20C6.75098 20.69 7.31098 21.25 8.00098 21.25C8.69098 21.25 9.25098 20.69 9.25098 20C9.25098 19.31 8.69098 18.75 8.00098 18.75Z"
                    fill="#292D32"
                  />
                  <path
                    d="M16.001 22.75C14.481 22.75 13.251 21.52 13.251 20C13.251 18.48 14.481 17.25 16.001 17.25C17.521 17.25 18.751 18.48 18.751 20C18.751 21.52 17.521 22.75 16.001 22.75ZM16.001 18.75C15.311 18.75 14.751 19.31 14.751 20C14.751 20.69 15.311 21.25 16.001 21.25C16.691 21.25 17.251 20.69 17.251 20C17.251 19.31 16.691 18.75 16.001 18.75Z"
                    fill="#292D32"
                  />
                  <path
                    d="M22.001 14.75H19.001C18.041 14.75 17.251 13.96 17.251 13V10C17.251 9.04 18.041 8.25 19.001 8.25H20.291C20.561 8.25 20.811 8.39 20.941 8.63L22.651 11.63C22.711 11.74 22.751 11.87 22.751 12V14C22.751 14.41 22.411 14.75 22.001 14.75ZM19.001 9.75C18.861 9.75 18.751 9.86 18.751 10V13C18.751 13.14 18.861 13.25 19.001 13.25H21.251V12.2L19.851 9.75H19.001Z"
                    fill="#292D32"
                  />
                  <path
                    d="M8.00098 8.75H2.00098C1.59098 8.75 1.25098 8.41 1.25098 8C1.25098 7.59 1.59098 7.25 2.00098 7.25H8.00098C8.41098 7.25 8.75098 7.59 8.75098 8C8.75098 8.41 8.41098 8.75 8.00098 8.75Z"
                    fill="#292D32"
                  />
                  <path
                    d="M6.00098 11.75H2.00098C1.59098 11.75 1.25098 11.41 1.25098 11C1.25098 10.59 1.59098 10.25 2.00098 10.25H6.00098C6.41098 10.25 6.75098 10.59 6.75098 11C6.75098 11.41 6.41098 11.75 6.00098 11.75Z"
                    fill="#292D32"
                  />
                  <path
                    d="M4.00098 14.75H2.00098C1.59098 14.75 1.25098 14.41 1.25098 14C1.25098 13.59 1.59098 13.25 2.00098 13.25H4.00098C4.41098 13.25 4.75098 13.59 4.75098 14C4.75098 14.41 4.41098 14.75 4.00098 14.75Z"
                    fill="#292D32"
                  />
                </svg>

                <div>
                  <p>Fast Delivery</p>
                  <p className="text-sm">
                    We aim to please our customers with the fast delivery and
                    easy tracking system
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5 my-8">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9998 22.7501C11.7598 22.7501 11.5199 22.7201 11.2899 22.6501C6.09986 21.2201 2.33984 16.37 2.33984 11.11V6.72003C2.33984 5.60003 3.14985 4.39008 4.18985 3.96008L9.75986 1.68005C11.2099 1.09005 12.7998 1.09005 14.2398 1.68005L19.8098 3.96008C20.8498 4.39008 21.6599 5.60003 21.6599 6.72003V11.11C21.6599 16.36 17.8898 21.2101 12.7098 22.6501C12.4798 22.7201 12.2398 22.7501 11.9998 22.7501ZM11.9998 2.75006C11.4298 2.75006 10.8698 2.86007 10.3298 3.08007L4.75986 5.36004C4.27986 5.56004 3.83984 6.21004 3.83984 6.73004V11.1201C3.83984 15.7101 7.13985 19.9501 11.6898 21.2101C11.8898 21.2701 12.1098 21.2701 12.3098 21.2101C16.8598 19.9501 20.1599 15.7101 20.1599 11.1201V6.73004C20.1599 6.21004 19.7198 5.56004 19.2398 5.36004L13.6699 3.08007C13.1299 2.86007 12.5698 2.75006 11.9998 2.75006Z"
                    fill="#292D32"
                  />
                  <path
                    d="M12 13.25C10.48 13.25 9.25 12.02 9.25 10.5C9.25 8.98 10.48 7.75 12 7.75C13.52 7.75 14.75 8.98 14.75 10.5C14.75 12.02 13.52 13.25 12 13.25ZM12 9.25C11.31 9.25 10.75 9.81 10.75 10.5C10.75 11.19 11.31 11.75 12 11.75C12.69 11.75 13.25 11.19 13.25 10.5C13.25 9.81 12.69 9.25 12 9.25Z"
                    fill="#292D32"
                  />
                  <path
                    d="M12 16.25C11.59 16.25 11.25 15.91 11.25 15.5V12.5C11.25 12.09 11.59 11.75 12 11.75C12.41 11.75 12.75 12.09 12.75 12.5V15.5C12.75 15.91 12.41 16.25 12 16.25Z"
                    fill="#292D32"
                  />
                </svg>

                <div>
                  <p>100% Protected</p>
                  <p className="text-sm">
                    We provide 100% protection for your purchase from click to
                    delivery
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

export default AboutUs;