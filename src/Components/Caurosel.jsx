import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import ReactStars from "react-rating-star-with-type";
import Swipperbtn from "./Swipperbtn";
import useAxiosBaseUrl from "../hooks/useBaseUrl";
import { useEffect, useState } from "react";
import Loader from "./Loader/Loader";

const Caurosel = () => {
  const axiosBaseUrl = useAxiosBaseUrl();
  const [isLoading, setIsLoading] = useState(true);

  // Data fetching from API
  const [allReviews, setAllReviews] = useState([]);
  useEffect(() => {
    axiosBaseUrl
      .get("/api/v1/reviews")
      .then((res) => res.data)
      .then((data) => {
        setAllReviews(data.review);
        setIsLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, [axiosBaseUrl]);


  return (
    <div className="flex justify-center relative py-[12px]">
      <Swiper
        slidesPerView={1}
        breakpoints={{
          700: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          375: {
            slidesPerView: 1,
          },
          425: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
          1666: {
            slidesPerView: 3,
          },
          // 1920: {
          //   slidesPerView: 4,
          // },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[]}
        className="carousel"
      >
       {
        isLoading ? (
          <Loader></Loader>
        )
        :
        allReviews.length > 0 ? (
          allReviews.map((review, index) => (
            <SwiperSlide>
            <div className="px-[43px] py-5 flex justify-center items-center w-full">
              <div className="bg-white w-full  p-3 rounded-xl shadow-md cursor-pointer transform transition-transform duration-300 hover:-translate-y-2">
                <div className="flex gap-2 mb-3">
                  {/* <img src={fbrev} alt="" /> */}
                  <div className="w-12 h-12 rounded-full p-1 bg-[#00a79d] text-white flex justify-center items-center">
                  <p className="uppercase font-bold font-lato text-xl">{review?.name.split(" ").map((word) => word.charAt(0)).join("")}</p>
                  </div>
                  <div>
                    <p className="text-md text-gray-800">{review?.name}</p>
                    <div className="flex items-center gap-2">
                    <ReactStars
                      value={review?.ratings}
                      edit={true}
                      activeColors={["#FFCE00"]}
                    />
                      <p className="text-md text-gray-600">{review?.ratings}/5</p>
                    </div>
                  </div>
                </div>
  
                <div className="flex items-center gap-1 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_253_1800)">
                      <path
                        d="M11.1447 1.75006L6.43796 6.45679C6.12361 6.77113 5.94519 7.20442 5.94519 7.65471V16.1421C5.94519 17.0767 6.70982 17.8413 7.64437 17.8413H15.2907C15.9704 17.8413 16.5821 17.4335 16.8539 16.8133L19.6236 10.3479C20.3372 8.66572 19.1053 6.79662 17.2787 6.79662H12.4785L13.2856 2.9055C13.3706 2.48071 13.2432 2.04742 12.9373 1.74156C12.4361 1.2488 11.6374 1.2488 11.1447 1.75006ZM2.54684 17.8413C3.48138 17.8413 4.24601 17.0767 4.24601 16.1421V9.34539C4.24601 8.41084 3.48138 7.64621 2.54684 7.64621C1.61229 7.64621 0.847656 8.41084 0.847656 9.34539V16.1421C0.847656 17.0767 1.61229 17.8413 2.54684 17.8413Z"
                        fill="#00A298"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_253_1800">
                        <rect width="20.3901" height="20.3901" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-sm">Highly Recommends</span>
                </div>
  
                <p className="text-gray-800 text-sm md:text-[13px] text-justify">
                {review?.review}
                  {/* एक किडनी रोगी के रूप में मेड लाइफ इज़ी से मुझे जो असाधारण देखभाल
                  मिली, उससे मैं अविश्वसनीय रूप से संतुष्ट हूं। उनकी विशेषज्ञ
                  चिकित्सा टीम के साथ मिलकर व्यक्तिगत उपचार योजना ने एक सुचारू और
                  प्रभावी पुनर्प्राप्ति प्रक्रिया सुनिश्चित की। चौकस और दयालु
                  स्टाफ ने मेरी चिंताओं को दूर करने के लिए हर संभव प्रयास किया,
                  जिससे मुझे वास्तव में मेरी देखभाल का एहसास हुआ। सर्वोच्च
                  चिकित्सा सेवाएं प्रदान करने की मेड लाइफ ईज़ी की प्रतिबद्धता ने
                  एक स्थायी सकारात्मक प्रभाव छोड़ा है। किडनी से संबंधित समस्याओं
                  के लिए व्यापक और विश्वसनीय स्वास्थ्य देखभाल चाहने वाले किसी भी
                  व्यक्ति को मैं पूरे दिल से उनकी सेवाओं की अनुशंसा करता हूं। उस
                  उत्कृष्ट समर्थन के लिए आभारी हूं जिसने मेरी भलाई में महत्वपूर्ण
                  योगदान दिया। */}
                </p>
              </div>
            </div>
          </SwiperSlide>
          ))
          ) : (
            <p>No review available</p>
       )}

        

        <div className="absolute top-[48%] w-[100%] z-10">
          <Swipperbtn></Swipperbtn>
        </div>
      </Swiper>
    </div>
  );
};
export default Caurosel;
