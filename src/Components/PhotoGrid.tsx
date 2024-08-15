import axios from "axios";
import { useEffect, useState } from "react";

const accessKey = 'Ryybs3xHoshgJpN1Q4AvGQWG_ZknOdGljYXBn4byB80';

const PhotoGrid = () => {
  interface UnsplashPhoto {
    full: string;
    regular: string;
    small: string;
    thumb: string;
  }

  const [imagesUrl, setImagesUrl] = useState<UnsplashPhoto[]>([]);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const fetchImages = async () => {
    try {
      const response = await axios.get('https://api.unsplash.com/photos', {
        params: {
          client_id: accessKey,
          per_page: 10,
          page: Math.floor(Math.random() * 10) + 1
        },
      });
      const filteredImages: UnsplashPhoto[] = response.data.map((obj: any) => obj.urls);
      setImagesUrl(filteredImages);
    } catch (error) {
      console.error('Error fetching images', error);
    }
  };

  useEffect(()=>{
    fetchImages()
  },[])

  useEffect(() => {
    const handleVisibilityChange = () => {
        console.log('hidden')
      setIsVisible(document.visibilityState === 'visible');
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

   
    const intervalId = setInterval(() => {
      if (isVisible) {
        fetchImages();
        console.log('feteched')
      }
    }, 10000);

    return () => {
      clearInterval(intervalId);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isVisible]);

  return (
    <div className="grid grid-cols-3 gap-10">
      {[...Array(9)].map((_, i) => (
        <div key={i} className="bg-blue-500 border rounded-xl border-black overflow-hidden relative w-full aspect-1">
          <img src={imagesUrl[i]?.regular} alt="image" className="object-cover w-full h-full" />
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
